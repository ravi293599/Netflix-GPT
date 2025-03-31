import { useState } from "react";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
const Accordian = ({data}) =>{
    const [accordianActive, setAccordianActive] = useState(false);
    const handleAccordian = () =>{
      setAccordianActive(!accordianActive);
    }
    return(
        <>
            <div className='bg-gray-600 p-4 border border-slate-700 transition-all duration-150 ease-in-out rounded-lg cursor-pointer' onClick={handleAccordian}>
                <div className='flex justify-between items-center text-xl font-semibold'>{data.title} <span className='text-2xl'>{accordianActive?<IoIosArrowUp />:<IoIosArrowDown />} </span></div>
                {accordianActive && <div className='text-normal mt-2'>{data.para}</div>}
              </div>
        </>
    )
}
export default Accordian;