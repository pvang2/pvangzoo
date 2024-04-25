const addAnimal = document.getElementById('addAnimal-form');

const buzzer = document.querySelector('.buzzer');
const makePregnantButton = document.querySelector('#pregnantButton');
const animalMessage = document.getElementById('animalMessage');
const animalCount = document.getElementById('animalNumber');

const pregnantButton = () => {
    let ifMale = addAnimal.elements['aGender'].value;
    if (ifMale == 'Male'){
        buzzer.play();
        let animalMessage = document.getElementById('animalMessage');
        animalMessage.textContent = `Males cannot be set to pregnant.`;
    }
}

makePregnantButton.addEventListener('click', pregnantButton);

class Animal {
    constructor(name, age, gender, type, isPregnant, weight){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.type = type;
        this.isPregnant = isPregnant;
        this.weight = weight;
    }
}

let animalCounter = 0; 
console.log(animalCounter);
/** Initial Animals */
let animalList = [
    new Animal('Bruce', 4, 'Male', 'Shark', false, 350),
    new Animal('Lucky', 5, 'Male', 'Giraffe', false, 460),
    new Animal('Dinky', 2, 'Female', 'Bird', true, 2),
    new Animal('Russel', 6, 'Male', 'Reptile', false, 54)
];

const buildAnimalTable = (data) => {
    var table = document.getElementById('animalTable')
    for (var i = 0; i < data.length; i++){
        console.log(data[i].name);
        var row = `<tr> 
            <td>${data[i].name}</td>
            <td>${data[i].age}</td>
            <td>${data[i].gender}</td>
            <td>${data[i].type}</td>
            <td>${data[i].isPregnant}</td>
            <td>${data[i].weight} lb</td>
        </tr>`
        table.innerHTML += row
        animalCounter++;
    }
    animalCount.textContent = animalCounter; 
}

buildAnimalTable(animalList); 

const updateAnimalTable = (animal) => {
     let newAnimalList = [];
     newAnimalList.push(animal);
     buildAnimalTable(newAnimalList);
}


addAnimal.addEventListener('submit', function(event){
    event.preventDefault();
        //console.log(animalList);
        const animalName = addAnimal.elements['aName'].value;
        const animalGender = addAnimal.elements['aGender'].value;
        const animalAge = addAnimal.elements['aAge'].value;
        const animalType = addAnimal.elements['aType'].value;
        const animalWeight = addAnimal.elements['aWeight'].value;
        const animalPregnant = false;
        
        var validRegex = RegexCheck(animalName, animalAge, animalWeight);

        if (validRegex == true){
            let newAnimal = new Animal(animalName, animalAge, animalGender, animalType, animalPregnant, animalWeight); 
            
            updateAnimalTable(newAnimal);
    
            //let animalMessage = document.getElementById('animalMessage');
            animalMessage.textContent = `You have created a ${animalType}, named ${animalName} that is a ${animalGender} and is ${animalAge} years old.`;
        }
});

const apiAnimals = [];

fetch('https://zoocrmapi.azurewebsites.net/animals')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
        const newAnimal = new Animal(element['name'], element['age'], element['Gender'],element['type'],element['ispregnant'] );
            apiAnimals.push(newAnimal); 
    });
    buildAnimalTable(apiAnimals);
  })
  .catch(error => console.error('Error fetching zoo animals:', error));

const RegexCheck = (name, age, weight) => {
    var nameCheck = /^[a-zA-Z\s]+$/; 
    var ageCheck = /^\d{1,3}$/; 
    var weightCheck = /^\d{1,4}$/; 

    parseInt(age);

    var isValid = true;

    if (!nameCheck.test(name)) {
        isValid = false;
        animalMessage.textContent = `The animal name ${name} is not valid. Please only include alphabets.`;
        return isValid;
    }
    if (!ageCheck.test(age)) {
        isValid = false;
        animalMessage.textContent = `The animal age ${age} must be a number and cannot be too big.`;
        return isValid;
    }
    if (!weightCheck.test(weight)) {
        isValid = false;
        animalMessage.textContent = `Woahhhh.. ${weight}lb is too heavy. Our Zoo can only handle smaller animals.`;
        return isValid;
    }

    return true;
}

