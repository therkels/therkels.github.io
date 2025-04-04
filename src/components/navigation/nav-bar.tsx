"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { AcademicCapIcon, BriefcaseIcon, ChartBarIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const NavBar: React.FC = () => {
  const pathname = usePathname();

  const nav_links: any = [
    { name: "Academics", href: "#academics", icon: AcademicCapIcon },
    { name: "Experience", href: "#experience", icon: BriefcaseIcon },
    { name: "Skills", href: "#skills", icon: ChartBarIcon },
    { name: "Projects", href: "#projects", icon: RocketLaunchIcon },
  ];

  return (
    <nav className="bg-gray-950 rounded-full px-4 py-2 inline-flex items-center space-x-4">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" /> {/* Violet */}
            <stop offset="100%" stopColor="#6366f1" /> {/* Indigo */}
          </linearGradient>
        </defs>
      </svg>

      {/* Navigation Links */}
      {nav_links.map((link: any, index: number) => (
        <Link key={index} href={link.href} className="group flex items-center hover:opacity-80">
          <link.icon
            className="h-6 w-6 mr-2 transition-all duration-300"
            stroke="url(#icon-gradient)"
            style={{ transition: "stroke 0.3s ease" }}
          />
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-violet-600 transition-all duration-300">
            {link.name}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;