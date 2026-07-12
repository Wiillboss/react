//sempre eu criar um componente, é necessário criar APENAS um ELEMENTO ex: DIV, SECTION, ARTICLE, etc... e dentro desse elemento, eu posso colocar quantos outros elementos eu quiser, como por exemplo: H1, P, etc... e esses elementos podem ser estilizados usando classes do Tailwind CSS ou qualquer outra biblioteca de estilização que você esteja usando.

//tag sem nomeada <>, ou seja, um componente que não tem um nome específico, e é exportado como padrão (default) do arquivo. Esse tipo de componente é útil quando você quer criar um componente simples e reutilizável, sem a necessidade de dar um nome específico para ele. Por exemplo:

//quando usando tag sem nomeada, toda TAG que for aberta dentro dela, precisa ser obrigaoriamente fechada, ou seja, não pode ser uma tag auto fechada, como por exemplo: <img />, <input />, etc... pois isso causaria um erro de sintaxe. Por exemplo:

//a tag img por natureza é uma tag auto fechada, ou seja, ela não tem um fechamento explícito, e isso causaria um erro de sintaxe se fosse usada dentro de uma tag sem nomeada. Para evitar esse erro, é necessário usar a tag img como uma tag normal, ou seja, com um fechamento explícito, como por exemplo: <img src="caminho/para/imagem.jpg" alt="Descrição da imagem"></img>.

// FUNÇÃO AUXILIAR: Converte número do dia da semana para nome em português
// Recebe: number (0-6, onde 0 é domingo)
// Retorna: string com o nome do dia da semana
const getWeekDay = (day: number): string => {
    const weekDays: string[] = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return weekDays[day];
}

//outra forma de fazr o getWeekDay:
//  const getWeekDay = () => {
//      return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date());
//  }

// TIPO DE DADOS: Define a estrutura de props para os componentes Pessoa
//Props são os dados que um componente recebe para renderizar informações dinâmicas. No caso do componente Pessoa, as props definem quais informações sobre a pessoa e sua esposa serão exibidas. O tipo PropsPessoa especifica que o componente espera receber um objeto com as seguintes propriedades:
// - nome: nome da pessoa (obrigatório)
// - avatar: caminho da imagem (opcional, com "?")
// - esposa: objeto contendo dados da esposa com nome, profissão e array de ocupações
type PropsPessoa = {
    nome: string;
    avatar?: string;
    esposa: {
        nome: string;
        profissao: string;
        ocupacoes: string[];
    };
};

import Image from 'next/image';

// COMPONENTE PESSOA: Exibe informações da pessoa e sua esposa
// Forma de recebimento de props: destructuring completo na função
// O destructuring permite extrair diretamente as propriedades do objeto de props, facilitando o acesso aos dados dentro do componente. No caso do componente Pessoa, as props são desestruturadas para obter nome, avatar e esposa, que são usados para renderizar as informações na interface.
export const Pessoa = (props: PropsPessoa) => {

    const { nome, avatar, esposa } = props;

    return (
        <>
            <h1>{nome}</h1>

            {avatar && (
                <Image src={avatar} alt={nome} width={160} height={160} className="w-40" style={{ height: 'auto' }} />
            )}

            <ul>
                <li>Nome: {esposa.nome}</li>
                <li>Profissão: {esposa.profissao}</li>
                <li>Ocupações:</li>
                {esposa.ocupacoes.map((ocupacao: string, index: number) => (
                    <li key={index}>{ocupacao}</li>
                ))}
            </ul>
        </>
    );
}

// COMPONENTE PERSON2: Versão melhorada do Person com avatar padrão
// Forma de recebimento de props: desestruturação direta com valor padrão
export const Pessoa2 = ({ 
    nome,
    // Avatar padrão: se não for fornecido, usa imagem genérica do pngtree
    avatar = 'https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-black-default-avatar-image_2237212.jpg',
    esposa 
}: PropsPessoa) => {

    return (
        <>
            {/* Nome da pessoa principal */}
            <h1>{nome}</h1>
            
            <Image src={avatar} alt={nome} width={160} height={160} className="w-40" style={{ height: 'auto' }} />
            
            {/* Lista de informações da esposa */}
            <ul>
                {/* Nome da esposa */}
                <li>Nome: {esposa.nome}</li>
                
                {/* Profissão da esposa */}
                <li>Profissão: {esposa.profissao}</li>
                
                {/* Título da seção de ocupações */}
                <li>Ocupações:</li>
                
                {/* Itera sobre o array de ocupações e renderiza cada uma em um <li> */}
                {esposa.ocupacoes.map((ocupacao: string, index: number) => (
                    <li key={index}>{ocupacao}</li>
                ))}
            </ul>
        </>

    )
}

// COMPONENTE PERSON3: Versão customizada com dados hardcoded e estilos inline
// Props são recebidas mas não são utilizadas (dados estão fixos no componente)
//explicando detalhadamente o componente Pessoa3:
// O componente Pessoa3 é uma versão customizada do componente Pessoa, onde os dados da pessoa e da esposa são hardcoded (fixos) dentro do componente. Ele recebe props opcionais, mas utiliza valores padrão caso não sejam fornecidos. O componente exibe o nome da pessoa, a data atual formatada com o dia da semana em português, informações sobre a esposa e suas ocupações. Além disso, ele utiliza o componente Image do Next.js para exibir o avatar da pessoa com estilos aplicados via Tailwind CSS. A função getWeekDay é usada para converter o número do dia da semana em seu nome correspondente em português.

export const Pessoa3 = (props?: PropsPessoa) => {
    const defaultEsposa = {
        nome: "Roberta",
        profissao: "Professora",
        ocupacoes: ['Dona de casa', 'Mãe', 'Esposa']
    };

    const { nome = "Willian", avatar = "/WhatsApp Image 2026-02-03 at 12.30.09.jpg", esposa = defaultEsposa } = props ?? {};

    return (
        <>
            <h1 style={{ color: 'red', fontSize: '1.5rem' }}> Nome: {nome} - {getWeekDay(new Date().getDay())} </h1>

            <p>Nome: João</p>
            <p>Idade: 30 anos</p>
            <p>Profissão: Desenvolvedor</p>

            <Image src={avatar} alt="Descrição da imagem" width={240} height={240} className="w-60 h-60" />

            <p>Nome: {esposa.nome}</p>
            <p>Profissão: {esposa.profissao}</p>
            <p>Ocupações:</p>

            <ul className="font-bold">
                {esposa.ocupacoes.map((ocupacao: string, index: number) => (
                    <li key={index}>{ocupacao}</li>
                ))}
            </ul>
        </>
    );
}