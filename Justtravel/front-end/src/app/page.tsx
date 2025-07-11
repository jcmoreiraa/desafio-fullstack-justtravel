import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";

export default function Home() {
type arrayTeste = {
  titulo: string
  descricao: string
  status: boolean
  prioridade: 'baixa' | 'media' | 'alta' | 'alarmante'
  criado_em: string
  atualizado_em: string
  
}

const preencheArray: arrayTeste[] = [
   {
    titulo: 'Estudar',
    descricao: 'Estudar para a prova',
    status: false,
    prioridade: 'alta',
    criado_em: '2025-07-10',
    atualizado_em: '2025-07-11'
  },
  {
    titulo: 'Comprar pão',
    descricao: 'Ir na padaria',
    status: true,
    prioridade: 'baixa',
    criado_em: '2025-07-09',
    atualizado_em: '2025-07-10'
  },
  {
    titulo: 'Fazer backend',
    descricao: 'Terminar o controller',
    status: false,
    prioridade: 'alarmante',
    criado_em: '2025-07-08',
    atualizado_em: '2025-07-11'
  }
]


  return (
    <>
    <Header />
    <main className="flex gap-[32px] row-start-2 items-center sm:items-start justify-center ">
      {preencheArray.map((valor, key) => (
        <div className="">
        <Card titulo={valor.titulo} descricao={valor.descricao} status={valor.status} prioridade={valor.prioridade} criado_em={""} atualizado_em={""} /></div>

      ))}


    </main>
    <Footer />
    </>
    
  );
}
