"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 transition-all duration-300 flex items-center justify-between ${
        scrolled
          ? "w-full bg-white shadow-md h-16 px-6"
          : "w-[80%] bg-white h-20 px-10 rounded-b-lg"
      }`}
      style={{ left: scrolled ? "0" : "10%" }} // Căn giữa khi chưa scroll
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/images/logo.jpg"
          alt="BIC Logo"
          className={`transition-all duration-300 ${scrolled ? "h-8" : "h-12"}`}
        />
      </div>

      {/* Menu */}
      <nav>
        <ul
          className={`flex space-x-4 transition-all duration-300 ${
            scrolled ? "text-black" : "text-black"
          }`}
        >
          <li>
            <Link href="/">Trang chủ</Link>
          </li>
          <li>
            <Link href="/products">Sản phẩm</Link>
          </li>
          <li>
            <Link href="/contact">Liên hệ</Link>
          </li>
        </ul>
      </nav>

      {/* Search & Language */}
      <div className="flex items-center space-x-4">
        <button>
          <img
            src="/icons/search.png"
            alt="Search"
            className={`h-5 transition-all duration-300 ${
              scrolled ? "opacity-75" : "opacity-100"
            }`}
          />
        </button>
        <button className="flex items-center space-x-1">
          <span>EN</span>
          <img src="/icons/globe.png" alt="Language" className="h-5" />
        </button>
      </div>
    </header>
  );
}
