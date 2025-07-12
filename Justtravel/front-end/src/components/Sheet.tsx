import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Card from "./Card";
type SheetDemoProps = {
    CardsVencidos: Array<Card>

};

type Card = {
  titulo: string;
  descricao: string;
  status: boolean;
  prioridade: 'baixa' | 'media' | 'alta' | 'urgente';
  criado_em: string;
  atualizado_em: string;
};


export function SheetDemo({
  CardsVencidos
}: SheetDemoProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-md bg-blue-500 text-white py-2 px-4"> Tarefas cumpridas</button>
      </SheetTrigger>
      <SheetContent className="sm:flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
          {CardsVencidos.map((valor, index) => (
            <Card
              key={index}
              titulo={valor.titulo}
              descricao={valor.descricao}
              status={valor.status}
              prioridade={valor.prioridade}
              criado_em={valor.criado_em}
              atualizado_em={valor.atualizado_em}
            />
          ))}
        </div>
        <SheetHeader className="ml-4">
          <SheetTitle className="text-3xl font-bold mt-4"></SheetTitle>
          <SheetDescription className="text-base">
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}