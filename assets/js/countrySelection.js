const countryButton = document.querySelector('.country-button');
const countrySelection = document.querySelectorAll('.country-select');

countrySelection.forEach(selection => {
    selection.addEventListener('click', () => {
        countryButton.innerHTML = "";
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('flag');
        countryDiv.classList.add(`${selection.dataset.flag}`)
        countryButton.appendChild(countryDiv);
    });
});