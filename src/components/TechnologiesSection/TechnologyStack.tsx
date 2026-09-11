import type { Dispatch, SetStateAction } from "react";
import type { TechDataType } from "../types/type";
import TechnologyStackCards from "./TechnologyStackCards";

interface TechnologyStackProps {
  techData: TechDataType[],
  selectedStack: TechDataType[],
  setSelectedStack: Dispatch<SetStateAction<TechDataType[]>>,
  isClicked: boolean,
  setIsClicked: Dispatch<SetStateAction<boolean>>
}


const TechnologyStack = ({ techData, selectedStack, setSelectedStack, isClicked, setIsClicked }: TechnologyStackProps) => {
  

  return (
    <div className="grid grid-cols-3 gap-4">
      {
        techData.map((data) => {
          
          return (
            <div>
              <TechnologyStackCards data={data} selectedStack={selectedStack} setSelectedStack={setSelectedStack} isClicked = {isClicked}  setIsClicked={setIsClicked} />
            </div>
          )
        })
      }
    </div>
  );
};

export default TechnologyStack;