import homePage from './pages/homePages';
import singleItem from './pages/singleItemPages';
import favoritePage from './pages/favoritesPages';
import errorPage from './pages/errorPages';
import bidsPage from './pages/bidsPages';
import EventEmitter from './utils/EventEmitter';
import Favorites from './favorites/favoritesModel';


const state = {
    results: [],
    emitter: new EventEmitter(),
    favorites: new Favorites()
};

// Только для тестирования - потом удалить
window.state = state

//Router
const routes = [
    { path: '/', component: homePage },
    { path: 'item', component: singleItem },
    { path: 'favourites', component: favoritePage },
    { path: 'bids', component: bidsPage }
];

// Поиск компонента в Маршрутах на основании запроса
function findComponentByPath(path, routes){
    return routes.find(function(route){
        return route.path === path;
    });
}

// Функция Роутер
function router () {
    // Split path to array
    const pathArray = location.hash.split('/');

    // Set current path
    let currentPath = pathArray[0] === '' ? '/' : pathArray[1];
    currentPath = currentPath === '' ? '/' : currentPath; // item // bids

    state.routeParams = pathArray[2] ? pathArray[2] : ''

    // Выбираем компонент для указанного адреса, либо компонент с ошибкой
    const { component = errorPage } = findComponentByPath(currentPath, routes) || {};

    // Отображение компонента на старнице 
    component(state);

}

// Прослушка событий и запуск роутера
window.addEventListener('load', router);
window.addEventListener('hashchange', router);