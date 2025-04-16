import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria';


interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border-3 border-rose-950 flex flex-col rounded-4xl overflow-hidden justify-between shadow-md w-90 h-50'>
            <header className='py-2 px-6   border-rose-950 font-bold text-1xl text-center'>
                {categoria.nome}
            </header>
            <p className='p-2 text-xl  h-full text-center'>{categoria.descricao}</p>
            
            <div className="flex">
            <Link to={`/editarcategorias/${categoria.id}`}
	            className='w-full text-slate-100 
                flex items-center justify-center py-2 mb-2'>
	            <button
      className='w-9/12 py-2 bg-indigo-500 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-md transition duration-300'>Editar</button>
            </Link>

            <Link to={`/deletarcategorias/${categoria.id}`} 
	            className='text-slate-100  w-full 
		        flex items-center justify-center mb-2'>
	            <button
                className='w-9/12 py-2 bg-red-500 hover:bg-red-700 text-white font-medium rounded-xl shadow-md transition duration-300'>Deletar</button>
            </Link>
            </div>

        </div>
    )
}

export default CardCategorias;