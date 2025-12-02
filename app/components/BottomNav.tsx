import type { FC } from "react";
import { Link, NavLink } from "react-router-dom";

const BottomNav: FC = () => {
  const baseClass = "flex flex-col items-center text-xs";
  const activeClass = "text-white";
  const inactiveClass = "text-neutral-500";

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-neutral-800 bg-black/90 backdrop-blur px-6 py-2">
      <div className="flex justify-between">
        <NavLink
          to="/profile/posts/grid"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <span>🏠</span>
          <span>Posts</span>
        </NavLink>

        <NavLink
          to="/profile/reels/grid"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <span>🎞️</span>
          <span>Reels</span>
        </NavLink>

        <Link to="/profile" className={`${baseClass} ${inactiveClass}`}>
          <span>👤</span>
          <span>Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export { BottomNav };

