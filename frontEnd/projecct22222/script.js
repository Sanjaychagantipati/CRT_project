const blocks = document.querySelectorAll('.block');
let dragTarget = null;

blocks.forEach(block => {
    block.addEventListener('dragstart', dragStart);
    block.addEventListener('dragover', dragOver);
    block.addEventListener('drop', drop);
});

function dragStart(event) {
    dragTarget = event.target;
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    if (event.target.classList.contains('block')) {
        const tempStyle = event.target.style.backgroundImage;
        event.target.style.backgroundImage = dragTarget.style.backgroundImage;
        dragTarget.style.backgroundImage = tempStyle;
    }
}
