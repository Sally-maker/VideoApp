import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{slug: string}>()


    return (
      <div className="">
           <Header/>
         <div className="lg:flex">
           { slug 
             ? <Video lessonSlug={slug}/> 
             : <div className="flex-1"/>
            }
             <SideBar/>
        </div>
      </div>
  ) 
}