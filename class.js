class User {
  constructor(name, surname, age, city) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.location = city;
  }

  static control(userX, userY) {
    if (userX.age > userY.age) {
      console.log(userX.firstName + " è più grande di " + userY.firstName);
    } else {
      console.log(userY.firstName + " è più grande di " + userX.firstName);
    }
  }
}

const Samuele = new User("Samuele", "Simeone", "22", "Taranto");
console.log(Samuele);

const person = [
  new User("Piero", "Fanelli", "23", "Milano"),
  new User("Alfonso", "Giggi", "34", "Roma"),
  new User("Gianni", "Gianni", "56", "Bari"),
  new User("Andrea", "Poti", "12", "Palermo"),
  new User("Samuele", "Simeone", "22", "Taranto"),
  new User("Chiara", "Chiari", "35", "Amsterdam"),
  new User("Jenna", "Ortega", "21", "Los Angeles"),
  new User("Annalisa", "Ru", "48", "Augusta"),
];

console.log(User.control(person[2], person[4]));
console.log(User.control(person[0], person[1]));
console.log(User.control(person[5], person[2]));
console.log(User.control(person[6], person[4]));
console.log(User.control(person[7], person[3]));


window.onload = () => {
    const animali = [];
  const form = document.getElementById("Myform");
  const main = document.querySelector("main");
  form.onsubmit = function (e) {
    e.preventDefault();
    const petInput = document.querySelector("#petName");
    const nameInput = document.querySelector("#ownername");
    const speciesInput = document.querySelector("#species");
    const breedInput = document.querySelector("#breed");

    const pet = petInput.value;
    const name = nameInput.value;
    const species = speciesInput.value;
    const breed = breedInput.value;

    class Pet {
        constructor(name, owner, species, breed) {
          this.petname = name;
          this.ownername = owner;
          this.species = species;
          this.breed = breed;
        }
      
        static isSameOwner(x, y) {
          return x.ownername === y.ownername;
        }
      }

      
    console.log(animali.push(new Pet(pet, name, species ,breed)));
    console.log(animali);

    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    h4.innerText = `${name}`;
    const h5 = document.createElement("h5");
    h5.innerText = `${pet}`;
    const infoPet = document.createElement("span");
    infoPet.innerText = `${species} ${breed}`;

    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(infoPet);
    main.appendChild(div);

    petInput.value = "";
    nameInput.value = "";
    speciesInput.value = "";
    breedInput.value = "";
  };
};
