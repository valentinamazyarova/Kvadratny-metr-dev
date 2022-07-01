import FavoritesCards from "./favoritesCardModel";
import * as view from "./favoritesCardView"
export default async function (state){
    const favoritesCards = new FavoritesCards(state.favorites.favs);
    await favoritesCards.getFavs();
    view.renderPaqe(favoritesCards.cards);
    addToFavListener();

    function addToFavListener(){
        Array.from(document.getElementsByClassName('card__like')).forEach((item) => {
            item.addEventListener('click', function(e){
                e.preventDefault(); 
                const currentId = e.target.closest(".card").id;
                state.favorites.toggleFav(currentId);
                view.toggleFav(e.target, state.favorites.isFav(currentId));
            })
        })
    }
    
}