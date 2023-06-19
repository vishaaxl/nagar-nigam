"use client";

import { useState } from "react";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { useRouter } from "next/navigation";

interface NavigationProps {}

export default function Navigation({}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <header className="bg-white">
      <div className="py-4 flex justify-between container">
        <Image
          src="/images/logo.png"
          alt="nagar nigam logo"
          unoptimized
          className="object-contain cursor-pointer"
          width={350}
          height={200}
          onClick={() => router.push("/")}
        />
        <Image
          src="/images/swach-bharat-logo.png"
          alt="swacch bharat logo"
          unoptimized
          className="object-contain"
          width={150}
          height={150}
        />
      </div>
      <nav className="bg-blue-900 text-white py-4 animated-container">
        {/* desktop menu */}
        <ul className="container hidden lg:flex gap-4 text-xs justify-around [&>*]:cursor-pointer">
          <li>HOME</li>
          <li>KNOW YOUR HOUSE</li>
          <li>TAX</li>
          <li>LOGIN</li>
          <li>NEW USER REGISTER</li>
          <li>PAY YOUR HOUSE TAX</li>
          <li>KNOW YOUR NEW HOUSE ID</li>
          <li>HOUSE MUTATION</li>
        </ul>

        {/* mobile menu */}
        <div className="lg:hidden container flex justify-end">
          <BiMenu
            className="text-3xl cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>

        {isMenuOpen && (
          <ul className="container flex flex-col gap-3 text-xs justify-center [&>*]:cursor-pointer">
            <li>HOME</li>
            <li>KNOW YOUR HOUSE</li>
            <li>TAX</li>
            <li>LOGIN</li>
            <li>NEW USER REGISTER</li>
            <li>PAY YOUR HOUSE TAX</li>
            <li>KNOW YOUR NEW HOUSE ID</li>
            <li>HOUSE MUTATION</li>
          </ul>
        )}
      </nav>

      {/* image banner */}
      <Image
        src="/images/banner-img.jpg"
        alt="banner image with a terrain map with some markers"
        unoptimized
        className="w-full object-cover min-h-[300px] shadow-lg border-b-2 border-t-2 border-white"
        width={200}
        height={200}
      ></Image>
    </header>
  );
}
