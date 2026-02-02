export default function Hero() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Find Your Dream Job Faster
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Discover thousands of opportunities from top companies.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded-lg">
            Browse Jobs
          </button>
        </div>
      </div>
    </section>
  );
}
