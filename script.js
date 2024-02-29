const select = document.querySelectorAll('td');

select.forEach(x => {
    x.addEventListener('click', () => {
        removeSelect();
        x.classList.toggle('active');
    })
})

function removeSelect() {
    select.forEach(x => {
        x.classList.remove('active');
    })
}