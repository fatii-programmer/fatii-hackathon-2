import React from 'react';
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="w-full h-[80px]  text-[#000000] flex justify-between px-4 md:px-8 lg:px-16 bg-transparent">
      <div className="flex gap-4 md:gap-8 lg:gap-12 items-center">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex gap-4 md:gap-6 lg:gap-8 items-center">
        <FaRegUser size={26} />
        <IoIosSearch size={26} />
        <CiHeart size={26} />
        <IoCartOutline size={26} />
      </div>
    </div>
  );
}

export default Navbar;
