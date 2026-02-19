import bankTree from "../assets/bank-tree.jpeg";

function Hero() {
  return (
    <div
      className="hero-bg h-75 bg-cover bg-no-repeat relative min-[920px]:h-100"
      style={{ backgroundImage: `url(${bankTree})` }}
    >
      <section className="absolute top-4 left-1/2 -translate-x-1/2 w-70 bg-white p-4 text-left min-[920px]:top-12.5 min-[920px]:right-12.5 min-[920px]:left-auto min-[920px]:translate-x-0 min-[920px]:w-75 min-[920px]:p-8">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="font-bold text-sm m-0 min-[920px]:text-xl">No fees.</p>
        <p className="font-bold text-sm m-0 min-[920px]:text-xl">
          No minimum deposit.
        </p>
        <p className="font-bold text-sm m-0 min-[920px]:text-xl">
          High interest rates.
        </p>
        <p className="text-xs mb-0 min-[920px]:text-base">
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
}

export default Hero;
