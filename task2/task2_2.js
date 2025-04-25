class Animal{
    constructor(name){
        this.name=name;
    }
    sound() {
        console.log(`${this.name} makes a sound`);
    }
}

class dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed
    }
    bark(){
        console.log(`${this.name} barks`)
    }
}

const d1 = new dog("max","gr")
d1.sound()
d1.bark()