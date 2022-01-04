function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(onEntry, {threshold: [0.5]});
    const elements = document.querySelectorAll('.animation-scroll');
    for (let elm of elements) {
        observer.observe(elm);
    }
});