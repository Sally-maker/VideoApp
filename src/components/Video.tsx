import { Player, Youtube , DefaultUi } from '@vime/react';
import { DiscordLogo, Lightning } from "phosphor-react";
import '@vime/core/themes/default.css'
import { gql, useQuery } from "@apollo/client";

const GET_LESSON_BY_SLUG_QUERY = gql`
 query GetLessonBySlug($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    description
    teacher {
      avatarURL
      bio
      name
    }
    videoId
  }
}
`
interface GetLessonBySlugResponse {
    lesson: {
        title: string
        description: string
        videoId: string
        teacher: {
          avatarURL:string
          bio:string
          name:string
        }
    }
}

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug
    }
  })
  if(!data){
    return (
      <div>
        <p>Carregando...</p>
      </div>
    )
  }

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                         <Youtube videoId={data.lesson.videoId}/>
                         <DefaultUi/>
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
              <div className="flex items-start gap-16">
                 <div className="flex-1">
                      <h1 className="text-2xl font-bold">
                         {data.lesson.title}
                      </h1>
                      <p className="mt-4 text-gray-200 leading-relaxed">
                         {data.lesson.description}
                      </p>

                      <div className="flex items-center gap-4 mt-6">
                          <img 
                            className="h-16 w-16 rounded-full border-blue-500 border-2 "
                            src={data.lesson.teacher.avatarURL}
                            alt="" 
                          />
                          <div className="leading-relaxed">
                            <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                            <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                          </div>
                      </div>
                 </div>

                 <div className="flex flex-col gap-4">
                    <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                      <DiscordLogo size={24}/>
                       Comunidade do Discord
                    </a>
                    <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500  hover:text-gray-900 transition-colors">
                        <Lightning size={24}/>
                        Acesse o desafio
                    </a>
                 </div>
              </div>
              <div className=""></div>
            </div>

        </div>
    )
}