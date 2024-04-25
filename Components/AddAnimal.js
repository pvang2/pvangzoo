
class AddAnimal extends HTMLElement {
    constructor() {
        super(); 
    }
    // Using connected call back to trigger the header when element is added to the home and zoo page. 
    connectedCallback() {
        this.innerHTML = 
        `<div class="animalWindow">
            
        <p id="animalMessage"></p>
        <div class="inputFields">
            <h2>Add an Animal</h2>
            <form id="addAnimal-form" method="post">
                <label>Animal Name</label>
                <input type="text" id="aName" required/>
                <br>
                <label>Gender</label>
                <select name="gender" id="aGender" required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <br>
                <label>Animal Age</label>
                <input type="text"" id="aAge" required/>
                <br>
                <label>Animal Weight</label>
                <input type="text" id="aWeight" required/>
                <br>
                <label>Type</label>
                <select name="aType" id="aType" required>
                    <option value="Mammal">Mammal</option>
                    <option value="Bird">Bird</option>
                    <option value="Fish">Fish</option>
                    <option value="Reptile">Reptile</option>
                    <option value="Farm Animal">Farm Animal</option>
                </select>
                <br>
                <button id="pregnantButton">Make Pregnant</button>
                <br>

                <button id="addbtn" type="submit">Add Animal</button>
            </form> 
        </div>
        <audio class="buzzer" src="./wrong-answer-126515.mp3" hidden></audio>
    </div>`;
    }
}

customElements.define('add-animal', AddAnimal);