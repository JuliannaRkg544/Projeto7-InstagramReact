
let usuarios = [
    { nome: 'bad.vibes.memes', img: "assets/img/bad.vibes.memes.svg" },
    { nome: 'chibirdart', img: "assets/img/chibirdart.svg" },
    { nome: 'razoesparaacreditar', img: "assets/img/razoesparaacreditar.svg" },
    { nome: 'adorable_animals', img: "assets/img/adorable_animals.svg" },
    { nome: 'smallcutecats', img: "assets/img/smallcutecats.svg" }
];

export default function Sidebar() {
    return (

        <div class="sidebar">

            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <Sugestao />


            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Sugestao() {
    return (
        usuarios.map((elemento) => {
            return (
                <div class="sugestao">
                    <div class="usuario">
                        <img src={elemento.img} />
                        <div class="texto">
                            <div class="nome">{elemento.nome}</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>
            )
        })
    )
}