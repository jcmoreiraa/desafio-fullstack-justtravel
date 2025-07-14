'use client'
import { useState } from "react"
import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type CreateTaskPopoverProps = {
  onPost: (data: { titulo: string; descricao: string; prioridade: string; status: boolean }) => void;
};

export default function CreateTaskPopover({ onPost }: CreateTaskPopoverProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("media");

  const handleSubmit = () => {
    onPost({ titulo: title, descricao: description, prioridade: priority, status: false });
    console.log("Task created:", { title, description, priority, status: false });
    setTitle('');
    setDescription('');
    setPriority('media');
  };

  return (
    <div className="p-4">
      <Popover>
        <PopoverTrigger
          aria-label="Create task"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-bold transition cursor-pointer"
        >
          Criar Task
        </PopoverTrigger>

        <PopoverContent className="w-80 p-4 space-y-4">
          <input
            id="title"
            type="text"
            className="mt-1 pl-2 block w-full rounded border-gray-600 shadow-sm"
            placeholder="Título"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea
            id="description"
            className="mt-1 pl-2 block w-full rounded border-gray-600 shadow-sm"
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>

          <select
            id="priority"
            className="mt-1 pl-2 block w-full rounded border-gray-600 border-2 shadow-sm"
            value={priority}
            onChange={e => setPriority(e.target.value)}
          >
            <option value="" disabled>Selecione a prioridade</option>
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
            <option value="urgente">Urgente</option>
          </select>

          <button
            type="button"
            className={`mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition ${
              title === '' ? 'cursor-not-allowed' : ''
            }`}
            onClick={handleSubmit}
            disabled={title === ''}
          >
            Salvar Task
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );}