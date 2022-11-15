class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="nav-wrapper">
                <div class="nav-section">
                <ul class="nav-items">
                    <li>DOUBLE STRAFE STUDIO</li>

                    <li class="projects">Projects</li>            
                    <div class="nav-projects-dropdown">
                        <p>hello</p>
                        <!-- <ul class="nav-projects-subitems">
                        <li>Keyboard Visualizer</li>
                        <li>TinyText Generator</li>
                        <li>CFB Recruiting</li>
                        <li>Recipe System</li>
                        <li>Youth Group Games Database</li>
                        </ul> -->
                    </div>
                    <li>Blog</li>
                    <!--
                    Cooking
                    Photography
                    
                    -->
                    <li>About</li>
                </ul>
                </div>
            </div>
            `;
    }
}

    

customElements.define('nav-component', Nav);