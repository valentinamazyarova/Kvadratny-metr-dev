export default class FavoritesCards {
    constructor(favoritesId){
        this.favoritesId = favoritesId;
    }

    async getFavs(){
        const ids = this.favoritesId.toString();
        try {
            const queryString = `https://jsproject.webcademy.ru/items?ids=${ids}`;
            const response = await fetch(queryString);
            if (response.ok) {
                const data = await response.json();
                this.cards = await data;
            }
        } catch (error) {
            alert(error)
        }
    }
}