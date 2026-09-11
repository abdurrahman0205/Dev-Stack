import type { Dispatch, SetStateAction } from "react";
import type { TechDataType } from "../types/type";
import { RxCross2 } from "react-icons/rx";
import { Bounce, toast } from "react-toastify";

interface YourStackCardProps {
  data: TechDataType,
  selectedStack: TechDataType[],
  setSelectedStack: Dispatch<SetStateAction<TechDataType[]>>,
  isClicked: boolean,
  setIsClicked: Dispatch<SetStateAction<boolean>>
}

const YourStackCard = ({ data, selectedStack, setSelectedStack, isClicked, setIsClicked }: YourStackCardProps) => {
  
  const handleRemoveSelectedStack = (removeStack:TechDataType) => {
   const restStack = selectedStack.filter(currentStack => currentStack.name !== removeStack.name);
    setSelectedStack(restStack);
    
    toast.error(`Removed ${data.name} Stack from Your Stack`, {
position: "top-right",
autoClose: 1000,
hideProgressBar: true,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});

  }

  return (
    <div>
      <div className="flex justify-between items-center border border-gray-300 rounded-xl py-2 px-3">
        <div className="flex items-center gap-2">
          <img className="w-8" src={data.icon} alt="" />
          <div>
            <h2 className="text-[16px] font-semibold text-black">{data.name}</h2>
            <p className="text-[11px] text-[#94A3B8]">{data.category}</p>
          </div>
        </div>
        <span onClick={() => handleRemoveSelectedStack(data)}
          className="cursor-pointer">
          <RxCross2 color="#94A3B8" fontSize='24px' />
        </span>
      </div>
    </div>
  );
};

export default YourStackCard;