import { Envelope, GithubLogo } from "@phosphor-icons/react"


function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-blue-900 text-white">
                <div className="container flex flex-col items-center py-2">
                    <p className='text-xl font-bold'>
                            Cadastro RH | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/Grupo777"><GithubLogo size={40} weight='bold' /></a>
                        <a href="generation.g777@gmail.com"><Envelope size={40} weight='bold' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer