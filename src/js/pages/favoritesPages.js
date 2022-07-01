import favoritesCard from "../favoritesCard/favoritesCardController"
export default function (state) {
    document.querySelector('#app').innerHTML = ''
    favoritesCard(state)
}