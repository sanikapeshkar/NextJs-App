import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="px-2 py-5 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
      </nav>
    </header>
  );
};
