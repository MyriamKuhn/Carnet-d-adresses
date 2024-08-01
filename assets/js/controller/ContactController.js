import {Contact} from "../models/Contact.js";

// Variables générales
let contactList = [
    {
        firstname: "Dupont",
        lastname: "Marie",
        gender: "gender-female",
        address: "12 avenue des Champs-Élysées",
        category: ["cat-friends", "cat-work"],
        city: "Paris",
        email: "marie.dupont@example.com",
        flag: "flag-fr",
        mobile: "0789456123",
        notes: "Amie d'enfance et collègue de travail",
        phone: "0145678901",
        zipCode: "75008"
    },
    {
        firstname: "Martin",
        lastname: "Pierre",
        gender: "gender-male",
        address: "5 rue de la Liberté",
        category: ["cat-work"],
        city: "Lyon",
        email: "pierre.martin@company.com",
        flag: "flag-fr",
        mobile: "0671234567",
        notes: "Collègue de travail",
        phone: "0478561234",
        zipCode: "69003"
    },
    {
        firstname: "Leroy",
        lastname: "Julie",
        gender: "gender-female",
        address: "20 boulevard Haussmann",
        category: ["cat-family"],
        city: "Paris",
        email: "julie.leroy@free.fr",
        flag: "flag-fr",
        mobile: "0612345678",
        notes: "Cousine",
        phone: "0134567890",
        zipCode: "75009"
    },
    {
        firstname: "Bernard",
        lastname: "Luc",
        gender: "gender-male",
        address: "15 rue des Fleurs",
        category: ["cat-friends"],
        city: "Marseille",
        email: "luc.bernard@example.com",
        flag: "flag-fr",
        mobile: "0698765432",
        notes: "Ami du club de sport",
        phone: "0491234567",
        zipCode: "13008"
    },
    {
        firstname: "Fournier",
        lastname: "Sophie",
        gender: "gender-female",
        address: "10 rue de la Paix",
        category: ["cat-family"],
        city: "Nice",
        email: "sophie.fournier@orange.fr",
        flag: "flag-fr",
        mobile: "0623456789",
        notes: "Tante",
        phone: "0493245678",
        zipCode: "06000"
    },
    {
        firstname: "Lemoine",
        lastname: "Clara",
        gender: "gender-female",
        address: "25 rue de la Gare",
        category: ["cat-friends"],
        city: "Lille",
        email: "clara.lemoine@example.com",
        flag: "flag-fr",
        mobile: "0645789123",
        notes: "Amie de l'université",
        phone: "0320456789",
        zipCode: "59000"
    },
    {
        firstname: "Petit",
        lastname: "Antoine",
        gender: "gender-male",
        address: "30 rue de la République",
        category: ["cat-work"],
        city: "Nantes",
        email: "antoine.petit@entreprise.fr",
        flag: "flag-fr",
        mobile: "0654789123",
        notes: "Partenaire commercial",
        phone: "0245678901",
        zipCode: "44000"
    },
    {
        firstname: "Moreau",
        lastname: "Lucie",
        gender: "gender-female",
        address: "18 rue des Acacias",
        category: ["cat-family"],
        city: "Toulouse",
        email: "lucie.moreau@free.fr",
        flag: "flag-fr",
        mobile: "0667891234",
        notes: "Soeur",
        phone: "0531234567",
        zipCode: "31000"
    },
    {
        firstname: "Richard",
        lastname: "Paul",
        gender: "gender-male",
        address: "22 rue des Lilas",
        category: ["cat-friends"],
        city: "Bordeaux",
        email: "paul.richard@example.com",
        flag: "flag-fr",
        mobile: "0678912345",
        notes: "Camarade de lycée",
        phone: "0556789123",
        zipCode: "33000"
    },
    {
        firstname: "Garcia",
        lastname: "Isabelle",
        gender: "gender-female",
        address: "14 avenue de la Mer",
        category: ["cat-family"],
        city: "Nice",
        email: "isabelle.garcia@orange.fr",
        flag: "flag-fr",
        mobile: "0689123456",
        notes: "Cousine éloignée",
        phone: "0498123456",
        zipCode: "06000"
    },
    {
        firstname: "Roux",
        lastname: "Julien",
        gender: "gender-male",
        address: "19 rue des Pins",
        category: ["cat-work"],
        city: "Strasbourg",
        email: "julien.roux@company.com",
        flag: "flag-fr",
        mobile: "0691234567",
        notes: "Chef de projet",
        phone: "0389123456",
        zipCode: "67000"
    },
    {
        firstname: "Girard",
        lastname: "Chloé",
        gender: "gender-female",
        address: "35 rue du Moulin",
        category: ["cat-friends"],
        city: "Lyon",
        email: "chloe.girard@example.com",
        flag: "flag-fr",
        mobile: "0612345789",
        notes: "Voisine",
        phone: "0478123456",
        zipCode: "69001"
    },
    {
        firstname: "David",
        lastname: "Emilie",
        gender: "gender-female",
        address: "29 rue des Roses",
        category: ["cat-family"],
        city: "Marseille",
        email: "emilie.david@free.fr",
        flag: "flag-fr",
        mobile: "0623457891",
        notes: "Nièce",
        phone: "0491234789",
        zipCode: "13001"
    },
    {
        firstname: "David",
        lastname: "Astride",
        gender: "gender-female",
        address: "29 rue des Roses",
        category: ["cat-family"],
        city: "Marseille",
        email: "emilie.david@free.fr",
        flag: "flag-fr",
        mobile: "0623457891",
        notes: "Nièce",
        phone: "0491234789",
        zipCode: "13001"
    },
    {
        firstname: "Muller",
        lastname: "François",
        gender: "gender-male",
        address: "40 rue de l'Église",
        category: ["cat-work"],
        city: "Rennes",
        email: "francois.muller@entreprise.fr",
        flag: "flag-fr",
        mobile: "0634567891",
        notes: "Collaborateur",
        phone: "0299123456",
        zipCode: "35000"
    },
    {
        firstname: "Leclerc",
        lastname: "Sophie",
        gender: "gender-female",
        address: "28 rue de la Fontaine",
        category: ["cat-family"],
        city: "Montpellier",
        email: "sophie.leclerc@orange.fr",
        flag: "flag-fr",
        mobile: "0645678912",
        notes: "Belle-sœur",
        phone: "0467123456",
        zipCode: "34000"
    },
    {
        firstname: "Schmidt",
        lastname: "Anna",
        gender: "gender-female",
        address: "Hauptstraße 5",
        category: ["cat-friends"],
        city: "Berlin",
        email: "anna.schmidt@example.de",
        flag: "flag-de",
        mobile: "00491512345678",
        notes: "Freundin aus der Schule",
        phone: "0049301234567",
        zipCode: "10115"
    },
    {
        firstname: "Müller",
        lastname: "Thomas",
        gender: "gender-male",
        address: "Bahnhofstraße 10",
        category: ["cat-work"],
        city: "Hamburg",
        email: "thomas.mueller@firma.de",
        flag: "flag-de",
        mobile: "00491723456789",
        notes: "Kollege im Büro",
        phone: "0049402345678",
        zipCode: "20095"
    },
    {
        firstname: "Fischer",
        lastname: "Laura",
        gender: "gender-female",
        address: "Kirchweg 3",
        category: ["cat-family"],
        city: "München",
        email: "laura.fischer@web.de",
        flag: "flag-de",
        mobile: "00491634567890",
        notes: "Cousine",
        phone: "0049893456789",
        zipCode: "80331"
    },
    {
        firstname: "Weber",
        lastname: "Lukas",
        gender: "gender-male",
        address: "Schulstraße 12",
        category: ["cat-friends"],
        city: "Köln",
        email: "lukas.weber@example.de",
        flag: "flag-de",
        mobile: "00491545678901",
        notes: "Nachbar",
        phone: "0049221456789",
        zipCode: "50667"
    },
    {
        firstname: "Meyer",
        lastname: "Sophie",
        gender: "gender-female",
        address: "Gartenweg 7",
        category: ["cat-family"],
        city: "Frankfurt",
        email: "sophie.meyer@t-online.de",
        flag: "flag-de",
        mobile: "00491756789012",
        notes: "Tante",
        phone: "0049695678901",
        zipCode: "60311"
    },
    {
        firstname: "Wagner",
        lastname: "Felix",
        gender: "gender-male",
        address: "Ringstraße 22",
        category: ["cat-work"],
        city: "Stuttgart",
        email: "felix.wagner@company.de",
        flag: "flag-de",
        mobile: "00491667890123",
        notes: "Projektleiter",
        phone: "0049711789012",
        zipCode: "70173"
    },
    {
        firstname: "Becker",
        lastname: "Julia",
        gender: "gender-female",
        address: "Lindenstraße 18",
        category: ["cat-friends"],
        city: "Düsseldorf",
        email: "julia.becker@example.de",
        flag: "flag-de",
        mobile: "00491578901234",
        notes: "Freundin aus dem Sportverein",
        phone: "0049211789012",
        zipCode: "40213"
    },
    {
        firstname: "Hoffmann",
        lastname: "Max",
        gender: "gender-male",
        address: "Blumenweg 14",
        category: ["cat-family"],
        city: "Dresden",
        email: "max.hoffmann@web.de",
        flag: "flag-de",
        mobile: "00491789012345",
        notes: "Bruder",
        phone: "0049351789012",
        zipCode: "01067"
    },
    {
        firstname: "Schröder",
        lastname: "Katrin",
        gender: "gender-female",
        address: "Feldstraße 9",
        category: ["cat-work"],
        city: "Leipzig",
        email: "katrin.schroeder@firma.de",
        flag: "flag-de",
        mobile: "00491689012345",
        notes: "Teamkollegin",
        phone: "0049341789012",
        zipCode: "04109"
    },
    {
        firstname: "Koch",
        lastname: "Simon",
        gender: "gender-male",
        address: "Bergstraße 11",
        category: ["cat-friends"],
        city: "Hannover",
        email: "simon.koch@example.de",
        flag: "flag-de",
        mobile: "00491589012345",
        notes: "Freund aus der Uni",
        phone: "0049511789012",
        zipCode: "30159"
    },
    {
        firstname: "Johnson",
        lastname: "Emily",
        gender: "gender-female",
        address: "101 Market St",
        category: ["cat-other"],
        city: "San Francisco",
        email: "emily.johnson@shopusa.com",
        flag: "flag-us",
        mobile: "0014151234567",
        notes: "Manager at Clothing Store",
        phone: "0014155557890",
        zipCode: "94103"
    },
    {
        firstname: "Lopez",
        lastname: "Carlos",
        gender: "gender-male",
        address: "Avenida de la Constitución 12",
        category: ["cat-other"],
        city: "Madrid",
        email: "carlos.lopez@bakery.es",
        flag: "flag-es",
        mobile: "0034612345678",
        notes: "Bakery Shop Manager",
        phone: "0034912345678",
        zipCode: "28014"
    },
    {
        firstname: "Romano",
        lastname: "Luca",
        gender: "gender-male",
        address: "Piazza Navona 20",
        category: ["cat-other"],
        city: "Rome",
        email: "luca.romano@gelato.it",
        flag: "flag-it",
        mobile: "00393209876543",
        notes: "Owner of Gelato Shop",
        phone: "003962345678",
        zipCode: "00186"
    },
    {
        firstname: "Dubois",
        lastname: "Claire",
        gender: "gender-female",
        address: "12 Rue de Rivoli",
        category: ["cat-other"],
        city: "Paris",
        email: "claire.dubois@boutique.fr",
        flag: "flag-fr",
        mobile: "0612345678",
        notes: "Boutique Owner",
        phone: "0123456789",
        zipCode: "75004"
    },
];
let contactListSearched = [];

