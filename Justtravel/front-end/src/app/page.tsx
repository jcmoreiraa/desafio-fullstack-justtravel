'use client'
import { useEffect, useState } from "react"
import Card from "../components/Card"
import CustomPopover from "@/components/Popover"
import {CompletedTasksSheet } from "../components/Sheet"
import Header from "@/components/Header"

export type CardType = {
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
  const [searchTerm, setSearchTerm] = useState('')
  const [sortType, setSortType] = useState<'data' | 'urgencia'>('data')

  const createTask = async (task: { titulo: string; descricao: string; prioridade: string; status: boolean }) => {
    const now = new Date()
    const formatDate = (date: Date) => date.toISOString().split('T')[0]

    const taskWithDates = {
      ...task,
      criado_em: formatDate(now),
      atualizado_em: formatDate(now),
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskWithDates),
      })

      if (response.ok) {
        console.log('Task created')
        fetchTasks()
      } else {
        console.error('Failed to create task')
      }
    } catch (error) {
      console.error('Error creating task:', error)
    }
  }

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/`)
      const data = await response.json()
      setCards(data)
    } catch (error) {
      console.error("Error fetching tasks:", error)
    }
  }

  const removeTask = async (id: number) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })

      if (response.ok) {
        setCards(prev => prev.filter(card => card.id !== id))
      } else {
        console.error("Failed to delete task")
      }
    } catch (error) {
      console.error("Error deleting task:", error)
    }
  }

  const toggleTaskStatus = async (id: number, currentStatus: boolean) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: !currentStatus })
      })

      if (response.ok) {
        setCards(prev =>
          prev.map(card =>
            card.id === id ? { ...card, status: !currentStatus } : card
          )
        )
      } else {
        console.error("Failed to update task status")
      }
    } catch (error) {
      console.error("Error updating task status:", error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const pendingTasks = cards.filter(card => !card.status)

  const filteredPendingTasks = pendingTasks.filter(card =>
    card.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedPendingTasks: CardType[] = [...filteredPendingTasks]

  if (sortType === 'data') {
    sortedPendingTasks.sort((a, b) => {
      const dateA = new Date(a.criado_em).getTime()
      const dateB = new Date(b.criado_em).getTime()
      return dateA - dateB
    })
  } else {
    const priorityOrder = ['baixa', 'media', 'alta', 'urgente']

    sortedPendingTasks.sort((a, b) => {
      const priorityA = priorityOrder.indexOf(a.prioridade)
      const priorityB = priorityOrder.indexOf(b.prioridade)
      return priorityB - priorityA
    })
  }

  const completedTasks = cards.filter(card => card.status)

  return (
    <>
      <Header
        onFilterChange={setSearchTerm}
        onFilterTypeChange={setSortType}
      />
      <main className="flex flex-col px-10 py-4 gap-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <CustomPopover onPost={createTask} />
          <CompletedTasksSheet
            completedTasks={completedTasks}
            deleteCard={removeTask}
            toggleCardStatus={toggleTaskStatus}
          />
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="sm:flex sm:flex-wrap col items-center gap-4 pt-8">
            {sortedPendingTasks.map(card => (
              <div key={card.id} className="min-w-[348px] max-w-[350px] flex-1">
                <Card
                  index={card.id}
                  titulo={card.titulo}
                  descricao={card.descricao}
                  status={card.status}
                  prioridade={card.prioridade}
                  criado_em={card.criado_em}
                  atualizado_em={card.atualizado_em}
                  deleteCardProps={removeTask}
                  toggleCardStatus={toggleTaskStatus}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
