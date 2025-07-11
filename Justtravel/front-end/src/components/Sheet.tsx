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
        <button> nnnnnnnnnnnnnn </button>
      </SheetTrigger>
      <SheetContent className=" overflow-x-auto" side="right">
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
        <SheetHeader className="ml-4">
          <SheetTitle className="text-3xl font-bold mt-4"></SheetTitle>
          <SheetDescription className="text-base">
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}