/**
 * Arquivo: app/cadastro/page.tsx
 * Nome: page.tsx
 * Tipo: Página da aplicação
 * Finalidade: Esta página reúne exemplos visuais e componentes para demonstrar conceitos de React e organização da interface.
 * Como ler: Leia cada seção em ordem para entender como os componentes, as props e os dados se relacionam na tela.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */



"use client";
import { Tela_Login, Tela_Novo_usuário } from "../components/Cadastro";
import { Formulario_Pessoa_Cadastro } from "../components/FormPessoaCadastro";

//Dicas: nunca tenha dois botóes de submit no mesmo formulário, pois o navegador não sabe qual botão foi clicado. Use um botão de submit e outro de reset ou apenas um botão de submit.

//sempre deixar um componente com letra maiuscula no incio

const Page = () => {

    return (
        <div>
            <Tela_Login/>
            <Tela_Novo_usuário/>
            <Formulario_Pessoa_Cadastro/>
        </div>    
    );
}

export default Page;


