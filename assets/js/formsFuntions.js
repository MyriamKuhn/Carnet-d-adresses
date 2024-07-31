const formAdd = document.querySelector('#formAdd');
const formSearch = document.querySelector('#formSearch');
const searchDiv = document.querySelector('.searchDiv');
const searchBtn = document.querySelector('search-btn');

// Check des radios et mise en checked true de l'élément cliqué
document.querySelectorAll('.gender-div').forEach(div => {
    div.addEventListener('click', () => {
        div.firstElementChild.checked = true;
    });
});

// Check des checkbox et mise en checked true de l'élément cliqué
document.querySelectorAll('.category-div').forEach(div => {
    div.addEventListener('click', () => {
        console.log(div.firstElementChild.checked)
        div.firstElementChild.checked = div.firstElementChild.checked ? false : true;
    });
});

// Reset le formulaire de la modale pour ajouter un contact
document.querySelector('#modalAddContact').addEventListener('hidden.bs.modal', () => {
        formAdd.reset();
        document.querySelector('#gender-male').checked = true;
        document.querySelector('#cat-family').checked = true;
        document.querySelector('#cat-friends, #cat-work, #cat-other').checked = false;
    });

// Reset le formulaire de la modale pour rechercher un contact
document.querySelector('#modalSearchContact').addEventListener('hidden.bs.modal', () => {
    formSearch.reset();
    searchDiv.innerHTML = "";
});

// Construction de la card Search en HTML
function createSearchCardHTML(list) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card border-primary mb-3 p-0 contact-card contact-card-search';
    searchDiv.appendChild(cardDiv);

    const headerDiv = document.createElement('div');
    headerDiv.className = 'card-header border-primary bg-primary-subtle fw-bold d-flex justify-content-between align-items-center';
    cardDiv.appendChild(headerDiv);

    const titleDiv = document.createElement('div');
    headerDiv.appendChild(titleDiv);

    const firstnameDiv = document.createElement('div');
    firstnameDiv.textContent = list[0].firstname;
    titleDiv.appendChild(firstnameDiv);

    const lastnameDiv = document.createElement('div');
    lastnameDiv.textContent = list[0].lastname;
    titleDiv.appendChild(lastnameDiv);

    const genderSection = document.createElement('i');
    switch (gender) {
        case 'gender-male':
            genderSection.className = 'bi bi-gender-male fs-4';
            break;
        case 'gender-female':
            genderSection.className = 'bi bi-gender-female fs-4';
            break;
        case 'gender-neuter':
            genderSection.className = 'bi bi-gender-neuter fs-4';
            break;
        case 'gender-ambiguous':
            genderSection.className = 'bi bi-gender-ambiguous fs-4';
            break;
        case 'gender-trans':
            genderSection.className = 'bi bi-gender-trans fs-4';
            break;
    };
    headerDiv.appendChild(genderSection);

    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'card-body';
    cardDiv.appendChild(bodyDiv);

    const flexDiv = document.createElement('div');
    flexDiv.className = 'd-flex flex-column justify-content-start';
    bodyDiv.appendChild(flexDiv);

    const addressDiv = document.createElement('div');
    addressDiv.className = 'card-text fw-light';
    addressDiv.textContent = address;
    flexDiv.appendChild(addressDiv);

    const landDiv = document.createElement('div');
    landDiv.className = 'd-flex align-items-center mb-3';
    flexDiv.appendChild(landDiv);

    const flagDiv = document.createElement('div');
    flagDiv.className = `flag ${flag} me-2`;
    landDiv.appendChild(flagDiv);

    const zipDiv = document.createElement('div');
    zipDiv.className = 'card-text pe-1';
    zipDiv.textContent = zipCode;
    landDiv.appendChild(zipDiv);

    const cityDiv = document.createElement('div');
    cityDiv.className = 'card-text';
    cityDiv.textContent = city;
    landDiv.appendChild(cityDiv);

    const lineDiv = document.createElement('div');
    lineDiv.className = 'border-bottom border-primary border-opacity-50 mb-3';
    flexDiv.appendChild(lineDiv);

    const phoneDiv = document.createElement('div');
    phoneDiv.className = 'd-flex';
    flexDiv.appendChild(phoneDiv);

    const fixeDiv = document.createElement('i');
    fixeDiv.className = 'card-text pe-2 bi bi-telephone-fill';
    phoneDiv.appendChild(fixeDiv);

    const fixeNbDiv = document.createElement('a');
    fixeNbDiv.className = 'card-text';
    fixeNbDiv.setAttribute('href', `tel:${fixe}`);
    fixeNbDiv.textContent = fixe;
    phoneDiv.appendChild(fixeNbDiv);

    const phoneMobileDiv = document.createElement('div');
    phoneMobileDiv.className = 'd-flex mb-3';
    flexDiv.appendChild(phoneMobileDiv);

    const mobileDiv = document.createElement('i');
    mobileDiv.className = 'card-text pe-2 bi bi-phone-fill';
    phoneMobileDiv.appendChild(mobileDiv);

    const mobileNbDiv = document.createElement('a');
    mobileNbDiv.className = 'card-text';
    mobileNbDiv.setAttribute('href', `tel:${mobile}`);
    mobileNbDiv.textContent = mobile;
    phoneMobileDiv.appendChild(mobileNbDiv);

    const lineSecDiv = document.createElement('div');
    lineSecDiv.className = 'border-bottom border-primary border-opacity-50 mb-3';
    flexDiv.appendChild(lineSecDiv);

    const mailDiv = document.createElement('div');
    mailDiv.className = 'd-flex mb-4';
    flexDiv.appendChild(mailDiv);

    const emailDiv = document.createElement('i');
    emailDiv.className = 'card-text pe-2 bi bi-envelope-at-fill';
    mailDiv.appendChild(emailDiv);

    const amailDiv = document.createElement('a');
    amailDiv.className = 'card-text';
    amailDiv.setAttribute('href', `mailto:${mail}`);
    amailDiv.textContent = mail;
    mailDiv.appendChild(amailDiv);

    const lineTriDiv = document.createElement('div');
    lineTriDiv.className = 'border-bottom border-primary border-opacity-50 mb-3';
    flexDiv.appendChild(lineTriDiv);

    const notesDiv = document.createElement('div');
    notesDiv.className = 'd-flex flex-column mb-1';
    flexDiv.appendChild(notesDiv);

    const pencilDiv = document.createElement('small');
    pencilDiv.className = 'text-body-secondary';
    pencilDiv.textContent = 'Notes :';
    notesDiv.appendChild(pencilDiv);

    const noticesDiv = document.createElement('small');
    noticesDiv.className = 'text-body-secondary';
    notesDiv.appendChild(noticesDiv);
    noticesDiv.textContent = notes;
};
