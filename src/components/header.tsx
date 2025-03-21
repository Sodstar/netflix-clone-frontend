import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-black fixed w-full top-0 z-10">
      <a href="/">
        {" "}
        <img src="/logo.png" className="w-36" />
      </a>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Нүүрх уудас</Link>
          </li>
          <li>
            <Link href="#">Кино</Link>
          </li>
          <li>
            <Link href="#">TV шоу</Link>
          </li>
          <li>
            <Link href="#">Миний жагсаалт</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}