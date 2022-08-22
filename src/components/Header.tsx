import { List, X } from "phosphor-react";
import { useContext } from "react";
import { ToggleContext } from "../contexts/ToggleContext";

export function Header() {
 const {isOpenToggle, setIsOpenToggle} =  useContext(ToggleContext)
    return (
       <header className="max-w-[640px] py-5 bg-gray-700 border-b flex flex-col border-gray-600 p-4 pl-5">
         <div className="max-w-full flex justify-end ">
           <img src="/src/assets/Logo.png" alt="" className="h-12 rounded-2xl" />
         </div>
           <>
              <nav className={`max-w-[640px]`}>
                <button  onClick={() => setIsOpenToggle(!isOpenToggle)} className={`flex justify-start items-center duration-500`}>
                    {isOpenToggle ? <List size={24}/> : <X size={24}/>}
                </button>
              </nav>
           </>
       </header>
    )
}
