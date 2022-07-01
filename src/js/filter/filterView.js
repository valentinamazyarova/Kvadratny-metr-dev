const elements = {
    filterSelect: document.getElementsByClassName('filter__dropdown'),
    rooms: document.getElementsByClassName('rooms__checkbox'),
    inputs: document.getElementsByClassName('range__input'),
    filterSabmit: document.getElementsByClassName('filter__show')

}

export function render(params) {

    let complexValue = '';
    params.complexNames.forEach((name) => {
        complexValue += `<option value="${name}">ЖК ${name}</option>`
    })

    let rooms = '';
    params.roomValues.forEach((room) => {
        rooms += `<input
                    name = "rooms"
                    type = "checkbox"
                    id = "rooms_${room}"
                    class="rooms__checkbox"
                    value = "${room}"
                    /> <label for="rooms_${room}" class="rooms__btn">${room}</label>`
    })

    let markup = `<!-- Filter -->
    <form id="filter-form" method="GET" class="container p-0" >
        <div class="heading-1">Выбор квартир:</div>
        <div class="filter">
            <div class="filter__col">
                <div class="filter__label">Выбор проекта:</div>
                <select name="complex" id="" class="filter__dropdown">
                    <option value="all">Все проекты</option>
                    ${complexValue}
                </select>
            </div>
            <div class="filter__col rooms">
                <div class="filter__label">Комнат:</div>
                <div class="rooms__wrapper">
                    ${rooms}
                </div>
            </div>
            <div class="filter__col">
                <div class="filter__label">Площадь:</div>
                <div class="range__wrapper">
                    <label class="range">
                        <div for="" class="range__label">от</div>
                        <input
                            name="sqmin"
                            min="0"
                            type="number"
                            class="range__input"
                            placeholder="${params.squareMin}"
                            value = "${params.squareMin}"
                        />
                        <div class="range__value">м2</div>
                    </label>
                    <label class="range">
                        <div for="" class="range__label">до</div>
                        <input
                            name="sqmax"
                            min="0"
                            type="number"
                            class="range__input"
                            placeholder="${params.squareMax}"
                            value = "${params.squareMax}"
                        />
                        <div class="range__value">м2</div>
                    </label>
                </div>
            </div>
            <div class="filter__col">
                <div class="filter__label">Стоимость:</div>
                <div class="range__wrapper">
                    <div class="range">
                        <label for="" class="range__label">от</label>
                        <input
                            type="number"
                            name="pricemin"
                            min="0"
                            class="range__input range__input--price"
                            placeholder="${params.priceMin}"
                            value = "${params.priceMin}"
                        />
                        <div class="range__value">₽</div>
                    </div>
                    <div class="range">
                        <label for="" class="range__label">до</label>
                        <input
                            type="number"
                            name="pricemax"
                            min="0"
                            class="range__input range__input--price"
                            placeholder="${params.priceMax}"
                            value = "${params.priceMax}"
                        />
                        <div class="range__value">₽</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="filter__buttons">
            <button class="filter__show">Показать  объектов</button>
            <button type="reset" class="filter__reset">Сбросить фильтр</button>
        </div>
    </form>
                  <!-- // Filter -->`

    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);

}

export function changeBtnText(num){
    let massage;
    let btn =  elements.filterSabmit[0];
    
    num.length === 0 ? massage = 'Объекты не найдены' : massage = `Показать ${num.length} объектов`;

    elements.filterSabmit[0].innerText = massage;

    num.length === 0 ? btn.disabled = true : btn.disabled = false;

}

export function getInput(){
    const searchParams = new URLSearchParams();
    

    if(elements.filterSelect[0].value !== "all"){
        searchParams.append(elements.filterSelect[0].name, elements.filterSelect[0].value)
        
    }

    const roomsValues = [];
    Array.from(elements.rooms).forEach((room) =>{
        if(room.value !== ''  && room.checked) {
            roomsValues.push(room.value)
        }
    });

    const roomValuesString = roomsValues.join(',');

    if(roomValuesString){
        searchParams.append('rooms', roomValuesString)
    }
    
    
    Array.from(elements.inputs).forEach((input) => {
        if(input.value){
            searchParams.append(input.name, input.value)
        }
    })

    const queryString = searchParams.toString()
    if(queryString){
        return '?' + queryString;
    } else {
        return '';
    }
    
}