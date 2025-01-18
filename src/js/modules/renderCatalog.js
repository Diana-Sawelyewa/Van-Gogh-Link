function renderCatalog() {

    const number = '3';

    fetch('../../catalog.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        renderData(data)
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    })
    


    function showNumber(number) {
        const basket = document.querySelector('.circle');
        basket.innerHTML = '';
        basket.innerHTML = `${number}`;
    }

    showNumber(number);
    
    
    
    function renderData(data) {
        const container = document.querySelector('.grid');
        container.innerHTML = '';
        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('grid__item');
            if (item.sale) {
                div.innerHTML = `<div class="pic" style="background: url(public/img/${item.pic}) center center / cover no-repeat;"><a class="promotion white-font flex button-black">Акция</a><a class="details flex button-orange">Подробнее</a></div><div class="text"><div class="name">${item.name}</div><div class="price"><div class="main-price orange-font">${item.price1} ₽</div><div class="last-price">${item.price2}  ₽</div></div></div>`;
            } else {
                div.innerHTML = `<div class="pic" style="background: url(public/img/${item.pic}) center center / cover no-repeat;"><a class="details flex button-orange">Подробнее</a></div><div class="text"><div class="name">${item.name}</div><div class="price"><div class="main-price">${item.price1} ₽</div></div></div>`;
            }
            container.appendChild(div);
        });
    }
    
}

export default renderCatalog;