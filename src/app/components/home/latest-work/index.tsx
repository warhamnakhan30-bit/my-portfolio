

import Image from "next/image";
import Link from "next/link";

const LatestWork = () => {
  const workData = [
    {
      image: "/images/work/work1image.png",
      pdf: "/images/work/work1.pdf",
      title: "Presentation Design Portfolio",
      client: "Warhamna Khan",
    },
     {
      image: "/images/work/work2.png",
      pdf: "/images/work/work2.pdf",
      title: "Presentation Design Portfolio",
      client: "Warhamna Khan",
    },
       {
      image: "/images/work/work3.png",
      pdf: "/images/work/work3.pdf",
      title: "Presentation Design Portfolio",
      client: "Warhamna Khan",
    },
        {
      image: "/images/work/work4.png",
      pdf: "/images/work/work4.pdf",
      title: "Presentation Design Portfolio",
      client: "Warhamna Khan",
    },
  ];

  return (
    <section id="portfolio">
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Portfolio Projects</h2>
              {/* <p className="text-xl text-orange-500">( 01 )</p> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData.map((value, index) => (
                <div
                  key={index}
                  className="group flex flex-col gap-3 xl:gap-6"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <Link href={value.pdf} target="_blank">
                      <Image
                        src={value.image}
                        alt={value.title}
                        width={570}
                        height={414}
                        className="rounded-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      <div className="absolute top-0 left-0 backdrop-blur-xs bg-black/20 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-orange-500 text-white px-5 py-3 rounded-full font-medium">
                          View Portfolio
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="flex flex-col gap-0 xl:gap-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href={value.pdf}
                        target="_blank"
                        className="hover:text-orange-500"
                      >
                        <h5>{value.title}</h5>
                      </Link>

                      <Image
                        src="/images/icon/right-arrow-icon.svg"
                        alt="right-arrow-icon"
                        width={30}
                        height={30}
                      />
                    </div>

                    <p>Designer: {value.client}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LatestWork;