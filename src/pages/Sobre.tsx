import { Users, Building2, Trophy, Clock, CheckCircle, Briefcase } from 'lucide-react';
import FotoPaola from '../assets/Eu.webp';
import FotoJaime from '../assets/Jaime (4).jpg';
import FotoEloiza from '../assets/Eloiza Fernandes (3).jpg';
import FotoFelipe from '../assets/Felipe Macedo (2).jpg';
import FotoNathan from '../assets/Nathan Ribeiro  (4).jpg';
import FotoLucas from '../assets/Lucas Casotti (3).jpg';



const Sobre = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Nós</h2>
          <p className="text-lg text-gray-600">Nossa consultoria de RH transforma empresas com soluções estratégicas. Conectamos talentos e oportunidades, impulsionando crescimento. Com inovação e excelência, garantimos equipes engajadas e produtivas.</p>
        </div>
        {/* IMAGEM PRINCIPAL DA PÁGINA SOBRE */}
        <div className="rounded-lg overflow-hidden shadow-lg mb-16 slide-in">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Equipe de profissionais"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* CARDS SERVIÇOS PRESTADOS */}
        <div className="grid md:grid-cols-3 gap-8 mb-6">

          <div className="bg-white p-6 rounde-lg shadow-md">
            <Users className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Recrutamento e Seleção</h3>
            <p className="text-gray-600">Processo completo de identificação e seleção dos melhores talentos para sua empresa.</p>
          </div>

          <div className="bg-white p-6 rounde-lg shadow-md">
            <Trophy className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Desenvolvimento</h3>
            <p className="text-gray-600">Programas de treinamento e desenvolvimento personalizados para sua equipe.</p>
          </div>

          <div className="bg-white p-6 rounde-lg shadow-md">
            <Building2 className="w-12 h-12 text-blue-900 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Consultoria</h3>
            <p className="text-gray-600">Assessoria especializada em gestão de pessoas e cultura organizacional.</p>
          </div>
        </div>

        {/* SEÇÃO SOBRE NOSSAS QUALIFICAÇÕES */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Por que nos Escolher?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Experiência Comprovada</h4>
                <p className="text-gray-600">Mais de 1000 processos seletivos realizados com sucesso</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Agilidade</h4>
                <p className="text-gray-600">Processos otimizados para resultados rápidos e eficientes</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Briefcase className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Especialização</h4>
                <p className="text-gray-600">Equipe altamente qualificada e constantemente atualizada</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Atendimento Personalizado</h4>
                <p className="text-gray-600">Soluções sob medida para cada cliente</p>
              </div>
            </div>
          </div>
        </div>

        {/*  CONTATO  */}
        <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Pronto para transformar sua gestão de pessoas?</h3>
          <p className="mb-6">Entre em contato conosco e descubra como podemos ajudar sua empresa.</p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Fale Conosco
          </button>
        </div>
      </section>

      {/* NOSSA EQUIPE DE PROFISSIONAIS */}
      <div className="bg-white roudend-lg shadow-lg p-8 gap-8 flex flex-col text-center">
        <h3 className="text-2xl font-bold text-center mb-8 border-b border-gray-300">Nossa Equipe</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-lg p-6 shadow-md flex flex-col items-center space-y-4">
            <img
              src={FotoPaola}
              alt="Foto da Paola Patrícia"
              className="rounded-full w-20 h-20 object-cover"
            />
            <div>
              <h4 className="font-semibold">PO</h4>
              <p className="text-gray-600">Paola Patrícia</p>
            </div>
          </div>

          <div className="rounded-lg p-6 shadow-md flex flex-col items-center space-y-4">
            <img
              src={FotoJaime}
              alt="Foto do Jaime Filho"
              className="rounded-full w-20 h-20 object-cover"
            />
            <div>
              <h4 className="font-semibold">Scrum Master</h4>
              <p className="text-gray-600">Jaime Filho</p>
            </div>
          </div>

          <div className="rounded-lg p-6 shadow-md flex flex-col items-center space-y-4">
            <img
              src={FotoEloiza}
              alt="Foto da Eloiza Fernandes"
              className="rounded-full w-20 h-20 object-cover items-center"
            />
            <div>
              <h4 className="font-semibold">Desenvolvedor I</h4>
              <p className="text-gray-600">Eloiza Fernandes</p>
            </div>
          </div>

          <div className="rounded-lg p-6 shadow-md flex flex-col items-center space-y-4">
            <img
              src={FotoFelipe}
              alt="Foto do Felipe Macedo"
              className="rounded-full w-20 h-20 object-cover items-center"
            />
            <div>
              <h4 className="font-semibold">Desenvolvedor II</h4>
              <p className="text-gray-600">Felipe Macedo</p>
            </div>
          </div>

          <div className="rounded-lg p-6 shadow-md flex flex-col items-center space-y-4">
            <img
              src={FotoNathan}
              alt="Foto do Nathan Ribeiro"
              className="rounded-full w-20 h-20 object-cover items-center"
            />
            <div>
              <h4 className="font-semibold">Desenvolvedor III</h4>
              <p className="text-gray-600">Nathan Ribeiro</p>
            </div>
          </div>

          <div className="rounded-lg p-6 shadow-md flex flex-col items-center space-y-4">
            <img
              src={FotoLucas}
              alt="Foto do Lucas Casotti"
              className="rounded-full w-20 h-20 object-cover items-center"
            />
            <div>
              <h4 className="font-semibold">Tester</h4>
              <p className="text-gray-600">Lucas Casotti</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sobre