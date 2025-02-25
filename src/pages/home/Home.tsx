
function Home() {
    return (
        <>
            <div className="bg-gray-100 flex justify-center">
                <div className='container grid grid-cols-0 text-blue-900'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold ps-12'>
                            Seja Bem vindo ao nosso Cadastro RH!
                        </h2>
                        <p className='text-xl'>
                            Aqui nós gostamos de gente 💙
                        </p>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/b9medhm86/imagem%20rh.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
        </>
    )
}

export default Home