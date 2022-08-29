import { Player, Youtube , DefaultUi } from '@vime/react';
import { DiscordLogo, Lightning } from "phosphor-react";
import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from '../graphql/generated';

interface VideoProps {
  lessonSlug: string | undefined;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug
    }
  })
  if(!data || !data.lesson){
    return (
      <div>
        <p>Carregando...</p>
      </div>
    )
  }

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[425px] max-h-[50vh] aspect-video">
                    <Player>
                         <Youtube videoId={data.lesson.videoId}/>
                         <DefaultUi/>
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[425px] mx-auto">
              <div className="flex items-start gap-16 flex-col ">
                 <div className="flex-1">
                      <h1 className="text-2xl font-bold">
                         {data.lesson.title}
                      </h1>
                      <p className="mt-4 text-gray-200 leading-relaxed">
                         {data.lesson.description}
                      </p>

                 </div>
                 <div className="flex flex-col gap-4 w-full">
                    <a href="" className="p-4 text-sm bg-orange-500 opacity-85 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-orange-600 transition-colors">
                      <DiscordLogo size={24}/>
                       Comunidade do Discord
                    </a>
                 </div>
              </div>
              <div className=""></div>
            </div>

        </div>
    )
}