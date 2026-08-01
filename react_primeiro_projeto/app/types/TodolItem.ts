// Arquivo de tipo: TodolItem.ts
// Esse tipo representa um item de tarefa dentro da lista.
//
// Propriedades:
// - id: identificador único da tarefa
// - rotulo: texto da tarefa
// - concluido: indica se a tarefa já foi finalizada
//
// Esse tipo é usado para manter uma representação consistente dos itens da lista.
export type ItemTarefa = {
    id: number;
    rotulo: string;
    concluido: boolean;
};