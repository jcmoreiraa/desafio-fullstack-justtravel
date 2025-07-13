import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Card from "./Card";
type SheetDemoProps = {
    CardsVencidos: Array<Card>
    deleteCard: (index: number) => void;
    toggleCardStatus: (id: number, status: boolean) => void;


};


type Card = {
  id: number;
  titulo: string;
  descricao: string;
  status: boolean;
  prioridade: 'baixa' | 'media' | 'alta' | 'urgente';
  criado_em: string;
  atualizado_em: string;
};


export function SheetDemo({
  CardsVencidos,
  deleteCard,
  toggleCardStatus
}: SheetDemoProps) {
 

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-md bg-blue-500 text-white hover: hover:bg-blue-700 py-2 px-4"> Tarefas cumpridas</button>
      </SheetTrigger>
      <SheetContent className=" overflow-y-auto justify-between">
  <div className="grid  grid-cols-1 sm:flex sm:flex-wrap f gap-6 p-4 ">
    {CardsVencidos.map((valor) => (
      <div key={valor.id} className="flex-1 min-w-[300px] max-w-[350px]">
        <Card
          index={valor.id}
          titulo={valor.titulo}
          descricao={valor.descricao}
          status={valor.status}
          prioridade={valor.prioridade}
          criado_em={valor.criado_em}
          atualizado_em={valor.atualizado_em}
          deleteCardProps={deleteCard}
          toggleCardStatus={() => {toggleCardStatus(valor.id, valor.status)}}
          
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