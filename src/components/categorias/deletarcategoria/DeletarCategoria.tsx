import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarCategoria() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
            await buscar(`/categorias/${id}`, setCategoria)
        }
        useEffect(() => {
            if (id !== undefined) {
                buscarPorId(id)
            }
        }, [id])
    
        async function deletarCategoria() {
            setIsLoading(true)
    
            try {
                await deletar(`/categorias/${id}`)
                    alert('Categoria apagada com sucesso!')
                }catch (error: any) {
                    alert('Erro ao deletar a categoria.')
                }
                setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border-3 border-rose-950 flex flex-col rounded-4xl overflow-hidden justify-between shadow-md w-90 h-50'>
                <header 
                    className='py-2 px-6   border-rose-950 font-bold text-1xl text-center'>
                    {categoria.nome}
                </header>
                <p className='p-2 text-xl  h-full text-center'>{categoria.descricao}</p>
                <div className="flex justify-between px-4 py-4 gap-4">
                    <button 
                        className='w-6/10 py-2 bg-red-500 hover:bg-red-700 text-white font-medium rounded-xl shadow-md transition duration-300'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-6/10 py-2 bg-indigo-500 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-md transition duration-300'
                                    onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria;