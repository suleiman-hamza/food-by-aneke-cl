// Hero.tsx
export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gray-900 text-white">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070')] bg-cover bg-center opacity-60"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          DELICIOUSLY <br /> <span className="text-orange-500">FRESH.</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto text-gray-200">
          Experience the finest local flavors delivered straight to your door in Abuja.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105">
          Order Now
        </button>
      </div>
    </section>
  );
}
