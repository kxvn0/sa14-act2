const block = document.getElementById('block');
const controlButton = document.getElementById('controlButton');
let moved = false;

controlButton.addEventListener('click', function() {
    if (!moved) {
        block.style.transform = 'translate(-50%, -50%) translateX(200px)';
        moved = true;
    } else {
        block.style.transform = 'translate(-50%, -50%)';
        moved = false;
    }

});