// Chargement de la liste des contacts au démarrage
if(contactList != []) {
    sortTheLists(contactList);
    createCardHTML(contactList, 'add');
};

// Trier la liste par ordre alphabétique Nom, Prénom
function sortTheLists (list) {
    list.sort(function (a,b) {
        if(a.lastname < b.lastname) 
            return -1;
        if(a.lastname > b.lastname)
            return 1;
        return 0;
    }); 
    list.sort(function (a,b) {
        if(a.firstname < b.firstname) 
            return -1;
        if(a.firstname > b.firstname)
            return 1;
        return 0;
    }); 
};

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
            sortTheLists(contactList);
            createCardHTML(contactList, 'add');
        };
    } else {
        const newContact = new Contact(datas);
        contactList.push(newContact);
        createCardHTML(contactList, 'add');
    };
};

// Rechercher des contacts avec juste quelques lettres du nom, prénom ou num de tel fixe ou mobile ou nom de la ville
const searchContactInList = (word) => {
    contactListSearched = [];
    for (let i=0; i < contactList.length; i++) {
        const firstname = contactList[i].firstname;
        const fnSearch = firstname.toLowerCase();
        const lastname = contactList[i].lastname;
        const lnSearch = lastname.toLowerCase();
        const phone = contactList[i].phone;
        const mobile = contactList[i].mobile;
        const city = contactList[i].city;
        const cSearch = city.toLowerCase();
        if (fnSearch.includes(word.toLowerCase()) || lnSearch.includes(word.toLowerCase()) || phone.includes(word) || mobile.includes(word) || cSearch.includes(word)) {
            const searchedContact = new Contact(contactList[i]);
            searchedContact.id = i;
            contactListSearched.push(searchedContact);
        }
    };
    sortTheLists(contactListSearched);
    createCardHTML(contactListSearched, 'search');
};

// Clic sur Rechercher
document.getElementById('submitSearch').addEventListener('click', (event) => {
    event.preventDefault();
    //const formSearch = document.getElementById('formSearch');
    const data = new FormData(formSearch);
    const word = data.get('search');
        if(formSearch.checkValidity()) {
            searchContactInList(word);
        };
});

let idToDelete;
let idToDeleteInSearch;
// Clic sur supprimer ou modifier dans la liste et dans la recherche
document.addEventListener('click', (event) => {
    event.preventDefault();
    switch (event.target.name) {
        case 'deleteBtnAdd':
            const targetId = event.target.id.split('');
            idToDelete = targetId[6];
            const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
            confirmModal.show();
            const deletedContactList = [];
            deletedContactList.push(contactList[idToDelete]);
            createCardHTML(deletedContactList, 'confirmDelete');
            break;
        case 'confirmDeleteBtn':
            let removedList = contactList;
            removedList = contactList.splice(idToDelete,1);
            sortTheLists(contactList);
            createCardHTML(contactList, 'add');
            break;
        case 'deleteBtnSearch':
            const targetIdSearch = event.target.id.split('');
            idToDelete = targetIdSearch[6];
            const searchTargetId = event.target.id.split('-');
            idToDeleteInSearch = searchTargetId[1];
            const confirmModalSearch = new bootstrap.Modal(document.getElementById('confirmModalSearch'));
            confirmModalSearch.show();
            const deletedContactListSearch = [];
            deletedContactListSearch.push(contactList[idToDelete]);
            createCardHTML(deletedContactListSearch, 'confirmDeleteSearch');
            break;
        case 'confirmDeleteBtnSearch':
            let removedListSearch = contactList;
            removedListSearch = contactList.splice(idToDelete,1);
            sortTheLists(contactList);
            createCardHTML(contactList, 'add');
            let removedSearchList = contactListSearched;
            removedSearchList = contactListSearched.splice(idToDeleteInSearch,1);
            sortTheLists(contactListSearched);
            createCardHTML(contactListSearched, 'search');
            break;
    };
});