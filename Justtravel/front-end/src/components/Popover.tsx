'use client'
import { useState } from "react"
import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type CriarTarefaProps = {
  onTarefaCriada: () => void;
  onPost: (data: { titulo: string; descricao: string; prioridade: string; status: boolean }) => void;
};

export default function CriarTarefaPopover({ onTarefaCriada, onPost }: CriarTarefaProps) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("media");

  const handleSubmit = () => {
    onPost({ titulo, descricao, prioridade, status: false });
    setTitulo('');
    setDescricao('');
    setPrioridade('media');
  };

  return (
    <div className="p-4">
      <Popover>
        <PopoverTrigger
          aria-label="Criar tarefa"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Criar tarefa
        </PopoverTrigger>

        <PopoverContent className="w-80 p-4 space-y-4">
          <input
            id="titulo"
            type="text"
            className="mt-1 pl-2 block w-full rounded border-gray-600 shadow-sm"
            placeholder="Título da tarefa"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />

          <textarea
            id="descricao"
            className="mt-1 pl-2 block w-full rounded border-gray-600 shadow-sm"
            placeholder="Descrição da tarefa"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          ></textarea>

          <select
            id="prioridade"
            className="mt-1 pl-2 block w-full rounded border-gray-600 border-2 shadow-sm"
            value={prioridade}
            onChange={e => setPrioridade(e.target.value)}
          >
            <option value="" disabled>Selecione a prioridade</option>
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
            <option value="urgente">Urgente</option>
          </select>

          <button
            type="button"
            className={`mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition
            ${titulo === '' 
      ? 'cursor-not-allowed' : ''}`}
            onClick={handleSubmit}
            disabled={titulo === ''}
          >
            Salvar tarefa
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
}

