"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const SkillsSection = () => {
  const [skillsData, setSkillsData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setSkillsData(data?.educationData?.skills ?? []);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="skills">
      <div className="py-16 md:py-32">
        <div className="container">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Skills</h2>
            <p className="text-xl text-primary"></p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7">
            {skillsData.map((value: any, index: number) => (
              <div
                key={index}
                className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between"
              >
                <div className="flex flex-col items-center gap-5">
                  <Image
                    src={getImgPath(value?.icon)}
                    alt={value?.name}
                    width={70}
                    height={70}
                  />
                  <p className="text-black font-normal">{value?.name}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="9"
                        height="9"
                        rx="4.5"
                        fill={i < value?.rating ? "#FE4300" : "#C0D8E0"}
                      />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
