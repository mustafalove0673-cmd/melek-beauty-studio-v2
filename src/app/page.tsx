export default function SystemPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-4">
        <div className="text-6xl font-bold tracking-tight">
          NOVA<span className="text-muted-foreground">.ai</span>
        </div>
        <p className="text-muted-foreground text-lg">
          Digital Arts Production System
        </p>
        <div className="flex items-center justify-center gap-2 pt-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>
          <span className="text-sm text-muted-foreground">Sistem Aktif</span>
        </div>
      </div>
    </div>
  );
}
