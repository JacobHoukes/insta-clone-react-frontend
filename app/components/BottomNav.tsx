import { Link } from 'react-router';

export function BottomNav() {
  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full border-t bg-white">
      <div className="mx-auto grid h-14 max-w-lg grid-cols-5">
        <Link
          to="/home"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          🏠
        </Link>
        <Link
          to="/search"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <span className="text-2xl">🔍</span>
        </Link>
        <Link
          to="/create"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          ➕
        </Link>
        <Link
          to="/"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          Reels
        </Link>
        <Link
          to="/profile"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          👤
        </Link>
      </div>
    </footer>
  );
}
