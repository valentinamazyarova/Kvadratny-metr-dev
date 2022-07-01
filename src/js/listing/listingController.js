import * as view from './listingView'
export default function(state){
    view.render()


    state.results.forEach((card) => {
         view.renderCard(card, state.favorites.isFav(card.id))
    })

    addToFavListener()

    state.emitter.subscribe('event:render-listing', () => {
        view.clearListingContainer();
        state.results.forEach((card) => {
            view.renderCard(card, state.favorites.isFav(card.id))
       })

       addToFavListener()
    })

    function addToFavListener(){
        Array.from(document.getElementsByClassName('card__like')).forEach((item) => {
            item.addEventListener('click', function(e){
                e.preventDefault();
                console.log(e.target)
                const currentId = e.target.closest(".card").id;
                state.favorites.toggleFav(currentId);
                view.toggleFav(e.target, state.favorites.isFav(currentId));
            })
        })
    }

}

