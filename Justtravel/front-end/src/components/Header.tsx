import React, { useState } from 'react'

type Props = {
  onFiltroChange: (termo: string) => void
}

export default function Header({ onFiltroChange }: Props) {
  const [termoBusca, setTermoBusca] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value
    setTermoBusca(valor)
    onFiltroChange(valor)
  }

  return (
    <header className="bg-blue-200 py-4 flex px-6 items-center justify-around shadow-md border-b-2 border-blue-300 mb-6 shadow-md-blue-300 shadow-xl">
      <div className="text-blue-800 font-bold text-lg">Home</div>

      <div className="mx-4 min-w-[40%]">
        <input
          type="text"
          placeholder="Buscar tarefas..."
          value={termoBusca}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-bold"
        />
      </div>

      <div className="text-blue-800 font-bold text-lg">Sobre</div>
    </header>
  )
}
