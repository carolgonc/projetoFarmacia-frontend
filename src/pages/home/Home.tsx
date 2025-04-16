import ListaCategorias from "../../components/categorias/listacategorias/ListaCategorias";

function Home() {
    return (
        <>
            <div className="bg-gray-400 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                        Farmácia Bem-Estar
                        </h2>
                        <p className='text-xl'>
                            O melhor lugar para garantir o bem-estar da sua família!
                            </p>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://th.bing.com/th/id/R.1e99d123500d6b4cd4162166bf499c8e?rik=3dDd9lEjoBStLA&pid=ImgRaw&r=0"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            <ListaCategorias />
        </>
    )
}

export default Home;