console.log('rigger');

function getVals() {
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat(slides[0].value);
    var slide2 = parseFloat(slides[1].value);
    var firstOut = parent.querySelector('.first-range')
    firstOut.innerHTML = slide1;
    var secondOut = parent.querySelector('.second-range')
    secondOut.innerHTML = slide1;
    if (slide1 > slide2) { var tmp = slide2; slide2 = slide1; slide1 = tmp; }
}

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