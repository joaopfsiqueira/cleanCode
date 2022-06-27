// describe the object 
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    isValid() {
        return this.email.includes('@');
    }
}

