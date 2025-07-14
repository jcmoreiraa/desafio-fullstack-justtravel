import React, { useState } from 'react'

type Props = {
  onFilterChange: (term: string) => void
  onFilterTypeChange: (type: 'data' | 'urgencia') => void
}

export default function Header({ onFilterChange, onFilterTypeChange }: Props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState<'data' | 'urgencia'>('data')

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    onFilterChange(value)
  }

  const handleFilterTypeChange = (type: 'data' | 'urgencia') => {
    setFilterType(type)
    onFilterTypeChange(type)
  }

  return (
    <header className="bg-blue-200 py-4 flex flex-wrap px-6 items-center justify-around shadow-md border-b-2 border-blue-300 mb-6 gap-4">
      <div className="text-blue-800 font-bold text-lg whitespace-nowrap">Home</div>

      <div className="mx-4 min-w-[40%] flex-grow max-w-xl">
        <input
          type="text"
          placeholder="Pesquisar Tasks..."
          value={searchTerm}
          onChange={handleSearchInputChange}
          className="w-full px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-bold"
        />
      </div>

      <div className="flex gap-4 items-center min-w-[200px]">
        <button
          type="button"
          onClick={() => handleFilterTypeChange('data')}
          className={`px-4 py-2 rounded-md font-bold border cursor-pointer ${
            filterType === 'data'
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-100'
          } transition`}
        >
          Data
        </button>

        <button
          type="button"
          onClick={() => handleFilterTypeChange('urgencia')}
          className={`px-4 py-2 rounded-md font-bold border cursor-pointer ${
            filterType === 'urgencia'
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-100'
          } transition`}
        >
          Urgencia
        </button>
      </div>
    </header>
  )
}
