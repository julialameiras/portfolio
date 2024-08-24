const sobre = document.querySelector("#about");

const formulario = document.querySelector("#formulario");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

async function getApiGithub(){

    try{

        const dadosPerfil = await fetch(`https://api.github.com/users/julialameiras`);
        const perfil = await dadosPerfil.json();
        
        let conteudo = `

                    <!-- Foto do Perfil do Github -->
            <img src="${perfil.avatar_url}" alt="Foto do Perfil - ${perfil.name}" width="450px">

            <!-- Texto Sobre você -->
            <article id="sobre_texto" >

                <h1>Sobre mim</h1>

                <p>
                    Sou Júlia Lameiras, carioca, curiosa e experimentalista. 
                    Venho da antropologia e das artes (moda, cinema, teatro, música e pintura) e procuro incorporar meu conhecimento criativo
                    às minhas criações WEB. Atualmente sou desenvolvedora web fullstack e utilizo Javascript, Typescript, Nodejs, Nest.js, 
                    HTML, CSS e React em meus projetos.
                </p>

                <!-- Informações do Github -->
                <div id="sobre_github" class="flex sobre_github">

                    <a class="botao" target="_blank" href="${perfil.html_url}">Github</a>
                    <p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositórios</p>

                </div>

            </article>
        `
        sobre.innerHTML = conteudo;

    }catch(error){
        console.log(error);
    }
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const campoEmail = document.querySelector("#email")
    const txtEmail = document.querySelector("#txtEmail")

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um E-mail válido!";
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML = '';
    }

    formulario.submit();
})

getApiGithub();
