import { getImgPath } from "@/utils/image";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Warhamna Khan</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                  />
                </div>
              </div>

              <h1>Presentation Designer</h1>
            </div>

          
          </div>

          {/* Mobile Image */}
          <Image
            src={getImgPath("/images/home/banner/warhamna.jpeg")}
            alt="Warhamna Khan"
            width={685}
            height={650}
            className="block lg:hidden rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Desktop Image */}
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/home/banner/warhamna.jpeg")}
          alt="Warhamna Khan"
          width={685}
          height={650}
          className="absolute right-0 top-0 z-1 object-cover rounded-lg"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;