// Item_Tarefa.ts
// Tipo de item de tarefa usado na lista de tarefas com checkbox.
export type ItemTarefa = {
    id: number;
    rotulo: string;
    concluido: boolean;
}