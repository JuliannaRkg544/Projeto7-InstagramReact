import { useState } from "react";

const stories = [
    { img: "assets/img/9gag.svg", user: "9gag" },
    { img: "assets/img/meowed.svg", user: " meowed" },
    { img: "assets/img/barked.svg", user: " barked" },
    { img: "assets/img/nathanwpylestrangeplanet.svg", user: " nathanwpylestrangeplanet" },
    { img: "assets/img/wawawicomics.svg", user: " wawawicomics" },
    { img: "assets/img/respondeai.svg", user: " respondeai" },
    { img: "assets/img/filomoderna.svg", user: "  filomoderna" },
    { img: "assets/img/memeriagourmet.svg", user: " memeriagourmet" }
];



const posts = [
    { nome: 'meowed', img: 'assets/img/gato-telefone.svg', curtido: 'respondeai', curtidas: '101.523' },
    { nome: 'barked', img: 'assets/img/dog.svg', curtido: 'adorable_animals', curtidas: '99.159' }
];

export default function Esquerda() {
 
    return (
        <div class="esquerda">
            <Story />
             <Posts/>
         
        </div>

    )
}

function Posts() {
    return (
        <div class="posts">
          {posts.map(posts => <Post nome={posts.nome} img={posts.img} curtido={posts.curtido} cartidas={posts.curtidas} />)}
        </div>
      )
}
  
function Post(props){
    let [like,setLike]= useState(false)
    return(
        <div class="post">
        <div class="topo">
            <div class="usuario">
                <img src= {`assets/img/${props.nome}.svg`}/>
                
                {props.nome}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo" onClick={(()=>{ setLike(true) })}>
            <img src={props.img}/>
        </div>

        <div class="fundo">
            <div class="acoes">
                <div >
                    <ion-icon name="heart" onClick={(()=>{setLike(!like)})} style = { like? iconColor : iconNoColor}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src= {`assets/img/${props.curtido}.svg`} />
                <div class="texto">
                    Curtido por <strong>{props.curtido}</strong> e <strong>{props.curtidas}</strong>
                </div>
            </div>
        </div>
    </div>

    )

}


function Story() {
    return (

        <div class="stories">
            {
                stories.map((elemento) => {
                    return (
                        <div class="story">
                            <div class="imagem">
                                <img src={elemento.img} />
                            </div>
                            <div class="usuario">
                                {elemento.user}
                            </div>
                        </div>
                    )
                })
            }
            <Setinha />
        </div>

    )
}

function Setinha() {
    return (
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    )
}


const iconColor = {
    color: 'red'
  };

  const iconNoColor = {
    color: 'black'
  };
