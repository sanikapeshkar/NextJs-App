import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

export const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-2 py-2 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={54} height={10} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <button
                onClick={async () => {
                  "use server";
                  await signOut();
                }}
              >
                Signout
              </button>
              <Link href={`/user/${session.user.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn();
              }}
            >
              <button type="submit">SignIn</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};
