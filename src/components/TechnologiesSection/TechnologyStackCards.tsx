import { FaStar } from "react-icons/fa";
import type { TechDataType } from "../types/type";
import { useState, type Dispatch, type SetStateAction } from "react";


interface TechnologyStackCardsProps{
  data: TechDataType;
  selectedStack: TechDataType[],
  setSelectedStack: Dispatch<SetStateAction<TechDataType[]>>
}

const TechnologyStackCards = ({data, selectedStack, setSelectedStack  }:TechnologyStackCardsProps) => {
  
  const [isClicked, setIsClicked] = useState(false);
  
  const handleAddToStack = (addedStack: TechDataType) => {
    setIsClicked(true);
    setSelectedStack([...selectedStack, addedStack]);
    console.log(selectedStack);
  }

  return (
    <div className="p-5 px-4 pt-6 rounded-xl shadow-sm border border-[#adadad40]">

      <div className="flex justify-between">
       <div className="w-10"><img src={data.icon} alt={`${data.name}icon`} /></div>
        <p className="rounded">{data.badge}</p>
      </div>

      <h2 className="text-xl font-semibold text-black mt-5">{data.name}</h2>
      <p className="text-[12px] mt-2">{data.description}</p>

      <div className="flex justify-between text-[#475569] text-[12px] my-4">
        <p className="bg-[#F1F5F9] rounded px-1">{data.category}</p>
        <p>{data.difficulty}</p>
        <p className="text-[#334155] flex items-center gap-0.5"><FaStar color="orange" />
 {data.rating}</p>
      </div>
      <button
        onClick={()=> handleAddToStack(data)}
        className={`bg-black w-full py-1.5 mx auto rounded text-white cursor-pointer disabled:opacity-50`} disabled={isClicked? true:false}>
          
        {isClicked ? '✓ Added to Stack' : 'Add to Stack'}</button>
 
    </div>
  );
};

export default  TechnologyStackCards;