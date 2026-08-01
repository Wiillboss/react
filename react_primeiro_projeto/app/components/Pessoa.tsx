// Helper usado para converter o número do dia da semana em texto em português.
const getWeekDay = (day: number): string => {
    const weekDays: string[] = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return weekDays[day];
}

//outra forma de fazr o getWeekDay:
//  const getWeekDay = () => {
//      return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date());
//  }

// Tipo de props do componente Pessoa.
// Ele recebe nome, avatar opcional e os dados da esposa.
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

// Componente Pessoa:
// Renderiza o nome, a imagem opcional e os dados da esposa usando props.
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

// Componente Pessoa2:
// Versão com avatar padrão quando o valor não é informado.
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

// Componente Pessoa3:
// Exibe dados fixos com fallback de props e usa o helper do dia da semana.
export const Pessoa3 = (props?: PropsPessoa) => {
    const defaultEsposa = {
        nome: "Roberta",
        profissao: "Professora",
        ocupacoes: ['Dona de casa', 'Mãe', 'Esposa']
    };

    const { nome = "Willian",
             avatar = "/assets/images/WhatsApp Image 2026-02-03 at 12.30.09.jpg",
              esposa = defaultEsposa } = props ?? {};

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