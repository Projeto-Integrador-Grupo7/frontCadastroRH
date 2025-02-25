import { useEffect, useState } from "react";
import CardColaborador from "../cardcolaborador/CardColaborador";
import Colaborador from "../../../models/Colaborador";
import { DNA } from 'react-loader-spinner';

function ListaColaborador() {
    const [colaborador, setColaborador] = useState<Colaborador[]>([]);
    const [loading, setLoading] = useState(true);

    // Simulando carregamento de dados
    useEffect(() => {
        setTimeout(() => {
            setColaborador([
                {
                    id: 1,
                    nome: "João Silva",
                    cargo: "Desenvolvedor Back-End",
                    salario: 3000,
                    foto: "https://ik.imagekit.io/b9medhm86/user.png?updatedAt=1740434518211",
                    dataAdmissao: "2024-01-15"
                },
                {
                    id: 2,
                    nome: "Maria Souza",
                    cargo: "Designer",
                    salario: 2500,
                    foto: "https://cdn-icons-png.flaticon.com/512/4647/4647172.png",
                    dataAdmissao: "2023-05-20"
                },
                {
                    id: 3,
                    nome: "Lucas Santos",
                    cargo: "Desenvolvedor Front-End",
                    salario: 3000,
                    foto: "https://ik.imagekit.io/b9medhm86/user.png?updatedAt=1740434518211",
                    dataAdmissao: "2024-08-20"
                }

            ]);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                    >
                        {colaborador.map((colaborador) => (
                            <CardColaborador key={colaborador.id} colaborador={colaborador} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaColaborador;
