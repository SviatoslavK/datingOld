function getVals() {
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat(slides[0].value);
    var slide2 = parseFloat(slides[1].value);

    var myRange = slides[0];
    var myValue = document.querySelector('.first-range');
    var off = myRange.clientWidth / (parseInt(myRange.max) - parseInt(myRange.min));
    var px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.clientWidth / 2);
    myValue.style.left = px + 20 + 'px';
    myValue.innerHTML = myRange.value;

    var myRange2 = slides[1];
    var myValue2 = document.querySelector('.second-range');
    var off2 = myRange2.clientWidth / (parseInt(myRange2.max) - parseInt(myRange2.min));
    var px2 = ((myRange2.valueAsNumber - parseInt(myRange2.min)) * off2) - (myValue2.clientWidth / 2);
    myValue2.style.left = px2 + 20 + 'px';
    myValue2.innerHTML = myRange2.value;

    if (slide1 > slide2) { var tmp = slide2; slide2 = slide1; slide1 = tmp; }
}


function customPaginate(items) {
    var paginateContainer = document.querySelector('.gallery__block');
    var itemsToPaginate = paginateContainer.querySelectorAll('.gallery__card');
    var pageNumber = Math.ceil((itemsToPaginate.length) / items);
    var pageNumbersContainer = document.querySelector('.pagination__block');

    for (var i = 0; i < pageNumber; i++) {
        var page = document.createElement('div');
        page.classList.add('pagination__page');
        page.innerHTML = i + 1;
        pageNumbersContainer.appendChild(page);
    }

    Array.from(itemsToPaginate).filter(function (item, index) {
        return index > (items - 1)
    })
        .map(function (item) {
            item.style.display = 'none';
        })
    var paginationPages = Array.from(pageNumbersContainer.querySelectorAll('.pagination__page'))
    paginationPages.map(function (item) {
        item.addEventListener('click', function () {
            var number = parseInt(item.textContent);
            item.classList.add('active__page');
            var test = paginationPages.filter(function (page) {
                return page !== item
            }).map(function (page) {
                page.classList.remove('active__page')
            })

            Array.from(itemsToPaginate).map(function (item, index) {
                if ((index + 1) > ((number - 1) * items) && (index) < (number * items)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            })
        })
    })
}

window.onload = customPaginate(8)
window.onload = function () {
    var sliderSections = document.getElementsByClassName("range-slider");
    for (var x = 0; x < sliderSections.length; x++) {
        var sliders = sliderSections[x].getElementsByTagName("input");
        for (var y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                sliders[y].oninput = getVals;
                sliders[y].oninput();
            }
        }
    }
}

function clearInput(e) {
    var input = e.target.previousElementSibling
    input.value = ''
}


var toTopBtn = document.querySelector('#btn__to-top');

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
toTopBtn.addEventListener('click', topFunction)