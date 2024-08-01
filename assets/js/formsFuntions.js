const formAdd = document.querySelector('#formAdd');
const formSearch = document.querySelector('#formSearch');
const searchDiv = document.querySelector('.searchDiv'); 
const familyDiv = document.querySelector('#family div');
const friendsDiv = document.querySelector('#friends div');
const workDiv = document.querySelector('#work div');
const otherDiv = document.querySelector('#other div');
const searchBtn = document.querySelector('search-btn');
const countryButton = document.querySelector('.country-button');
const countrySelection = document.querySelectorAll('.country-select');
const confirmContact = document.querySelector('.contactToDelete');
const confirmContactSearch = document.querySelector('.contactToDeleteSearch');

// Check des radios et mise en checked true de l'élément cliqué
document.querySelectorAll('.gender-div').forEach(div => {
    div.addEventListener('click', () => {
        div.firstElementChild.checked = true;
    });
});

// Check des checkbox et mise en checked true de l'élément cliqué
document.querySelectorAll('.category-div').forEach(div => {
    div.addEventListener('click', () => {
        div.firstElementChild.checked = div.firstElementChild.checked ? false : true;
    });
});

// Affichage du pays dans button après sélection dans le menu
countrySelection.forEach(selection => {
    selection.addEventListener('click', () => {
        countryButton.firstChild.className = (`flag ${selection.dataset.flag} me-2`);
        countryButton.firstChild.dataset.flag = (`${selection.dataset.flag}`);
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

// Construction des cards en HTML et tri par ordre alphabétique
function createCardHTML(list, action) {
// Création de la card en fonction de chaque catégorie
    switch (action) {
        case 'add':
            familyDiv.innerHTML = '';
            friendsDiv.innerHTML = '';
            workDiv.innerHTML = '';
            otherDiv.innerHTML = '';
            break;
        case 'search':
            searchDiv.innerHTML = '';
            break;
        case 'confirmDelete':
            confirmContact.innerHTML = '';
            break;
        case 'confirmDeleteSearch':
            confirmContactSearch.innerHTML = '';
            break;
    };

    for (let i=0; i < list.length; i++) {
        switch (action) {
            case 'add':
                const categoryList = list[i].category;
                for (let cat=0; cat<categoryList.length; cat++) {
                    if (categoryList[cat] === 'cat-family') {
                        const cardDiv = document.createElement('div');
                        cardDiv.className = 'card border-primary mb-3 p-0 mx-1 contact-card';
                        familyDiv.appendChild(cardDiv);
                        createRestOfCardHTML(i, cardDiv, list, action);
                    } else if (categoryList[cat] === 'cat-friends') {
                        const cardDiv = document.createElement('div');
                        cardDiv.className = 'card border-primary mb-3 p-0 mx-1 contact-card';
                        friendsDiv.appendChild(cardDiv);
                        createRestOfCardHTML(i, cardDiv, list, action);
                    } else if (categoryList[cat] === 'cat-work') {
                        const cardDiv = document.createElement('div');
                        cardDiv.className = 'card border-primary mb-3 p-0 mx-1 contact-card';
                        workDiv.appendChild(cardDiv);
                        createRestOfCardHTML(i, cardDiv, list, action);
                    } else {
                        const cardDiv = document.createElement('div');
                        cardDiv.className = 'card border-primary mb-3 p-0 mx-1 contact-card';
                        otherDiv.appendChild(cardDiv);
                        createRestOfCardHTML(i, cardDiv, list, action);
                    };
                };
                break;
            case 'search':
                const cardDiv = document.createElement('div');
                cardDiv.className = 'card border-primary mb-3 p-0 contact-card';
                searchDiv.appendChild(cardDiv);
                createRestOfCardHTML(i, cardDiv, list, action);
                break;
            case 'confirmDelete':
                const cardDiv1 = document.createElement('div');
                cardDiv1.className = 'card border-primary mb-3 p-0 contact-card';
                confirmContact.appendChild(cardDiv1);
                createRestOfCardHTML(i, cardDiv1, list, action);
                break;
            case 'confirmDeleteSearch':
                const cardDiv2 = document.createElement('div');
                cardDiv2.className = 'card border-primary mb-3 p-0 contact-card';
                confirmContactSearch.appendChild(cardDiv2);
                createRestOfCardHTML(i, cardDiv2, list, action);
                break;
        };       
    };
};
// Restant de la fonction de la création de la card pour chaque catégorie
function createRestOfCardHTML(i, cardDiv, list, action) {
    const headerDiv = document.createElement('div');
    headerDiv.className = 'card-header border-primary bg-primary-subtle fw-bold d-flex justify-content-between align-items-center text-start';
    cardDiv.appendChild(headerDiv);

    const titleDiv = document.createElement('div');
    headerDiv.appendChild(titleDiv);

    const firstnameDiv = document.createElement('div');
    firstnameDiv.textContent = list[i].firstname;
    titleDiv.appendChild(firstnameDiv);

    const lastnameDiv = document.createElement('div');
    lastnameDiv.textContent = list[i].lastname;
    titleDiv.appendChild(lastnameDiv);

    const genderSection = document.createElement('i');
    switch (list[i].gender) {
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
    bodyDiv.className = 'card-body text-start';
    cardDiv.appendChild(bodyDiv);

    const flexDiv = document.createElement('div');
    flexDiv.className = 'd-flex flex-column justify-content-start';
    bodyDiv.appendChild(flexDiv);

    const addressDiv = document.createElement('div');
    addressDiv.className = 'card-text fw-light';
    addressDiv.textContent = list[i].address;
    flexDiv.appendChild(addressDiv);

    const landDiv = document.createElement('div');
    landDiv.className = 'd-flex align-items-center mb-3';
    flexDiv.appendChild(landDiv);

    const flagDiv = document.createElement('div');
    flagDiv.className = `flag ${list[i].flag} me-2`;
    landDiv.appendChild(flagDiv);

    const zipDiv = document.createElement('div');
    zipDiv.className = 'card-text pe-1';
    zipDiv.textContent = list[i].zipCode;
    landDiv.appendChild(zipDiv);

    const cityDiv = document.createElement('div');
    cityDiv.className = 'card-text';
    cityDiv.textContent = list[i].city;
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
    fixeNbDiv.setAttribute('href', `tel:${list[i].phone}`);
    fixeNbDiv.textContent = list[i].phone;
    phoneDiv.appendChild(fixeNbDiv);

    const phoneMobileDiv = document.createElement('div');
    phoneMobileDiv.className = 'd-flex mb-3';
    flexDiv.appendChild(phoneMobileDiv);

    const mobileDiv = document.createElement('i');
    mobileDiv.className = 'card-text pe-2 bi bi-phone-fill';
    phoneMobileDiv.appendChild(mobileDiv);

    const mobileNbDiv = document.createElement('a');
    mobileNbDiv.className = 'card-text';
    mobileNbDiv.setAttribute('href', `tel:${list[i].mobile}`);
    mobileNbDiv.textContent = list[i].mobile;
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
    amailDiv.setAttribute('href', `mailto:${list[i].email}`);
    amailDiv.textContent = list[i].email;
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
    noticesDiv.textContent = list[i].notes;
    notesDiv.appendChild(noticesDiv);

    if (action != 'confirmDelete' && action != 'confirmDeleteSearch') {
        const footerDiv = document.createElement('div');
        footerDiv.className = 'card-footer border-primary d-flex justify-content-between';
        cardDiv.appendChild(footerDiv);

        const modifyBtn = document.createElement('button');
        modifyBtn.className = 'btn btn-success text-white fw-bold text-uppercase';
        switch (action) {
            case 'add':
                modifyBtn.id = `modify${i}`;
                modifyBtn.name = 'modifyBtnAdd'
                break;
            case 'search':
                modifyBtn.id = `modify${list[i].id}-${i}`;
                modifyBtn.name = 'modifyBtnSearch'
                break;
        };
        modifyBtn.textContent = 'Modifier';
        footerDiv.appendChild(modifyBtn);
    
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger text-white fw-bold text-uppercase';
        switch (action) {
            case 'add':
                deleteBtn.id = `delete${i}`;
                deleteBtn.name = 'deleteBtnAdd'
                break;
            case 'search':
                deleteBtn.id = `delete${list[i].id}-${i}`;
                deleteBtn.name = 'deleteBtnSearch'
                break;
        };
        deleteBtn.textContent = 'Supprimer';
        footerDiv.appendChild(deleteBtn);
    };
};