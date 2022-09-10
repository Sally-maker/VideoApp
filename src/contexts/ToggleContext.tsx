import { createContext, ReactNode, useState } from "react";

type ToggleContextProps = {
    children: ReactNode
}

type ToggleContextType = {
    isOpenToggle: boolean,
    setIsOpenToggle: (newState: boolean) => void
}

const initialValue = {
    isOpenToggle: false,
    setIsOpenToggle: () => {}
}

export const ToggleContext = createContext<ToggleContextType>(initialValue)

export const ToggleContextProvider = ({ children }:ToggleContextProps) => {

   const [isOpenToggle, setIsOpenToggle] = useState(initialValue.isOpenToggle)

  return (
     <ToggleContext.Provider value={{isOpenToggle, setIsOpenToggle}}> 
          { children } 
     </ToggleContext.Provider>
  )
}