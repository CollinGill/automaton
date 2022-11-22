import Logo from "../shared/Logo";
import React, { FC } from "react";

interface HeaderProps {
  darkToggle: boolean;
  setDarkToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ darkToggle, setDarkToggle }) => {
  return (
    <div className="flex bg-slate-700 dark:bg-slate-900 p-3">
      <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4">
        <Logo />
        <input type={"checkbox"} onClick={() => setDarkToggle(!darkToggle)} />
      </nav>
    </div>
  );
};

export default Header;
