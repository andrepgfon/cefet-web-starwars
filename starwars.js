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
        //let novoli = elementoLista.append(`<li>${filme.episode_id}º Episódio</li>`);
        novoli.appendTo(elementoLista);
        novoli.on('click', function(e) {
          let episode_id=e.target.dataset.episode_id;
          let filme = lista.find(function(filme){
            return filme.episode_id == episode_id;
          });
          $('.reading-animation').html("Episódio de Número " + filme.episode_id + ", Cronologicamente\n" + filme.opening_crawl);
        });
      }
      elementoLista.append(elementoLista);
}});
