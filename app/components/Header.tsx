import type { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-black/80 backdrop-blur">
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold">jacob_insta_clone</span>
      </div>

      <div className="flex items-center gap-4 text-xl">
        <button aria-label="Create">
          ＋
        </button>
        <button aria-label="Messages">
          💬
        </button>
      </div>
    </header>
  );
};

export { Header };

