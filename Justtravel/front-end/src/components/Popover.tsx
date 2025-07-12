'use client'
import { useState } from "react"
import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function CriarTarefaPopover() {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [prioridade, setPrioridade] = useState("media");

    const PostTasks = (data: { titulo: string; descricao: string; prioridade: string, status:false }) => {
        const url = 'http://localhost:3001/tasks';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                console.log('Tarefa criada');
            } else {
                console.error('Erro ao criar tarefa');
            }
        })
        .catch(error => {
            console.error('Erro ao criar tarefa:', error);
        });
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
          <div>
            <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título</label>
            <input
              id="titulo"
              type="text"
              className="mt-1 pl-2 block w-full rounded border-gray-600 shadow-sm"
              placeholder="Título da tarefa"
              value={titulo}
              onChange={e => setTitulo(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">Descrição</label>
            <textarea
              id="descricao"
              className="mt-1 pl-2 block w-full rounded border-gray-600 shadow-sm"
              placeholder="Descrição da tarefa"
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label htmlFor="prioridade" className="block text-sm font-medium text-gray-700">Prioridade</label>
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
              <option value="urgente" className='border-gray-200 border-2'>Urgente</option>
            </select>
          </div>

          <button
            type="button"
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            onClick={() => PostTasks({ titulo, descricao, prioridade, status: false })}
          >
            Salvar tarefa
          </button>
        </PopoverContent>
      </Popover>
    </div>
  )
}
