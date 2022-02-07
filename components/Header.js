import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  return (
    <header>
      <Image
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2f%2FGoogle_2015_logo.svg%2F1200px-Google_2015_logo.svg.png&f=1&nofb=1"
        height={40}
        width={120}
        onClic={() => router.push("/")}
        className="cursor-pointer"
      />
      <form>
        <input ref={searchInputRef} type="text" />
      </form>
    </header>
  );
}

export default Header;
