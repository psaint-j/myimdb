"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MovieIcon } from "@/components/Icons";
import { Display } from "@/components/Display";

const Header = () => {
  const url = usePathname()
  const showGoBackToList = /^\/(movie|people)/.test(url);

  return (
    <header className="border-b border-gray-800 bg-gray-900 flex overflow-x-hidden">
      <div className="container mx-auto flex items-center justify-between px-10 md:px-8 py-4 sm:py-6">
        <Link href="/">
          <MovieIcon className="fill-red-500 size-8" />
        </Link>
        <div className="flex items-center gap-4">
          {showGoBackToList && <Link className="text-white" href="/">Retour à la liste</Link>}
          <Display />
        </div>
      </div>
    </header>
  );
};

export default Header;
