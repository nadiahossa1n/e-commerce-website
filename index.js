function openMenu () {
    document.body.classList += " menu--open"
}

function closeMenu () {
    document.body.classList.remove('menu--open')
}

function goToBooks() {
    window.location.href = `${window.location.origin}/books.html`
}