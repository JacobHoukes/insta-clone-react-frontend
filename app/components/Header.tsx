export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 max-w-5xl">
        <h1 className="text-2xl font-semibold tracking-tight">Instagram</h1>
        <div className="flex items-center gap-4">
          <button className="text-2xl hover:opacity-70 transition-opacity">
            ❤️
          </button>
          <button className="text-2xl hover:opacity-70 transition-opacity">
            ✉️
          </button>
        </div>
      </nav>
    </header>
  );
}
