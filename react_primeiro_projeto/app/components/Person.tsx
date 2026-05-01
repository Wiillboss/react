//sempre eu criar um componente, é necessário criar APENAS um ELEMENTO ex: DIV, SECTION, ARTICLE, etc... e dentro desse elemento, eu posso colocar quantos outros elementos eu quiser, como por exemplo: H1, P, etc... e esses elementos podem ser estilizados usando classes do Tailwind CSS ou qualquer outra biblioteca de estilização que você esteja usando.

//tag sem nomeada <>, ou seja, um componente que não tem um nome específico, e é exportado como padrão (default) do arquivo. Esse tipo de componente é útil quando você quer criar um componente simples e reutilizável, sem a necessidade de dar um nome específico para ele. Por exemplo:

//quando usando tag sem nomeada, toda TAG que for aberta dentro dela, precisa ser obrigaoriamente fechada, ou seja, não pode ser uma tag auto fechada, como por exemplo: <img />, <input />, etc... pois isso causaria um erro de sintaxe. Por exemplo:

//a tag img por natureza é uma tag auto fechada, ou seja, ela não tem um fechamento explícito, e isso causaria um erro de sintaxe se fosse usada dentro de uma tag sem nomeada. Para evitar esse erro, é necessário usar a tag img como uma tag normal, ou seja, com um fechamento explícito, como por exemplo: <img src="caminho/para/imagem.jpg" alt="Descrição da imagem"></img>.

const getWeekDay = (day: number): string => {
    const weekDays: string[] = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return weekDays[day];
}

type Prosp = {
    name: string;
    avatar: string;
    esposa: {
        nome: string;
        profissao: string;
        ocupacoes: string[];
    };
};

export const Person = (props: Prosp) => {

    const { name, avatar, esposa } = props;

    return (
        <>
            <h1>{name}</h1>
            <img src={avatar} alt={name} className="w-40" />
            <ul>
                <li>Nome: {esposa.nome}</li>
                <li>Profissão: {esposa.profissao}</li>
                <li>Ocupações:</li>
            </ul>
        </>

    )
}

export const Person2 = ({ name, avatar, esposa }: Prosp) => {

    return (
        <>
            <h1>{name}</h1>
            <img src={avatar} alt={name} className="w-40" />
            <ul>
                <li>Nome: {esposa.nome}</li>
                <li>Profissão: {esposa.profissao}</li>
                <li>Ocupações:</li>
            </ul>
        </>

    )
}

export const Person3 = (props: Prosp) => {
    const name: string = "Willian";
    const avatar: string = "/WhatsApp Image 2026-02-03 at 12.30.09.jpg";
 
    //criando um objeto para representar a esposa do personagem, com as propriedades nome e profissao, e usando esse objeto para exibir as informações da esposa na tela.
    const esposa = {
        nome: "Roberta",
        profissao: "Professora",
        ocupacoes: ['Dona de casa', 'Mãe', 'Esposa']
    };
    return (
        <>
            <h1 style={{ color: 'red', fontSize: '1.5rem' }}> Nome: {name} - {getWeekDay(new Date().getDay())} </h1>
            <p>Nome: João</p>
            <p>Idade: 30 anos</p>
            <p>Profissão: Desenvolvedor</p>
            <img src={avatar} alt="Descrição da imagem" className="w-60 h-60" />
            <p>Nome: {esposa.nome}</p>
            <p>Profissão: {esposa.profissao}</p>
            <p>Ocupações:</p>
            <ul className="font-bold">
                {esposa.ocupacoes.map((ocupacao, index) => (
                    <li key={index}>{ocupacao}</li>
                ))}
            </ul>
        </>
    );
}