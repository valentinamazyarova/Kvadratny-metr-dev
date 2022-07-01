export default class Favorites {
    constructor(){
        this.favs = [];
        this.readLocalStorage()
    }

    addToFavs(id){
        this.favs.push(id);
        this.saveData();
    }

    removeFavs(id){
        const index = this.favs.indexOf(id);
        this.favs.splice(index, 1);
        this.saveData();
    }

    isFav(id){
        return this.favs.indexOf(id) !== -1 ? true : false;
    }

    toggleFav(id){
        this.isFav(id) ? this.removeFavs(id) : this.addToFavs(id);
    }

    saveData(){
        localStorage.setItem('dataFavs', JSON.stringify(this.favs) );
    }

    readLocalStorage(){
        const dataFavs = JSON.parse(localStorage.getItem('dataFavs')) ;
        if(dataFavs) this.favs = dataFavs;
    }
}