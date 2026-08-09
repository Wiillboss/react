/**
 * Arquivo: app/components/Pessoa.tsx
 * Nome: Pessoa.tsx
 * Tipo: Componente React para exibição de dados pessoais
 * Finalidade: este componente mostra uma pessoa, sua imagem opcional e os dados da sua esposa, com foco em props, renderização e organização de informações em lista.
 * Como funciona: o componente recebe um objeto com nome, avatar e dados da esposa e usa essa estrutura para renderizar textos e itens em sequência.
 * Quando usar: use este componente como exemplo de como criar blocos reutilizáveis para exibir informações de perfil com um layout simples e acessível.
 *
 * Observação didática:
 * - este arquivo mostra o uso de props, valores opcionais, imagem e listas em um mesmo componente;
 * - a explicação fica no topo para ajudar a leitura sem misturar com o JSX principal;
 * - os componentes de apoio continuam sem comentários internos, preservando clareza e foco no código.
 */
const getWeekDay = (day: number): string => {
    const weekDays: string[] = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return weekDays[day];
}

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

export const Pessoa2 = ({ 
    nome,
    
    avatar = 'https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-black-default-avatar-image_2237212.jpg',
    esposa 
}: PropsPessoa) => {

    return (
        <>
            {}
            <h1>{nome}</h1>
            
            <Image src={avatar} alt={nome} width={160} height={160} className="w-40" style={{ height: 'auto' }} />
            
            {}
            <ul>
                {}
                <li>Nome: {esposa.nome}</li>
                
                {}
                <li>Profissão: {esposa.profissao}</li>
                
                {}
                <li>Ocupações:</li>
                
                {}
                {esposa.ocupacoes.map((ocupacao: string, index: number) => (
                    <li key={index}>{ocupacao}</li>
                ))}
            </ul>
        </>

    )
}

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


