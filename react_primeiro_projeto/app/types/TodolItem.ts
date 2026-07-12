// Item_Tarefa.ts
// Tipo de item de tarefa usado na lista de tarefas com checkbox.

//explicando o arquivo Item_Tarefa.ts e por qual motivo ele foi criado:
// Este arquivo define o tipo ItemTarefa, que representa um item de tarefa em uma lista de tarefas com checkbox.
// Ele foi criado para fornecer uma estrutura clara e consistente para os itens de tarefa, facilitando a manipulação e o gerenciamento desses itens no aplicativo.
// O tipo ItemTarefa possui três propriedades: 'id', que é um número único identificando a tarefa; 'rotulo', que é uma string representando o texto da tarefa; e 'concluido', que é um booleano indicando se a tarefa foi concluída ou não.
// Este tipo é utilizado em componentes e funções relacionados à lista de tarefas, garantindo que os dados sejam tratados de forma consistente.

//ele esta sendo usando no componente Lista_Tarefas.tsx, que é responsável por renderizar a lista de tarefas e gerenciar o estado dos itens de tarefa.
export type ItemTarefa = {
    id: number;
    rotulo: string;
    concluido: boolean;
}