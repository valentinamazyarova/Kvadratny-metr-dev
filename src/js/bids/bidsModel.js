export default class Bids {
    constructor() {

    }

    async getBids(){
        try {
            const queryString = "https://jsproject.webcademy.ru/bids";
            const response = await fetch(queryString);
            if (response.ok) {
                const data = await response.json();
                this.bids = await data;
            }
        } catch (error) {
            alert('Error with getting Bits');
            console.log(error)
        }
    }
}