import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import HamburgerMenu from "@/components/HamburgerMenu";
import DisplayUser from "@/components/DisplayUser";


const navLinks = [
  { name: "About", 
    href: "/about" 
  },
  {
    name: "Blocks",
    href: "/blocks",
  },
  { 
    name: "Contact", 
    href: "/contact" },
  {
    name: "Jason's GitHub",
    href: "https://github.com/ThisIsGoodMan",
    external: true,
  },
];

export default function Header() {


  return (
    <nav className="flex items-center justify-between w-full px-4 py-4 lg:container lg:mx-auto lg:px-20 z-30">
      {/* Left Section */}
      <div className="lg:flex flex-col justify-center items-center hidden">
        <Link href="/">
            <Image src={logo} alt="Logo" width={250} height={250} />
          </Link>
          <DisplayUser />
      </div>

      {/* Center Section  */}
      <div className="flex-1 flex justify-center items-center">
      </div>

      {/* Right Section */}
      <div className="lg:flex items-center gap-x-4 hidden">
        {navLinks.map((item, index) => (
          item.external ? (
            <a href={item.href} key={index} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          ) : (
            <Link href={item.href} key={index}>
              {item.name}
            </Link>
          )
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center gap-x-4 z-100 lg:hidden">
        <HamburgerMenu />
      </div>
    </nav>
  );
}
