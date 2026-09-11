import { use } from "react";
import type { TechDataType } from "../types/type";

interface TechnologiesSectionProps {
  TechnologiesDataPromise: Promise<TechDataType[]>;
}



const TechnologiesSection = ({TechnologiesDataPromise}:TechnologiesSectionProps) => {
  
  const techData = use(TechnologiesDataPromise);

  console.log(techData);

  return (
    <section>
      <div className="container mx-auto mb-15 text-[#64748B]">
        <div className="text-left">
          <h1 className="text-3xl font-bold text-[#0F172A]">Explore the <span className="bg-linear-to-tr from-[#EC4899] from-10% to-[#8B5CF6] to-100% text-transparent bg-clip-text ">Technologies</span></h1>
          <p className="text-[16px]">Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className=" col-span-9 grid grid-cols-3 gap-3">
          
          </div>
          <div className="bg-amber-100 col-span-3">My Stack</div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;