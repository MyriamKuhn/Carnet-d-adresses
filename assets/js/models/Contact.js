export class Contact {
    // Définition du constructeur
    constructor (datas,id) {
        this.firstname = datas.firstname;
        this.lastname = datas.lastname;
        this.gender = datas.gender;
        this.address = datas.address;
        this.zipCode = datas.zipCode;
        this.city = datas.city;
        this.flag = datas.flag;
        this.phone = datas.phone;
        this.mobile = datas.mobile;
        this.email = datas.email;
        this.notes = datas.notes;
        this.category = datas.category;
    };
};