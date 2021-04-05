/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/public/index.ts":
/*!*****************************!*\
  !*** ./src/public/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const project_1 = __webpack_require__(/*! ./odk-ts/project */ "./src/public/odk-ts/project.ts");
const navigator_1 = __webpack_require__(/*! ./odk-ts/navigator */ "./src/public/odk-ts/navigator.ts");
const page_1 = __webpack_require__(/*! ./odk-ts/page */ "./src/public/odk-ts/page.ts");
const variables_1 = __webpack_require__(/*! ../utilities/variables */ "./src/utilities/variables.ts");
class Main {
    constructor() {
    }
    printPage(pageId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const page = new page_1.Page(pageId, '', '', [], variables_1.pages[pageId].content, variables_1.pages[pageId].images, '');
                page.printPage();
                resolve();
            }));
        });
    }
}
const mainClass = new Main;
const navClass = new navigator_1.Navigator;
function printProjectsNav() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            for (const projectType in variables_1.projectTypes) {
                if (variables_1.projectTypes.hasOwnProperty(projectType)) {
                    const projects = variables_1.projectTypes[projectType];
                    navClass.newProjectType(projectType);
                    for (let i = 0; i < projects.length; i++) {
                        const project = new project_1.ProjectClass(projects[i]);
                        navClass.newProject(project.projectIndex(), project.projectTitle(), projectType);
                    }
                }
            }
            resolve();
        }));
    });
}
function printPage(pageId) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            if (variables_1.projects[pageId]) {
                const project = new project_1.ProjectClass(pageId);
                project.printProjectPage();
            }
            else {
                mainClass.printPage(pageId);
            }
            resolve();
        }));
    });
}
printProjectsNav()
    .then(() => {
    const navPages = document.querySelectorAll('.navPage');
    for (let i = 0; i < navPages.length; i++) {
        const navPage = navPages[i];
        navPage.addEventListener('click', () => {
            for (let i = 0; i < navPages.length; i++) {
                const navPage = navPages[i];
                navPage.classList.remove('active');
            }
            navPage.classList.add('active');
            printPage(navPage.id);
        });
    }
});


/***/ }),

/***/ "./src/public/odk-ts/navigator.ts":
/*!****************************************!*\
  !*** ./src/public/odk-ts/navigator.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigator = void 0;
const project_1 = __webpack_require__(/*! ./project */ "./src/public/odk-ts/project.ts");
const variables_1 = __webpack_require__(/*! ../../utilities/variables */ "./src/utilities/variables.ts");
class Navigator {
    constructor() {
        this.projectDiv = document.getElementById('projectContainer');
        this.firstProjectType = true;
        this.firstProject = true;
    }
    ;
    newProjectType(projectType) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let active = '';
                if (this.firstProjectType) {
                    active = 'active';
                    this.firstProjectType = false;
                }
                this.projectDiv.innerHTML += `
                <div id='${projectType}' class='navObject ${active}'>
                    <div class='navTitle'>
                        <div class='navName'>
                            <p>${variables_1.projectTypeNames[projectType]}</p>
                        </div>
                    </div>
                    <div class='navDropDownDiv'>

                    </div>
                </div>
            `;
                resolve();
            }));
        });
    }
    newProject(projectIndex, projectName, projectType) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const projectTypeDiv = document.querySelector('#' + projectType + ' .navDropDownDiv');
                let active = '';
                if (this.firstProject) {
                    active = 'active';
                    const project = new project_1.ProjectClass(projectIndex);
                    project.printProjectPage();
                    this.firstProject = false;
                }
                projectTypeDiv.innerHTML += `
            <div id='${projectIndex}' class='navDropDown navPage ${active}'>
                <div class='navTitle'>
                    <div class='navIcon'>

                    </div>
                    <div class='navName'>
                        <p>${projectName}</p>
                    </div>
                </div>
            </div>
            `;
                resolve();
            }));
        });
    }
}
exports.Navigator = Navigator;


/***/ }),

/***/ "./src/public/odk-ts/page.ts":
/*!***********************************!*\
  !*** ./src/public/odk-ts/page.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const variables_1 = __webpack_require__(/*! ../../utilities/variables */ "./src/utilities/variables.ts");
class Page {
    constructor(pageId, date, description, tags, content, images, links) {
        this.pageContainer = document.getElementById('mainContainer');
        this.pageId = pageId;
        this.pagedate = date;
        this.pageDescription = description;
        this.pageTags = tags;
        this.pageContent = content;
        this.pageImages = images;
        this.pageLinks = links;
    }
    printPage() {
        if (this.pagedate === 'current') {
            var d = new Date();
            this.pagedate = `${d.getDate()} ${variables_1.monthNames[d.getMonth()]} ${d.getFullYear()}`;
        }
        let tagHTML = '';
        for (let i = 0; i < this.pageTags.length; i++) {
            const tag = this.pageTags[i];
            tagHTML += `<div class="tag ${tag}"><p>${tag}</p></div>`;
        }
        let pageContent = '';
        for (let title in this.pageContent) {
            if (this.pageContent.hasOwnProperty(title)) {
                const alinea = this.pageContent[title];
                let imgHTML = '';
                let alineaClass = '';
                if (this.pageImages[title]) {
                    if (title.includes('image')) {
                        imgHTML += `<img class="alineaImageRow" src="./images/projects/${this.pageImages[title]}.webp" alt="${this.pageImages[title]}">`;
                    }
                    else {
                        imgHTML = `<div class="alineaImage"><img src="./images/projects/${this.pageImages[title]}.webp" alt="${this.pageImages[title]}"></div>`;
                    }
                }
                if (title.includes('title')) {
                    title = '';
                }
                else {
                    title = `<h3>${title}</h3>`;
                }
                pageContent += `
                <div class="pageAlinea ${title}">
                    ${title}
                    ${imgHTML}
                    <p>
                        ${alinea}
                    </p>
                </div>
                `;
            }
        }
        let pageLinks = '';
        for (let title in this.pageLinks) {
            if (this.pageLinks.hasOwnProperty(title)) {
                const link = this.pageLinks[title];
                pageLinks += `<a href="${link}" rel="noreferrer" target="_blank"><strong>${title}</strong></a>`;
            }
        }
        this.pageContainer.innerHTML = `
        <h2 id="pageTitle">${this.pageId}</h2>
        <p id="pageDate">${this.pagedate}</p>
        <div id="pageTags">${tagHTML}</div>
        <div id="pageContent">
            <div class="pageAlinea description"><p>${this.pageDescription}</p></div>
            ${pageContent}
        </div>
        <div id="pageLinks">
            ${pageLinks}
        </div>
        `;
    }
}
exports.Page = Page;


/***/ }),

/***/ "./src/public/odk-ts/project.ts":
/*!**************************************!*\
  !*** ./src/public/odk-ts/project.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectClass = void 0;
const page_1 = __webpack_require__(/*! ./page */ "./src/public/odk-ts/page.ts");
const variables_1 = __webpack_require__(/*! ../../utilities/variables */ "./src/utilities/variables.ts");
class ProjectClass {
    constructor(projectName) {
        this.project = variables_1.projects[projectName];
    }
    projectTitle() {
        return this.project.title;
    }
    projectIndex() {
        return this.project.index;
    }
    printProjectPage() {
        const page = new page_1.Page(this.project.title, this.project.date, this.project.description, this.project.tags, this.project.content, this.project.images, this.project.links);
        page.printPage();
    }
}
exports.ProjectClass = ProjectClass;


/***/ }),

