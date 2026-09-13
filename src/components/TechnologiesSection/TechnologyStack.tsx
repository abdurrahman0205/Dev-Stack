import type { Dispatch, SetStateAction } from "react";
import type { TechDataType } from "../types/type";
import TechnologyStackCards from "./TechnologyStackCards";

interface TechnologyStackProps {
  techData: TechDataType[],
  selectedStack: TechDataType[],
  setSelectedStack: Dispatch<SetStateAction<TechDataType[]>>
}


const TechnologyStack = ({ techData, selectedStack, setSelectedStack}: TechnologyStackProps) => {
  

  return (
    <div className="grid grid-cpls-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
      {
        techData.map((data) => {
          
          return (
            <div key={data.id}>
              <TechnologyStackCards data={data} selectedStack={selectedStack} setSelectedStack={setSelectedStack} />
            </div>
          )
        })
      }
    </div>
  );
};

export default TechnologyStack;