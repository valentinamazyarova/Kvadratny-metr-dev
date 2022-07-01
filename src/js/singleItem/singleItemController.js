import SingleItem from "./singleItemModel.js";
import * as view from "./singleItemView.js"
export default async function (state) {

    state.singleItem = new SingleItem(state.routeParams);
    await state.singleItem.getItem();
    view.render(state.singleItem.result, state.favorites.isFav(state.singleItem.id));

    document.querySelector('.button-order').addEventListener('click', function(){
        view.showModal()
    })

    document.querySelector('.modal__close ').addEventListener('click', function(){
        view.hideModal()
    })

    document.querySelector('.modal-wrapper').addEventListener('click', function(e){
        if(!e.target.closest(".modal")){
            view.hideModal()
        }
    })

    document.querySelector('.modal__form').addEventListener('submit', async function(e){
        e.preventDefault();
        const dataFromModal = view.getInput()
        await state.singleItem.submitForm(dataFromModal);
        console.log(state.singleItem.response.message);
        if(state.singleItem.response.message === 'Bid Created'){
            alert('Ваша заявка принята!');
            view.hideModal();
            view.clearInput();
        } else if(state.singleItem.response.message === 'Bid Not Created'){
            state.singleItem.response.errors.forEach((error) => {
                alert(error)
            })
        }
    })

    document.querySelector('#addToFavs').addEventListener('click', function(){
        state.favorites.toggleFav(state.singleItem.id);
        view.toggleFav(state.favorites.isFav(state.singleItem.id))
    })
}