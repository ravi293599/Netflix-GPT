import { useState } from "react";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
const Accordian = ({data}) =>{
    const [accordianActive, setAccordianActive] = useState(false);
    const handleAccordian = () =>{
      setAccordianActive(!accordianActive);
    }
    return(
        <>
            <div className='bg-[#ffffff1a] p-2 border border-[#ffffff0a] transition-all duration-150 ease-in-out rounded-lg cursor-pointer lg:p-4 hover:bg-[#ffffff33]' onClick={handleAccordian}>
                <div className='flex justify-between items-center text-base font-semibold lg:text-xl'>{data.title} <span className='text-2xl'>{accordianActive?<IoIosArrowUp />:<IoIosArrowDown />} </span></div>
                {accordianActive && <div className='text-normal mt-2'>{data.para}</div>}
              </div>
        </>
    )
}
export default Accordian;