import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen bg-gradient-to-tr from-background from-40% to-accent/30 p-6 flex  flex-col    ">
      <nav className="container mx-auto flex justify-start max-sm:justify-center">
        <div className=" flex items-center gap-2">
          <Image src="/assets/logo.png" alt="logo" width={60} height={60} />
          <p className=" text-xl">FilmStash</p>
        </div>
      </nav>

      <div className=" flex-1  flex max-md:flex-col max-md:gap-20 max-sm:gap-12 max-md:py-12 max-sm:py-8 items-center justify-around gap-6">
        <div className=" flex flex-col items-start max-md:items-center gap-4">
          <h1 className="text-6xl max-lg:text-4xl max-sm:text-3xl max-w-4xl max-lg:max-w-2xl text-pretty leading-tight font-bold max-md:text-center">
            Your Personal Movie Library — Anytime, Anywhere
          </h1>
          <p className=" text-lg max-sm:text-base text-neutral-200 font-medium max-md:text-center">
            Save your favorites, discover new ones — all in one simple app.
          </p>

        <div className=" flex flex-col gap-2">
            <Link
            href="https://d2kx5b4i2igaaf.cloudfront.net/PersonalProject/Filmstash.apk"
            download
          >
            <button className=" px-6 py-2 bg-accent text-background rounded-xl font-semibold mt-6 max-sm:mt-4 flex items-center gap-2 cursor-pointer hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/40 transition-shadow duration-300 ">
             
              Download APK
              <ArrowDownToLine className="w-5 h-5" />
            </button>
          </Link>
          <div className=" flex items-end gap-1 text-xs pl-2">Available only for Android  <Image
                src="/android.svg"
                alt="Android icon"
                width={40}
                height={40}
              /></div>
        </div>
        </div>

        <div>
          <Image
            src="/assets/appmockup.png"
            alt="App Mock up"
            width={280}
            height={280}
          />
        </div>
      </div>

      <div className=" absolute container bottom-0 -translate-x-1/2 left-1/2 w-full py-2  px-6 flex justify-center">
        <span>
          Made by{" "}
          <Link
            href="https://lokesh-singh.vercel.app/"
            className=" text-accent"
            target="_blank"
          >
            Lokesh Singh
          </Link>{" "}
        </span>
      </div>
    </main>
  );
}
