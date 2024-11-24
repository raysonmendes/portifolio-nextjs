"use client";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h2 className="text-lg md:text-2xl xl:text-4xl">Pagina em construção!</h2>
      <div className="flex justify-center items-start relative w-2/3 md:w-1/3 aspect-square">
        <iframe
          src="https://lottie.host/embed/9ba1e204-f7cc-4f0e-87a4-2dc5e6e159f3/duNCyzxRkJ.lottie"
          style={{ width: 100 + "%", height: 100 + "%" }}
        ></iframe>
      </div>
    </div>
  );
}
