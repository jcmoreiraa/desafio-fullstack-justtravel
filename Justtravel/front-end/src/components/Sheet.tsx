import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Card from "./Card";

type CompletedTasksSheetProps = {
  completedTasks: Array<TaskCard>;
  deleteCard: (id: number) => void;
  toggleCardStatus: (id: number, status: boolean) => void;
};

type TaskCard = {
  id: number;
  titulo: string;
  descricao: string;
  status: boolean;
  prioridade: 'baixa' | 'media' | 'alta' | 'urgente';
  criado_em: string;
  atualizado_em: string;
};

export function CompletedTasksSheet({
  completedTasks,
  deleteCard,
  toggleCardStatus
}: CompletedTasksSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-md bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 font-bold cursor-pointer">
          Tasks Completas
        </button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto justify-between">
        <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-6 p-4">
          {completedTasks.map((task) => (
            <div key={task.id} className="flex-1 min-w-[300px] max-w-[350px]">
              <Card
                index={task.id}
                titulo={task.titulo}
                descricao={task.descricao}
                status={task.status}
                prioridade={task.prioridade}
                criado_em={task.criado_em}
                atualizado_em={task.atualizado_em}
                deleteCardProps={deleteCard}
                toggleCardStatus={() => toggleCardStatus(task.id, task.status)}
              />
            </div>
          ))}
        </div>
        <SheetHeader className="ml-4">
          <SheetTitle className="text-3xl font-bold mt-4"></SheetTitle>
          <SheetDescription className="text-base"></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
