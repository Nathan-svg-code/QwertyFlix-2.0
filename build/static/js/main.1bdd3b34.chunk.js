(this.webpackJsonpqwertyflix=this.webpackJsonpqwertyflix||[]).push([[0],{24:function(t,n,e){t.exports=e.p+"static/media/Logo.1ba833ba.png"},29:function(t,n,e){t.exports=e(56)},34:function(t,n,e){},35:function(t,n,e){},56:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),o=e(23),i=e.n(o),l=(e(34),e(8)),u=e(3),c=e(24),d=e.n(c),s=(e(35),e(1)),m=e(2);function p(){var t=Object(s.a)(["\ncolor: var(--white);\n    border: 1px solid var(--white);\n    box-sizing: border-box;\n    cursor: pointer;\n    padding: 16px 24px;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 16px;\n    outline: none;\n    border-radius: 5px;\n    text-decoration: none;\n    display: inline-block;\n    transition: opacity .3s;\n  \n  &:hover,\n  &:focus {\n    opacity: .5;\n  }\n   "]);return p=function(){return t},t}var w=Object(m.a)(l.b)(p());var h=function(){return r.a.createElement("nav",{className:"Menu"},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{className:"Logo",src:d.a,alt:"AluraFlix logo"})),r.a.createElement(w,{as:l.b,className:"ButtonLink",to:"/cadastro/video"},"Novo v\xeddeo"))},g=e(9);function b(){var t=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n"]);return b=function(){return t},t}function v(){var t=Object(s.a)(["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%;\n  @media (max-width: 800px) {\n    display: none;\n  }\n"]);return v=function(){return t},t}var f=m.a.div(v()),x=m.a.iframe(b());var y=function(t){var n=t.youtubeID;return r.a.createElement(f,null,r.a.createElement(x,{title:"Titulo do Iframe",src:"https://www.youtube.com/embed/".concat(n,"?autoplay=0&mute=1"),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))};function E(){var t=Object(s.a)(["\n  font-family: 'Roboto', sans-serif;\n  box-sizing: border-box;\n  cursor: pointer;\n  padding: 16px 24px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  outline: none;\n  border-radius: 5px;\n  text-decoration: none;\n  display: inline-block;\n  border: 1px solid transparent;\n  color: var(--black);\n  background: var(--white);\n  border-color: var(--black);\n  transition: opacity .3s;\n  display: none;\n  margin: 0 auto;\n  @media (max-width: 800px) {\n    display: block;\n  }\n"]);return E=function(){return t},t}function k(){var t=Object(s.a)(["\n  height: 80vh;\n  position: relative;\n  color: #fff;\n  background-image: ",'; \n  background-size: cover;\n  background-position: center;\n  @media (max-width: 800px) {\n    height: auto;\n    min-height: 50vh;\n  }\n\n  &:after,\n  &:before {\n    content: "";\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 20%;\n  }\n\n  &:before {\n    top: 0;\n    height: 100%;\n    background: rgba(0,0,0,0.5);\n  }\n\n  &:after {\n    bottom: 0;\n    background: linear-gradient(0deg, #141414 0%, transparent 100%);\n  }\n']);return k=function(){return t},t}function O(){var t=Object(s.a)(["\n  font-style: normal;\n  font-weight: 300;\n  font-size: 40px;\n  line-height: 1;\n  margin-top: 0;\n  margin-bottom: 32px;\n\n  @media (max-width: 800px) {\n    font-size: 32px;\n    text-align: center;\n  }\n"]);return O=function(){return t},t}function j(){var t=Object(s.a)(["\n  @media (max-width: 800px) {\n    display: none;\n  }\n"]);return j=function(){return t},t}function F(){var t=Object(s.a)(["\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 60px;\n  line-height: 70px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  display: inline-block; \n  padding: 25px;\n  line-height: 1;\n  border-radius: 4px;\n\n  @media (max-width: 800px) {\n    display: none;\n    font-size: 18px;\n    padding: 10px;\n  }\n"]);return F=function(){return t},t}function C(){var t=Object(s.a)(["\n  width: 50%;\n  display: inline-block;\n  margin-bottom: 50px;\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"]);return C=function(){return t},t}function I(){var t=Object(s.a)(["\n  margin-left: 5%;\n  margin-right: 5%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 10;\n  @media (max-width: 800px) {\n    padding-top: 100px;\n    flex-direction: column;\n  }\n"]);return I=function(){return t},t}var z=m.a.section(I());z.Item=m.a.div(C()),z.Category=m.a.h1(F()),z.Description=m.a.p(j()),z.Title=m.a.h2(O());var A=m.a.section(k(),(function(t){var n=t.backgroundImage;return"url(".concat(n,")")})),D=m.a.button(E());function T(t){var n=t.videoTitle,e=t.videoDescription,a=t.url,o=a.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,"$7"),i="https://img.youtube.com/vi/".concat(o,"/maxresdefault.jpg");return r.a.createElement(A,{backgroundImage:i},r.a.createElement(z,null,r.a.createElement(z.Item,null,r.a.createElement(z.Title,null,n),r.a.createElement(z.Description,null,e)),r.a.createElement(z.Item,null,r.a.createElement(y,{youtubeID:o}),r.a.createElement(D,null,"Assistir"))))}function S(){var t=Object(s.a)(["\n  color: white;\n  min-height: 197px;\n  margin-left: 5%;\n  margin-bottom: 16px;\n"]);return S=function(){return t},t}function P(){var t=Object(s.a)(["\n  margin: 0;\n  padding-left: 0;\n  padding-bottom: 32px;\n  list-style: none;\n  display: flex;\n  overflow-x: auto;\n  flex-direction: row;\n  \n  li {\n    margin-right: 16px;\n  }\n"]);return P=function(){return t},t}function V(){var t=Object(s.a)(["\n  margin-left: 16px;\n  text-decoration: none;\n  transition: opacity .3s;\n  &:hover,\n  &:focus {\n    opacity: .5;\n  }\n  @media (max-width: 800px) {\n    display: block;\n    margin-bottom: 16px;\n    margin-left: 0;\n  }\n"]);return V=function(){return t},t}function G(){var t=Object(s.a)(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 35px;\n  line-height: 1;\n  margin-bottom: 16px;\n  display: inline-block;\n  padding: 20px;\n  background: red;\n  line-height: 1;\n  border-radius: 4px;\n\n  @media (max-width: 800px) {\n    font-size: 18px;\n    padding: 10px;\n  }\n"]);return G=function(){return t},t}var N=m.a.h3(G()),R=m.a.a(V()),B=(m.a.ul(P()),m.a.section(S()));function L(){var t=Object(s.a)(["\n  border: 2px solid;\n  border-radius: 4px;\n  text-decoration: none;\n  overflow: hidden;\n  cursor: pointer;\n  color: white;\n  flex: 0 0 298px;\n  width: 298px;\n  height: 197px;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  border-radius: 10px;\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  padding: 16px;\n\n  transition: opacity .3s;\n  &:hover,\n  &:focus {\n    opacity: .5;\n  }\n  \n  &:not(:first-child) {\n    margin-left: 20px;\n  }\n"]);return L=function(){return t},t}var _=m.a.a(L(),(function(t){var n=t.url;return"url(".concat(n,")")}));var q=function(t){var n=t.videoTitle,e=t.videoURL,a=t.categoryColor,o="https://img.youtube.com/vi/".concat(e.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,"$7"),"/hqdefault.jpg");return r.a.createElement(_,{url:o,href:e,target:"_blank",style:{borderColor:a||"red"},title:n})},U=e(28),Y=e.n(U);function M(){var t=Object(s.a)(["\n  margin-right: 16px;\n  img {\n    margin: 16px;\n    width: 298px;\n    height: 197px;\n    object-fit: cover;\n  }\n"]);return M=function(){return t},t}function H(){var t=Object(s.a)(["\n  padding: 0;\n  margin: 0;\n  .slick-prev,\n  .slick-next {\n    z-index: 50;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: 30px;\n    height: 30px;\n    transform: initial;\n    &:before {\n      font-size: 30px;\n    }\n  }\n  \n  .slick-prev {\n    left: 0;\n  }\n  .slick-next {\n    right: 16px;\n  }\n"]);return H=function(){return t},t}var J=m.a.ul(H()),K=m.a.li(M()),Q=function(t){var n=t.children;return r.a.createElement(J,null,r.a.createElement(Y.a,{dots:!1,infinite:!1,speed:300,centerMode:!1,variableWidth:!0,adaptiveHeight:!0},n))};var X=function(t){var n=t.ignoreFirstVideo,e=t.category,a=e.titulo,o=e.cor,i=e.link_extra,l=e.videos;return r.a.createElement(B,null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{style:{backgroundColor:o||"red"}},a),i&&r.a.createElement(R,{href:i.url,target:"_blank"},i.text)),r.a.createElement(Q,null,l.map((function(t,e){return n&&0===e?null:r.a.createElement(K,{key:t.titulo},r.a.createElement(q,{videoTitle:t.titulo,videoURL:t.url,categoryColor:o}))}))))};function W(){var t=Object(s.a)(["\n  background: var(--black);\n  border-top: 2px solid var(--primary);\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 32px;\n  padding-bottom: 32px;\n  color: var(--white);\n  text-align: center;\n  @media (max-width: 800px) {\n    margin-bottom: 50px;\n  }\n"]);return W=function(){return t},t}var Z=m.a.footer(W());var $=function(){return r.a.createElement(Z,null,r.a.createElement("a",{href:"https://www.alura.com.br/"},r.a.createElement("img",{src:"https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg",alt:"Logo Alura"})),r.a.createElement("p",null,"Orgulhosamente criado durante a"," ",r.a.createElement("a",{href:"https://www.alura.com.br/"},"Imers\xe3o React da Alura")))};var tt=function(){return r.a.createElement("div",{style:{background:"#141414"}},r.a.createElement(h,null),r.a.createElement(T,{videoTitle:g.categorias[0].videos[0].titulo,url:g.categorias[0].videos[0].url,videoDescription:"O que \xe9 Front-end? Trabalhando na area"}),r.a.createElement(X,{ignoreFirstVideo:!0,category:g.categorias[0]}),r.a.createElement(X,{ignoreFirstVideo:!0,category:g.categorias[1]}),r.a.createElement(X,{ignoreFirstVideo:!0,category:g.categorias[2]}),r.a.createElement(X,{ignoreFirstVideo:!0,category:g.categorias[3]}),r.a.createElement(X,{ignoreFirstVideo:!0,category:g.categorias[4]}),r.a.createElement(X,{ignoreFirstVideo:!0,category:g.categorias[5]}),r.a.createElement($,null))};function nt(){var t=Object(s.a)(["\n  background-color: var(--black);\n  color: var(--white);\n  flex: 1;\n  padding-top: 50px;\n  padding-left: 5%;\n  padding-right: 5%;\n"]);return nt=function(){return t},t}var et=m.a.main(nt());var at=function(t){var n=t.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(et,null,n),r.a.createElement($,null))};var rt=function(){return r.a.createElement(at,null,r.a.createElement("h1",null,"Cadastro de Video"),r.a.createElement(l.b,{to:"/cadastro/categoria"},"Cadastrar Categoria"))};var ot=function(){return r.a.createElement(at,null,r.a.createElement("h1",null,"Cadastro de Categoria"),r.a.createElement("form",null,r.a.createElement("label",null,"Nome da Categoria:",r.a.createElement("input",{type:"text"})),r.a.createElement("button",null,"Cadastrar")),r.a.createElement(l.b,{to:"/"},"Ir para home"))};i.a.render(r.a.createElement(l.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:tt,exact:!0}),r.a.createElement(u.a,{path:"/cadastro/video",component:rt}),r.a.createElement(u.a,{path:"/cadastro/categoria",component:ot}),r.a.createElement(u.a,{component:function(){return r.a.createElement("div",null,"P\xe1gina 404")}}))),document.getElementById("root"))},9:function(t){t.exports=JSON.parse('{"categorias":[{"titulo":"Front End","link":"https://www.alura.com.br/formacao-front-end","cor":"#6BD1FF","link_extra":{"text":"Forma\xe7\xe3o de Front End na Alura","url":"https://www.alura.com.br/cursos-online-front-end"},"videos":[{"titulo":"O que faz uma desenvolvedora front-end? #HipstersPontoTube","url":"https://www.youtube.com/watch?v=ZY3-MFxVdEw"},{"titulo":"SEO com React","url":"https://www.youtube.com/watch?v=c8mVlakBESE"},{"titulo":"Componentiza\xe7\xe3o com VanillaJS #AluraMais","url":"https://www.youtube.com/watch?v=LatCKpcOMak"},{"titulo":"Pare de chutar e aprenda a display: inline #01","url":"https://www.youtube.com/watch?v=5PS6ku8NzIE"},{"titulo":"Template String: Interpolando strings com JavaScript #AluraMais","url":"https://www.youtube.com/watch?v=ORI_HTXaIw0"},{"titulo":"Qual \xe9 a melhor linguagem de programa\xe7\xe3o? #HipstersPontoTube","url":"https://www.youtube.com/watch?v=Uh-GNH-t89w"},{"titulo":"Novidades do Angular v9","url":"https://www.youtube.com/watch?v=34uHo7hFmG0"},{"titulo":"Base para aprender os frameworks","url":"https://www.youtube.com/watch?v=QzDjdlF1BQI"}]},{"titulo":"Back End","cor":"#00C86F","link_extra":{"text":"Cursos de Back End na Alura","url":"https://www.alura.com.br/cursos-online-programacao"},"videos":[{"titulo":"PERCURSO em N\xcdVEL em \xc1RVORE BIN\xc1RIA | Estruturas de Dados #14","url":"https://www.youtube.com/watch?v=UOK7nS2E9xM"},{"titulo":"Coders4Tips - S01E04: GitHub CLI - Uma Nova Experi\xeancia no Github!","url":"https://www.youtube.com/watch?v=6o6-bKOZOEY"},{"titulo":"Programei 4 rob\xf4s que criam v\xeddeos para mim no YouTube","url":"https://www.youtube.com/watch?v=kjhu1LEmRpY"},{"titulo":"API: Dicion\xe1rio do Programador","url":"https://www.youtube.com/watch?v=vGuqKIRWosk"},{"titulo":"Usando Git Direito","url":"https://www.youtube.com/watch?v=6OokP-NE49k"}]},{"titulo":"Data Science e Intelig\xeancia Artificial","cor":"#9cd33b","link_extra":{"text":"Cursos de Data Science na Alura","url":"https://www.alura.com.br/formacao-data-science"},"videos":[{"titulo":"Teste de Turing","url":"https://www.youtube.com/watch?v=BaPGU4JWa34"},{"titulo":"O que \xe9 Data Science?","url":"https://www.youtube.com/watch?v=5b9Z8toVaAU&t=9s"},{"titulo":"Melhor forma de aprender Python","url":"https://www.youtube.com/watch?v=Gojqw9BQ5qY"},{"titulo":"Como ingressar no mercado de Data Science?","url":"https://www.youtube.com/watch?v=gxyjGmOV540"}]},{"titulo":"Filmes","cor":"orange","videos":[{"titulo":"Interestellar","url":"https://www.youtube.com/watch?v=frD_IiY_A3E"},{"titulo":"Gattaca","url":"https://www.youtube.com/watch?v=Dl0tYLbrhhs"},{"titulo":"A Chegada","url":"https://www.youtube.com/watch?v=rNciXGzYZms"},{"titulo":"Feiti\xe7o do Tempo","url":"https://www.youtube.com/watch?v=zi8d69P9NvI"}]},{"titulo":"Games","cor":"red","link_extra":{"text":"Forma\xe7\xe3o de Jogos na Alura","url":"https://www.alura.com.br/formacao-jogos-unity"},"videos":[{"titulo":"Final Fantasy 7","url":"https://www.youtube.com/watch?v=I_ATSCTnUD8"},{"titulo":"Assassins Creed Valhalla","url":"https://www.youtube.com/watch?v=KDfdjB9uL0U"},{"titulo":"God of War 4","url":"https://www.youtube.com/watch?v=FyIwEFXOcaE"},{"titulo":"Resident Evil 8","url":"https://www.youtube.com/watch?v=JSapXD9vxYA"},{"titulo":"Pok\xe9mon Let\'s Go Pikachu/Eevee","url":"https://www.youtube.com/watch?v=L56q_k2ydrs"}]},{"titulo":"Aprendendo a aprender tecnologia","cor":"#6b5be2","link_extra":{"text":"Curso sobre aprendizado na Alura","url":"https://alura.com.br/curso-online-aprender-a-aprender-tecnicas-para-seu-autodesenvolvimento"},"videos":[{"titulo":"Como estudar melhor?","url":"https://www.youtube.com/watch?v=Is6c9KSGCbk&feature=youtu.be"},{"titulo":"Faculdade","url":"https://www.youtube.com/watch?v=jw06H8esyzQ&feature=youtu.be"},{"titulo":"Frameworks","url":"https://www.youtube.com/watch?v=QzDjdlF1BQI"},{"titulo":"A m\xe1gica do Aprendizado","url":"https://www.youtube.com/watch?v=oTEXzpfEpPY"},{"titulo":"Como aprender a programar?","url":"https://www.youtube.com/watch?v=MwCx2qKdbDw&feature=youtu.be"}]}]}')}},[[29,1,2]]]);
//# sourceMappingURL=main.1bdd3b34.chunk.js.map