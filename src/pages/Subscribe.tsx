import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubsMutation } from "../graphql/generated";


export function Subscribe(){

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber,{ loading }] = useCreateSubsMutation()

    async function handleSubscribe(event: FormEvent) {
     event.preventDefault()

     await createSubscriber({
        variables: {
            name, 
            email,
        }
       })
       navigate('/event')
    }


    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[425px] flex flex-col items-center justify-between mt-20 mx-auto sm:items-center">
              <div className="max-w-[425px] flex flex-col items-center ">
               <img src='./src/assets/logo.png' alt="" className="h-20 rounded-2xl" />
                    
                    <h1 className="mt-8 text-[1.7rem] leading-tight">
                      Radio Nações <strong className="text-blue-900">Sempre com você</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed mb-9">
                        Entregando entreterimento e <strong className="text-blue-900">diversão musical para todos</strong>
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block"> Inscreva-se gratuitamente</strong>

                        <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                          type="text" 
                          className="bg-gray-900 rounded px-5 h-14"
                          placeholder="Seu nome completo"  
                          onChange={event => setName(event.target.value)}
                        />
                        <input 
                          type="email" 
                          className="bg-gray-900 rounded px-5 h-14"
                          placeholder="Digite seu email"  
                          onChange={event => setEmail(event.target.value)}
                        />
                        <button
                          type="submit"
                          disabled={loading}
                          className="mt-4 bg-orange-500 uppercase py-4 rounded font-bold text-sm hover:bg-orange-700 transition-colors disabled:opacity-50"
                        >
                          Cadastre-se
                        </button>
                    </form>
                </div>
            </div>
            <img src="/src/assets/Mask.png" className="mt-10" alt="" />
        </div>
    )
}