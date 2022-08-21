import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";


export function SideBar() {
    const { data } = useGetLessonsQuery()
    
    return (
        <aside className="w-[425px] overflow-y-hidden bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                          key={lesson.id}
                          isAvaiableAt={new Date(lesson.availableAt)}
                          slug={lesson.slug}
                          title={lesson.title}
                          type={lesson.lessonType}
                        />

                    )
                })}
            </div>
        </aside>
    )
}