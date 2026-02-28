import { Heading, Text } from '../atoms/Typography';

export const AboutGrid = () => {
  return (
    <section className=" bg-[#f4f4f4]">
      <div className="text-center mb-6 ">
        <Heading
          level={2}
          className="text-[#FF7A00] text-4xl md:text-5xl font-bold pt-26"
        >
          Built for Contractors Who Want Scale
        </Heading>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* LEFT LARGE ARCH IMAGE */}
          <div className="overflow-hidden md:rounded-l-[120px] h-[75%]">
            <img
              src="https://picsum.photos/seed/leftbig/800/1000"
              alt="Main construction"
              className="w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-8">

            <div className="grid grid-cols-2 gap-6 items-start">
              <div className="overflow-hidden h-[75%]">
                <img
                  src="https://picsum.photos/seed/topsmall/500/400"
                  alt="Worker"
                  className="w-full object-cover"
                />
              </div>

              <div>
                <Heading level={3} className="text-2xl font-semibold mb-4">
                  About Us
                </Heading>
                <Text className="text-gray-600 leading-relaxed">
                  Our Construction Company has been operating since 2024,
                  using modern digital systems and on-site growth strategies
                  to help companies dominate their local markets.
                </Text>
              </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="grid grid-cols-3 gap-6">

              {/* Large Bottom Image */}
              <div className="col-span-2 overflow-hidden">
                <img
                  src="https://picsum.photos/seed/bottomlarge/800/600"
                  alt="Framing work"
                  className="w-full object-cover"
                />
              </div>

              {/* Two Stacked Small Images */}
              <div className="flex flex-col gap-6">
                <div className="overflow-hidden rounded-[0px_80px_0px_0px]">
                  <img
                    src="https://picsum.photos/seed/rightsmall1/400/300"
                    alt="Interior"
                    className="w-full object-cover"
                  />
                </div>

                <div className="overflow-hidden rounded-[0px_0px_80px_0px]">
                  <img
                    src="https://picsum.photos/seed/rightsmall2/400/300"
                    alt="Stairs"
                    className="w-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};