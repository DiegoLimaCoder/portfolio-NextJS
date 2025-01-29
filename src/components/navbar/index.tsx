"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SocialIcon = ({
  href,
  icon,
  alt,
}: {
  href: string;
  icon: string;
  alt: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-400 hover:text-zinc-100 transition-colors p-1"
  >
    <Image src={icon} alt={alt} width={24} height={24} className="h-6 w-6" />
  </a>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Projetos", href: "/projects" },
    { name: "Sobre", href: "/about" },
    { name: "Contato", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 bg-[#191919] dark:bg-zinc-900 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-zinc-200 hover:text-zinc-100 transition-colors"
          >
            PROLIMA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-zinc-100 transition-colors ${
                  pathname === link.href
                    ? "text-zinc-100 font-medium"
                    : "text-zinc-400"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center space-x-4 ml-4">
              <SocialIcon
                href="https://github.com/DiegoLimaCoder"
                icon="/github.svg"
                alt="GitHub"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/diego-lima-rj/"
                icon="/linkedin.svg"
                alt="LinkedIn"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center space-x-4">
              <SocialIcon
                href="https://github.com/DiegoLimaCoder"
                icon="/github.svg"
                alt="GitHub"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/diego-lima-rj/"
                icon="/linkedin.svg"
                alt="LinkedIn"
              />
            </div>

            <DropdownMenu onOpenChange={setIsOpen}>
              <DropdownMenuTrigger aria-label="Abrir menu">
                <Menu
                  className={`h-6 w-6 text-zinc-100 transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-48 bg-[#191919] dark:bg-zinc-900 border-zinc-800 dark:border-zinc-700"
              >
                {links.map((link) => (
                  <DropdownMenuItem
                    key={link.name}
                    asChild
                    className="focus:bg-zinc-800 focus:text-zinc-100"
                  >
                    <Link
                      href={link.href}
                      className={`cursor-pointer block px-2 py-1.5 ${
                        pathname === link.href
                          ? "text-zinc-100"
                          : "text-zinc-400"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}

                <div className="border-t border-zinc-800 dark:border-zinc-700 mt-2 pt-2">
                  <div className="flex justify-center gap-4 px-2 py-1.5">
                    <SocialIcon
                      href="https://github.com/DiegoLimaCoder"
                      icon="/github.svg"
                      alt="GitHub"
                    />
                    <SocialIcon
                      href="https://www.linkedin.com/in/diego-lima-rj/"
                      icon="/linkedin.svg"
                      alt="LinkedIn"
                    />
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
