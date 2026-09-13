import { FaStar } from "react-icons/fa";
import type { TechDataType } from "../types/type";
import { type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";


interface TechnologyStackCardsProps{
  data: TechDataType;
  selectedStack: TechDataType[],
  setSelectedStack: Dispatch<SetStateAction<TechDataType[]>>
}

const TechnologyStackCards = ({ data, selectedStack, setSelectedStack }: TechnologyStackCardsProps) => {
     

  const handleAddToStack = (addedStack: TechDataType) => {
    
    let uniqId = [];
    for (let id of selectedStack) {
      uniqId.push(id.id)
    }

      if (!uniqId.includes(data.id)) {
    
    setSelectedStack([...selectedStack, addedStack]);
    toast.success(`Successfully added ${data.name} Stack`, {
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
      } else {
        toast.warning(`${data.name} already exist!!`, {
          theme: 'dark',
          hideProgressBar: true
        });
       
      }

  }
    
    return (
      <div className="p-5 px-4 pt-6 rounded-xl shadow-sm border border-[#adadad40]">

        <div className="flex justify-between items-start">
          <div className="w-10"><img src={data.icon} alt={`${data.name}icon`} /></div>
          <span style={{ backgroundColor: `${data.color}20`, color: data.color}} className={`rounded-3xl text-[${data.color}] font-semibold text-[11px] py-1 px-3`}>{data.badge}</span>
        </div>

        <h2 className="text-xl font-semibold text-black mt-5">{data.name}</h2>
        <p className="text-[12px] mt-2">{data.description}</p>

        <div className="flex justify-between text-[#475569] text-[12px] border-t border-[#F1F5F9] pb-1 pt-2 mt-7 my-4">
          <p className="bg-[#F1F5F9] rounded px-1">{data.category}</p>
          <span className="px-1.5 whitespace-nowrap">{data.difficulty}</span>
          <p className="text-[#334155] flex items-center gap-0.5"><FaStar color="orange" />
            {data.rating}</p>
        </div>
        <button
          onClick={() => handleAddToStack(data)}
          className={`bg-black w-full py-1.5 mx auto rounded text-white cursor-pointer disabled:opacity-50`} disabled={selectedStack.includes(data)}>
          
          {selectedStack.includes(data) ? '✓ Added to Stack':'Add to Stack'}</button>
 
      </div>
    );
  };


export default  TechnologyStackCards;