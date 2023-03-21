export default function indexSlider() {
    let currentSlideIndex = 1;

    window.addEventListener('wheel', (e) => {
        e.preventDefault();

        if (e.deltaY > 0) {
            if (currentSlideIndex < 3) {
                currentSlideIndex++;
                window.scrollTo({
                    top: document.documentElement.clientHeight * (currentSlideIndex - 1),
                    left: 0,
                    behavior: "smooth",
                })
            }
        }
        else {
            if (currentSlideIndex > 0) {
                currentSlideIndex--;
                
                window.scrollTo({
                    top: document.documentElement.clientHeight * (currentSlideIndex - 1),
                    left: 0,
                    behavior: "smooth",
                })
            }
        }
    },{passive:false})
}