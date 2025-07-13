import React, { useState } from 'react'

type Props = {
  onFiltroChange: (termo: string) => void
  onFiltroTipoChange: (tipo: 'data' | 'urgencia') => void
}

export default function Header({ onFiltroChange, onFiltroTipoChange }: Props) {
  const [termoBusca, setTermoBusca] = useState('')
  const [filtroTipo, setFiltroTipo] = useState<'data' | 'urgencia'>('data')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value
    setTermoBusca(valor)
    onFiltroChange(valor)
  }

  const handleFiltroTipoChange = (tipo: 'data' | 'urgencia') => {
    setFiltroTipo(tipo)
    onFiltroTipoChange(tipo)
  }

  return (
    <header className="bg-blue-200 py-4 flex flex-wrap px-6 items-center justify-around shadow-md border-b-2 border-blue-300 mb-6 gap-4">
      <div className="text-blue-800 font-bold text-lg whitespace-nowrap">Home</div>

      <div className="mx-4 min-w-[40%] flex-grow max-w-xl">
        <input
          type="text"
          placeholder="Buscar tarefas..."
          value={termoBusca}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-bold"
        />
      </div>

      <div className="flex gap-4 items-center min-w-[200px]">
        <button
          type="button"
          onClick={() => handleFiltroTipoChange('data')}
          className={`px-4 py-2 rounded-md font-bold border ${
            filtroTipo === 'data'
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-100'
          } transition`}
        >
          Data
        </button>

        <button
          type="button"
          onClick={() => handleFiltroTipoChange('urgencia')}
          className={`px-4 py-2 rounded-md font-bold border ${
            filtroTipo === 'urgencia'
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-100'
          } transition`}
        >
          Urgência
        </button>
      </div>
    </header>
  )
}
