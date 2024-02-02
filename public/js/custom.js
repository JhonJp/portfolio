document.addEventListener('mousemove', (e) => {
    var div = document.getElementById('movableDiv');
    moveElement(e, div)
});

function moveElement (e, elem) {
    const x = e.clientX;
    const middleX = window.innerWidth / 2;

    const offsetX = (((x - middleX) / middleX) * 25);

    // elem.style.setProperty("--rotateX", -1 * offsetY + "deg");
    elem.style.setProperty("--rotateY", offsetX + "deg");
}