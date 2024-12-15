import Image from "next/image";
import { useState } from "react";
import Link from "next/link"
import menu from "../menu.png";
import closemenu from "../closemenu.png"

function MenuHamburguesa() {
  const [isOpen, setIsOPen] = useState(false);

  const toggleMenu = () => {
    setIsOPen(!isOpen);
  };

  return (
    <div className="relative">
      <Image
        src={menu}
        alt="menu"
        width={32}
        height={32}
        className="cursor-pointer lg:hidden md:hidden"
        onClick={toggleMenu}
      />
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#FFA726] shadow-lg transform
                ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out lg:hidden md:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <Image
            src={closemenu}
            alt="close menu"
            width={32}
            height={32}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul className="text-white text-lg flex flex-col items-center justify-center space-y-8 mt-10">
              <Link href="/courses" className="cursor-pointer hover:text-gray-400 transition">Cursos</Link>
              <Link href="/about">Acerca</Link>
              <Link href="/contact">Contacto</Link>
        </ul>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 lg:hidden md:hidden z-40" onClick={toggleMenu}>

        </div>
      )}
    </div>
  );
}

export default MenuHamburguesa;
