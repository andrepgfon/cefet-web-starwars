// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado


// pega o elemento que contém o texto com a intro do filme
let $introTextEl = $('.flow > pre');
let movies = document.querySelector('#movies');
let lista;
$.ajax({
    url: 'https://swapi.co/api/films/',
    method: 'GET',
    success: function(resposta) {
      console.log(resposta);
      lista = resposta.results;
      lista.sort((elem, nextelem) =>{
        if(elem.episode_id<nextelem.episode_id){
          return -1;
        }else if(elem.episode_id==nextelem.episode_id){
          return 0;
        }
        return 1;
      })

      let elementoLista = $('#movies ul');
      elementoLista.html('');
      for(filme of lista){
        let novoli = $(`<li data-episode_id="${filme.episode_id}" >${filme.episode_id}º Episódio</li>`);

        novoli.appendTo(elementoLista);
        novoli.on('click', function(e) {
          let episode_id=e.target.dataset.episode_id;
          let filme = lista.find(function(filme){
            return filme.episode_id == episode_id;
          });
          $('.reading-animation').html(filme.title + "\n\n" + filme.opening_crawl);
        });
      }
      let novoli = $(`<li style="color:#2d2d2d">Tragedy</li>`);
      novoli.appendTo(elementoLista);
      novoli.on('click', function(e) {
        $('.reading-animation').html("Did you ever hear the tragedy\nof Darth Plagueis The Wise? \nI thought not.\nIt’s not a story the Jedi would tell you. \nIt’s a Sith legend.\nDarth Plagueis was a Dark Lord of the Sith,\nso powerful and so wise\nhe could use the Force to\n influence the midichlorians to create life…\n He had such a knowledge\nof the dark side that he\ncould even keep the ones\nhe cared about from dying.\n The dark side of the Force is\na pathway to many abilities\nsome consider to be unnatural.\n He became so powerful… the only thing\n he was afraid of was losing his power,\nwhich eventually, of course, he did.\nUnfortunately, he taught his apprentice\neverything he knew, then his apprentice\nkilled him in his sleep.\nIronic.\nHe could save others from death...\n\n\n\n but not himself.");
      });

      elementoLista.append(elementoLista);
}});
