

toggleDarkMode.addEventListener('change', (e) =>{ // <--- modifier pour charger une autre stylesheet ???
    if (e.target.value = 'dark') {
        body.style.backgroundColor = 'darkgray';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = '';
        body.style.color = '';
    }
})