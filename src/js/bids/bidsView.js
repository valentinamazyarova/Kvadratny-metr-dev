export function renderContainer(){
    const markup = `
                    <div class="container p-0 mb-5">
                        <div class="heading-1">Заявки</div>
                    </div>

                    <!-- panels-wrapper -->
                    <div class="panels-wrapper">
                        <div class="container p-0" id="bidsContainer"> 

                        </div>
                    </div>
    `

    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup)
}

export function renderBids(object){
    const bidsContainer = document.querySelector('#bidsContainer');
    const markup = `
                    <div class="panel panel--no-hover">
                        <div class="panel__bidId">${object.id}</div>
                        <div class="panel__bidname">${object.name}</div>
                        <div class="panel__bidphone">${object.phone}</div>
                    </div>
    `
    bidsContainer.insertAdjacentHTML('beforeend', markup)
}