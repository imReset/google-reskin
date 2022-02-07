import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
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
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
      <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg mx-w-3xl items0center">
        <input
          ref={searchInputRef}
          className="flex-grow w-full focus:outline-none"
          type="text"
        />
        <XIcon
          className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-150 transform hover:scale-125"
          onClick={() => (searchInputRef.current.value = "")}
        />

        <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2" />
      </form>
    </header>
  );
}

export default Header;
