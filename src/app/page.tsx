import Header from "@/components/Header";
import MaxWidthWrapper from "@/utils/MaxWidth";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <div className="p-2">
          <Header />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-600 sm:text-6xl">
          Welcome to the legendary inventory management system for <span className="text-orange-500">small businesses</span>.
        </h1>

        <p className="mt-6 text-sm max-w-prose text-zinc-400">Introducing {"Notee."} Your business partner with every asset management tool at your fingertips.</p>

        <div>
          <div className="mt-6">
            <div className="rounded-xl bg-orange-900/5 p-2 ring-1 ring-inset ring-orange-900/10 lg:rounded-2xl">
              <Image src="/cards-light.webp" alt="Image" width={1280} height={1214} />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