/***/ "./src/utilities/variables.ts":
/*!************************************!*\
  !*** ./src/utilities/variables.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.monthNames = exports.pages = exports.projectTypeNames = exports.projectTypes = exports.projects = void 0;
const projects = {
    'statsdb_overlay': {
        'date': '18 February 2021',
        'description': 'A Rainbow Six Siege ingame statistics overlay made in collaboration with Overwolf.',
        'index': 'statsdb_overlay',
        'links': {
            'StatsDB App': 'https://www.overwolf.com/app/StatsDB-StatsDB',
            'StatsDB Website': 'https://statsdb.net/',
            'Overwolf': 'https://www.overwolf.com/',
        },
        'tags': [
            'featured',
            'app',
        ],
        'title': 'StatsDB Overlay',
        'content': {
            'title0': 'This is a project in colaboration with Overwolf. Overwolf is a framework that allows 3rd party developers to easily build gaming apps and overlays in HTML and JavaScript. The goal of this project is to create an intuitive and easy to use Rainbow Six Siege overlay to track and see player statistics ingame. This project I have teamed up with JocularMarrow.',
            'Startup': 'The project started after we had started on a statistics website for Rainbow Six Siege, after we had mostly finished the website we decided to submit an app proposal to Overwolf. Not a lot later we got approved and started working on the overlay. Later in 2020 we decided to scrap the website and team up with StatsDB. After that we focused solely on the overlay.',
            'Code': 'This project I worked with HTML5, SCSS and TypeScript. SCSS was chosen for this project because it has an improved easier to interpret syntax compared to CSS3. And gives you the ability to easily import other style files. TypeScript was chosen for this project, because Overwolf has a sample project written in TypeScript. Other reasons for us to use TypeScript were, that it gives us the abbility to use Overwolfs TypeScript declaration file and early bug spotting during the compile stage.',
            'App': 'Our goal was to make a highly customizable overlay which the user can customize to their own preferences. The features of the app include the abiliy to get the statistics of the players in your game lobby, the tracking of statistics such as daily and weekly K/D and Win/Loss ratios. Furthermore you can revisit your played games and see your performance round by round. In terms of customising the overlay you can change tho color theme and chose with statistics to show ingame on the overlay.',
        },
        'images': {
            'title0': 'logo-overwolf',
            'Code': 'logo-scss-typescript',
        }
    },
    'portfolio_website': {
        'date': 'current',
        'description': 'My current portfolio website. Aka my coding sandbox for trying new programming languages and frameworks.',
        'index': 'portfolio_website',
        'links': {
            'Portfolio GitHub': 'https://github.com/TychoBrouwer/Portfolio',
        },
        'tags': [
            'featured',
            'website',
        ],
        'title': 'Portfolio Website',
        'content': {},
        'images': {},
    },
    'r6lookup_website': {
        'date': '29 December 2020',
        'description': 'A Rainbow Six Siege statistics website for searching your and your enemies game statistics.',
        'index': 'r6lookup_website',
        'links': {
            'R6Lookup GitHub': 'https://github.com/TychoBrouwer/R6Lookup-Website',
            'StatsDB Website': 'https://statsdb.net/',
        },
        'tags': [
            'website',
        ],
        'title': 'R6Lookup Website',
        'content': {
            'title0': 'This project originaly started as a small project to be able to check my own statistics and progression in Rainbow Six Siege. After I was unhappy with the currently available website that where serving the ability to check Rainbow Six Sieghe player statistics. After I while I started working on it with JocularMarrow. This was the begining of the accual website. The website is currently discontinued, because we decided to solely focus on de Overwolf overlay and work together with StatsDB.',
            'Code': 'This project was my first experience with working with PHP. And my first mayor project using HTML5, JavaScript and SCSS. Because I was quite the beginner at coding I had to clean up the code a lot after I got better at working with PHP. If I would start over I would like to believe the project would have been a lot less complex and messy.',
        },
        'images': {
            'title0': 'logo-r6lookup',
            'Code': 'php-logo',
        },
    },
    'aquazoo_leerdam': {
        'date': 'current',
        'description': 'Een schoolproject in opdracht van Hans van Dam van AquaZoo Leerdam om de aquariumlichten van een afstand te besturen.',
        'index': 'aquazoo_leerdam',
        'links': {
            'AquaZoo Project GitHub': 'https://github.com/TychoBrouwer/AquaZoo-Leerdam',
        },
        'tags': [
            'featured',
            'technasium',
            'arduino',
        ],
        'title': 'AquaZoo Leerdam',
        'content': {
            'title0': 'Dit is een project namens de opdrachtgever AquaZoo Leerdam. Omdat AquaZoo met meerdere vrijwilligers werkt en het aquarium dus niet altijd door dezelfde persoon afgesloten wordt. Hierdoor kan er niet altijd gegarandeerd worden of gecontroleerd worden, dat de aquariumlampen op de juiste stand zijn gezet bij het afsluiten. Wij hadden daarom de opdracht gekregen om een systeem te ontwikkelen waarmee AquaZoo Leerdam de lichten van hun aquariums op afstand kan besturen. Binnen het project had ik de taak van het programmeren en ontwikkelen van het Arduino prototype en code. Dit project heb ik samengewerkt met Cain Woestenburg en David Bagijn. Die zich vooral gefocused hebben op het vooronderzoek naar bestaande oplossingen.',
            'Meesterproef': 'De Meesterproef is een eindexamenproject van het vak O&O. Hoet doel van het project is dat de leering alle vaardigheden laat zien die nodig zijn om een technasiumleerling te zijn. Tijdens dit project wordt er weinig door de docenten geregeld en moet de leerling dus veel zelfstandigheid laten zien. Zo moeten de groepjes zelf een opdracht met een opdrachtgever regelen. Een gedeelte van de Meesterproef vormt het profielwerkstuk.',
            'Het Product': 'Ons product maakt gebruik van een Arduino Mega 2560 om de lichten te kunnen besturen. Om de Arduino op afstand te kunnen besturen hebben we met behulp van een Ethernet Shield een webserver opgezet. De webserver is beschermt met een wachtwoord. Via de webserver kunnen de lampen via de Arduino worden aangestuurd. AquaZoo wilde ook de mogelijkheid hebben om te kunnen controlleren wanneer en wie de lampen heeft bestuurd. Hiervoor slaan we de logs op op een SD-kaart met een timestamp die wordt verkregen door een RTC-module.',
            'title1': 'Voor het product hebben we ook een behuizing ontworpen en 3D-geprint. We hebben het ontwerp voor de behuizing gemaakt met behulp van blender. Het ontwerp is geëxporteerd als STL om het te kunnen printen met de 3D-printer op school. Met het 3D-printen liepen we tegen meerdere obstakels op, zoals een niet goed afgesteld printbed en een slechte toevoeg van het filament.',
            'titleimage0': '',
            'Competenties': '<strong>Productgerichtheid</strong><br>Het belangrijkste doel van dit project bestond uit het ontwikkelen van het prototype. Aangezien ik daar veel werk en aandacht aan heb besteed vind ik dat ik goed productgericht heb gewerkt. Hierbij hebben we constant contact gehad met de opdrachtgever en ons gehouden aan het Programma van Eisen, om ervoor te zorgen dat ons prototype voldeed aan de eisen en wensen van de opdrachtgever.<br><strong>Individueel werken</strong><br>Doordat het grootste deel van de periode van het project tijdens de Corona lockdown en maatregelen heeft plaatsgevonden, hebben we veel individueel moeten werken. Hierbij hebben we uiteraard veer contact gehad met elkaar en de opdrachtgever en een goede takenverdeling gemaakt, wat natuurlijk van belang is om goed individueel te kunnen werken.<br><strong>Doorzetten</strong><br>Ook vind ik dat we als groepje op verschillende gebieden goed hebben doorgezet om tot een goed einde te komen. Zo verliep de start aan het project niet heel soepel, mede omdat we geen opdrachtgever konden vinden. Maar na veel doorzetten en mails versturen naar potentiële opdrachtgevers hebben we toch een opdracht kunnen vinden. Een ander gebied waar ik vind dat we goed doorgezet hebben is bij het 3D-printen, hieraan hebben meer dan een week iedere dag op school eraan gewerkt om het maar geprint te krijgen. Uiteindelijk hebben we ook hiervoor een oplossing gevonden. Als laatste vind ik dat ik zelf goed heb doorgezet met het programmeren van de code voor de Arduino. Programmeren is altijd veel testen en uitproberen. Mede omdat ik het zelf ook erg leuk vind heb ik hieraan hele dagen aan doorgewerkt om uiteindelijk tot een werkend prototype te komen.',
        },
        'images': {
            'title0': 'logo-aquazoo',
            'Het Product': 'arduino-mega2560',
            'titleimage0': 'aquazoo-prototype',
        }
    },
    'b4_techniek_circulair': {
        'date': '30 June 2020',
        'description': 'Een school onderzoek namens B4 Techniek naar de mogelijkheden voor B4 Techniek om een cirulaire leverancier te worden.',
        'index': 'b4_techniek_circulair',
        'links': {},
        'tags': [
            'technasium',
        ],
        'title': 'B4 Techniek Circulair',
        'content': {
            'Circulaire Leverancier': 'Marieke Melten heeft ons namens B4 Techniek de opdracht gegeven om van B4 Techniek een cirulaire leverancier te worden. Het probleem is dat het meubilair wat B4 verzorgt niet gerecycled en weinig hergebruikt wordt. Dit komt mede doordat de materialen die gebruikt worden moeilijk te scheiden zijn. B4 wil graag een circulaire leverancier worden. De opdracht was dus: Wat kunnen we ontwikkelen waardoor B4 een circulaire leverancier kan worden?',
            'Bezoek B4': 'We konden door de Corona lockdown niet bij B4 Techniek in Giesen op bezoek, maar we hebben wel alle voorbereiding gedaan voor het bezoek. We hebben meerdere vragen en ideeën bedacht. Een deel van deze vragen hebben we later via WhatsApp wel kunnen vragen een van de monteurs van B4 Techniek, Richard van Bijnen.',
            'Onderzoek': 'Uit het onderzoek is gebleken dat de meubels vooral niet gerecycled worden, omdat de materialen niet te scheiden zijn. Daarom hebben we vooral onderzoek gedaan naar alternatieven voor de huidige materialen van de B4 tafels. Zodat de meubels wel te scheiden en recyclen zijn. Daarvoor hebben we eerst aan de monteur gevraagd welk materiaal op dit moment wordt gebruikt voor de tafels, zodat we een passend alternatief op het huidige materiaal konden vinden, daarop kregen we het antwoord dat het vaak een spaanplaat met een HPL toplaag is. HPL is eigenlijk alleen thermisch te recyclen, dat is het verbranden van het materiaal om er energie uit te halen. Een andere oplossing zou het hergebruiken kunnen zijn in een of andere vorm.',
            'Conclusie': 'Door Corona is het onderzoek naar duurzame materialen en circulaire economie korter dan bedoelt en hebben we bijvoorbeeld niet een deel van het tafelblad, wat we bij B4 zouden ophalen, kunnen onderzoeken. We zijn er wel achter gekomen dat er geen makkelijke oplossing is voor het probleem, omdat de tafels tegen veel verschillende chemische stoffen resistent moet zijn. Daarom denken wij dat er vooral gekeken moet worden naar het hergebruiken en het langer maken van de levensduur van de meubels.',
            'Competenties': '<strong>Individueel werken</strong><br>Mede door Corona hebben we veel individueel thuis moeten werken. Zo heb ik vooral gewerkt aan het zoeken van eventuele materialen om het huidige materiaal van de tafels mee te verplaatsen. Ook heb ik nagedacht over mogelijkheden voor het scheiden van het houten deel van de tafel en de plastic coating.<br><strong>Kennisgerichtheid</strong><br>Dit project was vooral gericht op het zoeken naar een theoretische oplossing. Het was dus belangrijk dat er goed onderzoek gedaan werd. Zo hebben we veel informatie opgezocht over de huidige situatie en bestaande oplossingen. Hierbij kwamen we onder andere tot de conclusie dat er niet veel bestaande mogelijkheden zijn.',
        },
        'images': {
            'Circulaire Leverancier': 'logo-b4techniek',
            'Onderzoek': 'ladder-van-lansink',
        }
    },
    'rolstoel_stappenteller': {
        'date': '13 December 2019',
        'description': 'Een school project en onderzoek naar de mogelijkheden rond het fitness tracken van fysiek beperkte mensen.',
        'index': 'rolstoel_stappenteller',
        'links': {
            'Rolstoel Project GitHub': 'https://github.com/TychoBrouwer/Rolstoel-Project',
        },
        'tags': [
            'technasium',
        ],
        'title': 'Rolstoel Stappenteller',
        'content': {
            'title0': 'Dit project is in opdracht van Arjan Sterk, namens het bedrijf Motion Power. Hierbij hebben we de opdracht gekregen om een prototype te maken voor een fitnesstracker voor rolstoelgebruikers en mensen met een fysieke beperking. Om dit te realiseren hebben we eerst onderzoek gedaan naar welke mogelijkheden die mensen wel nog hebben bij het sporten. Ook hebben we onderzoek gedaan naar bestaande oplossingen voor fitnesstrackers. Bij het onderzoek kwamen we erachter dat er verschillende trackers die zeggen geschikt te zijn voor fisiek beperkte mensen, maar bij deze producten zullen de fucties voor rolstoelgebruikers altijd op de tweede plek staan.',
            'Product': 'Voor het eindproduct hebben we een prototype gemaakt voor een rolstoel stappenteller. Hij kan het aantal rotaties van een rolstoel tellen doormiddel van een gyroscoop aangesloten op een Arduino Uno. We hebben ook gekeken naar het toevoegen van een hartslagmeter, maar mede door beperkte tijd en de obstakels met de hardware is het niet gelukt om de hartslagmeter betrouwbaar te maken. Bovendien zijn er al betrouwbare hartslagmeters beschikbaar voor fysiek gehandicapte mensen die te combineren zijn met fitnesstrackers.',
            'Competenties': '<strong>Doorzetten</strong><br>Bij het ontwikkelen van het prototype zijn we tegen veel tegenslagen gelopen. Er waren veel obstakels met de gyroscoop de hartslagmeter en het verzamelen van de gegevens door de Arduino. Zo had de gyroscoop last van drift, dit is wanneer een gyroscoop uit de lijn raakt. Drift kan voor een groot deel uit de data gefilterd worden door een Kalman filter op de gegevens toe te passen.<br><strong>Productgerichtheid</strong><br>Bij dit project hebben we goed gewerkt aan het ontwikkelen van het prototype. Hiervoor hebben veel nagedacht over wat de beste oplossing kan zijn voor het prototype en goed gekeken naar de eisen en wensen van de opdrachtgever.',
        },
        'images': {
            'title0': 'logo-motionpower',
        }
    },
    'plastic_soep': {
        'date': '23 September 2019',
        'description': 'Een school project namens het bedrijf de Waardemakers om een kenniscentrum op te zetten op het gebied van plastics in Gorinchem.',
        'index': 'plastic_soep',
        'links': {},
        'tags': [
            'technasium',
        ],
        'title': 'Plasic Soep',
        'content': {
            'title0': 'We hebben van Martin Bakker, namens het bedrijf de Waardemakers, de opdracht gekregen om met technasium een kenniscentrum over het plastic in Gorinchem op te richten. Onze bijdrage aan dit kenniscentrum is bedoelt om het plastic in Gorinchem in kaart te brengen. Hiermee kunnen volgende klassen verder met het onderzoeken naar het plastic in Gorinchem en naar oplossingen ervoor zoeken.',
            'Probleem': 'In het begin was het probleem nog erg onduidelijk. Om dit probleem in kaart te brengen hebben we een onderzoek uitgevoerd naar het zwerfafval in Gorinchem. Hiervoor hebben we in groepjes van twee een route door gorinchem te lopen. Hierbij hebben we al het gevonden plastic gefotografeerd en in kaart gebracht. Maar natuurlijk is een groot deel van het plastic in de natuur in de vorm van microplastics, die niet met het blote oog te zien zijn. Dit maakt het moeilijk om het probleem goed in wkaart te brengen. Ook maakt dit het moeilijk om het probleem over te brengen en communiseren naar het publiek.',
            'Onderzoek': 'Bij dit project hebben we ook veel onderzoek gedaan naar bestaande oplossingen voor het opruimen van plastic in de natuur en naar de herkomst van het plastic dat door Gorinchem komt. Daarbij is gekeken naar de verschillende rivieren die langs en door Goinchem stromen en andere bronnen van plastic.',
            'Competenties': '<strong>Samenwerken</strong><br>Voor dit project hebben we veel moeten samenwerken tussen de verschillende groepjes om samen één kenniscentrum op te zetten. Hierbij hebben we goed moeten coördineren om niet dubbel onderzoek tussen de groepjes te doen. Zo hebben we aan het begin van het project goed overlegd welk groepje wat gaat onderzoeken.<br><strong>Kennisgerichtheid</strong><br>Dit project was volledig gericht op het onderzoek doen. Om het plastic probleem in Gorinchem eerst in kaart te brengen hebben we samen met alle groepjes een onderzoek gedaan gedaan naar hoeveel zwerfafval er nou echt in Gorinchem is. Daarna hebben we uitgebreid onderzoek gedaan naar de mogelijkheden voor het opruimen van het zwerfafval.',
        },
        'images': {
            'Probleem': 'microplatics-gorinchem',
            'Onderzoek': 'de-rijn-bron',
        }
    },
    'b4_techniek_meubels': {
        'date': '24 June 2019',
        'description': 'Een onderzoek met als doel om B4 Techniek advies te geven op het gebied van het verduurzamen van BiNaS-lokalen.',
        'index': 'b4_techniek_meubels',
        'links': {},
        'tags': [
            'technasium',
        ],
        'title': 'B4 Techniek Meubilair',
        'content': {
            'title0': 'Dit project heeft als doel om B4 Techniek advies en informatie te geven over hoe B4 Techniek een circulaire leverancier kan worden. B4 Techniek is een elektrotechnisch installatiebedrijf voor BiNaS-lokalen. Ze installeren onder andere de gas en water installaties, maar maken ook speciaal meubilair voor BiNaS lokalen.',
            'Onderzoek': 'Wij hebben gekozen om vooral onderzoek te doen naar het milieuvriendelijker maken van de tafels. Uit ons onderzoek is gebleken dat daar veel te verbeteren is. Zo is de coating van de tafelbladen, die het onder andere beschermt tegen verschillende chemische stoffen, bijna onmogelijk te scheiden van de houten basis. Maar ook deze basis is een miz van houtsnippers en lijm en is dus moeilijk te recyclen',
            'Conclusie': 'Uit ons onderzoek is gebleken dat er op het gebied van duurzame chemisch resistente coatings weinig ontwikkeled is. Mede omdat het materiaal chemisch resistent is het moeilijk het materiaal zelf te recyclen. Wel kan er gekeken worden naar het hergebruiken van de coatings of de houten basis. Hiervoor moet er wel een oplossing bedacht worden om die van elkaar te scheiden . Door bijvoorbeeld een clicksysteem te ontwikkelen waarmee de basis en de coating makelijk te scheiden en hergebruiken zijn.',
            'Competenties': '<strong>Samenwerken</strong><br>Bij dit project hebben we veel moeten zoeken naar bestaande producten en oplossingen. wij hebben hierbij goed samengewerkt aan het onderzoeken naar mogelijkheden.<br><strong>Procesgerichtheid</strong><br>Voor dit project hebben we veel moeite gestoken in het scrummen en het documenteren van het proces. Zo hebben we sprints bijgehouden van twee weken en aan het begin van elke sprint goed bepaalt wat we die sprint gaan doen.',
        },
        'images': {
            'title0': 'logo-b4techniek',
            'Conclusie': 'binas-lokaal',
        }
    },
    'keuze_koffiebekers': {
        'date': '4 Januari 2019',
        'description': 'Een onderzoek naar welk materiaal koffiebeker voor een bedrijf het meest milieuvriendelijkst zou zijn.',
        'index': 'keuze_koffiebekers',
        'links': {},
        'tags': [
            'technasium',
        ],
        'title': 'Keuze van de Koffiebeker',
        'content': {
            'title0': 'Dit project is in opdracht van Coffeebased. Het project heeft als doel om vast te stellen welke soort koffiebeker het milieuvriendelijkst is voor verschillende soorten en grootte bedrijven. Hierbij hebben we eerst gekeken naar of de imago\'s van de verschillende koffiebekers terecht waren of niet. Daarna hebben we onderzoek gedaan naar feiten. Hieruit hebben we uiteindelijk een conclusie getrokken over welke koffiebeker het milieuvriendelijkst is. Hierbij hebben we gekeken naar onder andere de productie en het gebruik van de beker. Zo is bijvoorbeeld het produceren van een porsoleine beker vrij zwaar op het milieu en moet deze in een vaatwasser worden schoongemaakt. Een plasitic of andere wegwerpbekers zijn daarintegen licht voor het milieu om te procuceren, maar zijn ze single use en kunnen ze na het weggooien zorgen voor milieuvervuiling en bijdragen aan bijvoorbeeld de plasticsoep in de oceanen.',
            'Onderzoek': 'Bij dit project stond het onderzoeken centraal. Voor dit onderzoek hebben we veel bestaande onderzoeken en gegevens gezocht. Om deze informatie goed over te brengen hebben we met Google Sites een informaiesite gemaakt met onze conclusies en beredeneringen. Hierbij hebben we verschillende adviesen gegeven voor de verschillende grootte en soorten bedrijven.',
            'Competenties': '<strong>Samenwerken</strong><br>Bij dit project hebben we veel samen moeten werken en moeten communiseren met elkaar. Doordat dit goed is gegaan zijn we samen tot de conclusie, waar we allemaal tevreden over zijn, gekomen.<br><strong>Kennisgerichtheid</strong><br>Omdat dit project gericht is op onderzoek was het belangrijk dat er goed en veel onderzoek werd gedaan. Ik vind dat dit onderzoek goed is gegaan.',
        },
        'images': {
            'title0': 'best-coffee-cups',
        }
    },
    'flexibele_woonvormen': {
        'date': '5 November 2018',
        'description': 'Een project met als doel om een plan te maken voor flexibele woonvormen in de gemeente Gorinchem.',
        'index': 'flexibele_woonvormen',
        'links': {},
        'tags': [
            'technasium',
        ],
        'title': 'Flexibele Woonvormen',
        'content': {
            'title0': 'Dit project is in opdracht van de gemeente Gorinchem. De opdracht van de gemeente is om een flexibel woningcomplex te ontwikkelen voor het gebied tussen de brandweer kazerne in Gorinchem en het Corbion in Gorinchem. Op dit terein staan nu oude loodsen. Als eerste hebben we een Programma van Eisen gemaakt. Daarin waren de belangrijkste eisen voor de indeling van het gebied, dat de woningen bestemd zouden zijn voor ouderen en starters. Wij hebben hiervoor een indeling gemaakt met een combinatie van twee-onder-een-kapwoningen en appartementen. Ook hebben we nagedacht over de duurzaamheid van de woiningen en de indeling van de collectieve ruimtes. Hiervoor hebben we bijvoorbeeld een parkje in de woonwijk geplaatst. Als product hebben we een maquette gemaakt van een eventueel plan voor deze woonwijk.',
            'Competenties': '<strong>Productgerichtheid</strong><br>Bij dit project hebben we vanaf het begin af aan goed nagedacht over het eindproduct, de maquette. Tijdens het project hebben we ook verbeteringen en aanpassing gemaakt om het eindproduct te verbeteren. Ook hebben we constant rekening gehouden met het Programma van Eisen. Hierdoor hebben we uiteindelijk een goed product geleverd.<br><strong>Samenwerken</strong><br>Tijdens dit porject hebben we veel moeten samenwerken met het ontwerpen van de maquette en het onderzoek. Omdat we het scrummen goed hebben bijgehouden was het ook gemakelijk om goed samen te werken en de taken te verdelen.',
        },
        'images': {
            'title0': 'logo-gemeente-gorinchem',
        }
    },
};
exports.projects = projects;
const projectTypes = {
    'featured': [
        'aquazoo_leerdam',
        'statsdb_overlay',
        'portfolio_website',
    ],
    'techProjects': [
        'aquazoo_leerdam',
        'b4_techniek_circulair',
        'rolstoel_stappenteller',
        'plastic_soep',
        'b4_techniek_meubels',
        'keuze_koffiebekers',
        'flexibele_woonvormen',
    ],
    'freetimeProjects': [
        'statsdb_overlay',
        'portfolio_website',
        'r6lookup_website',
    ],
};
exports.projectTypes = projectTypes;
const projectTypeNames = {
    'featured': 'Featured',
    'techProjects': 'Technasium Projects',
    'freetimeProjects': 'Free-Time Projects',
};
exports.projectTypeNames = projectTypeNames;
const pages = {
    'about': {
        'content': {
            'title0': '119819@mymerewade.nl<br>tychobrouwer33@gmail.com',
            'title1': 'Fortes Lyceum, Gorinchem<br>Technasium jaar 4, 5 en 6',
            'title2': '<strong>My GitHub: </strong><a href="https://github.com/TychoBrouwer" target="_blank" rel="noreferrer" class="blankLink">https://github.com/TychoBrouwer</a>',
        },
        'images': {}
    }
};
exports.pages = pages;
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
exports.monthNames = monthNames;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9uYXZpZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9vZGstdHMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9wcm9qZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvdmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxnR0FBZ0Q7QUFDaEQsc0dBQStDO0FBQy9DLHVGQUFxQztBQUNyQyxzR0FBdUU7QUFFdkUsTUFBTSxJQUFJO0lBQ047SUFFQSxDQUFDO0lBRVksU0FBUyxDQUFDLE1BQU07O1lBQ3pCLE9BQU8sSUFBSSxPQUFPLENBQVcsQ0FBTyxPQUFPLEVBQUUsRUFBRTtnQkFDM0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLGlCQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLGlCQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUUzRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRWpCLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxFQUFDO1FBQ04sQ0FBQztLQUFBO0NBQ0o7QUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQztBQUMzQixNQUFNLFFBQVEsR0FBRyxJQUFJLHFCQUFTLENBQUM7QUFFL0IsU0FBZSxnQkFBZ0I7O1FBQzNCLE9BQU8sSUFBSSxPQUFPLENBQVcsQ0FBTyxPQUFPLEVBQUUsRUFBRTtZQUMzQyxLQUFLLE1BQU0sV0FBVyxJQUFJLHdCQUFZLEVBQUU7Z0JBQ3BDLElBQUksd0JBQVksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQzFDLE1BQU0sUUFBUSxHQUFHLHdCQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRTNDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRXJDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUN0QyxNQUFNLE9BQU8sR0FBRyxJQUFJLHNCQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRTlDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztxQkFDcEY7aUJBQ0o7YUFDSjtZQUVELE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQyxFQUFDO0lBQ04sQ0FBQztDQUFBO0FBRUQsU0FBZSxTQUFTLENBQUMsTUFBYzs7UUFDbkMsT0FBTyxJQUFJLE9BQU8sQ0FBVyxDQUFPLE9BQU8sRUFBRSxFQUFFO1lBQzNDLElBQUksb0JBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxzQkFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUV6QyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUM5QjtpQkFBTTtnQkFDSCxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9CO1lBRUQsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDLEVBQUM7SUFDTixDQUFDO0NBQUE7QUFFRCxnQkFBZ0IsRUFBRTtLQUNiLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDUCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFdkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN0QyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3RDO1lBRUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFaEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUM7S0FDTDtBQUNMLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VQLHlGQUF5QztBQUN6Qyx5R0FBNkQ7QUFFN0QsTUFBYSxTQUFTO0lBQXRCO1FBQ1ksZUFBVSxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFFLENBQUM7UUFDdkUscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBQ2pDLGlCQUFZLEdBQVksSUFBSSxDQUFDO0lBMkR6QyxDQUFDO0lBN0RrRixDQUFDO0lBSW5FLGNBQWMsQ0FBQyxXQUFtQjs7WUFDM0MsT0FBTyxJQUFJLE9BQU8sQ0FBVyxDQUFPLE9BQU8sRUFBRSxFQUFFO2dCQUMzQyxJQUFJLE1BQU0sR0FBVyxFQUFFLENBQUM7Z0JBRXhCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN2QixNQUFNLEdBQUcsUUFBUSxDQUFDO29CQUVsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2lCQUNqQztnQkFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSTsyQkFDZCxXQUFXLHNCQUFzQixNQUFNOzs7aUNBR2pDLDRCQUFnQixDQUFDLFdBQVcsQ0FBQzs7Ozs7OzthQU9qRCxDQUFDO2dCQUVGLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxFQUFDO1FBQ04sQ0FBQztLQUFBO0lBRVksVUFBVSxDQUFDLFlBQW9CLEVBQUUsV0FBbUIsRUFBRSxXQUFtQjs7WUFDbEYsT0FBTyxJQUFJLE9BQU8sQ0FBVyxDQUFPLE9BQU8sRUFBRSxFQUFFO2dCQUMzQyxNQUFNLGNBQWMsR0FBWSxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxXQUFXLEdBQUcsa0JBQWtCLENBQUUsQ0FBQztnQkFDaEcsSUFBSSxNQUFNLEdBQVcsRUFBRSxDQUFDO2dCQUV4QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ25CLE1BQU0sR0FBRyxRQUFRLENBQUM7b0JBRWxCLE1BQU0sT0FBTyxHQUFHLElBQUksc0JBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDL0MsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBRTNCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2lCQUM3QjtnQkFFRCxjQUFjLENBQUMsU0FBUyxJQUFJO3VCQUNqQixZQUFZLGdDQUFnQyxNQUFNOzs7Ozs7NkJBTTVDLFdBQVc7Ozs7YUFJM0IsQ0FBQztnQkFFRixPQUFPLEVBQUUsQ0FBQztZQUNkLENBQUMsRUFBQztRQUNOLENBQUM7S0FBQTtDQUNKO0FBOURELDhCQThEQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFRCx5R0FBdUQ7QUFFdkQsTUFBYSxJQUFJO0lBVWIsWUFBWSxNQUFjLEVBQUUsSUFBWSxFQUFFLFdBQW1CLEVBQUUsSUFBbUIsRUFBRSxPQUFlLEVBQUUsTUFBYyxFQUFFLEtBQWE7UUFDOUgsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCxTQUFTO1FBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBRW5CLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksc0JBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztTQUNuRjtRQUVELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU3QixPQUFPLElBQUksbUJBQW1CLEdBQUcsUUFBUSxHQUFHLFlBQVksQ0FBQztTQUM1RDtRQUVELElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUVyQixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFdkMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBRXJCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUN6QixPQUFPLElBQUksc0RBQXNELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3FCQUNwSTt5QkFBTTt3QkFDSCxPQUFPLEdBQUcsd0RBQXdELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO3FCQUMzSTtpQkFDSjtnQkFFRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLEtBQUssR0FBRyxFQUFFLENBQUM7aUJBQ2Q7cUJBQU07b0JBQ0gsS0FBSyxHQUFHLE9BQU8sS0FBSyxPQUFPLENBQUM7aUJBQy9CO2dCQUVELFdBQVcsSUFBSTt5Q0FDVSxLQUFLO3NCQUN4QixLQUFLO3NCQUNMLE9BQU87OzBCQUVILE1BQU07OztpQkFHZixDQUFDO2FBQ0w7U0FDSjtRQUVELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVuQixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFbkMsU0FBUyxJQUFJLFlBQVksSUFBSSw4Q0FBOEMsS0FBSyxlQUFlLENBQUM7YUFDbkc7U0FDSjtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHOzZCQUNWLElBQUksQ0FBQyxNQUFNOzJCQUNiLElBQUksQ0FBQyxRQUFROzZCQUNYLE9BQU87O3FEQUVpQixJQUFJLENBQUMsZUFBZTtjQUMzRCxXQUFXOzs7Y0FHWCxTQUFTOztTQUVkLENBQUM7SUFDTixDQUFDO0NBQ0o7QUE5RkQsb0JBOEZDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEdELGdGQUE4QjtBQUM5Qix5R0FBcUQ7QUFpQnJELE1BQWEsWUFBWTtJQUdyQixZQUFZLFdBQW1CO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsWUFBWTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQkFBZ0I7UUFDWixNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpLLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFwQkQsb0NBb0JDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENELE1BQU0sUUFBUSxHQUFHO0lBQ2IsaUJBQWlCLEVBQUU7UUFDZixNQUFNLEVBQUUsa0JBQWtCO1FBQzFCLGFBQWEsRUFBRSxvRkFBb0Y7UUFDbkcsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixPQUFPLEVBQUU7WUFDTCxhQUFhLEVBQUUsOENBQThDO1lBQzdELGlCQUFpQixFQUFFLHNCQUFzQjtZQUN6QyxVQUFVLEVBQUUsMkJBQTJCO1NBQzFDO1FBQ0QsTUFBTSxFQUFFO1lBQ0osVUFBVTtZQUNWLEtBQUs7U0FDUjtRQUNELE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsU0FBUyxFQUFFO1lBQ1AsUUFBUSxFQUFFLHNXQUFzVztZQUNoWCxTQUFTLEVBQUUsNldBQTZXO1lBQ3hYLE1BQU0sRUFBRSw2ZUFBNmU7WUFDcmYsS0FBSyxFQUFFLCtlQUErZTtTQUN6ZjtRQUNELFFBQVEsRUFBRTtZQUNOLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLE1BQU0sRUFBRSxzQkFBc0I7U0FDakM7S0FDSjtJQUNELG1CQUFtQixFQUFFO1FBQ2pCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLGFBQWEsRUFBRSwwR0FBMEc7UUFDekgsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixPQUFPLEVBQUU7WUFDTCxrQkFBa0IsRUFBRSwyQ0FBMkM7U0FDbEU7UUFDRCxNQUFNLEVBQUU7WUFDSixVQUFVO1lBQ1YsU0FBUztTQUNaO1FBQ0QsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO0tBQ2Y7SUFDRCxrQkFBa0IsRUFBRTtRQUNoQixNQUFNLEVBQUUsa0JBQWtCO1FBQzFCLGFBQWEsRUFBRSw2RkFBNkY7UUFDNUcsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixPQUFPLEVBQUU7WUFDTCxpQkFBaUIsRUFBRSxrREFBa0Q7WUFDckUsaUJBQWlCLEVBQUUsc0JBQXNCO1NBQzVDO1FBQ0QsTUFBTSxFQUFFO1lBQ0osU0FBUztTQUNaO1FBQ0QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixTQUFTLEVBQUU7WUFDUCxRQUFRLEVBQUUsOGVBQThlO1lBQ3hmLE1BQU0sRUFBRSxzVkFBc1Y7U0FDalc7UUFDRCxRQUFRLEVBQUU7WUFDTixRQUFRLEVBQUUsZUFBZTtZQUN6QixNQUFNLEVBQUUsVUFBVTtTQUNyQjtLQUNKO0lBQ0QsaUJBQWlCLEVBQUU7UUFDZixNQUFNLEVBQUUsU0FBUztRQUNqQixhQUFhLEVBQUUsdUhBQXVIO1FBQ3RJLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsT0FBTyxFQUFFO1lBQ0wsd0JBQXdCLEVBQUUsaURBQWlEO1NBQzlFO1FBQ0QsTUFBTSxFQUFFO1lBQ0osVUFBVTtZQUNWLFlBQVk7WUFDWixTQUFTO1NBQ1o7UUFDRCxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFNBQVMsRUFBRTtZQUNQLFFBQVEsRUFBRSx3dEJBQXd0QjtZQUNsdUIsY0FBYyxFQUFFLCthQUErYTtZQUMvYixhQUFhLEVBQUUsOGdCQUE4Z0I7WUFDN2hCLFFBQVEsRUFBRSxtWEFBbVg7WUFDN1gsYUFBYSxFQUFFLEVBQUU7WUFDakIsY0FBYyxFQUFFLDRxREFBNHFEO1NBQy9yRDtRQUNELFFBQVEsRUFBRTtZQUNOLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLGFBQWEsRUFBRSxrQkFBa0I7WUFDakMsYUFBYSxFQUFFLG1CQUFtQjtTQUNyQztLQUNKO0lBQ0QsdUJBQXVCLEVBQUU7UUFDckIsTUFBTSxFQUFFLGNBQWM7UUFDdEIsYUFBYSxFQUFFLHdIQUF3SDtRQUN2SSxPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLE9BQU8sRUFBRSxFQUFFO1FBQ1gsTUFBTSxFQUFFO1lBQ0osWUFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxTQUFTLEVBQUU7WUFDUCx3QkFBd0IsRUFBRSw2YkFBNmI7WUFDdmQsV0FBVyxFQUFFLHlUQUF5VDtZQUN0VSxXQUFXLEVBQUUsNHRCQUE0dEI7WUFDenVCLFdBQVcsRUFBRSxtZkFBbWY7WUFDaGdCLGNBQWMsRUFBRSxpc0JBQWlzQjtTQUNwdEI7UUFDRCxRQUFRLEVBQUU7WUFDTix3QkFBd0IsRUFBRSxpQkFBaUI7WUFDM0MsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQztLQUNKO0lBQ0Qsd0JBQXdCLEVBQUU7UUFDdEIsTUFBTSxFQUFFLGtCQUFrQjtRQUMxQixhQUFhLEVBQUUsNEdBQTRHO1FBQzNILE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsT0FBTyxFQUFFO1lBQ0wseUJBQXlCLEVBQUUsa0RBQWtEO1NBQ2hGO1FBQ0QsTUFBTSxFQUFFO1lBQ0osWUFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFLHdCQUF3QjtRQUNqQyxTQUFTLEVBQUU7WUFDUCxRQUFRLEVBQUUsNG9CQUE0b0I7WUFDdHBCLFNBQVMsRUFBRSwwZ0JBQTBnQjtZQUNyaEIsY0FBYyxFQUFFLDRxQkFBNHFCO1NBQy9yQjtRQUNELFFBQVEsRUFBRTtZQUNOLFFBQVEsRUFBRSxrQkFBa0I7U0FDL0I7S0FDSjtJQUNELGNBQWMsRUFBRTtRQUNaLE1BQU0sRUFBRSxtQkFBbUI7UUFDM0IsYUFBYSxFQUFFLGtJQUFrSTtRQUNqSixPQUFPLEVBQUUsY0FBYztRQUN2QixPQUFPLEVBQUUsRUFBRTtRQUNYLE1BQU0sRUFBRTtZQUNKLFlBQVk7U0FDZjtRQUNELE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFNBQVMsRUFBRTtZQUNQLFFBQVEsRUFBRSxvWUFBb1k7WUFDOVksVUFBVSxFQUFFLDRsQkFBNGxCO1lBQ3htQixXQUFXLEVBQUUsNFNBQTRTO1lBQ3pULGNBQWMsRUFBRSxxdEJBQXF0QjtTQUN4dUI7UUFDRCxRQUFRLEVBQUU7WUFDTixVQUFVLEVBQUUsd0JBQXdCO1lBQ3BDLFdBQVcsRUFBRSxjQUFjO1NBQzlCO0tBQ0o7SUFDRCxxQkFBcUIsRUFBRTtRQUNuQixNQUFNLEVBQUUsY0FBYztRQUN0QixhQUFhLEVBQUUsaUhBQWlIO1FBQ2hJLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsT0FBTyxFQUFFLEVBQUU7UUFDWCxNQUFNLEVBQUU7WUFDSixZQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFNBQVMsRUFBRTtZQUNQLFFBQVEsRUFBRSxnVUFBZ1U7WUFDMVUsV0FBVyxFQUFFLG9aQUFvWjtZQUNqYSxXQUFXLEVBQUUsbWZBQW1mO1lBQ2hnQixjQUFjLEVBQUUsNGNBQTRjO1NBQy9kO1FBQ0QsUUFBUSxFQUFFO1lBQ04sUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsY0FBYztTQUM5QjtLQUNKO0lBQ0Qsb0JBQW9CLEVBQUU7UUFDbEIsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QixhQUFhLEVBQUUsd0dBQXdHO1FBQ3ZILE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsT0FBTyxFQUFFLEVBQUU7UUFDWCxNQUFNLEVBQUU7WUFDSixZQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLFNBQVMsRUFBRTtZQUNQLFFBQVEsRUFBRSxpNUJBQWk1QjtZQUMzNUIsV0FBVyxFQUFFLHVXQUF1VztZQUNwWCxjQUFjLEVBQUUsMlpBQTJaO1NBQzlhO1FBQ0QsUUFBUSxFQUFFO1lBQ04sUUFBUSxFQUFFLGtCQUFrQjtTQUMvQjtLQUNKO0lBQ0Qsc0JBQXNCLEVBQUU7UUFDcEIsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixhQUFhLEVBQUUsbUdBQW1HO1FBQ2xILE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsT0FBTyxFQUFFLEVBQUU7UUFDWCxNQUFNLEVBQUU7WUFDSixZQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLFNBQVMsRUFBRTtZQUNQLFFBQVEsRUFBRSx3eUJBQXd5QjtZQUNsekIsY0FBYyxFQUFFLHVuQkFBdW5CO1NBQzFvQjtRQUNELFFBQVEsRUFBRTtZQUNOLFFBQVEsRUFBRSx5QkFBeUI7U0FDdEM7S0FDSjtDQUNKLENBQUM7QUE4Q0UsNEJBQVE7QUE1Q1osTUFBTSxZQUFZLEdBQUc7SUFDakIsVUFBVSxFQUFFO1FBQ1IsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixtQkFBbUI7S0FDdEI7SUFDRCxjQUFjLEVBQUU7UUFDWixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4QixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7S0FDekI7SUFDRCxrQkFBa0IsRUFBRTtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGtCQUFrQjtLQUNyQjtDQUNKLENBQUM7QUF5QkUsb0NBQVk7QUF2QmhCLE1BQU0sZ0JBQWdCLEdBQUc7SUFDckIsVUFBVSxFQUFFLFVBQVU7SUFDdEIsY0FBYyxFQUFFLHFCQUFxQjtJQUNyQyxrQkFBa0IsRUFBRSxvQkFBb0I7Q0FDM0MsQ0FBQztBQW9CRSw0Q0FBZ0I7QUFsQnBCLE1BQU0sS0FBSyxHQUFHO0lBQ1YsT0FBTyxFQUFFO1FBQ0wsU0FBUyxFQUFFO1lBQ1AsUUFBUSxFQUFFLGtEQUFrRDtZQUM1RCxRQUFRLEVBQUUsdURBQXVEO1lBQ2pFLFFBQVEsRUFBRSw4SkFBOEo7U0FDM0s7UUFDRCxRQUFRLEVBQUUsRUFBRTtLQUNmO0NBQ0osQ0FBQztBQVVFLHNCQUFLO0FBUlQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU07SUFDeEUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVO0NBQ2pFLENBQUM7QUFPRSxnQ0FBVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3B1YmxpYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IFByb2plY3RDbGFzcyB9IGZyb20gJy4vb2RrLXRzL3Byb2plY3QnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuL29kay10cy9uYXZpZ2F0b3InO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9vZGstdHMvcGFnZSc7XHJcbmltcG9ydCB7IHByb2plY3RzLCBwcm9qZWN0VHlwZXMsIHBhZ2VzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XHJcblxyXG5jbGFzcyBNYWluIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcHJpbnRQYWdlKHBhZ2VJZCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlKHBhZ2VJZCwgJycsICcnLCBbXSwgcGFnZXNbcGFnZUlkXS5jb250ZW50LCBwYWdlc1twYWdlSWRdLmltYWdlcywgJycpO1xyXG5cclxuICAgICAgICAgICAgcGFnZS5wcmludFBhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYWluQ2xhc3MgPSBuZXcgTWFpbjtcclxuY29uc3QgbmF2Q2xhc3MgPSBuZXcgTmF2aWdhdG9yO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJpbnRQcm9qZWN0c05hdigpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3RUeXBlIGluIHByb2plY3RUeXBlcykge1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdFR5cGVzLmhhc093blByb3BlcnR5KHByb2plY3RUeXBlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0VHlwZXNbcHJvamVjdFR5cGVdO1xyXG5cclxuICAgICAgICAgICAgICAgIG5hdkNsYXNzLm5ld1Byb2plY3RUeXBlKHByb2plY3RUeXBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q2xhc3MocHJvamVjdHNbaV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuYXZDbGFzcy5uZXdQcm9qZWN0KHByb2plY3QucHJvamVjdEluZGV4KCksIHByb2plY3QucHJvamVjdFRpdGxlKCksIHByb2plY3RUeXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJpbnRQYWdlKHBhZ2VJZDogc3RyaW5nKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3RzW3BhZ2VJZF0pIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q2xhc3MocGFnZUlkKTtcclxuXHJcbiAgICAgICAgICAgIHByb2plY3QucHJpbnRQcm9qZWN0UGFnZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1haW5DbGFzcy5wcmludFBhZ2UocGFnZUlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbnByaW50UHJvamVjdHNOYXYoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdlBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdlBhZ2UnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZQYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuYXZQYWdlID0gbmF2UGFnZXNbaV07XHJcblxyXG4gICAgICAgICAgICBuYXZQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZQYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hdlBhZ2UgPSBuYXZQYWdlc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBuYXZQYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHByaW50UGFnZShuYXZQYWdlLmlkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdENsYXNzIH0gZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IHsgcHJvamVjdFR5cGVOYW1lcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy92YXJpYWJsZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvciB7XHJcbiAgICBwcml2YXRlIHByb2plY3REaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RDb250YWluZXInKSE7O1xyXG4gICAgcHJpdmF0ZSBmaXJzdFByb2plY3RUeXBlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgZmlyc3RQcm9qZWN0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbmV3UHJvamVjdFR5cGUocHJvamVjdFR5cGU6IHN0cmluZyk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdFByb2plY3RUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSAnYWN0aXZlJztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0UHJvamVjdFR5cGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0RGl2LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPScke3Byb2plY3RUeXBlfScgY2xhc3M9J25hdk9iamVjdCAke2FjdGl2ZX0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdlRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2TmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Byb2plY3RUeXBlTmFtZXNbcHJvamVjdFR5cGVdfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2RHJvcERvd25EaXYnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG5ld1Byb2plY3QocHJvamVjdEluZGV4OiBzdHJpbmcsIHByb2plY3ROYW1lOiBzdHJpbmcsIHByb2plY3RUeXBlOiBzdHJpbmcpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUeXBlRGl2OiBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9qZWN0VHlwZSArICcgLm5hdkRyb3BEb3duRGl2JykhO1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0UHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gJ2FjdGl2ZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q2xhc3MocHJvamVjdEluZGV4KTtcclxuICAgICAgICAgICAgICAgIHByb2plY3QucHJpbnRQcm9qZWN0UGFnZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RQcm9qZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByb2plY3RUeXBlRGl2LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9JyR7cHJvamVjdEluZGV4fScgY2xhc3M9J25hdkRyb3BEb3duIG5hdlBhZ2UgJHthY3RpdmV9Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdlRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZJY29uJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2TmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cHJvamVjdE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgbW9udGhOYW1lcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy92YXJpYWJsZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2Uge1xyXG4gICAgcHJpdmF0ZSBwYWdlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgcGFnZUlkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHBhZ2VkYXRlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHBhZ2VEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwYWdlVGFnczogQXJyYXk8c3RyaW5nPjtcclxuICAgIHByaXZhdGUgcGFnZUNvbnRlbnQ6IE9iamVjdDtcclxuICAgIHByaXZhdGUgcGFnZUltYWdlczogT2JqZWN0O1xyXG4gICAgcHJpdmF0ZSBwYWdlTGlua3M6IE9iamVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYWdlSWQ6IHN0cmluZywgZGF0ZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCB0YWdzOiBBcnJheTxzdHJpbmc+LCBjb250ZW50OiBPYmplY3QsIGltYWdlczogT2JqZWN0LCBsaW5rczogT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5wYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKSE7XHJcbiAgICAgICAgdGhpcy5wYWdlSWQgPSBwYWdlSWQ7XHJcbiAgICAgICAgdGhpcy5wYWdlZGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgdGhpcy5wYWdlRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnBhZ2VUYWdzID0gdGFncztcclxuICAgICAgICB0aGlzLnBhZ2VDb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLnBhZ2VJbWFnZXMgPSBpbWFnZXM7XHJcbiAgICAgICAgdGhpcy5wYWdlTGlua3MgPSBsaW5rcztcclxuICAgIH1cclxuXHJcbiAgICBwcmludFBhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZWRhdGUgPT09ICdjdXJyZW50Jykge1xyXG4gICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhZ2VkYXRlID0gYCR7ZC5nZXREYXRlKCl9ICR7bW9udGhOYW1lc1tkLmdldE1vbnRoKCldfSAke2QuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRhZ0hUTUwgPSAnJztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhZ2VUYWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZyA9IHRoaXMucGFnZVRhZ3NbaV07XHJcblxyXG4gICAgICAgICAgICB0YWdIVE1MICs9IGA8ZGl2IGNsYXNzPVwidGFnICR7dGFnfVwiPjxwPiR7dGFnfTwvcD48L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhZ2VDb250ZW50ID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHRpdGxlIGluIHRoaXMucGFnZUNvbnRlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZUNvbnRlbnQuaGFzT3duUHJvcGVydHkodGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGluZWEgPSB0aGlzLnBhZ2VDb250ZW50W3RpdGxlXTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nSFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFsaW5lYUNsYXNzID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZUltYWdlc1t0aXRsZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGl0bGUuaW5jbHVkZXMoJ2ltYWdlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nSFRNTCArPSBgPGltZyBjbGFzcz1cImFsaW5lYUltYWdlUm93XCIgc3JjPVwiLi9pbWFnZXMvcHJvamVjdHMvJHt0aGlzLnBhZ2VJbWFnZXNbdGl0bGVdfS53ZWJwXCIgYWx0PVwiJHt0aGlzLnBhZ2VJbWFnZXNbdGl0bGVdfVwiPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nSFRNTCA9IGA8ZGl2IGNsYXNzPVwiYWxpbmVhSW1hZ2VcIj48aW1nIHNyYz1cIi4vaW1hZ2VzL3Byb2plY3RzLyR7dGhpcy5wYWdlSW1hZ2VzW3RpdGxlXX0ud2VicFwiIGFsdD1cIiR7dGhpcy5wYWdlSW1hZ2VzW3RpdGxlXX1cIj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUuaW5jbHVkZXMoJ3RpdGxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGA8aDM+JHt0aXRsZX08L2gzPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGFnZUNvbnRlbnQgKz0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VBbGluZWEgJHt0aXRsZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAke3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICR7aW1nSFRNTH1cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHthbGluZWF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFnZUxpbmtzID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHRpdGxlIGluIHRoaXMucGFnZUxpbmtzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VMaW5rcy5oYXNPd25Qcm9wZXJ0eSh0aXRsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLnBhZ2VMaW5rc1t0aXRsZV07XHJcblxyXG4gICAgICAgICAgICAgICAgcGFnZUxpbmtzICs9IGA8YSBocmVmPVwiJHtsaW5rfVwiIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48c3Ryb25nPiR7dGl0bGV9PC9zdHJvbmc+PC9hPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFnZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGgyIGlkPVwicGFnZVRpdGxlXCI+JHt0aGlzLnBhZ2VJZH08L2gyPlxyXG4gICAgICAgIDxwIGlkPVwicGFnZURhdGVcIj4ke3RoaXMucGFnZWRhdGV9PC9wPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlVGFnc1wiPiR7dGFnSFRNTH08L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwicGFnZUNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VBbGluZWEgZGVzY3JpcHRpb25cIj48cD4ke3RoaXMucGFnZURlc2NyaXB0aW9ufTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgJHtwYWdlQ29udGVudH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwicGFnZUxpbmtzXCI+XHJcbiAgICAgICAgICAgICR7cGFnZUxpbmtzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZSc7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XHJcblxyXG5pbnRlcmZhY2UgSVByb2plY3Qge1xyXG4gICAgZGF0ZTogc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIGluZGV4OiBzdHJpbmcsXHJcbiAgICBpbWFnZTogc3RyaW5nLFxyXG4gICAgbGlua3M6IHtcclxuICAgICAgICB2aWV3OiBzdHJpbmcsXHJcbiAgICAgICAgZ2l0aHViOiBzdHJpbmcsXHJcbiAgICB9XHJcbiAgICB0YWdzOiBBcnJheTxzdHJpbmc+LFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGNvbnRlbnQ6IE9iamVjdCxcclxuICAgIGltYWdlczogT2JqZWN0LFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdENsYXNzIHtcclxuICAgIHByaXZhdGUgcHJvamVjdDogSVByb2plY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RzW3Byb2plY3ROYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9qZWN0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdC50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9qZWN0SW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdC5pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcmludFByb2plY3RQYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBuZXcgUGFnZSh0aGlzLnByb2plY3QudGl0bGUsIHRoaXMucHJvamVjdC5kYXRlLCB0aGlzLnByb2plY3QuZGVzY3JpcHRpb24sIHRoaXMucHJvamVjdC50YWdzLCB0aGlzLnByb2plY3QuY29udGVudCwgdGhpcy5wcm9qZWN0LmltYWdlcywgdGhpcy5wcm9qZWN0LmxpbmtzKTtcclxuXHJcbiAgICAgICAgcGFnZS5wcmludFBhZ2UoKTtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBwcm9qZWN0cyA9IHtcbiAgICAnc3RhdHNkYl9vdmVybGF5Jzoge1xuICAgICAgICAnZGF0ZSc6ICcxOCBGZWJydWFyeSAyMDIxJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0EgUmFpbmJvdyBTaXggU2llZ2UgaW5nYW1lIHN0YXRpc3RpY3Mgb3ZlcmxheSBtYWRlIGluIGNvbGxhYm9yYXRpb24gd2l0aCBPdmVyd29sZi4nLFxuICAgICAgICAnaW5kZXgnOiAnc3RhdHNkYl9vdmVybGF5JyxcbiAgICAgICAgJ2xpbmtzJzoge1xuICAgICAgICAgICAgJ1N0YXRzREIgQXBwJzogJ2h0dHBzOi8vd3d3Lm92ZXJ3b2xmLmNvbS9hcHAvU3RhdHNEQi1TdGF0c0RCJyxcbiAgICAgICAgICAgICdTdGF0c0RCIFdlYnNpdGUnOiAnaHR0cHM6Ly9zdGF0c2RiLm5ldC8nLFxuICAgICAgICAgICAgJ092ZXJ3b2xmJzogJ2h0dHBzOi8vd3d3Lm92ZXJ3b2xmLmNvbS8nLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICdmZWF0dXJlZCcsXG4gICAgICAgICAgICAnYXBwJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ1N0YXRzREIgT3ZlcmxheScsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdUaGlzIGlzIGEgcHJvamVjdCBpbiBjb2xhYm9yYXRpb24gd2l0aCBPdmVyd29sZi4gT3ZlcndvbGYgaXMgYSBmcmFtZXdvcmsgdGhhdCBhbGxvd3MgM3JkIHBhcnR5IGRldmVsb3BlcnMgdG8gZWFzaWx5IGJ1aWxkIGdhbWluZyBhcHBzIGFuZCBvdmVybGF5cyBpbiBIVE1MIGFuZCBKYXZhU2NyaXB0LiBUaGUgZ29hbCBvZiB0aGlzIHByb2plY3QgaXMgdG8gY3JlYXRlIGFuIGludHVpdGl2ZSBhbmQgZWFzeSB0byB1c2UgUmFpbmJvdyBTaXggU2llZ2Ugb3ZlcmxheSB0byB0cmFjayBhbmQgc2VlIHBsYXllciBzdGF0aXN0aWNzIGluZ2FtZS4gVGhpcyBwcm9qZWN0IEkgaGF2ZSB0ZWFtZWQgdXAgd2l0aCBKb2N1bGFyTWFycm93LicsXG4gICAgICAgICAgICAnU3RhcnR1cCc6ICdUaGUgcHJvamVjdCBzdGFydGVkIGFmdGVyIHdlIGhhZCBzdGFydGVkIG9uIGEgc3RhdGlzdGljcyB3ZWJzaXRlIGZvciBSYWluYm93IFNpeCBTaWVnZSwgYWZ0ZXIgd2UgaGFkIG1vc3RseSBmaW5pc2hlZCB0aGUgd2Vic2l0ZSB3ZSBkZWNpZGVkIHRvIHN1Ym1pdCBhbiBhcHAgcHJvcG9zYWwgdG8gT3ZlcndvbGYuIE5vdCBhIGxvdCBsYXRlciB3ZSBnb3QgYXBwcm92ZWQgYW5kIHN0YXJ0ZWQgd29ya2luZyBvbiB0aGUgb3ZlcmxheS4gTGF0ZXIgaW4gMjAyMCB3ZSBkZWNpZGVkIHRvIHNjcmFwIHRoZSB3ZWJzaXRlIGFuZCB0ZWFtIHVwIHdpdGggU3RhdHNEQi4gQWZ0ZXIgdGhhdCB3ZSBmb2N1c2VkIHNvbGVseSBvbiB0aGUgb3ZlcmxheS4nLFxuICAgICAgICAgICAgJ0NvZGUnOiAnVGhpcyBwcm9qZWN0IEkgd29ya2VkIHdpdGggSFRNTDUsIFNDU1MgYW5kIFR5cGVTY3JpcHQuIFNDU1Mgd2FzIGNob3NlbiBmb3IgdGhpcyBwcm9qZWN0IGJlY2F1c2UgaXQgaGFzIGFuIGltcHJvdmVkIGVhc2llciB0byBpbnRlcnByZXQgc3ludGF4IGNvbXBhcmVkIHRvIENTUzMuIEFuZCBnaXZlcyB5b3UgdGhlIGFiaWxpdHkgdG8gZWFzaWx5IGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcy4gVHlwZVNjcmlwdCB3YXMgY2hvc2VuIGZvciB0aGlzIHByb2plY3QsIGJlY2F1c2UgT3ZlcndvbGYgaGFzIGEgc2FtcGxlIHByb2plY3Qgd3JpdHRlbiBpbiBUeXBlU2NyaXB0LiBPdGhlciByZWFzb25zIGZvciB1cyB0byB1c2UgVHlwZVNjcmlwdCB3ZXJlLCB0aGF0IGl0IGdpdmVzIHVzIHRoZSBhYmJpbGl0eSB0byB1c2UgT3ZlcndvbGZzIFR5cGVTY3JpcHQgZGVjbGFyYXRpb24gZmlsZSBhbmQgZWFybHkgYnVnIHNwb3R0aW5nIGR1cmluZyB0aGUgY29tcGlsZSBzdGFnZS4nLFxuICAgICAgICAgICAgJ0FwcCc6ICdPdXIgZ29hbCB3YXMgdG8gbWFrZSBhIGhpZ2hseSBjdXN0b21pemFibGUgb3ZlcmxheSB3aGljaCB0aGUgdXNlciBjYW4gY3VzdG9taXplIHRvIHRoZWlyIG93biBwcmVmZXJlbmNlcy4gVGhlIGZlYXR1cmVzIG9mIHRoZSBhcHAgaW5jbHVkZSB0aGUgYWJpbGl5IHRvIGdldCB0aGUgc3RhdGlzdGljcyBvZiB0aGUgcGxheWVycyBpbiB5b3VyIGdhbWUgbG9iYnksIHRoZSB0cmFja2luZyBvZiBzdGF0aXN0aWNzIHN1Y2ggYXMgZGFpbHkgYW5kIHdlZWtseSBLL0QgYW5kIFdpbi9Mb3NzIHJhdGlvcy4gRnVydGhlcm1vcmUgeW91IGNhbiByZXZpc2l0IHlvdXIgcGxheWVkIGdhbWVzIGFuZCBzZWUgeW91ciBwZXJmb3JtYW5jZSByb3VuZCBieSByb3VuZC4gSW4gdGVybXMgb2YgY3VzdG9taXNpbmcgdGhlIG92ZXJsYXkgeW91IGNhbiBjaGFuZ2UgdGhvIGNvbG9yIHRoZW1lIGFuZCBjaG9zZSB3aXRoIHN0YXRpc3RpY3MgdG8gc2hvdyBpbmdhbWUgb24gdGhlIG92ZXJsYXkuJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnbG9nby1vdmVyd29sZicsXG4gICAgICAgICAgICAnQ29kZSc6ICdsb2dvLXNjc3MtdHlwZXNjcmlwdCcsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdwb3J0Zm9saW9fd2Vic2l0ZSc6IHtcbiAgICAgICAgJ2RhdGUnOiAnY3VycmVudCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdNeSBjdXJyZW50IHBvcnRmb2xpbyB3ZWJzaXRlLiBBa2EgbXkgY29kaW5nIHNhbmRib3ggZm9yIHRyeWluZyBuZXcgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzIGFuZCBmcmFtZXdvcmtzLicsXG4gICAgICAgICdpbmRleCc6ICdwb3J0Zm9saW9fd2Vic2l0ZScsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdQb3J0Zm9saW8gR2l0SHViJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXIvUG9ydGZvbGlvJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAnZmVhdHVyZWQnLFxuICAgICAgICAgICAgJ3dlYnNpdGUnLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnUG9ydGZvbGlvIFdlYnNpdGUnLFxuICAgICAgICAnY29udGVudCc6IHt9LFxuICAgICAgICAnaW1hZ2VzJzoge30sXG4gICAgfSxcbiAgICAncjZsb29rdXBfd2Vic2l0ZSc6IHtcbiAgICAgICAgJ2RhdGUnOiAnMjkgRGVjZW1iZXIgMjAyMCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBIFJhaW5ib3cgU2l4IFNpZWdlIHN0YXRpc3RpY3Mgd2Vic2l0ZSBmb3Igc2VhcmNoaW5nIHlvdXIgYW5kIHlvdXIgZW5lbWllcyBnYW1lIHN0YXRpc3RpY3MuJyxcbiAgICAgICAgJ2luZGV4JzogJ3I2bG9va3VwX3dlYnNpdGUnLFxuICAgICAgICAnbGlua3MnOiB7XG4gICAgICAgICAgICAnUjZMb29rdXAgR2l0SHViJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXIvUjZMb29rdXAtV2Vic2l0ZScsXG4gICAgICAgICAgICAnU3RhdHNEQiBXZWJzaXRlJzogJ2h0dHBzOi8vc3RhdHNkYi5uZXQvJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAnd2Vic2l0ZScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdSNkxvb2t1cCBXZWJzaXRlJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ1RoaXMgcHJvamVjdCBvcmlnaW5hbHkgc3RhcnRlZCBhcyBhIHNtYWxsIHByb2plY3QgdG8gYmUgYWJsZSB0byBjaGVjayBteSBvd24gc3RhdGlzdGljcyBhbmQgcHJvZ3Jlc3Npb24gaW4gUmFpbmJvdyBTaXggU2llZ2UuIEFmdGVyIEkgd2FzIHVuaGFwcHkgd2l0aCB0aGUgY3VycmVudGx5IGF2YWlsYWJsZSB3ZWJzaXRlIHRoYXQgd2hlcmUgc2VydmluZyB0aGUgYWJpbGl0eSB0byBjaGVjayBSYWluYm93IFNpeCBTaWVnaGUgcGxheWVyIHN0YXRpc3RpY3MuIEFmdGVyIEkgd2hpbGUgSSBzdGFydGVkIHdvcmtpbmcgb24gaXQgd2l0aCBKb2N1bGFyTWFycm93LiBUaGlzIHdhcyB0aGUgYmVnaW5pbmcgb2YgdGhlIGFjY3VhbCB3ZWJzaXRlLiBUaGUgd2Vic2l0ZSBpcyBjdXJyZW50bHkgZGlzY29udGludWVkLCBiZWNhdXNlIHdlIGRlY2lkZWQgdG8gc29sZWx5IGZvY3VzIG9uIGRlIE92ZXJ3b2xmIG92ZXJsYXkgYW5kIHdvcmsgdG9nZXRoZXIgd2l0aCBTdGF0c0RCLicsXG4gICAgICAgICAgICAnQ29kZSc6ICdUaGlzIHByb2plY3Qgd2FzIG15IGZpcnN0IGV4cGVyaWVuY2Ugd2l0aCB3b3JraW5nIHdpdGggUEhQLiBBbmQgbXkgZmlyc3QgbWF5b3IgcHJvamVjdCB1c2luZyBIVE1MNSwgSmF2YVNjcmlwdCBhbmQgU0NTUy4gQmVjYXVzZSBJIHdhcyBxdWl0ZSB0aGUgYmVnaW5uZXIgYXQgY29kaW5nIEkgaGFkIHRvIGNsZWFuIHVwIHRoZSBjb2RlIGEgbG90IGFmdGVyIEkgZ290IGJldHRlciBhdCB3b3JraW5nIHdpdGggUEhQLiBJZiBJIHdvdWxkIHN0YXJ0IG92ZXIgSSB3b3VsZCBsaWtlIHRvIGJlbGlldmUgdGhlIHByb2plY3Qgd291bGQgaGF2ZSBiZWVuIGEgbG90IGxlc3MgY29tcGxleCBhbmQgbWVzc3kuJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnbG9nby1yNmxvb2t1cCcsXG4gICAgICAgICAgICAnQ29kZSc6ICdwaHAtbG9nbycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAnYXF1YXpvb19sZWVyZGFtJzoge1xuICAgICAgICAnZGF0ZSc6ICdjdXJyZW50JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VlbiBzY2hvb2xwcm9qZWN0IGluIG9wZHJhY2h0IHZhbiBIYW5zIHZhbiBEYW0gdmFuIEFxdWFab28gTGVlcmRhbSBvbSBkZSBhcXVhcml1bWxpY2h0ZW4gdmFuIGVlbiBhZnN0YW5kIHRlIGJlc3R1cmVuLicsXG4gICAgICAgICdpbmRleCc6ICdhcXVhem9vX2xlZXJkYW0nLFxuICAgICAgICAnbGlua3MnOiB7XG4gICAgICAgICAgICAnQXF1YVpvbyBQcm9qZWN0IEdpdEh1Yic6ICdodHRwczovL2dpdGh1Yi5jb20vVHljaG9Ccm91d2VyL0FxdWFab28tTGVlcmRhbScsXG4gICAgICAgIH0sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ2ZlYXR1cmVkJyxcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgICAgICdhcmR1aW5vJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0FxdWFab28gTGVlcmRhbScsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdEaXQgaXMgZWVuIHByb2plY3QgbmFtZW5zIGRlIG9wZHJhY2h0Z2V2ZXIgQXF1YVpvbyBMZWVyZGFtLiBPbWRhdCBBcXVhWm9vIG1ldCBtZWVyZGVyZSB2cmlqd2lsbGlnZXJzIHdlcmt0IGVuIGhldCBhcXVhcml1bSBkdXMgbmlldCBhbHRpamQgZG9vciBkZXplbGZkZSBwZXJzb29uIGFmZ2VzbG90ZW4gd29yZHQuIEhpZXJkb29yIGthbiBlciBuaWV0IGFsdGlqZCBnZWdhcmFuZGVlcmQgd29yZGVuIG9mIGdlY29udHJvbGVlcmQgd29yZGVuLCBkYXQgZGUgYXF1YXJpdW1sYW1wZW4gb3AgZGUganVpc3RlIHN0YW5kIHppam4gZ2V6ZXQgYmlqIGhldCBhZnNsdWl0ZW4uIFdpaiBoYWRkZW4gZGFhcm9tIGRlIG9wZHJhY2h0IGdla3JlZ2VuIG9tIGVlbiBzeXN0ZWVtIHRlIG9udHdpa2tlbGVuIHdhYXJtZWUgQXF1YVpvbyBMZWVyZGFtIGRlIGxpY2h0ZW4gdmFuIGh1biBhcXVhcml1bXMgb3AgYWZzdGFuZCBrYW4gYmVzdHVyZW4uIEJpbm5lbiBoZXQgcHJvamVjdCBoYWQgaWsgZGUgdGFhayB2YW4gaGV0IHByb2dyYW1tZXJlbiBlbiBvbnR3aWtrZWxlbiB2YW4gaGV0IEFyZHVpbm8gcHJvdG90eXBlIGVuIGNvZGUuIERpdCBwcm9qZWN0IGhlYiBpayBzYW1lbmdld2Vya3QgbWV0IENhaW4gV29lc3RlbmJ1cmcgZW4gRGF2aWQgQmFnaWpuLiBEaWUgemljaCB2b29yYWwgZ2Vmb2N1c2VkIGhlYmJlbiBvcCBoZXQgdm9vcm9uZGVyem9layBuYWFyIGJlc3RhYW5kZSBvcGxvc3Npbmdlbi4nLFxuICAgICAgICAgICAgJ01lZXN0ZXJwcm9lZic6ICdEZSBNZWVzdGVycHJvZWYgaXMgZWVuIGVpbmRleGFtZW5wcm9qZWN0IHZhbiBoZXQgdmFrIE8mTy4gSG9ldCBkb2VsIHZhbiBoZXQgcHJvamVjdCBpcyBkYXQgZGUgbGVlcmluZyBhbGxlIHZhYXJkaWdoZWRlbiBsYWF0IHppZW4gZGllIG5vZGlnIHppam4gb20gZWVuIHRlY2huYXNpdW1sZWVybGluZyB0ZSB6aWpuLiBUaWpkZW5zIGRpdCBwcm9qZWN0IHdvcmR0IGVyIHdlaW5pZyBkb29yIGRlIGRvY2VudGVuIGdlcmVnZWxkIGVuIG1vZXQgZGUgbGVlcmxpbmcgZHVzIHZlZWwgemVsZnN0YW5kaWdoZWlkIGxhdGVuIHppZW4uIFpvIG1vZXRlbiBkZSBncm9lcGplcyB6ZWxmIGVlbiBvcGRyYWNodCBtZXQgZWVuIG9wZHJhY2h0Z2V2ZXIgcmVnZWxlbi4gRWVuIGdlZGVlbHRlIHZhbiBkZSBNZWVzdGVycHJvZWYgdm9ybXQgaGV0IHByb2ZpZWx3ZXJrc3R1ay4nLFxuICAgICAgICAgICAgJ0hldCBQcm9kdWN0JzogJ09ucyBwcm9kdWN0IG1hYWt0IGdlYnJ1aWsgdmFuIGVlbiBBcmR1aW5vIE1lZ2EgMjU2MCBvbSBkZSBsaWNodGVuIHRlIGt1bm5lbiBiZXN0dXJlbi4gT20gZGUgQXJkdWlubyBvcCBhZnN0YW5kIHRlIGt1bm5lbiBiZXN0dXJlbiBoZWJiZW4gd2UgbWV0IGJlaHVscCB2YW4gZWVuIEV0aGVybmV0IFNoaWVsZCBlZW4gd2Vic2VydmVyIG9wZ2V6ZXQuIERlIHdlYnNlcnZlciBpcyBiZXNjaGVybXQgbWV0IGVlbiB3YWNodHdvb3JkLiBWaWEgZGUgd2Vic2VydmVyIGt1bm5lbiBkZSBsYW1wZW4gdmlhIGRlIEFyZHVpbm8gd29yZGVuIGFhbmdlc3R1dXJkLiBBcXVhWm9vIHdpbGRlIG9vayBkZSBtb2dlbGlqa2hlaWQgaGViYmVuIG9tIHRlIGt1bm5lbiBjb250cm9sbGVyZW4gd2FubmVlciBlbiB3aWUgZGUgbGFtcGVuIGhlZWZ0IGJlc3R1dXJkLiBIaWVydm9vciBzbGFhbiB3ZSBkZSBsb2dzIG9wIG9wIGVlbiBTRC1rYWFydCBtZXQgZWVuIHRpbWVzdGFtcCBkaWUgd29yZHQgdmVya3JlZ2VuIGRvb3IgZWVuIFJUQy1tb2R1bGUuJyxcbiAgICAgICAgICAgICd0aXRsZTEnOiAnVm9vciBoZXQgcHJvZHVjdCBoZWJiZW4gd2Ugb29rIGVlbiBiZWh1aXppbmcgb250d29ycGVuIGVuIDNELWdlcHJpbnQuIFdlIGhlYmJlbiBoZXQgb250d2VycCB2b29yIGRlIGJlaHVpemluZyBnZW1hYWt0IG1ldCBiZWh1bHAgdmFuIGJsZW5kZXIuIEhldCBvbnR3ZXJwIGlzIGdlw6t4cG9ydGVlcmQgYWxzIFNUTCBvbSBoZXQgdGUga3VubmVuIHByaW50ZW4gbWV0IGRlIDNELXByaW50ZXIgb3Agc2Nob29sLiBNZXQgaGV0IDNELXByaW50ZW4gbGllcGVuIHdlIHRlZ2VuIG1lZXJkZXJlIG9ic3Rha2VscyBvcCwgem9hbHMgZWVuIG5pZXQgZ29lZCBhZmdlc3RlbGQgcHJpbnRiZWQgZW4gZWVuIHNsZWNodGUgdG9ldm9lZyB2YW4gaGV0IGZpbGFtZW50LicsXG4gICAgICAgICAgICAndGl0bGVpbWFnZTAnOiAnJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5Qcm9kdWN0Z2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+SGV0IGJlbGFuZ3JpamtzdGUgZG9lbCB2YW4gZGl0IHByb2plY3QgYmVzdG9uZCB1aXQgaGV0IG9udHdpa2tlbGVuIHZhbiBoZXQgcHJvdG90eXBlLiBBYW5nZXppZW4gaWsgZGFhciB2ZWVsIHdlcmsgZW4gYWFuZGFjaHQgYWFuIGhlYiBiZXN0ZWVkIHZpbmQgaWsgZGF0IGlrIGdvZWQgcHJvZHVjdGdlcmljaHQgaGViIGdld2Vya3QuIEhpZXJiaWogaGViYmVuIHdlIGNvbnN0YW50IGNvbnRhY3QgZ2VoYWQgbWV0IGRlIG9wZHJhY2h0Z2V2ZXIgZW4gb25zIGdlaG91ZGVuIGFhbiBoZXQgUHJvZ3JhbW1hIHZhbiBFaXNlbiwgb20gZXJ2b29yIHRlIHpvcmdlbiBkYXQgb25zIHByb3RvdHlwZSB2b2xkZWVkIGFhbiBkZSBlaXNlbiBlbiB3ZW5zZW4gdmFuIGRlIG9wZHJhY2h0Z2V2ZXIuPGJyPjxzdHJvbmc+SW5kaXZpZHVlZWwgd2Vya2VuPC9zdHJvbmc+PGJyPkRvb3JkYXQgaGV0IGdyb290c3RlIGRlZWwgdmFuIGRlIHBlcmlvZGUgdmFuIGhldCBwcm9qZWN0IHRpamRlbnMgZGUgQ29yb25hIGxvY2tkb3duIGVuIG1hYXRyZWdlbGVuIGhlZWZ0IHBsYWF0c2dldm9uZGVuLCBoZWJiZW4gd2UgdmVlbCBpbmRpdmlkdWVlbCBtb2V0ZW4gd2Vya2VuLiBIaWVyYmlqIGhlYmJlbiB3ZSB1aXRlcmFhcmQgdmVlciBjb250YWN0IGdlaGFkIG1ldCBlbGthYXIgZW4gZGUgb3BkcmFjaHRnZXZlciBlbiBlZW4gZ29lZGUgdGFrZW52ZXJkZWxpbmcgZ2VtYWFrdCwgd2F0IG5hdHV1cmxpamsgdmFuIGJlbGFuZyBpcyBvbSBnb2VkIGluZGl2aWR1ZWVsIHRlIGt1bm5lbiB3ZXJrZW4uPGJyPjxzdHJvbmc+RG9vcnpldHRlbjwvc3Ryb25nPjxicj5Pb2sgdmluZCBpayBkYXQgd2UgYWxzIGdyb2VwamUgb3AgdmVyc2NoaWxsZW5kZSBnZWJpZWRlbiBnb2VkIGhlYmJlbiBkb29yZ2V6ZXQgb20gdG90IGVlbiBnb2VkIGVpbmRlIHRlIGtvbWVuLiBabyB2ZXJsaWVwIGRlIHN0YXJ0IGFhbiBoZXQgcHJvamVjdCBuaWV0IGhlZWwgc29lcGVsLCBtZWRlIG9tZGF0IHdlIGdlZW4gb3BkcmFjaHRnZXZlciBrb25kZW4gdmluZGVuLiBNYWFyIG5hIHZlZWwgZG9vcnpldHRlbiBlbiBtYWlscyB2ZXJzdHVyZW4gbmFhciBwb3RlbnRpw6tsZSBvcGRyYWNodGdldmVycyBoZWJiZW4gd2UgdG9jaCBlZW4gb3BkcmFjaHQga3VubmVuIHZpbmRlbi4gRWVuIGFuZGVyIGdlYmllZCB3YWFyIGlrIHZpbmQgZGF0IHdlIGdvZWQgZG9vcmdlemV0IGhlYmJlbiBpcyBiaWogaGV0IDNELXByaW50ZW4sIGhpZXJhYW4gaGViYmVuIG1lZXIgZGFuIGVlbiB3ZWVrIGllZGVyZSBkYWcgb3Agc2Nob29sIGVyYWFuIGdld2Vya3Qgb20gaGV0IG1hYXIgZ2VwcmludCB0ZSBrcmlqZ2VuLiBVaXRlaW5kZWxpamsgaGViYmVuIHdlIG9vayBoaWVydm9vciBlZW4gb3Bsb3NzaW5nIGdldm9uZGVuLiBBbHMgbGFhdHN0ZSB2aW5kIGlrIGRhdCBpayB6ZWxmIGdvZWQgaGViIGRvb3JnZXpldCBtZXQgaGV0IHByb2dyYW1tZXJlbiB2YW4gZGUgY29kZSB2b29yIGRlIEFyZHVpbm8uIFByb2dyYW1tZXJlbiBpcyBhbHRpamQgdmVlbCB0ZXN0ZW4gZW4gdWl0cHJvYmVyZW4uIE1lZGUgb21kYXQgaWsgaGV0IHplbGYgb29rIGVyZyBsZXVrIHZpbmQgaGViIGlrIGhpZXJhYW4gaGVsZSBkYWdlbiBhYW4gZG9vcmdld2Vya3Qgb20gdWl0ZWluZGVsaWprIHRvdCBlZW4gd2Vya2VuZCBwcm90b3R5cGUgdGUga29tZW4uJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnbG9nby1hcXVhem9vJyxcbiAgICAgICAgICAgICdIZXQgUHJvZHVjdCc6ICdhcmR1aW5vLW1lZ2EyNTYwJyxcbiAgICAgICAgICAgICd0aXRsZWltYWdlMCc6ICdhcXVhem9vLXByb3RvdHlwZScsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdiNF90ZWNobmlla19jaXJjdWxhaXInOiB7XG4gICAgICAgICdkYXRlJzogJzMwIEp1bmUgMjAyMCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFZW4gc2Nob29sIG9uZGVyem9layBuYW1lbnMgQjQgVGVjaG5pZWsgbmFhciBkZSBtb2dlbGlqa2hlZGVuIHZvb3IgQjQgVGVjaG5pZWsgb20gZWVuIGNpcnVsYWlyZSBsZXZlcmFuY2llciB0ZSB3b3JkZW4uJyxcbiAgICAgICAgJ2luZGV4JzogJ2I0X3RlY2huaWVrX2NpcmN1bGFpcicsXG4gICAgICAgICdsaW5rcyc6IHt9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0I0IFRlY2huaWVrIENpcmN1bGFpcicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ0NpcmN1bGFpcmUgTGV2ZXJhbmNpZXInOiAnTWFyaWVrZSBNZWx0ZW4gaGVlZnQgb25zIG5hbWVucyBCNCBUZWNobmllayBkZSBvcGRyYWNodCBnZWdldmVuIG9tIHZhbiBCNCBUZWNobmllayBlZW4gY2lydWxhaXJlIGxldmVyYW5jaWVyIHRlIHdvcmRlbi4gSGV0IHByb2JsZWVtIGlzIGRhdCBoZXQgbWV1YmlsYWlyIHdhdCBCNCB2ZXJ6b3JndCBuaWV0IGdlcmVjeWNsZWQgZW4gd2VpbmlnIGhlcmdlYnJ1aWt0IHdvcmR0LiBEaXQga29tdCBtZWRlIGRvb3JkYXQgZGUgbWF0ZXJpYWxlbiBkaWUgZ2VicnVpa3Qgd29yZGVuIG1vZWlsaWprIHRlIHNjaGVpZGVuIHppam4uIEI0IHdpbCBncmFhZyBlZW4gY2lyY3VsYWlyZSBsZXZlcmFuY2llciB3b3JkZW4uIERlIG9wZHJhY2h0IHdhcyBkdXM6IFdhdCBrdW5uZW4gd2Ugb250d2lra2VsZW4gd2FhcmRvb3IgQjQgZWVuIGNpcmN1bGFpcmUgbGV2ZXJhbmNpZXIga2FuIHdvcmRlbj8nLFxuICAgICAgICAgICAgJ0Jlem9layBCNCc6ICdXZSBrb25kZW4gZG9vciBkZSBDb3JvbmEgbG9ja2Rvd24gbmlldCBiaWogQjQgVGVjaG5pZWsgaW4gR2llc2VuIG9wIGJlem9laywgbWFhciB3ZSBoZWJiZW4gd2VsIGFsbGUgdm9vcmJlcmVpZGluZyBnZWRhYW4gdm9vciBoZXQgYmV6b2VrLiBXZSBoZWJiZW4gbWVlcmRlcmUgdnJhZ2VuIGVuIGlkZWXDq24gYmVkYWNodC4gRWVuIGRlZWwgdmFuIGRlemUgdnJhZ2VuIGhlYmJlbiB3ZSBsYXRlciB2aWEgV2hhdHNBcHAgd2VsIGt1bm5lbiB2cmFnZW4gZWVuIHZhbiBkZSBtb250ZXVycyB2YW4gQjQgVGVjaG5pZWssIFJpY2hhcmQgdmFuIEJpam5lbi4nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdVaXQgaGV0IG9uZGVyem9layBpcyBnZWJsZWtlbiBkYXQgZGUgbWV1YmVscyB2b29yYWwgbmlldCBnZXJlY3ljbGVkIHdvcmRlbiwgb21kYXQgZGUgbWF0ZXJpYWxlbiBuaWV0IHRlIHNjaGVpZGVuIHppam4uIERhYXJvbSBoZWJiZW4gd2Ugdm9vcmFsIG9uZGVyem9layBnZWRhYW4gbmFhciBhbHRlcm5hdGlldmVuIHZvb3IgZGUgaHVpZGlnZSBtYXRlcmlhbGVuIHZhbiBkZSBCNCB0YWZlbHMuIFpvZGF0IGRlIG1ldWJlbHMgd2VsIHRlIHNjaGVpZGVuIGVuIHJlY3ljbGVuIHppam4uIERhYXJ2b29yIGhlYmJlbiB3ZSBlZXJzdCBhYW4gZGUgbW9udGV1ciBnZXZyYWFnZCB3ZWxrIG1hdGVyaWFhbCBvcCBkaXQgbW9tZW50IHdvcmR0IGdlYnJ1aWt0IHZvb3IgZGUgdGFmZWxzLCB6b2RhdCB3ZSBlZW4gcGFzc2VuZCBhbHRlcm5hdGllZiBvcCBoZXQgaHVpZGlnZSBtYXRlcmlhYWwga29uZGVuIHZpbmRlbiwgZGFhcm9wIGtyZWdlbiB3ZSBoZXQgYW50d29vcmQgZGF0IGhldCB2YWFrIGVlbiBzcGFhbnBsYWF0IG1ldCBlZW4gSFBMIHRvcGxhYWcgaXMuIEhQTCBpcyBlaWdlbmxpamsgYWxsZWVuIHRoZXJtaXNjaCB0ZSByZWN5Y2xlbiwgZGF0IGlzIGhldCB2ZXJicmFuZGVuIHZhbiBoZXQgbWF0ZXJpYWFsIG9tIGVyIGVuZXJnaWUgdWl0IHRlIGhhbGVuLiBFZW4gYW5kZXJlIG9wbG9zc2luZyB6b3UgaGV0IGhlcmdlYnJ1aWtlbiBrdW5uZW4gemlqbiBpbiBlZW4gb2YgYW5kZXJlIHZvcm0uJyxcbiAgICAgICAgICAgICdDb25jbHVzaWUnOiAnRG9vciBDb3JvbmEgaXMgaGV0IG9uZGVyem9layBuYWFyIGR1dXJ6YW1lIG1hdGVyaWFsZW4gZW4gY2lyY3VsYWlyZSBlY29ub21pZSBrb3J0ZXIgZGFuIGJlZG9lbHQgZW4gaGViYmVuIHdlIGJpanZvb3JiZWVsZCBuaWV0IGVlbiBkZWVsIHZhbiBoZXQgdGFmZWxibGFkLCB3YXQgd2UgYmlqIEI0IHpvdWRlbiBvcGhhbGVuLCBrdW5uZW4gb25kZXJ6b2VrZW4uIFdlIHppam4gZXIgd2VsIGFjaHRlciBnZWtvbWVuIGRhdCBlciBnZWVuIG1ha2tlbGlqa2Ugb3Bsb3NzaW5nIGlzIHZvb3IgaGV0IHByb2JsZWVtLCBvbWRhdCBkZSB0YWZlbHMgdGVnZW4gdmVlbCB2ZXJzY2hpbGxlbmRlIGNoZW1pc2NoZSBzdG9mZmVuIHJlc2lzdGVudCBtb2V0IHppam4uIERhYXJvbSBkZW5rZW4gd2lqIGRhdCBlciB2b29yYWwgZ2VrZWtlbiBtb2V0IHdvcmRlbiBuYWFyIGhldCBoZXJnZWJydWlrZW4gZW4gaGV0IGxhbmdlciBtYWtlbiB2YW4gZGUgbGV2ZW5zZHV1ciB2YW4gZGUgbWV1YmVscy4nLFxuICAgICAgICAgICAgJ0NvbXBldGVudGllcyc6ICc8c3Ryb25nPkluZGl2aWR1ZWVsIHdlcmtlbjwvc3Ryb25nPjxicj5NZWRlIGRvb3IgQ29yb25hIGhlYmJlbiB3ZSB2ZWVsIGluZGl2aWR1ZWVsIHRodWlzIG1vZXRlbiB3ZXJrZW4uIFpvIGhlYiBpayB2b29yYWwgZ2V3ZXJrdCBhYW4gaGV0IHpvZWtlbiB2YW4gZXZlbnR1ZWxlIG1hdGVyaWFsZW4gb20gaGV0IGh1aWRpZ2UgbWF0ZXJpYWFsIHZhbiBkZSB0YWZlbHMgbWVlIHRlIHZlcnBsYWF0c2VuLiBPb2sgaGViIGlrIG5hZ2VkYWNodCBvdmVyIG1vZ2VsaWpraGVkZW4gdm9vciBoZXQgc2NoZWlkZW4gdmFuIGhldCBob3V0ZW4gZGVlbCB2YW4gZGUgdGFmZWwgZW4gZGUgcGxhc3RpYyBjb2F0aW5nLjxicj48c3Ryb25nPktlbm5pc2dlcmljaHRoZWlkPC9zdHJvbmc+PGJyPkRpdCBwcm9qZWN0IHdhcyB2b29yYWwgZ2VyaWNodCBvcCBoZXQgem9la2VuIG5hYXIgZWVuIHRoZW9yZXRpc2NoZSBvcGxvc3NpbmcuIEhldCB3YXMgZHVzIGJlbGFuZ3JpamsgZGF0IGVyIGdvZWQgb25kZXJ6b2VrIGdlZGFhbiB3ZXJkLiBabyBoZWJiZW4gd2UgdmVlbCBpbmZvcm1hdGllIG9wZ2V6b2NodCBvdmVyIGRlIGh1aWRpZ2Ugc2l0dWF0aWUgZW4gYmVzdGFhbmRlIG9wbG9zc2luZ2VuLiBIaWVyYmlqIGt3YW1lbiB3ZSBvbmRlciBhbmRlcmUgdG90IGRlIGNvbmNsdXNpZSBkYXQgZXIgbmlldCB2ZWVsIGJlc3RhYW5kZSBtb2dlbGlqa2hlZGVuIHppam4uJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICdDaXJjdWxhaXJlIExldmVyYW5jaWVyJzogJ2xvZ28tYjR0ZWNobmllaycsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ2xhZGRlci12YW4tbGFuc2luaycsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdyb2xzdG9lbF9zdGFwcGVudGVsbGVyJzoge1xuICAgICAgICAnZGF0ZSc6ICcxMyBEZWNlbWJlciAyMDE5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VlbiBzY2hvb2wgcHJvamVjdCBlbiBvbmRlcnpvZWsgbmFhciBkZSBtb2dlbGlqa2hlZGVuIHJvbmQgaGV0IGZpdG5lc3MgdHJhY2tlbiB2YW4gZnlzaWVrIGJlcGVya3RlIG1lbnNlbi4nLFxuICAgICAgICAnaW5kZXgnOiAncm9sc3RvZWxfc3RhcHBlbnRlbGxlcicsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdSb2xzdG9lbCBQcm9qZWN0IEdpdEh1Yic6ICdodHRwczovL2dpdGh1Yi5jb20vVHljaG9Ccm91d2VyL1JvbHN0b2VsLVByb2plY3QnLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ1JvbHN0b2VsIFN0YXBwZW50ZWxsZXInLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnRGl0IHByb2plY3QgaXMgaW4gb3BkcmFjaHQgdmFuIEFyamFuIFN0ZXJrLCBuYW1lbnMgaGV0IGJlZHJpamYgTW90aW9uIFBvd2VyLiBIaWVyYmlqIGhlYmJlbiB3ZSBkZSBvcGRyYWNodCBnZWtyZWdlbiBvbSBlZW4gcHJvdG90eXBlIHRlIG1ha2VuIHZvb3IgZWVuIGZpdG5lc3N0cmFja2VyIHZvb3Igcm9sc3RvZWxnZWJydWlrZXJzIGVuIG1lbnNlbiBtZXQgZWVuIGZ5c2lla2UgYmVwZXJraW5nLiBPbSBkaXQgdGUgcmVhbGlzZXJlbiBoZWJiZW4gd2UgZWVyc3Qgb25kZXJ6b2VrIGdlZGFhbiBuYWFyIHdlbGtlIG1vZ2VsaWpraGVkZW4gZGllIG1lbnNlbiB3ZWwgbm9nIGhlYmJlbiBiaWogaGV0IHNwb3J0ZW4uIE9vayBoZWJiZW4gd2Ugb25kZXJ6b2VrIGdlZGFhbiBuYWFyIGJlc3RhYW5kZSBvcGxvc3NpbmdlbiB2b29yIGZpdG5lc3N0cmFja2Vycy4gQmlqIGhldCBvbmRlcnpvZWsga3dhbWVuIHdlIGVyYWNodGVyIGRhdCBlciB2ZXJzY2hpbGxlbmRlIHRyYWNrZXJzIGRpZSB6ZWdnZW4gZ2VzY2hpa3QgdGUgemlqbiB2b29yIGZpc2llayBiZXBlcmt0ZSBtZW5zZW4sIG1hYXIgYmlqIGRlemUgcHJvZHVjdGVuIHp1bGxlbiBkZSBmdWN0aWVzIHZvb3Igcm9sc3RvZWxnZWJydWlrZXJzIGFsdGlqZCBvcCBkZSB0d2VlZGUgcGxlayBzdGFhbi4nLFxuICAgICAgICAgICAgJ1Byb2R1Y3QnOiAnVm9vciBoZXQgZWluZHByb2R1Y3QgaGViYmVuIHdlIGVlbiBwcm90b3R5cGUgZ2VtYWFrdCB2b29yIGVlbiByb2xzdG9lbCBzdGFwcGVudGVsbGVyLiBIaWoga2FuIGhldCBhYW50YWwgcm90YXRpZXMgdmFuIGVlbiByb2xzdG9lbCB0ZWxsZW4gZG9vcm1pZGRlbCB2YW4gZWVuIGd5cm9zY29vcCBhYW5nZXNsb3RlbiBvcCBlZW4gQXJkdWlubyBVbm8uIFdlIGhlYmJlbiBvb2sgZ2VrZWtlbiBuYWFyIGhldCB0b2V2b2VnZW4gdmFuIGVlbiBoYXJ0c2xhZ21ldGVyLCBtYWFyIG1lZGUgZG9vciBiZXBlcmt0ZSB0aWpkIGVuIGRlIG9ic3Rha2VscyBtZXQgZGUgaGFyZHdhcmUgaXMgaGV0IG5pZXQgZ2VsdWt0IG9tIGRlIGhhcnRzbGFnbWV0ZXIgYmV0cm91d2JhYXIgdGUgbWFrZW4uIEJvdmVuZGllbiB6aWpuIGVyIGFsIGJldHJvdXdiYXJlIGhhcnRzbGFnbWV0ZXJzIGJlc2NoaWtiYWFyIHZvb3IgZnlzaWVrIGdlaGFuZGljYXB0ZSBtZW5zZW4gZGllIHRlIGNvbWJpbmVyZW4gemlqbiBtZXQgZml0bmVzc3RyYWNrZXJzLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+RG9vcnpldHRlbjwvc3Ryb25nPjxicj5CaWogaGV0IG9udHdpa2tlbGVuIHZhbiBoZXQgcHJvdG90eXBlIHppam4gd2UgdGVnZW4gdmVlbCB0ZWdlbnNsYWdlbiBnZWxvcGVuLiBFciB3YXJlbiB2ZWVsIG9ic3Rha2VscyBtZXQgZGUgZ3lyb3Njb29wIGRlIGhhcnRzbGFnbWV0ZXIgZW4gaGV0IHZlcnphbWVsZW4gdmFuIGRlIGdlZ2V2ZW5zIGRvb3IgZGUgQXJkdWluby4gWm8gaGFkIGRlIGd5cm9zY29vcCBsYXN0IHZhbiBkcmlmdCwgZGl0IGlzIHdhbm5lZXIgZWVuIGd5cm9zY29vcCB1aXQgZGUgbGlqbiByYWFrdC4gRHJpZnQga2FuIHZvb3IgZWVuIGdyb290IGRlZWwgdWl0IGRlIGRhdGEgZ2VmaWx0ZXJkIHdvcmRlbiBkb29yIGVlbiBLYWxtYW4gZmlsdGVyIG9wIGRlIGdlZ2V2ZW5zIHRvZSB0ZSBwYXNzZW4uPGJyPjxzdHJvbmc+UHJvZHVjdGdlcmljaHRoZWlkPC9zdHJvbmc+PGJyPkJpaiBkaXQgcHJvamVjdCBoZWJiZW4gd2UgZ29lZCBnZXdlcmt0IGFhbiBoZXQgb250d2lra2VsZW4gdmFuIGhldCBwcm90b3R5cGUuIEhpZXJ2b29yIGhlYmJlbiB2ZWVsIG5hZ2VkYWNodCBvdmVyIHdhdCBkZSBiZXN0ZSBvcGxvc3Npbmcga2FuIHppam4gdm9vciBoZXQgcHJvdG90eXBlIGVuIGdvZWQgZ2VrZWtlbiBuYWFyIGRlIGVpc2VuIGVuIHdlbnNlbiB2YW4gZGUgb3BkcmFjaHRnZXZlci4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLW1vdGlvbnBvd2VyJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ3BsYXN0aWNfc29lcCc6IHtcbiAgICAgICAgJ2RhdGUnOiAnMjMgU2VwdGVtYmVyIDIwMTknLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRWVuIHNjaG9vbCBwcm9qZWN0IG5hbWVucyBoZXQgYmVkcmlqZiBkZSBXYWFyZGVtYWtlcnMgb20gZWVuIGtlbm5pc2NlbnRydW0gb3AgdGUgemV0dGVuIG9wIGhldCBnZWJpZWQgdmFuIHBsYXN0aWNzIGluIEdvcmluY2hlbS4nLFxuICAgICAgICAnaW5kZXgnOiAncGxhc3RpY19zb2VwJyxcbiAgICAgICAgJ2xpbmtzJzoge30sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnUGxhc2ljIFNvZXAnLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnV2UgaGViYmVuIHZhbiBNYXJ0aW4gQmFra2VyLCBuYW1lbnMgaGV0IGJlZHJpamYgZGUgV2FhcmRlbWFrZXJzLCBkZSBvcGRyYWNodCBnZWtyZWdlbiBvbSBtZXQgdGVjaG5hc2l1bSBlZW4ga2VubmlzY2VudHJ1bSBvdmVyIGhldCBwbGFzdGljIGluIEdvcmluY2hlbSBvcCB0ZSByaWNodGVuLiBPbnplIGJpamRyYWdlIGFhbiBkaXQga2VubmlzY2VudHJ1bSBpcyBiZWRvZWx0IG9tIGhldCBwbGFzdGljIGluIEdvcmluY2hlbSBpbiBrYWFydCB0ZSBicmVuZ2VuLiBIaWVybWVlIGt1bm5lbiB2b2xnZW5kZSBrbGFzc2VuIHZlcmRlciBtZXQgaGV0IG9uZGVyem9la2VuIG5hYXIgaGV0IHBsYXN0aWMgaW4gR29yaW5jaGVtIGVuIG5hYXIgb3Bsb3NzaW5nZW4gZXJ2b29yIHpvZWtlbi4nLFxuICAgICAgICAgICAgJ1Byb2JsZWVtJzogJ0luIGhldCBiZWdpbiB3YXMgaGV0IHByb2JsZWVtIG5vZyBlcmcgb25kdWlkZWxpamsuIE9tIGRpdCBwcm9ibGVlbSBpbiBrYWFydCB0ZSBicmVuZ2VuIGhlYmJlbiB3ZSBlZW4gb25kZXJ6b2VrIHVpdGdldm9lcmQgbmFhciBoZXQgendlcmZhZnZhbCBpbiBHb3JpbmNoZW0uIEhpZXJ2b29yIGhlYmJlbiB3ZSBpbiBncm9lcGplcyB2YW4gdHdlZSBlZW4gcm91dGUgZG9vciBnb3JpbmNoZW0gdGUgbG9wZW4uIEhpZXJiaWogaGViYmVuIHdlIGFsIGhldCBnZXZvbmRlbiBwbGFzdGljIGdlZm90b2dyYWZlZXJkIGVuIGluIGthYXJ0IGdlYnJhY2h0LiBNYWFyIG5hdHV1cmxpamsgaXMgZWVuIGdyb290IGRlZWwgdmFuIGhldCBwbGFzdGljIGluIGRlIG5hdHV1ciBpbiBkZSB2b3JtIHZhbiBtaWNyb3BsYXN0aWNzLCBkaWUgbmlldCBtZXQgaGV0IGJsb3RlIG9vZyB0ZSB6aWVuIHppam4uIERpdCBtYWFrdCBoZXQgbW9laWxpamsgb20gaGV0IHByb2JsZWVtIGdvZWQgaW4gd2thYXJ0IHRlIGJyZW5nZW4uIE9vayBtYWFrdCBkaXQgaGV0IG1vZWlsaWprIG9tIGhldCBwcm9ibGVlbSBvdmVyIHRlIGJyZW5nZW4gZW4gY29tbXVuaXNlcmVuIG5hYXIgaGV0IHB1YmxpZWsuJyxcbiAgICAgICAgICAgICdPbmRlcnpvZWsnOiAnQmlqIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSBvb2sgdmVlbCBvbmRlcnpvZWsgZ2VkYWFuIG5hYXIgYmVzdGFhbmRlIG9wbG9zc2luZ2VuIHZvb3IgaGV0IG9wcnVpbWVuIHZhbiBwbGFzdGljIGluIGRlIG5hdHV1ciBlbiBuYWFyIGRlIGhlcmtvbXN0IHZhbiBoZXQgcGxhc3RpYyBkYXQgZG9vciBHb3JpbmNoZW0ga29tdC4gRGFhcmJpaiBpcyBnZWtla2VuIG5hYXIgZGUgdmVyc2NoaWxsZW5kZSByaXZpZXJlbiBkaWUgbGFuZ3MgZW4gZG9vciBHb2luY2hlbSBzdHJvbWVuIGVuIGFuZGVyZSBicm9ubmVuIHZhbiBwbGFzdGljLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+U2FtZW53ZXJrZW48L3N0cm9uZz48YnI+Vm9vciBkaXQgcHJvamVjdCBoZWJiZW4gd2UgdmVlbCBtb2V0ZW4gc2FtZW53ZXJrZW4gdHVzc2VuIGRlIHZlcnNjaGlsbGVuZGUgZ3JvZXBqZXMgb20gc2FtZW4gw6nDqW4ga2VubmlzY2VudHJ1bSBvcCB0ZSB6ZXR0ZW4uIEhpZXJiaWogaGViYmVuIHdlIGdvZWQgbW9ldGVuIGNvw7ZyZGluZXJlbiBvbSBuaWV0IGR1YmJlbCBvbmRlcnpvZWsgdHVzc2VuIGRlIGdyb2VwamVzIHRlIGRvZW4uIFpvIGhlYmJlbiB3ZSBhYW4gaGV0IGJlZ2luIHZhbiBoZXQgcHJvamVjdCBnb2VkIG92ZXJsZWdkIHdlbGsgZ3JvZXBqZSB3YXQgZ2FhdCBvbmRlcnpvZWtlbi48YnI+PHN0cm9uZz5LZW5uaXNnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5EaXQgcHJvamVjdCB3YXMgdm9sbGVkaWcgZ2VyaWNodCBvcCBoZXQgb25kZXJ6b2VrIGRvZW4uIE9tIGhldCBwbGFzdGljIHByb2JsZWVtIGluIEdvcmluY2hlbSBlZXJzdCBpbiBrYWFydCB0ZSBicmVuZ2VuIGhlYmJlbiB3ZSBzYW1lbiBtZXQgYWxsZSBncm9lcGplcyBlZW4gb25kZXJ6b2VrIGdlZGFhbiBnZWRhYW4gbmFhciBob2V2ZWVsIHp3ZXJmYWZ2YWwgZXIgbm91IGVjaHQgaW4gR29yaW5jaGVtIGlzLiBEYWFybmEgaGViYmVuIHdlIHVpdGdlYnJlaWQgb25kZXJ6b2VrIGdlZGFhbiBuYWFyIGRlIG1vZ2VsaWpraGVkZW4gdm9vciBoZXQgb3BydWltZW4gdmFuIGhldCB6d2VyZmFmdmFsLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAnUHJvYmxlZW0nOiAnbWljcm9wbGF0aWNzLWdvcmluY2hlbScsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ2RlLXJpam4tYnJvbicsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdiNF90ZWNobmlla19tZXViZWxzJzoge1xuICAgICAgICAnZGF0ZSc6ICcyNCBKdW5lIDIwMTknLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRWVuIG9uZGVyem9layBtZXQgYWxzIGRvZWwgb20gQjQgVGVjaG5pZWsgYWR2aWVzIHRlIGdldmVuIG9wIGhldCBnZWJpZWQgdmFuIGhldCB2ZXJkdXVyemFtZW4gdmFuIEJpTmFTLWxva2FsZW4uJyxcbiAgICAgICAgJ2luZGV4JzogJ2I0X3RlY2huaWVrX21ldWJlbHMnLFxuICAgICAgICAnbGlua3MnOiB7fSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdCNCBUZWNobmllayBNZXViaWxhaXInLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnRGl0IHByb2plY3QgaGVlZnQgYWxzIGRvZWwgb20gQjQgVGVjaG5pZWsgYWR2aWVzIGVuIGluZm9ybWF0aWUgdGUgZ2V2ZW4gb3ZlciBob2UgQjQgVGVjaG5pZWsgZWVuIGNpcmN1bGFpcmUgbGV2ZXJhbmNpZXIga2FuIHdvcmRlbi4gQjQgVGVjaG5pZWsgaXMgZWVuIGVsZWt0cm90ZWNobmlzY2ggaW5zdGFsbGF0aWViZWRyaWpmIHZvb3IgQmlOYVMtbG9rYWxlbi4gWmUgaW5zdGFsbGVyZW4gb25kZXIgYW5kZXJlIGRlIGdhcyBlbiB3YXRlciBpbnN0YWxsYXRpZXMsIG1hYXIgbWFrZW4gb29rIHNwZWNpYWFsIG1ldWJpbGFpciB2b29yIEJpTmFTIGxva2FsZW4uJyxcbiAgICAgICAgICAgICdPbmRlcnpvZWsnOiAnV2lqIGhlYmJlbiBnZWtvemVuIG9tIHZvb3JhbCBvbmRlcnpvZWsgdGUgZG9lbiBuYWFyIGhldCBtaWxpZXV2cmllbmRlbGlqa2VyIG1ha2VuIHZhbiBkZSB0YWZlbHMuIFVpdCBvbnMgb25kZXJ6b2VrIGlzIGdlYmxla2VuIGRhdCBkYWFyIHZlZWwgdGUgdmVyYmV0ZXJlbiBpcy4gWm8gaXMgZGUgY29hdGluZyB2YW4gZGUgdGFmZWxibGFkZW4sIGRpZSBoZXQgb25kZXIgYW5kZXJlIGJlc2NoZXJtdCB0ZWdlbiB2ZXJzY2hpbGxlbmRlIGNoZW1pc2NoZSBzdG9mZmVuLCBiaWpuYSBvbm1vZ2VsaWprIHRlIHNjaGVpZGVuIHZhbiBkZSBob3V0ZW4gYmFzaXMuIE1hYXIgb29rIGRlemUgYmFzaXMgaXMgZWVuIG1peiB2YW4gaG91dHNuaXBwZXJzIGVuIGxpam0gZW4gaXMgZHVzIG1vZWlsaWprIHRlIHJlY3ljbGVuJyxcbiAgICAgICAgICAgICdDb25jbHVzaWUnOiAnVWl0IG9ucyBvbmRlcnpvZWsgaXMgZ2VibGVrZW4gZGF0IGVyIG9wIGhldCBnZWJpZWQgdmFuIGR1dXJ6YW1lIGNoZW1pc2NoIHJlc2lzdGVudGUgY29hdGluZ3Mgd2VpbmlnIG9udHdpa2tlbGVkIGlzLiBNZWRlIG9tZGF0IGhldCBtYXRlcmlhYWwgY2hlbWlzY2ggcmVzaXN0ZW50IGlzIGhldCBtb2VpbGlqayBoZXQgbWF0ZXJpYWFsIHplbGYgdGUgcmVjeWNsZW4uIFdlbCBrYW4gZXIgZ2VrZWtlbiB3b3JkZW4gbmFhciBoZXQgaGVyZ2VicnVpa2VuIHZhbiBkZSBjb2F0aW5ncyBvZiBkZSBob3V0ZW4gYmFzaXMuIEhpZXJ2b29yIG1vZXQgZXIgd2VsIGVlbiBvcGxvc3NpbmcgYmVkYWNodCB3b3JkZW4gb20gZGllIHZhbiBlbGthYXIgdGUgc2NoZWlkZW4gLiBEb29yIGJpanZvb3JiZWVsZCBlZW4gY2xpY2tzeXN0ZWVtIHRlIG9udHdpa2tlbGVuIHdhYXJtZWUgZGUgYmFzaXMgZW4gZGUgY29hdGluZyBtYWtlbGlqayB0ZSBzY2hlaWRlbiBlbiBoZXJnZWJydWlrZW4gemlqbi4nLFxuICAgICAgICAgICAgJ0NvbXBldGVudGllcyc6ICc8c3Ryb25nPlNhbWVud2Vya2VuPC9zdHJvbmc+PGJyPkJpaiBkaXQgcHJvamVjdCBoZWJiZW4gd2UgdmVlbCBtb2V0ZW4gem9la2VuIG5hYXIgYmVzdGFhbmRlIHByb2R1Y3RlbiBlbiBvcGxvc3Npbmdlbi4gd2lqIGhlYmJlbiBoaWVyYmlqIGdvZWQgc2FtZW5nZXdlcmt0IGFhbiBoZXQgb25kZXJ6b2VrZW4gbmFhciBtb2dlbGlqa2hlZGVuLjxicj48c3Ryb25nPlByb2Nlc2dlcmljaHRoZWlkPC9zdHJvbmc+PGJyPlZvb3IgZGl0IHByb2plY3QgaGViYmVuIHdlIHZlZWwgbW9laXRlIGdlc3Rva2VuIGluIGhldCBzY3J1bW1lbiBlbiBoZXQgZG9jdW1lbnRlcmVuIHZhbiBoZXQgcHJvY2VzLiBabyBoZWJiZW4gd2Ugc3ByaW50cyBiaWpnZWhvdWRlbiB2YW4gdHdlZSB3ZWtlbiBlbiBhYW4gaGV0IGJlZ2luIHZhbiBlbGtlIHNwcmludCBnb2VkIGJlcGFhbHQgd2F0IHdlIGRpZSBzcHJpbnQgZ2FhbiBkb2VuLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ2xvZ28tYjR0ZWNobmllaycsXG4gICAgICAgICAgICAnQ29uY2x1c2llJzogJ2JpbmFzLWxva2FhbCcsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdrZXV6ZV9rb2ZmaWViZWtlcnMnOiB7XG4gICAgICAgICdkYXRlJzogJzQgSmFudWFyaSAyMDE5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VlbiBvbmRlcnpvZWsgbmFhciB3ZWxrIG1hdGVyaWFhbCBrb2ZmaWViZWtlciB2b29yIGVlbiBiZWRyaWpmIGhldCBtZWVzdCBtaWxpZXV2cmllbmRlbGlqa3N0IHpvdSB6aWpuLicsXG4gICAgICAgICdpbmRleCc6ICdrZXV6ZV9rb2ZmaWViZWtlcnMnLFxuICAgICAgICAnbGlua3MnOiB7fSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAndGVjaG5hc2l1bScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdLZXV6ZSB2YW4gZGUgS29mZmllYmVrZXInLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnRGl0IHByb2plY3QgaXMgaW4gb3BkcmFjaHQgdmFuIENvZmZlZWJhc2VkLiBIZXQgcHJvamVjdCBoZWVmdCBhbHMgZG9lbCBvbSB2YXN0IHRlIHN0ZWxsZW4gd2Vsa2Ugc29vcnQga29mZmllYmVrZXIgaGV0IG1pbGlldXZyaWVuZGVsaWprc3QgaXMgdm9vciB2ZXJzY2hpbGxlbmRlIHNvb3J0ZW4gZW4gZ3Jvb3R0ZSBiZWRyaWp2ZW4uIEhpZXJiaWogaGViYmVuIHdlIGVlcnN0IGdla2VrZW4gbmFhciBvZiBkZSBpbWFnb1xcJ3MgdmFuIGRlIHZlcnNjaGlsbGVuZGUga29mZmllYmVrZXJzIHRlcmVjaHQgd2FyZW4gb2YgbmlldC4gRGFhcm5hIGhlYmJlbiB3ZSBvbmRlcnpvZWsgZ2VkYWFuIG5hYXIgZmVpdGVuLiBIaWVydWl0IGhlYmJlbiB3ZSB1aXRlaW5kZWxpamsgZWVuIGNvbmNsdXNpZSBnZXRyb2trZW4gb3ZlciB3ZWxrZSBrb2ZmaWViZWtlciBoZXQgbWlsaWV1dnJpZW5kZWxpamtzdCBpcy4gSGllcmJpaiBoZWJiZW4gd2UgZ2VrZWtlbiBuYWFyIG9uZGVyIGFuZGVyZSBkZSBwcm9kdWN0aWUgZW4gaGV0IGdlYnJ1aWsgdmFuIGRlIGJla2VyLiBabyBpcyBiaWp2b29yYmVlbGQgaGV0IHByb2R1Y2VyZW4gdmFuIGVlbiBwb3Jzb2xlaW5lIGJla2VyIHZyaWogendhYXIgb3AgaGV0IG1pbGlldSBlbiBtb2V0IGRlemUgaW4gZWVuIHZhYXR3YXNzZXIgd29yZGVuIHNjaG9vbmdlbWFha3QuIEVlbiBwbGFzaXRpYyBvZiBhbmRlcmUgd2Vnd2VycGJla2VycyB6aWpuIGRhYXJpbnRlZ2VuIGxpY2h0IHZvb3IgaGV0IG1pbGlldSBvbSB0ZSBwcm9jdWNlcmVuLCBtYWFyIHppam4gemUgc2luZ2xlIHVzZSBlbiBrdW5uZW4gemUgbmEgaGV0IHdlZ2dvb2llbiB6b3JnZW4gdm9vciBtaWxpZXV2ZXJ2dWlsaW5nIGVuIGJpamRyYWdlbiBhYW4gYmlqdm9vcmJlZWxkIGRlIHBsYXN0aWNzb2VwIGluIGRlIG9jZWFuZW4uJyxcbiAgICAgICAgICAgICdPbmRlcnpvZWsnOiAnQmlqIGRpdCBwcm9qZWN0IHN0b25kIGhldCBvbmRlcnpvZWtlbiBjZW50cmFhbC4gVm9vciBkaXQgb25kZXJ6b2VrIGhlYmJlbiB3ZSB2ZWVsIGJlc3RhYW5kZSBvbmRlcnpvZWtlbiBlbiBnZWdldmVucyBnZXpvY2h0LiBPbSBkZXplIGluZm9ybWF0aWUgZ29lZCBvdmVyIHRlIGJyZW5nZW4gaGViYmVuIHdlIG1ldCBHb29nbGUgU2l0ZXMgZWVuIGluZm9ybWFpZXNpdGUgZ2VtYWFrdCBtZXQgb256ZSBjb25jbHVzaWVzIGVuIGJlcmVkZW5lcmluZ2VuLiBIaWVyYmlqIGhlYmJlbiB3ZSB2ZXJzY2hpbGxlbmRlIGFkdmllc2VuIGdlZ2V2ZW4gdm9vciBkZSB2ZXJzY2hpbGxlbmRlIGdyb290dGUgZW4gc29vcnRlbiBiZWRyaWp2ZW4uJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5TYW1lbndlcmtlbjwvc3Ryb25nPjxicj5CaWogZGl0IHByb2plY3QgaGViYmVuIHdlIHZlZWwgc2FtZW4gbW9ldGVuIHdlcmtlbiBlbiBtb2V0ZW4gY29tbXVuaXNlcmVuIG1ldCBlbGthYXIuIERvb3JkYXQgZGl0IGdvZWQgaXMgZ2VnYWFuIHppam4gd2Ugc2FtZW4gdG90IGRlIGNvbmNsdXNpZSwgd2FhciB3ZSBhbGxlbWFhbCB0ZXZyZWRlbiBvdmVyIHppam4sIGdla29tZW4uPGJyPjxzdHJvbmc+S2VubmlzZ2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+T21kYXQgZGl0IHByb2plY3QgZ2VyaWNodCBpcyBvcCBvbmRlcnpvZWsgd2FzIGhldCBiZWxhbmdyaWprIGRhdCBlciBnb2VkIGVuIHZlZWwgb25kZXJ6b2VrIHdlcmQgZ2VkYWFuLiBJayB2aW5kIGRhdCBkaXQgb25kZXJ6b2VrIGdvZWQgaXMgZ2VnYWFuLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ2Jlc3QtY29mZmVlLWN1cHMnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAnZmxleGliZWxlX3dvb252b3JtZW4nOiB7XG4gICAgICAgICdkYXRlJzogJzUgTm92ZW1iZXIgMjAxOCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFZW4gcHJvamVjdCBtZXQgYWxzIGRvZWwgb20gZWVuIHBsYW4gdGUgbWFrZW4gdm9vciBmbGV4aWJlbGUgd29vbnZvcm1lbiBpbiBkZSBnZW1lZW50ZSBHb3JpbmNoZW0uJyxcbiAgICAgICAgJ2luZGV4JzogJ2ZsZXhpYmVsZV93b29udm9ybWVuJyxcbiAgICAgICAgJ2xpbmtzJzoge30sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnRmxleGliZWxlIFdvb252b3JtZW4nLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnRGl0IHByb2plY3QgaXMgaW4gb3BkcmFjaHQgdmFuIGRlIGdlbWVlbnRlIEdvcmluY2hlbS4gRGUgb3BkcmFjaHQgdmFuIGRlIGdlbWVlbnRlIGlzIG9tIGVlbiBmbGV4aWJlbCB3b25pbmdjb21wbGV4IHRlIG9udHdpa2tlbGVuIHZvb3IgaGV0IGdlYmllZCB0dXNzZW4gZGUgYnJhbmR3ZWVyIGthemVybmUgaW4gR29yaW5jaGVtIGVuIGhldCBDb3JiaW9uIGluIEdvcmluY2hlbS4gT3AgZGl0IHRlcmVpbiBzdGFhbiBudSBvdWRlIGxvb2RzZW4uIEFscyBlZXJzdGUgaGViYmVuIHdlIGVlbiBQcm9ncmFtbWEgdmFuIEVpc2VuIGdlbWFha3QuIERhYXJpbiB3YXJlbiBkZSBiZWxhbmdyaWprc3RlIGVpc2VuIHZvb3IgZGUgaW5kZWxpbmcgdmFuIGhldCBnZWJpZWQsIGRhdCBkZSB3b25pbmdlbiBiZXN0ZW1kIHpvdWRlbiB6aWpuIHZvb3Igb3VkZXJlbiBlbiBzdGFydGVycy4gV2lqIGhlYmJlbiBoaWVydm9vciBlZW4gaW5kZWxpbmcgZ2VtYWFrdCBtZXQgZWVuIGNvbWJpbmF0aWUgdmFuIHR3ZWUtb25kZXItZWVuLWthcHdvbmluZ2VuIGVuIGFwcGFydGVtZW50ZW4uIE9vayBoZWJiZW4gd2UgbmFnZWRhY2h0IG92ZXIgZGUgZHV1cnphYW1oZWlkIHZhbiBkZSB3b2luaW5nZW4gZW4gZGUgaW5kZWxpbmcgdmFuIGRlIGNvbGxlY3RpZXZlIHJ1aW10ZXMuIEhpZXJ2b29yIGhlYmJlbiB3ZSBiaWp2b29yYmVlbGQgZWVuIHBhcmtqZSBpbiBkZSB3b29ud2lqayBnZXBsYWF0c3QuIEFscyBwcm9kdWN0IGhlYmJlbiB3ZSBlZW4gbWFxdWV0dGUgZ2VtYWFrdCB2YW4gZWVuIGV2ZW50dWVlbCBwbGFuIHZvb3IgZGV6ZSB3b29ud2lqay4nLFxuICAgICAgICAgICAgJ0NvbXBldGVudGllcyc6ICc8c3Ryb25nPlByb2R1Y3RnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5CaWogZGl0IHByb2plY3QgaGViYmVuIHdlIHZhbmFmIGhldCBiZWdpbiBhZiBhYW4gZ29lZCBuYWdlZGFjaHQgb3ZlciBoZXQgZWluZHByb2R1Y3QsIGRlIG1hcXVldHRlLiBUaWpkZW5zIGhldCBwcm9qZWN0IGhlYmJlbiB3ZSBvb2sgdmVyYmV0ZXJpbmdlbiBlbiBhYW5wYXNzaW5nIGdlbWFha3Qgb20gaGV0IGVpbmRwcm9kdWN0IHRlIHZlcmJldGVyZW4uIE9vayBoZWJiZW4gd2UgY29uc3RhbnQgcmVrZW5pbmcgZ2Vob3VkZW4gbWV0IGhldCBQcm9ncmFtbWEgdmFuIEVpc2VuLiBIaWVyZG9vciBoZWJiZW4gd2UgdWl0ZWluZGVsaWprIGVlbiBnb2VkIHByb2R1Y3QgZ2VsZXZlcmQuPGJyPjxzdHJvbmc+U2FtZW53ZXJrZW48L3N0cm9uZz48YnI+VGlqZGVucyBkaXQgcG9yamVjdCBoZWJiZW4gd2UgdmVlbCBtb2V0ZW4gc2FtZW53ZXJrZW4gbWV0IGhldCBvbnR3ZXJwZW4gdmFuIGRlIG1hcXVldHRlIGVuIGhldCBvbmRlcnpvZWsuIE9tZGF0IHdlIGhldCBzY3J1bW1lbiBnb2VkIGhlYmJlbiBiaWpnZWhvdWRlbiB3YXMgaGV0IG9vayBnZW1ha2VsaWprIG9tIGdvZWQgc2FtZW4gdGUgd2Vya2VuIGVuIGRlIHRha2VuIHRlIHZlcmRlbGVuLicsXG4gICAgICAgIH0sXG4gICAgICAgICdpbWFnZXMnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ2xvZ28tZ2VtZWVudGUtZ29yaW5jaGVtJyxcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5jb25zdCBwcm9qZWN0VHlwZXMgPSB7XG4gICAgJ2ZlYXR1cmVkJzogW1xuICAgICAgICAnYXF1YXpvb19sZWVyZGFtJyxcbiAgICAgICAgJ3N0YXRzZGJfb3ZlcmxheScsXG4gICAgICAgICdwb3J0Zm9saW9fd2Vic2l0ZScsXG4gICAgXSxcbiAgICAndGVjaFByb2plY3RzJzogW1xuICAgICAgICAnYXF1YXpvb19sZWVyZGFtJyxcbiAgICAgICAgJ2I0X3RlY2huaWVrX2NpcmN1bGFpcicsXG4gICAgICAgICdyb2xzdG9lbF9zdGFwcGVudGVsbGVyJyxcbiAgICAgICAgJ3BsYXN0aWNfc29lcCcsXG4gICAgICAgICdiNF90ZWNobmlla19tZXViZWxzJyxcbiAgICAgICAgJ2tldXplX2tvZmZpZWJla2VycycsXG4gICAgICAgICdmbGV4aWJlbGVfd29vbnZvcm1lbicsXG4gICAgXSxcbiAgICAnZnJlZXRpbWVQcm9qZWN0cyc6IFtcbiAgICAgICAgJ3N0YXRzZGJfb3ZlcmxheScsXG4gICAgICAgICdwb3J0Zm9saW9fd2Vic2l0ZScsXG4gICAgICAgICdyNmxvb2t1cF93ZWJzaXRlJyxcbiAgICBdLFxufTtcblxuY29uc3QgcHJvamVjdFR5cGVOYW1lcyA9IHtcbiAgICAnZmVhdHVyZWQnOiAnRmVhdHVyZWQnLFxuICAgICd0ZWNoUHJvamVjdHMnOiAnVGVjaG5hc2l1bSBQcm9qZWN0cycsXG4gICAgJ2ZyZWV0aW1lUHJvamVjdHMnOiAnRnJlZS1UaW1lIFByb2plY3RzJyxcbn07XG5cbmNvbnN0IHBhZ2VzID0ge1xuICAgICdhYm91dCc6IHtcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJzExOTgxOUBteW1lcmV3YWRlLm5sPGJyPnR5Y2hvYnJvdXdlcjMzQGdtYWlsLmNvbScsXG4gICAgICAgICAgICAndGl0bGUxJzogJ0ZvcnRlcyBMeWNldW0sIEdvcmluY2hlbTxicj5UZWNobmFzaXVtIGphYXIgNCwgNSBlbiA2JyxcbiAgICAgICAgICAgICd0aXRsZTInOiAnPHN0cm9uZz5NeSBHaXRIdWI6IDwvc3Ryb25nPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVHljaG9Ccm91d2VyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGNsYXNzPVwiYmxhbmtMaW5rXCI+aHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlcjwvYT4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge31cbiAgICB9XG59O1xuXG5jb25zdCBtb250aE5hbWVzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIixcbiAgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIlxuXTtcblxuZXhwb3J0IHtcbiAgICBwcm9qZWN0cyxcbiAgICBwcm9qZWN0VHlwZXMsXG4gICAgcHJvamVjdFR5cGVOYW1lcyxcbiAgICBwYWdlcyxcbiAgICBtb250aE5hbWVzXG59XG4iXSwic291cmNlUm9vdCI6IiJ9