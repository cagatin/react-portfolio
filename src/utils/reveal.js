export default function reveal() {
    const elements = document.querySelectorAll('.reveal');

    for (let i = 0; i < elements.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = elements[i].getBoundingClientRect().top;
        let revealPoint = 200;

        if (revealTop < windowHeight - revealPoint) {
            elements[i].classList.add('active');
        }
        else {
            elements[i].classList.remove('active')
        }
    }
}
