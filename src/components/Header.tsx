import { List, X } from "phosphor-react";
import {useState } from "react";
import { Logo } from "./Logo";
import { SideBar } from "./SideBar";

export function Header() {
   const [active, setIsActive] = useState(false)

    
    const  DropDownClick = () => {
      setIsActive(!active)
   }

    console.log(active)
    return (
       <header className="max-w-[425px] py-5 bg-gray-700 border-b flex flex-col border-gray-600 p-4 pl-5">
         <div className="max-w-full flex justify-end ">
           <Logo/>
         </div>
           <>
             {!active ? (
                <nav className="max-w-[425px]">
                 <button  onClick={DropDownClick} className="flex justify-start items-center">
                    <p className="pr-3">
                   Aulas
                 </p>
                  <X size={24}/>
               </button>
                <SideBar/>
               </nav>
             ) : (
                <button  onClick={DropDownClick} className="flex justify-start items-center ">
                  <p className="pr-3">
                    Aulas
                  </p>
                    <List size={24}/>
                 </button>

             )}
             </>
       </header>
    )
}
