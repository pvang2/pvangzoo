class HeadNav extends HTMLElement {
    constructor() {
        super(); 
    }
    // Using connected call back to trigger the header when element is added to the home and zoo page. 
    connectedCallback() {
        this.innerHTML = 
        `<header >
        <h1 class="fluid header"><img src="colorful-chameleon-logo-design-illustration-free-vector.jpg">&nbsp;Como Zoo</h1>
        <nav class="List">
            <ul>
                <li id="home"><a href="index.html">Home</a></li>
                <li><a href="zooAnimals.html">Animals</a></li>
                <li><a href="About.html">About</a></li>
            </ul>
        </nav>
    </header>`;
    }
}

customElements.define('cust-header', HeadNav);