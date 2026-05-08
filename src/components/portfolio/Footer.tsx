export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Chinmaya Sri Rama Seshu Pasupuleti
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          Built with TanStack Start · Designed with care
        </p>
      </div>
    </footer>
  );
}
