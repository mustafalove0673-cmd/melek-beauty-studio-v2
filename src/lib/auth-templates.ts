// 🔐 AUTH ŞABLONLARI v1.0
// NextAuth.js v4 + Credentials Provider hazır konfigürasyonlar
// Prisma adaptör ile kullanıcı yönetimi

import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

// ============================================================
// TEMEL NEXTAUTH KONFİGÜRASYON
// ============================================================

export const authOptions: NextAuthOptions = {
  // Prisma adaptörü
  adapter: PrismaAdapter(db) as NextAuthOptions['adapter'],

  providers: [
    // Email + Şifre ile giriş
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user || !user.password) return null

        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) return null

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 gün
  },

  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/auth/error',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id
        ;(session.user as any).role = token.role
      }
      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}

// ============================================================
// GEREKLİ PRİSMA MODEL (schema.prisma'ya ekle)
// ============================================================

/*
model User {
  id            String    @id @default(cuid())
  name          String
  email         String    @unique
  emailVerified DateTime?
  password      String?
  image         String?
  role          String    @default("user") // admin, user
  accounts      Account[]
  sessions      Session[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime
  @@unique([identifier, token])
}
*/

// ============================================================
// AUTH API ROUTE'LARI
// ============================================================

// src/app/api/auth/[...nextauth]/route.ts
/*
import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth-config'

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
*/

// ============================================================
// KULLANICI OLUŞTURMA (Register API)
// ============================================================

export async function registerUser(data: {
  name: string
  email: string
  password: string
}) {
  const existingUser = await db.user.findUnique({
    where: { email: data.email },
  })

  if (existingUser) {
    throw new Error('Bu email zaten kayıtlı')
  }

  const hashedPassword = await bcrypt.hash(data.password, 12)

  const user = await db.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    },
  })

  return { id: user.id, email: user.email, name: user.name }
}

// ============================================================
// AUTH HOOK
// ============================================================

// src/hooks/use-auth.ts
/*
'use client'
import { useSession } from 'next-auth/react'

export function useAuth() {
  const { data: session, status } = useSession()
  
  return {
    user: session?.user,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading',
    isAdmin: (session?.user as any)?.role === 'admin',
  }
}
*/

// ============================================================
// AUTH MIDDLEWARE (Server Component Koruması)
// ============================================================

export function requireAuth(session: any): boolean {
  return !!session?.user
}

export function requireAdmin(session: any): boolean {
  return session?.user && (session.user as any).role === 'admin'
}

// Server Component'ta kullanım:
/*
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'

export default async function AdminPage() {
  const session = await getServerSession(authOptions)
  
  if (!requireAdmin(session)) {
    redirect('/login')
  }
  
  return <div>Admin Panel</div>
}
*/

// ============================================================
// ENV DEĞİŞKENLERİ
// ============================================================

/*
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=rastgele-uzun-string-buraya

# Database
DATABASE_URL=file:./dev.db
*/

// ============================================================
// SOCIAL PROVIDERS (Opsiyonel)
// ============================================================

/*
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

// Google ekle:
GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
}),

// GitHub ekle:
GitHubProvider({
  clientId: process.env.GITHUB_ID,
  clientSecret: process.env.GITHUB_SECRET,
}),
*/
