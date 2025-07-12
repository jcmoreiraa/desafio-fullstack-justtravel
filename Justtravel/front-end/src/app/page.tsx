'use client'
import { useEffect, useState } from "react"
import Card from "../components/Card"
import CustomPopover from "@/components/Popover"
import { SheetDemo } from "../components/Sheet"
import Header from "@/components/Header"

type CardType = {
  id: number
  titulo: string
  descricao: string
  status: boolean
  prioridade: 'baixa' | 'media' | 'alta' | 'urgente'
  criado_em: string
  atualizado_em: string
}

export default function Home() {
  const [cards, setCards] = useState<CardType[]>([])
  const [filtro, setFiltro] = useState('')

  const PostTasks = async (data: { titulo: string; descricao: string; prioridade: string; status: boolean }) => {
  const now = new Date();
  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const dataComDatas = {
    ...data,
    criado_em: formatDate(now),
    atualizado_em: formatDate(now),
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataComDatas),
    });

    if (response.ok) {
      console.log('Tarefa criada');
      getCardsFromAPI(); 
    } else {
      console.error('Erro ao criar tarefa');
    }
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
  }
};



  const getCardsFromAPI = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/`)
      const data = await response.json()
      setCards(data)
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error)
    }
  }

  const deleteCard = async (index: number) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${index}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if (response.ok) {
        setCards(prev => prev.filter(item => item.id !== index))
      } else {
        console.error("Erro ao deletar tarefa")
      }
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error)
    }
  }

  const toggleCardStatus = async (index: number, statusAtual: boolean) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${index}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: !statusAtual })
      })

      if (response.ok) {
        setCards(prev =>
          prev.map(card =>
            card.id === index ? { ...card, status: !card.status } : card
          )
        )
      } else {
        console.error("Erro ao atualizar status da tarefa")
      }
    } catch (error) {
      console.error("Erro ao atualizar status:", error)
    }
  }

  useEffect(() => {
    getCardsFromAPI()
  }, [])

  const tarefasPendentes = cards.filter(card => card.status === false)
  const tarefasConcluidas = cards.filter(card => card.status === true)

  const tarefasPendentesFiltro = tarefasPendentes.filter(card =>
  card.titulo.toLowerCase().includes(filtro.toLowerCase())
)
  return (
    <><Header onFiltroChange={setFiltro} /><main className="flex flex-col px-10 py-4 gap-8 ">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <CustomPopover  onPost={PostTasks} />
        <SheetDemo CardsVencidos={tarefasConcluidas} deleteCard={deleteCard} toggleCardStatus={toggleCardStatus} />
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="sm:flex sm:flex-wrap col items-center gap-4 pt-8">
          {tarefasPendentesFiltro.map(card => (
            <div key={card.id} className="min-w-[348px] max-w-[350px] flex-1">
              <Card
                index={card.id}
                titulo={card.titulo}
                descricao={card.descricao}
                status={card.status}
                prioridade={card.prioridade}
                criado_em={card.criado_em}
                atualizado_em={card.atualizado_em}
                deleteCardProps={deleteCard}
                toggleCardStatus={toggleCardStatus} />
            </div>
          ))}
        </div>
      </div>

    </main></>


  )
}
