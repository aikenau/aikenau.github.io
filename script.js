let sections = document.querySelectorAll('section');

function handleScroll() {
    let top = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let startAnimationOffset = 300;

        if (top >= offset - startAnimationOffset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
}

window.addEventListener('scroll', handleScroll);
