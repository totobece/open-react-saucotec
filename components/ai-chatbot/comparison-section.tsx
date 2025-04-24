import React from 'react';
import Image from 'next/image';

export default function ComparisonSection() {
  return (
    <section className="relative py-12 md:py-20 border-t border-[#020612] bg-[#020612]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Grid layout for comparison */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

            {/* Left Column: Otros Bots */}
            <div className="text-center" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Cómo responden otros bots?</h2>
              <div className="relative inline-block px-4 py-8 bg-[#020612] rounded-lg shadow-lg">
                <Image
                  src="/images/comparison-otros-bots.png"
                  alt="Comparación Otros Bots"
                  width={350}
                  height={600}
                  className="rounded"
                />
              </div>
            </div>

            {/* Right Column: Saucotec AI */}
            <div className="text-center" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Cómo responde Saucotec AI?</h2>
              <div className="relative inline-block rounded-lg shadow-lg">
                <Image
                  src="/images/comparison-saucotec-ai.png"
                  alt="Comparación Saucotec AI"
                  width={350}
                  height={600}
                  className="rounded"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
