let language = document.getElementsByClassName("languageMenu__item");
console.log(language);

let textLink = document.getElementsByClassName("languageMenu__textLink");
console.log(textLink);

function stopLink(event) {
    event.preventDefault();
}
textLink.forEach.addEventListener('click', stopLink, false);
