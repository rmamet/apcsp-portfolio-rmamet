import { useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const navClasses =
    "cursor-pointer flex-auto w-1 inline-block text-black bg-white active:text-white active:bg-[#05053a] hover:bg-slate-300 p-2";

  const change = () => {
    setShowNavbar((prev) => !prev);
  };

  if (!showNavbar) {
    return (
      <div id="menu" className="fixed top-0 left-0 z-50 m-4">
        <button
          onClick={change}
          className="px-4 py-2 cursor-pointer rounded-full bg-white text-black"
        >
          &#9776;
        </button>
      </div>
    );
  }

  return (
    <div
      id="menu"
      className="fixed top-0 left-0 z-50 p-0 m-0 w-full bg-[#05053a] opacity-85 select-none"
    >
      <ul className="flex justify-center align-middle text-center">
        {[
          { anchor: "front", label: "Front" },
          { anchor: "about", label: "About" },
          { anchor: "projects", label: "Projects" },
          { anchor: "contact", label: "Contact" },
          { anchor: "footer", label: "Footer" },
        ].map((item) => (
          <li
            key={item.anchor}
            data-menuanchor={item.anchor}
            onClick={() => {
              change();
              location.href = `#${item.anchor}`;
            }}
            className={navClasses}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
