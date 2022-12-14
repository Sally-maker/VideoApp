import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import { Link, useParams } from 'react-router-dom';
import classeNames from 'classnames'
import { useContext, useState } from 'react';

interface ILessonType {
    title: string;
    slug: string;
    isAvaiableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: ILessonType) {

   const [isOpenToggle, setIsOpenToggle] = useState(false)


    const { slug } = useParams<{slug: string}>()
    const isAvailable = isPast(props.isAvaiableAt)
    const dateFormat = format(props.isAvaiableAt, "EEEE' • ' d ' de 'MMMM' • 'k'h'mm")

    const isActive = slug === props.slug
    return (
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
              {dateFormat}
            </span>
             
            <div className={classeNames(`rounded border border-gray-500 p-4 mt-2 group-hover:border-orange-500`,{
                'bg-orange-500 ring-opacity-50': isActive
            })}>
                <button onClick={() => setIsOpenToggle(!isOpenToggle)} className="flex items-center justify-between">
                    {isAvailable ? (
                        <span className={classeNames("text-sm text-blue-500 font-medium flex gap-2 items-center", {
                            'text-white': isActive,
                            'text-blue-500': !isActive
                        })}>
                        <CheckCircle size={20}/>
                        Contéudo liberado
                       </span>
                    ):(
                        <span className="text-sm text-orange-500 font-medium flex gap-2 items-center">
                        <Lock size={20}/>
                        Em breve
                       </span>
                    )}
                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-white font-bold ml-24">
                        {props.type === "class" ? "GRAVAÇÕES" : "AO VIVO"}
                    </span>
                </button>

                <strong className={classeNames('mt-5 block', {
                    'text-white': isActive,
                    'text-gray-200': !isActive
                })}>    
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}