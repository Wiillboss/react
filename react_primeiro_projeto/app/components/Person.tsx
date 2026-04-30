//sempre eu criar um componente, é necessário criar APENAS um ELEMENTO ex: DIV, SECTION, ARTICLE, etc... e dentro desse elemento, eu posso colocar quantos outros elementos eu quiser, como por exemplo: H1, P, etc... e esses elementos podem ser estilizados usando classes do Tailwind CSS ou qualquer outra biblioteca de estilização que você esteja usando.

//tag sem nomeada <>, ou seja, um componente que não tem um nome específico, e é exportado como padrão (default) do arquivo. Esse tipo de componente é útil quando você quer criar um componente simples e reutilizável, sem a necessidade de dar um nome específico para ele. Por exemplo:

//quando usando tag sem nomeada, toda TAG que for aberta dentro dela, precisa ser obrigaoriamente fechada, ou seja, não pode ser uma tag auto fechada, como por exemplo: <img />, <input />, etc... pois isso causaria um erro de sintaxe. Por exemplo:

//a tag img por natureza é uma tag auto fechada, ou seja, ela não tem um fechamento explícito, e isso causaria um erro de sintaxe se fosse usada dentro de uma tag sem nomeada. Para evitar esse erro, é necessário usar a tag img como uma tag normal, ou seja, com um fechamento explícito, como por exemplo: <img src="caminho/para/imagem.jpg" alt="Descrição da imagem"></img>.

export const Person = () => {
    const name: string = "Willian";
    const avatar: string = "/WhatsApp Image 2026-02-03 at 12.30.09.jpg";
    
    return (
        <>
            <h1>Nome: {name}</h1>
            <p>Nome: João</p>
            <p>Idade: 30 anos</p>
            <p>Profissão: Desenvolvedor</p>
            <img src={avatar} alt="Descrição da imagem" className="w-60 h-60"/>

            <ul className="font-bold">
                <li>Palmeiras</li>
                <li>Real Madri</li>
                <li>Roma</li>
            </ul>
        </>
    );
}