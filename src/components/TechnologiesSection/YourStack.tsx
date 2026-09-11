import type { Dispatch, SetStateAction } from "react";
import type { TechDataType } from "../types/type";
import YourStackCard from "./YourStackCard";
import { Bounce, toast } from "react-toastify";

interface YourStackProps {
  selectedStack: TechDataType[],
  setSelectedStack: Dispatch<SetStateAction<TechDataType[]>>,
  isClicked: boolean,
  setIsClicked: Dispatch<SetStateAction<boolean>>
}
const YourStack = ({selectedStack, setSelectedStack, isClicked, setIsClicked}: YourStackProps) => {
  

  const handleRemoveAllSelection = () => {
    setSelectedStack([]);
    toast.success(`Removed All Stack`, {
position: "top-right",
autoClose: 1000,
hideProgressBar: true,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  }




  if (selectedStack.length === 0) {
    
    return (
      <div className="shadow-sm border border-[#adadad40] pt-5 pb-3 px-4 rounded-xl">
      <h1 className="text-xl font-semibold text-black">Your Stack</h1>
      <p className="text-[#94A3B8] text-[14px] mt-1 mb-4">No technologies selected yet.</p>

      <div className="border border-gray-300 border-dashed text-center rounded-xl">
        <p className="py-5 px-5 text-[#94A3B8]">Your stack is empty.</p>
      </div>

    </div>
    )
  }


  return (
    <div className="shadow-sm border border-[#adadad40] pt-5 pb-3 px-4 rounded-xl">
      <h1 className="text-xl font-semibold text-black">Your Stack</h1>
      <p className="text-[#94A3B8] text-[14px] mt-1 mb-4">{selectedStack.length === 0 ?'No technologies selected yet.':`${selectedStack.length} Technology Selected`}
      </p>

      <div className="grid grid-cols-1 gap-4">
        {
          selectedStack.map((data) => {
            
            return (
              <div>
                <YourStackCard data={data} selectedStack={selectedStack} setSelectedStack={setSelectedStack} isClicked = {isClicked}  setIsClicked={setIsClicked} />
              </div>
            )
          })
        }
      </div>

      
      <button
        onClick={()=> handleRemoveAllSelection()}
        className="btn mt-6 w-full text-red-500 rounded-md">Remove all</button>
    </div>
  );
};

export default YourStack;