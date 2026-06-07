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

// COMPONENTE PESSOA: Exibe informações da pessoa e sua esposa
// Forma de recebimento de props: destructuring completo na função
export const Pessoa = (props: PropsPessoa) => {

    // Desestruturando as props para extrair nome, avatar e esposa
    const { nome, avatar, esposa } = props;

    return (
        <>
            {/* Nome da pessoa principal */}
            <h1>{nome}</h1>
            
            {/* Avatar/foto da pessoa */}
            <img src={avatar} alt={nome} className="w-40" />
            
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
            
            {/* Avatar/foto da pessoa (padrão se não fornecido) */}
            <img src={avatar} alt={nome} className="w-40" />
            
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
export const Pessoa3 = (props: PropsPessoa) => {
    // DADOS FIXOS PERSON3: Willian
    const name: string = "Willian";
    const avatar: string = "/WhatsApp Image 2026-02-03 at 12.30.09.jpg";
 
    // DADOS FIXOS ESPOSA: Roberta (nome, profissão e ocupações definidas no componente)
    const esposa = {
        nome: "Roberta",
        profissao: "Professora",
        ocupacoes: ['Dona de casa', 'Mãe', 'Esposa']
    };
    
    return (
        <>
            {/* Título com estilo inline - exibe nome e dia da semana atual em vermelho */}
            <h1 style={{ color: 'red', fontSize: '1.5rem' }}> Nome: {name} - {getWeekDay(new Date().getDay())} </h1>
            
            {/* Informações adicionais fixas sobre João (dados hardcoded) */}
            <p>Nome: João</p>
            <p>Idade: 30 anos</p>
            <p>Profissão: Desenvolvedor</p>
            
            {/* Avatar/foto da pessoa com dimensões maiores (w-60 h-60) */}
            <img src={avatar} alt="Descrição da imagem" className="w-60 h-60" />
            
            {/* Informações da esposa Roberta */}
            <p>Nome: {esposa.nome}</p>
            <p>Profissão: {esposa.profissao}</p>
            <p>Ocupações:</p>
            
            {/* Lista em negrito com as ocupações de Roberta */}
            <ul className="font-bold">
                {/* Itera sobre cada ocupação e renderiza em <li> */}
                {esposa.ocupacoes.map((ocupacao: string, index: number) => (
                    <li key={index}>{ocupacao}</li>
                ))}
            </ul>
        </>
    );
}