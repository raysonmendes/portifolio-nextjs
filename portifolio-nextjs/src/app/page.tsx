"use client";

import UnderConstruction from "@/components/under-construction";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center space-y-40 pt-8">
      <h1 className="text-center text-xs md:text-base xl:text-2xl text-[#5b6269]">
        <span className="text-xl md:text-4xl xl:text-6xl text-[#f8f8f8]">
          Bem-vindo ao raysonmendes.dev
        </span>
        <br />
        <br />
        Esse é o inicio de uma história, vamos ver como será seu final e
        aproveitar ao máximo o caminho até lá.
        <br />
        Espero que me acompanhe nessa jornada!
      </h1>
      {UnderConstruction()}
    </div>
  );
}
