import {Contact} from "../models/Contact.js";

// Variables générales
let contactList = [];
let contactListSearched = [];

// Clic sur Ajouter
document.getElementById('submitAdd').addEventListener('click', (event) => {
    event.preventDefault();
    let datas = getDatasFromForm(formAdd);
    if(formAdd.checkValidity() && document.querySelector('#cat-family').checked || document.querySelector('#cat-friends').checked || document.querySelector('#cat-work').checked || document.querySelector('#cat-other').checked) {
            addContactToList(datas);
            formAdd.reset();
            document.querySelector('#gender-male').checked = true;
            document.querySelector('#cat-family').checked = true;
            document.querySelector('#cat-friends, #cat-work, #cat-other').checked = false;
        };
    });


// Prendre toutes les infos du formulaire
const getDatasFromForm = (form) => {
    // Récupération des données du formulaire
    const data = new FormData(form);
    // Récupération des données dans les différents formulaire à entrée
    const firstname = data.get('firstname');
    const lastname = data.get('lastname');
    const address = data.get('address');
    const zipCode = data.get('zipCode');
    const city = data.get('city');
    const phone = data.get('phone');
    const mobile = data.get('mobile');
    const email = data.get('email');
    const notes = data.get('notes');
    // Récupération des données des catégories
    const categoryList = document.querySelectorAll('[name="category"]');
    const categorySelectedList = [];
    categoryList.forEach(category => {
        if(category.checked) {
            categorySelectedList.push(category.id);
        };
    });
    // Récupération des données du sexe
    const genderList = document.querySelectorAll('[name="gender"]');
    let genderName;
    genderList.forEach(gender => {
        if(gender.checked) {
            genderName = gender.id;
        };
    });
    // Récupération des données du pays
    const flag = document.querySelector('.country-button div').dataset.flag;

    return {
        'category': categorySelectedList,
        'gender': genderName,
        'firstname': firstname,
        'lastname': lastname,
        'address': address, 
        'flag': flag,
        'zipCode': zipCode,
        'city': city,
        'phone': phone,
        'mobile': mobile,
        'email': email,
        'notes': notes,
    };
};

// Ajouter des contacts
const addContactToList = (datas) => {
    let isFounded = false;
    if (contactList.length != 0) {
        for (let i=0; i < contactList.length; i++) {
            const fn = contactList[i].firstname;
            const fnSearch = fn.toLowerCase();
            const ln = contactList[i].lastname;
            const lnSearch = ln.toLowerCase();
            if (fnSearch === datas.firstname.toLowerCase() && lnSearch === datas.lastname.toLowerCase()) {
                alert("Ce contact existe déjà !"); // TODO:Fenêtre alerte
                isFounded = true;
                break;
            };
        };
        if (isFounded != true) {
            const newContact = new Contact(datas);
            contactList.push(newContact);
            createCardHTML(contactList, 'add')
        };
    } else {
        const newContact = new Contact(datas);
        contactList.push(newContact);
        console.log(contactList)
        createCardHTML(contactList, 'add');
    };
};


// TODO Rechercher des contacts avec juste quelques lettres du nom, prénom ou num de tel 
const searchContactInList = (word) => {
    contactListSearched = [];
    for (let i=0; i < contactList.length; i++) {
        const firstname = contactList[i].firstname;
        const fnSearch = firstname.toLowerCase();
        const lastname = contactList[i].lastname;
        const lnSearch = lastname.toLowerCase();
        const phone = contactList[i].phone;
        if (fnSearch.includes(word.toLowerCase()) || lnSearch.includes(word.toLowerCase()) || phone.includes(word)) {
            const searchedContact = new Contact(firstname, lastname, phone);
            contactListSearched.push(searchedContact);
        }
    };
    createSearchCardHTML(contactListSearched);
    //displayInModal(contactListSearched);
};

// TODO Clic sur Rechercher
document.getElementById('submitSearch').addEventListener('click', (event) => {
    event.preventDefault();
    //const formSearch = document.getElementById('formSearch');
    const data = new FormData(formSearch);
    const word = data.get('search');
        if(formSearch.checkValidity()) {
            searchContactInList(word);
        };
});

// TODO Clic sur supprimer
document.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('deleteBtn')) {
        const target = event.target.classList;
        const id = parseInt(target[0]);
        let removedList = contactList;
        removedList = contactList.splice(id,1);
        displayInHtml(contactList);
    };
});

// TODO Clic sur rechercher