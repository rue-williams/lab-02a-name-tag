const pageButton = document.getElementById('change-button');
const pageInput = document.getElementById('new-name');
const tagName = document.getElementById('tag-name');
const tagPronouns = document.getElementById('tag-pronouns')
const pronounSelector = document.getElementById('pronoun-list')

pageButton.addEventListener('click', () => {
    tagName.textContent = pageInput.value;
})

pronounSelector.addEventListener('change', () => {
    tagPronouns.textContent = pronounSelector.value;
})