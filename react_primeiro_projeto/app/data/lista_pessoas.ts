// lista_pessoas.ts

// Lista de pessoas de exemplo usada para demonstração de renderização de listas.

// esse arquivo foi criado pois a lista de pessoas é usada em vários lugares do projeto, então é melhor centralizar os dados em um único arquivo para facilitar a manutenção e evitar duplicação de código.

// o arquivo tem a extensão .ts pois ele exporta um array de objetos do tipo Pessoa, que é uma interface definida em outro arquivo. Dessa forma, podemos garantir que os dados estão no formato correto e evitar erros de tipagem.

// arquivos com a extensão .ts são arquivos TypeScript, que é uma linguagem de programação que é um superconjunto do JavaScript. O TypeScript adiciona recursos de tipagem estática e outras funcionalidades ao JavaScript, o que pode ajudar a evitar erros e melhorar a qualidade do código. No entanto, para usar arquivos TypeScript em um projeto React, é necessário configurar o ambiente de desenvolvimento para compilar o código TypeScript em JavaScript, o que pode ser feito usando ferramentas como o Babel ou o TypeScript Compiler (tsc).

// a pasta TYPES é onde ficam os arquivos de definição de tipos, que são usados para definir as interfaces e tipos de dados usados no projeto. Esses arquivos têm a extensão .d.ts e são usados para fornecer informações de tipo para o TypeScript, permitindo que ele verifique o código em tempo de compilação e forneça sugestões de código e autocompletar. No caso do arquivo Person.d.ts, ele define a interface Pessoa, que é usada para garantir que os objetos da lista de pessoas tenham as propriedades corretas e estejam no formato esperado.

// a diferença das pastas DATA e TYPES é que a pasta DATA é onde ficam os arquivos de dados, que são usados para armazenar informações que serão usadas no projeto, como a lista de pessoas. Já a pasta TYPES é onde ficam os arquivos de definição de tipos, que são usados para definir as interfaces e tipos de dados usados no projeto. Os arquivos de dados geralmente exportam arrays ou objetos com informações, enquanto os arquivos de tipos exportam interfaces ou tipos que descrevem a estrutura dos dados usados no projeto.

import type { Pessoa } from "../legado/Person";

export const listaPessoas: Pessoa[] = [
    { id: 1, nome: "Willian", profissao: "Programador", sexo: "Masculino" },
    { id: 2, nome: "Cida", profissao: "Diarista", sexo: "Feminino" },
    { id: 3, nome: "Senna", profissao: "Piloto", sexo: "Masculino" },
    { id: 4, nome: "Antonio", profissao: "Médico", sexo: "Masculino" },
    { id: 5, nome: "Roberta", profissao: "Professora", sexo: "Feminino" },
    { id: 6, nome: "Adeilda", profissao: "Enfermeira", sexo: "Feminino" },
    { id: 7, nome: "Edson", profissao: "Protético", sexo: "Masculino" },
    { id: 8, nome: "Cicero", profissao: "Aposentado", sexo: "Masculino" },
    { id: 9, nome: "Amanda", profissao: "Protética", sexo: "Feminino" },
    { id: 10, nome: "Arthur", profissao: "Programador", sexo: "Masculino" },
    { id: 11, nome: "Alan", profissao: "Protético", sexo: "Masculino" }
  ];