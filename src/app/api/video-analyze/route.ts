import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { videoUrl, analysisType = 'full' } = body;

    if (!videoUrl) {
      return NextResponse.json(
        { success: false, error: 'videoUrl is required' },
        { status: 400 }
      );
    }

    const zai = await ZAI.create();

    // Analysis prompts based on type
    const prompts: Record<string, string> = {
      full: `Bu videoyu detaylı analiz et ve Türkçe olarak şu bilgileri ver:
1. Videonun ana konusu ve amacı nedir?
2. Ekranda görünen TÜM metinleri yaz (eksiksiz, her birini)
3. Görsel tasarım, UI/UX öğeleri neler?
4. Ses/müzik var mı, ne tarz?
5. Videoda hangi teknolojiler, araçlar, yöntemler geçiyor?
6. Adım adım ne yapıldığını açıkla (zaman çizelgesi)
7. Kullanılan platform/araç nedir?
8. Anahtar kavramları ve terimleri listele
9. Uygulanabilir bilgileri özetle
10. Tam teknik detaylarıyla sistemi açıkla`,

      text: `Bu videodaki TÜM metinleri ve yazıları çıkar. Ekranda görünen her yazıyı, başlığı, butonu, açıklamayı listele. Boşluk bırakma, her metni olduğu gibi yaz.`,

      motion: `Bu videodaki hareket tasarımı (motion design) öğelerini analiz et:
1. Hangi animasyon teknikleri kullanılıyor?
2. Easing/fizik kuralları neler?
3. Transition efektleri ne?
4. Kamera hareketleri var mı?
5. Parçacık/efekt sistemleri neler?
6. Renk geçişleri nasıl?
7. Timing ve pacing nasıl?
8. Hangi araçlarla yapılmış olabilir?`,

      technology: `Bu videoda geçen teknolojileri, araçları ve platformları listele:
1. Kullanılan yazılımlar
2. Programlama dilleri/framework'ler
3. AI araçları
4. Tasarım araçları
5. Plugin/extension'lar
6. CDN/ servisler
7. Her birinin kullanım amacı`,

      summary: `Bu videonun kısa özetini yaz. Ana fikir nedir? Ne öğretiliyor? Kime yönelik?`,
    };

    const prompt = prompts[analysisType] || prompts.full;

    const response = await zai.chat.completions.createVision({
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: prompt },
            { type: 'video_url', video_url: { url: videoUrl } }
          ]
        }
      ],
      thinking: { type: 'enabled' }
    });

    const analysis = response.choices[0]?.message?.content;

    return NextResponse.json({
      success: true,
      analysis,
      type: analysisType,
      timestamp: new Date().toISOString()
    });

  } catch (error: unknown) {
    console.error('Video analysis error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

// Analyze uploaded video files from /upload directory
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('file');

    if (!filename) {
      return NextResponse.json(
        { success: false, error: 'File parameter is required' },
        { status: 400 }
      );
    }

    const uploadDir = path.join(process.cwd(), 'upload');
    const filePath = path.join(uploadDir, filename);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { success: false, error: 'File not found' },
        { status: 404 }
      );
    }

    // Read video file as base64 for VLM
    const videoBuffer = fs.readFileSync(filePath);
    const base64Video = videoBuffer.toString('base64');
    const mimeType = filename.endsWith('.mp4') ? 'video/mp4' : 'video/webm';

    const zai = await ZAI.create();

    const response = await zai.chat.completions.createVision({
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `Bu videoyu detaylı analiz et. Tüm metinleri, teknolojileri, adımları ve sistemi açıkla. Türkçe yanıt ver.`
            },
            {
              type: 'video_url',
              video_url: {
                url: `data:${mimeType};base64,${base64Video}`
              }
            }
          ]
        }
      ],
      thinking: { type: 'enabled' }
    });

    const analysis = response.choices[0]?.message?.content;

    return NextResponse.json({
      success: true,
      analysis,
      filename,
      timestamp: new Date().toISOString()
    });

  } catch (error: unknown) {
    console.error('Video file analysis error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
