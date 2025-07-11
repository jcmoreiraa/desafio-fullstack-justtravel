'use client'
import React from 'react'

type Props = {
  titulo: string
  descricao: string
  status: boolean
  prioridade: 'baixa' | 'media' | 'alta' | 'alarmante'
  criado_em: string
  atualizado_em: string
}

const Card = (props: Props) => {
  const prioridadeClass = {
    baixa: 'bg-green-100 border-green-400',
    media: 'bg-yellow-100 border-yellow-400',
    alta: 'bg-orange-100 border-orange-400',
    alarmante: 'bg-red-100 border-red-400'
  }

  const handleTeste = () => {
    alert('Cliquei no botão!')
  }

  return (
    <div
      className={`w-full max-w-md min-h-[280px] p-6 mb-6 rounded-xl shadow-md border-l-8 flex flex-col justify-between ${prioridadeClass[props.prioridade]} transition-all hover:scale-[1.01]`}
    >
      <div className=' pt-4 pb-4 space-y-8'>
         <h2 className="text-2xl font-bold">{props.titulo}</h2>
        <div className="flex justify-between items-start mb-4">
         
          <span
            className={`text-xs px-3 py-1 rounded-full ${
              props.status ? 'bg-green-300 text-green-800' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {props.status ? 'Concluída' : 'Pendente'}
          </span>
        </div>

        <p className="text-gray-700 text-sm mb-4">{props.descricao}</p>

        <div className="text-xs text-gray-600 space-y-1">
          <p>Prioridade: <strong className="capitalize">{props.prioridade}</strong></p>
          <p>Criado em: {props.criado_em}</p>
          <p>Atualizado em: {props.atualizado_em}</p>
        </div>
      </div>

      <button
        className="mt-6 bg-red-400 text-white px-4 py-2 rounded-lg shadow hover:bg-red-500 transition"
        onClick={handleTeste}
      >
        Botão de ação
      </button>
    </div>
  )
}

export default Card
