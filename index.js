setTimeout(function () {
    document.getElementById('toast').animate([
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-300px)' }

    ], {
        duration: 3000,
        iteration: 1
    }
    )
}, 3000);

setTimeout(function () {
    document.getElementById('toast').style.display = 'none';
}, 6000);