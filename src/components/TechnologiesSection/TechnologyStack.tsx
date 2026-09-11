import type { TechDataType } from "../types/type";
import TechnologyStackCards from "./TechnologyStackCards";

interface TechnologyStackProps {
  techData:TechDataType[];
}


const TechnologyStack = ({ techData }: TechnologyStackProps) => {
  

  return (
    <div className="grid grid-cols-3 gap-4">
      {
        techData.map((data) => {
          
          return (
            <div>
              <TechnologyStackCards data={data} />
            </div>
          )
        })
      }
    </div>
  );
};

export default TechnologyStack;