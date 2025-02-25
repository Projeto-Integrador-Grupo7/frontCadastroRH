import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-blue-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                    Cadastro RH

                    <div className='flex gap-4'>
                        <Link to='/listacolaborador' className='hover:underline'>Lista Colaborador</Link> 
                        <Link to='/sobre' className='hover:underline'>Sobre</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar