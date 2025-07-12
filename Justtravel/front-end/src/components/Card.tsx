'use client'
import SvgIcon from '@/app/assets/icons/xSimbol'
import React, { useState, useRef, useEffect } from 'react'

type Props = {
  index: number
  titulo: string
  descricao: string
  status: boolean
  prioridade: 'baixa' | 'media' | 'alta' | 'urgente'
  criado_em: string
  atualizado_em: string
  deleteCardProps: (index: number) => void
  toggleCardStatus: (index: number, status: boolean) => void
}

const Card = ({
  index,
  titulo,
  descricao,
  status,
  prioridade,
  criado_em,
  atualizado_em,
  deleteCardProps,
  toggleCardStatus
}: Props) => {
  const [expandido, setExpandido] = useState(false)
  const [precisaVerMais, setPrecisaVerMais] = useState(false)
  const descricaoRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (descricaoRef.current) {
      setPrecisaVerMais(descricaoRef.current.scrollHeight > descricaoRef.current.clientHeight)
    }
  }, [descricao])

  const prioridadeClass = {
    baixa: 'bg-green-100 border-green-400',
    media: 'bg-yellow-100 border-yellow-400',
    alta: 'bg-orange-100 border-orange-400',
    urgente: 'bg-red-100 border-red-400',
  }



  return (
    <div
      className={`w-full max-w-sm ${
        expandido ? 'h-auto' : 'h-[360px]'
      } px-3 py-2 mb-6 rounded-xl shadow-md border-l-8 flex flex-col justify-between ${
        prioridadeClass[prioridade]
      } transition-all duration-300 hover:scale-[1.01]`}
    >
      <div className="flex justify-end">
        <button className='cursor-pointer' onClick={() => deleteCardProps(index)}>
          <SvgIcon />
        </button>
      </div>

      <div className="pb-2 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold break-words">{titulo}</h2>

          <span
            className={`text-xs px-3 py-1 rounded-full inline-block ${
              status ? 'bg-green-300 text-green-800' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {status ? 'Concluída' : 'Pendente'}
          </span>

          <div>
            <p
              ref={descricaoRef}
              className={`text-gray-700 text-sm mb-1 transition-all duration-300 break-words ${
                expandido ? '' : 'line-clamp-5 overflow-hidden'
              }`}
            >
              {descricao}
            </p>

            {precisaVerMais && (
              <div className="flex justify-end mt-1">
                <button
                  type="button"
                  onClick={() => setExpandido(!expandido)}
                  className="text-blue-600 text-xs hover:underline focus:outline-none"
                >
                  {expandido ? (
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      Ver menos
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      Ver mais
                    </span>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Rodapé visível apenas se NÃO estiver expandido */}
        {!expandido && (
          <>
            <div className="text-xs text-gray-600 mt-4 space-y-1">
              <p>
                Prioridade: <strong className="capitalize">{prioridade}</strong>
              </p>
              <p>Criado em: {criado_em}</p>
              <p>Atualizado em: {atualizado_em}</p>
            </div>

            <button className="mt-4 bg-red-400 text-white px-4 py-2 rounded-lg shadow hover:bg-red-500 transition" onClick={() => toggleCardStatus(index, status)}>
              {!status ? 'Finalizar Tarefa' : 'Reativar Tarefa'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Card