let features = document.getElementById('features');
console.log(features);

function appearance() {
    let paragraph = features.getElementsByClassName('listContent__p');
    console.log(paragraph);
    function addContent() {
        for (let i=0; i<paragraph.length; i++) {
            paragraph[i].classList.add('listContent__p_visible');
        }
    }
    setTimeout(addContent, 2000);
}

appearance();
