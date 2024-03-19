class User {
    #name;
    #familyName;
    #address;
    #codePostale
    #city;
    #superUser;
    #email;
    #password
    constructor(name, familyName, address, codePostale, city, superUser, email, password ){

        this.#name = name;
        this.#familyName = familyName;
        this.#address = address;
        this.#codePostale = codePostale;
        this.#city = city;
        this.#superUser = superUser;
        this.#email = email;
        this.#password = password;

    }
    getname() {
        return this.#name;
    }

    setname(value) {
        this.#name = value;
        return this
    }

    getfamilyName() {
        return this.#familyName;
    }

    setfamilyName(value) {
        this.#familyName = value;
        return this

    }

    getaddress() {
        return this.#address;
    }

    setaddress(value) {
        this.#address = value;
        return this

    }

    getcodePostale() {
        return this.#codePostale;
    }

    setcodePostale(value) {
        this.#codePostale = value;
        return this

    }

    getcity() {
        return this.#city;
    }

    setcity(value) {
        this.#city = value;
        return this

    }

    getsuperUser() {
        return this.#superUser;
    }

    setsuperUser(value) {
        this.#superUser = value;
        return this
    }

    getemail() {
        return this.#email;
    }

    setemail(value) {
        this.#email = value;
        return this
    }

    getpassword() {
        return this.#password;
    }

    setpassword(value) {
        this.#password = value;
        return this
    }
}
module.exports = {User};
