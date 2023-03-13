class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="nav-wrapper">
          <div class="nav-section">
            <ul class="nav-items">
                <li><a href=./index.html><span id="studio-name">DOUBLE STRAFE STUDIO</span></a></li>
                <li><a href=./projects.html>Projects</a></li>            
                <li><a href=./blog.html>Blog</a></li>
                <li><a href=./about.html>About</a></li>
                <li><a href=./contact.html>Contact</a></li>
            </ul>
          </div>
        </div>
        `;
    }
}

    

customElements.define('nav-component', Nav);