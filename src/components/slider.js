
const slider = (sliderBoxes) => {
    const slider = document.querySelectorAll(`.${sliderBoxes}`);
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.forEach(s => {
        s.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - s.offsetLeft;
            scrollLeft = s.scrollLeft;
        });

        s.addEventListener('mouseleave', (e) => {
            isDown = false;
        })

        s.addEventListener('mouseup', (e) => {
            isDown = false;
        })

        s.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();

            const x = e.pageX - s.offsetLeft;
            const walk = (x - startX);
            s.scrollLeft = scrollLeft - walk;
        })
    });
}

module.exports = slider;