//Lista de jogos com nome e imagem local
const jogos = [
    { nome: "Bloodborne", imagem: "./img/Bloodborne.jpg" },
    { nome: "Dark Souls 3", imagem: "./img/dark-souls-3.jpg" },
    { nome: "Sekiro", imagem: "./img/Sekiro.jpg" },
    { nome: "Elden Ring", imagem: "./img/Elden-Ring.jpg" },
    { nome: "devil may cry 5", imagem: "./img/devil-may-cry-5.jpg" },
    { nome: "Hollow Knight", imagem: "./img/Hollow-Knight.jpg" },
];

//Começa todos os votos zerados
const votos = new Array(jogos.length).fill(0);