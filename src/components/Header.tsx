import { List, X } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import img from '../assets/Logo.png'


export function Header() {

   const [isOpenToggle, setIsOpenToggle] = useState(false)


    return (
       <header className="py-5 bg-gray-700 border-b flex flex-col border-gray-600 p-4 pl-5 max-w-[640px] sm:hidden">
         <div className="max-w-full flex justify-end ">
           <img src={img} alt="" className="h-12 rounded-2xl" />
         </div>
           <>
              <nav className={`max-w-[640px]`}>
                <button  onClick={() => setIsOpenToggle(!isOpenToggle)} className={`flex justify-start items-center duration-500`}>
                </button>
              </nav>
           </>
       </header>
    )
}
