import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";
import { ToggleContext } from "../contexts/ToggleContext";

export function Event() {
  const { slug } = useParams<{slug: string}>()

  const viewport = screen.width

  const {isOpenToggle} = useContext(ToggleContext)

    return (
        <div className="  ">
          { isOpenToggle ? (
            <>
            <Header/> 
          <main className="flex flex-1">
            { slug 
              ? <Video lessonSlug={slug}/> 
              : <div className="flex-1"/>
            } 
          </main>
            </>
          ) : (
            <main>
            {viewport > 425 ? (
              <div className="flex">
              <Video lessonSlug={slug}/>
              <SideBar/>
              </div>
            ) : (
              <div>
                 <Header/>
                 <SideBar/>
              </div>
            )}
            </main>
          )}
        </div>
    )
}