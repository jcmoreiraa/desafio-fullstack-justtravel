import { SheetDemo } from "../components/Sheet"
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import { Popover } from "@radix-ui/react-popover";
import CustomPopover from "@/components/Popover";

export default function Home() {
type arrayTeste = {
  titulo: string
  descricao: string
  status: boolean
  prioridade: 'baixa' | 'media' | 'alta' | 'urgente'
  criado_em: string
  atualizado_em: string
  
}

const preencheArray: arrayTeste[] = [
   {
    titulo: 'Banco de dados',
    descricao: 'Estudar para a prova de banco de dados, fazer exercícios',
    status: true,
    prioridade: 'urgente',
    criado_em: '2025-07-10',
    atualizado_em: '2025-07-11'
  },
  {
    titulo: 'Desenvolver a aplicação da Justtravel',
    descricao: 'Desenvolver afim de mieidewjii foefojejfejo oejofrejofoj oefrjroefjoe ofejjfoejofjoeo ojerfojeojfowejo vojevjoejo a aplicação da Justtravel, incluindo frontend e backend com python',
    status: false,
    prioridade: 'baixa',
    criado_em: '2025-07-09',
    atualizado_em: '2025-07-10'
  },
  {
    titulo: 'Terminar o trabalho de banco de dados',
    descricao: 'Finalizar o trabalho de banco de dados, incluindo a criação de tabelas, algebra relacional, otimização de consultas e a criação de índices',
    status: false,
    prioridade: 'urgente',
    criado_em: '2025-07-08',
    atualizado_em: '2025-07-15'
  },
  {
    titulo: 'Banco de dados',
    descricao: 'Estudar para a prova de banco de dados, fazer exercícios',
    status: true,
    prioridade: 'urgente',
    criado_em: '2025-07-10',
    atualizado_em: '2025-07-11'
  },
  {
    titulo: 'Desenvolver a aplicação da Justtravel',
    descricao: 'Desenvolver afim de mieidewjii foefojejfejo oejofrejofoj oefrjroefjoe ofejjfoejofjoeo ojerfojeojfowejo vojevjoejo a aplicação da Justtravel, incluindo frontend e backend com python',
    status: false,
    prioridade: 'alta',
    criado_em: '2025-07-09',
    atualizado_em: '2025-07-10'
  },
  {
    titulo: 'Terminar o trabalho de banco de dados',
    descricao: 'Finalizar o trabalho de banco de dados, incluindo a criação de tabelas, algebra relacional, otimização de consultas e a criação de índices',
    status: false,
    prioridade: 'urgente',
    criado_em: '2025-07-08',
    atualizado_em: '2025-07-15'
  },
   {
    titulo: 'Banco de dados',
    descricao: 'Estudar para a prova de banco de dados, fazer exercícios',
    status: true,
    prioridade: 'urgente',
    criado_em: '2025-07-10',
    atualizado_em: '2025-07-11'
  },
  {
    titulo: 'Desenvolver a aplicação da Justtravel',
    descricao: 'Desenvolver afim de mieidewjii foefojejfejo oejofrejofoj oefrjroefjoe ofejjfoejofjoeo ojerfojeojfowejo vojevjoejo a aplicação da Justtravel, incluindo frontend e backend com python',
    status: false,
    prioridade: 'alta',
    criado_em: '2025-07-09',
    atualizado_em: '2025-07-10'
  },
  {
    titulo: 'Terminar o trabalho de banco de dados',
    descricao: 'Finalizar o trabalho de banco de dados, incluindo a criação de tabelas, algebra relacional, otimização de consultas e a criação de índices',
    status: false,
    prioridade: 'media',
    criado_em: '2025-07-08',
    atualizado_em: '2025-07-15'
  }
]
const preencheArrayVencidos = () => {
  return preencheArray.filter((item) => item.status === true);
}

const preencheArrayNaoVencidos = () => {
  return preencheArray.filter((item) => item.status === false);
}
return (
  <>
    <main className="flex flex-col gap-[32px] items-center sm:items-start lg:flex-row px-4 py-4 ">
      <CustomPopover/>
      <div className="flex pt-20 gap-4 flex-wrap ">
        {preencheArrayNaoVencidos().map((valor, key) => (
        
          <Card
            titulo={valor.titulo}
            descricao={valor.descricao}
            status={valor.status}
            prioridade={valor.prioridade}
            criado_em={valor.criado_em}
            atualizado_em={valor.atualizado_em}
          />
        
      ))}
      </div>
      <SheetDemo CardsVencidos={preencheArrayVencidos()} />
    </main>
  </>
);
}
