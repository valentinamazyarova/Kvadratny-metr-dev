import Bids from './bidsModel';
import * as view from './bidsView'

export default async function bids(state) {
    console.log('bidsController');
    view.renderContainer();
    state.bids = new Bids();
    await state.bids.getBids();
    console.log(state.bids.bids);
    state.bids.bids.forEach((bid) => {
        view.renderBids(bid)
    })
}