import { Link } from 'react-router';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <nav className="container mx-auto flex h-14 max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/profile" className="text-xl font-semibold tracking-tight">
          Instagram
        </Link>
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
