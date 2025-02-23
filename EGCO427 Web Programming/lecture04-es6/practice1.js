class Jedi {
  constructor() {
    this.forceIsDark = false;
  }

  say() {
    console.log("Hello, OB1");
  }

  force() {
    return "Fear is the path ot the dark side";
  }
}

class Sith extends Jedi {
  constructor() {
    super();
    this.forceIsDark = true;
  }

  say() {
    console.log("Yes, Master");
  }

  force() {
    return "Join the dark side";
  }
}

let yoda = new Jedi();
let darth = new Sith();

yoda.say();
darth.say();

console.log(yoda.forceIsDark);
console.log(darth.forceIsDark);

console.log(yoda.force());
console.log(darth.force());
