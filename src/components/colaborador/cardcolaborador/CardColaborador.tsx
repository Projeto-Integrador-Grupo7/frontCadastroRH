import { Link } from 'react-router-dom'
import Colaborador from '../../../models/Colaborador'

interface CardColaboradorProps {
    colaborador: Colaborador
}

function CardColaborador({ colaborador }: CardColaboradorProps) {
    return (
        <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
            <div className="flex w-full bg-[#219ebc] py-2 px-4 items-center gap-4">
                <img
                    src={colaborador.foto}
                    className='h-12 rounded-full'
                    alt={colaborador.nome} />
                <h3 className='text-lg font-bold uppercase text-left'>
                    {colaborador.nome}
                </h3>
            </div>               
        {/* 8ecae6 , 219ebc, 023047 */}
            <div>
                <div className="relative p-4 text-left bg-[url('https://ik.imagekit.io/Shost/fundo.webp?updatedAt=1740495364566')] bg-cover bg-center">
                    {/* Overlay semi-transparente */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Conteúdo sobre a imagem */}
                    <div className="relative text-white">
                        <h4 className='text-lg font-semibold uppercase'>{colaborador.cargo}</h4>
                        <p>Salário: R${colaborador.salario.toFixed(2)}</p>
                        <p>Data de Admissão: {new Intl.DateTimeFormat(undefined).format(new Date(colaborador.dataAdmissao))}</p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <Link to='' 
                    className='w-full text-white bg-[#219ebc]
                    hover:bg-[#023047] flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to='' 
                    className='text-white bg-[#8ecae6]
                    hover:bg-gray-300 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardColaborador