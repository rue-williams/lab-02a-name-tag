const pageButton = document.getElementById('change-button');
const pageInput = document.getElementById('new-name');
const tagName = document.getElementById('tag-name');

pageButton.addEventListener('click', () => {
    tagName.textContent = pageInput.value;
})