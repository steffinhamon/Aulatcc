class mobileNavbar{
    constructor() {
     this.mobileMenu = document.querySelector(this.mobileMenu);
     this.navList = document.querySelector(this.navList)
     this.navLinks = document.querySelectorAll(this.navLinks)
     this.activeClass = "active";
    } 

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("Hey"));
    }
    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const MobileNavbar= new mobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
MobileNavbar.init();


const container = document.querySelector('.containe');
const texto = document.querySelector('img');

