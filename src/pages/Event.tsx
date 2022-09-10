import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";
import { ToggleContext } from "../contexts/ToggleContext";

export function Event() {
  const { slug } = useParams<{slug: string}>()

  const {isOpenToggle} = useContext(ToggleContext)

    return (
      <div className="">
      { isOpenToggle ? (
        <>
      <main className="">
        <Header/>
        <div className="lg:flex">
        { slug 
          ? <Video lessonSlug={slug}/> 
          : <div className="flex-1"/>
        }
        <SideBar/>
        </div>
      </main>
        </>
      ) : (
        <main>
          <div className="">
          <Header/> 
          <SideBar/>
          </div>
        </main>
      )}
    </div>
    ) 
}