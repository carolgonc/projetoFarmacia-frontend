import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-rose-950 text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Farmácia Bem-Estar</Link>

                    <div className='flex gap-4'>
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadastrarcategorias' className='hover:underline'>Cadastrar categorias</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar