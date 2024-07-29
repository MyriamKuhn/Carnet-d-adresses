const formAdd = document.querySelector('#formAdd');

// Check des radios et mise en checked true de l'élément cliqué
document.querySelectorAll('.gender-div').forEach(div => {
    div.addEventListener('click', () => {
        div.firstElementChild.checked = true;
    });
});

// Reset le formulaire de la modale pour ajouter un contact
document.querySelector('#modalAddContact').addEventListener('hidden.bs.modal', () => {
        formAdd.reset();
    });

console.log(formAdd.checkValidity())

// Vérifier la validité des données dans l'ajout du contact
