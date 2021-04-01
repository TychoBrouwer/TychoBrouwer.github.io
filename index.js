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
        'date': 'current',
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
            'Circulaire Leverancier': 'Marieke Melten heeft ons namens B4 Techniek de opdracht gegeven om van B4 Techniek een cirulaire leverancier te worden. Het probleem is dat het meubilair wat B4 verzorgt niet gerecycled en weinig hergebruikt wordt. B4 wil graag een circulaire leverancier worden. De opdracht was dus: "Wat kunnen we ontwikkelen waardoor B4 een circulaire leverancier kan worden?"',
            'Bezoek B4': 'We konden door Corona niet bij B4 Techniek in Giesen op bezoek, maar we hebben wel alle voorbereiding gedaan voor het bezoek. We hebben meerdere vragen en ideeën bedacht. Een deel van deze vragen hebben we later via WhatsApp wel kunnen vragen een van de monteurs van B4 Techniek, Richard van Bijnen.',
            'Onderzoek': 'We hebben vooral onderzoek gedaan naar alternatieven voor de huidige materialen van de B4 tafels. Daarvoor hebben we aan de monteur gevraagd welk materiaal gebruikt word voor de tafel, daarop kregen we het antwoord dat het een spaanplaat is met een HPL toplaag. HPL is eigenlijk alleen thermisch te recyclen, dat is het verbranden van het materiaal om er energie uit te halen. Een andere oplossing zou het hergebruiken kunnen zijn in een of andere vorm.',
            'Conclusie': 'Door Corona is het onderzoek naar duurzame materialen en circulaire economie korter dan bedoelt en hebben we bijvoorbeeld niet een deel van het tafelblad, wat we bij B4 zouden ophalen, kunnen onderzoeken. We zijn er wel achter gekomen dat er geen makkelijke oplossing is voor het probleem, omdat de tafels tegen veel verschillende chemische stoffen moet kunnen.',
            'Competenties': '<strong>Individueel werken</strong><br>Meden door Corona hebben we veel individueel thuis moeten werken. Zo heb ik vooral gewerkt aan het zoeken van eventuele materialen om het huidige materiaal van de tafels mee te verplaatsen. Ook heb ik nagedacht over oplossingen voor het scheiden van het houten deel van de tafel en de plastic coating.<br><strong>Kennisgerichtheid</strong><br>Dit project was vooral gericht op het zoeken naar een theoretische oplossing. Het was dus belangrijk dat er goed onderzoek gedaan werd.',
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
            'title0': 'Dit project is in opdracht van Arjan Sterk, namens het bedrijf Motionpower. Hierbij hebben we de opdracht gekregen om een prototype te maken voor een fitness tracker voor rolstoelgebruikers en mensen met een fysieke beperking. Om dit te realiseren hebben we eerst onderzoek gedaan naar welke mogelijkheden die mensen wel nog hebben. Ook hebben we onderzoek gedaan naar bestaande oplossingen voor.',
            'Product': 'Voor het eindproduct hebben we een prototype gemaakt voor een rolstoel stappenteller. Hij kan het aantal rotaties van een rolstoel tellen doormiddel van een gyroscoop aangesloten op een Arduino Uno. We hebben ook geken naar een hartslagmeter, maar mede door beperkte tijd is het niet gelukt om de hartslagmeter betrouwbaar te maken. Bovendien zijn er al betrouwbare hartslagmeters beschikbaar voor fysiek gehandicapte mensen.',
            'Competenties': '<strong>Doorzetten</strong><br>Bij het ontwikkelen van het prototype zijn we tegen veel tegenslagen gelopen. Er waren veel complicaties met de gyroscoop en het verzamelen van de gegevens van de gyroscoop. Zo had de gyroscoop last van drift, dit is wanneer een gyroscoop uit de lijn raakt. Drift kan voor een groot deel uit de data gefilterd worden door een Kalman filter op de gegevens toe te passen.<br><strong>Productgerichtheid</strong><br>Bij dit project hebben we goed gewerkt aan het ontwikkelen van het prototype. Hiervoor hebben veel nagedacht over wat de beste oplossing kan zijn voor het prototype.',
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
            'title0': 'We hebben van Martin Bakker, namens het bedrijf de Waardemakers, de opdracht gekregen om met technasium een kenniscentrum op te richten. Dit kenniscentrum is bedoelt om het plastic in Gorinchem in kaart te brengen. Hiermee kunnen volgende klassen verder met het onderzoeken naar het plastic in Gorinchem en naar oplossingen ervoor zoeken.',
            'Probleem': 'In het begin was het probleem nog erg onduidelijk. Om dit probleem in kaart te brengen hebben we een onderzoek uitgevoerd naar het swerf plastic in Gorinchem. Maar een groot deel van het plastic in de natuur valt onder de microplastics die niet met het blote oog te zien zijn. Al dit maakt het heel moeilijk om het probleem goed in kaart te brengen. Ook maakt dit het moeilijk om het probleem over te brengen en communiseren naar het publiek.',
            'Onderzoek': 'Bij dit project hebben we ook veel onderzoek gedaan naar bestaande oplossingen voor het opruimen van plastic in de natuur en naar de herkomst van het plastic dat door Gorinchem komt. Daarbij is gekeken naar de verschillende rivieren die langs en door Goinchem stromen en andere bronnen van plastic.',
            'Competenties': '<strong>Samenwerken</strong><br>Voor dit project hebben we veel moeten samenwerken tussen de verschillende groepjes om samen één kenniscentrum te verzamelen. Hierbij hebben we goed moeten coördineren om niet dubbel onderzoek tussen de groepjes te doen.<br><strong>Kennisgerichtheid</strong><br>Dit project was volledig gericht op het onderzoek doen. Om het plastic probleem in Gorinchem eerst in kaart te brengen hebben we samen met alle groepjes een onderzoek gedaan gedaan naar hoeveel swerf plastic er nou echt in Gorinchem is.',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9uYXZpZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9vZGstdHMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL29kay10cy9wcm9qZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvdmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxnR0FBZ0Q7QUFDaEQsc0dBQStDO0FBQy9DLHVGQUFxQztBQUNyQyxzR0FBdUU7QUFFdkUsTUFBTSxJQUFJO0lBQ047SUFFQSxDQUFDO0lBRVksU0FBUyxDQUFDLE1BQU07O1lBQ3pCLE9B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O1NBQzFvQjtRQUNELFFBQVEsRUFBRTtZQUNOLFFBQVEsRUFBRSx5QkFBeUI7U0FDdEM7S0FDSjtDQUNKLENBQUM7QUE4Q0UsNEJBQVE7QUE1Q1osTUFBTSxZQUFZLEdBQUc7SUFDakIsVUFBVSxFQUFFO1FBQ1IsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixtQkFBbUI7S0FDdEI7SUFDRCxjQUFjLEVBQUU7UUFDWixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4QixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7S0FDekI7SUFDRCxrQkFBa0IsRUFBRTtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGtCQUFrQjtLQUNyQjtDQUNKLENBQUM7QUF5QkUsb0NBQVk7QUF2QmhCLE1BQU0sZ0JBQWdCLEdBQUc7SUFDckIsVUFBVSxFQUFFLFVBQVU7SUFDdEIsY0FBYyxFQUFFLHFCQUFxQjtJQUNyQyxrQkFBa0IsRUFBRSxvQkFBb0I7Q0FDM0MsQ0FBQztBQW9CRSw0Q0FBZ0I7QUFsQnBCLE1BQU0sS0FBSyxHQUFHO0lBQ1YsT0FBTyxFQUFFO1FBQ0wsU0FBUyxFQUFFO1lBQ1AsUUFBUSxFQUFFLGtEQUFrRDtZQUM1RCxRQUFRLEVBQUUsdURBQXVEO1lBQ2pFLFFBQVEsRUFBRSw4SkFBOEo7U0FDM0s7UUFDRCxRQUFRLEVBQUUsRUFBRTtLQUNmO0NBQ0osQ0FBQztBQVVFLHNCQUFLO0FBUlQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU07SUFDeEUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVO0NBQ2pFLENBQUM7QUFPRSxnQ0FBVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3B1YmxpYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IFByb2plY3RDbGFzcyB9IGZyb20gJy4vb2RrLXRzL3Byb2plY3QnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuL29kay10cy9uYXZpZ2F0b3InO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9vZGstdHMvcGFnZSc7XHJcbmltcG9ydCB7IHByb2plY3RzLCBwcm9qZWN0VHlwZXMsIHBhZ2VzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XHJcblxyXG5jbGFzcyBNYWluIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcHJpbnRQYWdlKHBhZ2VJZCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFnZSA9IG5ldyBQYWdlKHBhZ2VJZCwgJycsICcnLCBbXSwgcGFnZXNbcGFnZUlkXS5jb250ZW50LCBwYWdlc1twYWdlSWRdLmltYWdlcywgJycpO1xyXG5cclxuICAgICAgICAgICAgcGFnZS5wcmludFBhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYWluQ2xhc3MgPSBuZXcgTWFpbjtcclxuY29uc3QgbmF2Q2xhc3MgPSBuZXcgTmF2aWdhdG9yO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJpbnRQcm9qZWN0c05hdigpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3RUeXBlIGluIHByb2plY3RUeXBlcykge1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdFR5cGVzLmhhc093blByb3BlcnR5KHByb2plY3RUeXBlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0VHlwZXNbcHJvamVjdFR5cGVdO1xyXG5cclxuICAgICAgICAgICAgICAgIG5hdkNsYXNzLm5ld1Byb2plY3RUeXBlKHByb2plY3RUeXBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q2xhc3MocHJvamVjdHNbaV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuYXZDbGFzcy5uZXdQcm9qZWN0KHByb2plY3QucHJvamVjdEluZGV4KCksIHByb2plY3QucHJvamVjdFRpdGxlKCksIHByb2plY3RUeXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJpbnRQYWdlKHBhZ2VJZDogc3RyaW5nKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3RzW3BhZ2VJZF0pIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q2xhc3MocGFnZUlkKTtcclxuXHJcbiAgICAgICAgICAgIHByb2plY3QucHJpbnRQcm9qZWN0UGFnZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1haW5DbGFzcy5wcmludFBhZ2UocGFnZUlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbnByaW50UHJvamVjdHNOYXYoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdlBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdlBhZ2UnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZQYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuYXZQYWdlID0gbmF2UGFnZXNbaV07XHJcblxyXG4gICAgICAgICAgICBuYXZQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZQYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hdlBhZ2UgPSBuYXZQYWdlc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBuYXZQYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHByaW50UGFnZShuYXZQYWdlLmlkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuIiwiaW1wb3J0IHsgUHJvamVjdENsYXNzIH0gZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IHsgcHJvamVjdFR5cGVOYW1lcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy92YXJpYWJsZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvciB7XHJcbiAgICBwcml2YXRlIHByb2plY3REaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RDb250YWluZXInKSE7O1xyXG4gICAgcHJpdmF0ZSBmaXJzdFByb2plY3RUeXBlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgZmlyc3RQcm9qZWN0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbmV3UHJvamVjdFR5cGUocHJvamVjdFR5cGU6IHN0cmluZyk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdFByb2plY3RUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSAnYWN0aXZlJztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0UHJvamVjdFR5cGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0RGl2LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPScke3Byb2plY3RUeXBlfScgY2xhc3M9J25hdk9iamVjdCAke2FjdGl2ZX0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdlRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2TmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Byb2plY3RUeXBlTmFtZXNbcHJvamVjdFR5cGVdfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2RHJvcERvd25EaXYnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG5ld1Byb2plY3QocHJvamVjdEluZGV4OiBzdHJpbmcsIHByb2plY3ROYW1lOiBzdHJpbmcsIHByb2plY3RUeXBlOiBzdHJpbmcpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUeXBlRGl2OiBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9qZWN0VHlwZSArICcgLm5hdkRyb3BEb3duRGl2JykhO1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0UHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gJ2FjdGl2ZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0Q2xhc3MocHJvamVjdEluZGV4KTtcclxuICAgICAgICAgICAgICAgIHByb2plY3QucHJpbnRQcm9qZWN0UGFnZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RQcm9qZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByb2plY3RUeXBlRGl2LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9JyR7cHJvamVjdEluZGV4fScgY2xhc3M9J25hdkRyb3BEb3duIG5hdlBhZ2UgJHthY3RpdmV9Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdlRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSduYXZJY29uJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2TmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cHJvamVjdE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgbW9udGhOYW1lcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy92YXJpYWJsZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2Uge1xyXG4gICAgcHJpdmF0ZSBwYWdlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgcGFnZUlkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHBhZ2VkYXRlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHBhZ2VEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwYWdlVGFnczogQXJyYXk8c3RyaW5nPjtcclxuICAgIHByaXZhdGUgcGFnZUNvbnRlbnQ6IE9iamVjdDtcclxuICAgIHByaXZhdGUgcGFnZUltYWdlczogT2JqZWN0O1xyXG4gICAgcHJpdmF0ZSBwYWdlTGlua3M6IE9iamVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYWdlSWQ6IHN0cmluZywgZGF0ZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCB0YWdzOiBBcnJheTxzdHJpbmc+LCBjb250ZW50OiBPYmplY3QsIGltYWdlczogT2JqZWN0LCBsaW5rczogT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5wYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKSE7XHJcbiAgICAgICAgdGhpcy5wYWdlSWQgPSBwYWdlSWQ7XHJcbiAgICAgICAgdGhpcy5wYWdlZGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgdGhpcy5wYWdlRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnBhZ2VUYWdzID0gdGFncztcclxuICAgICAgICB0aGlzLnBhZ2VDb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLnBhZ2VJbWFnZXMgPSBpbWFnZXM7XHJcbiAgICAgICAgdGhpcy5wYWdlTGlua3MgPSBsaW5rcztcclxuICAgIH1cclxuXHJcbiAgICBwcmludFBhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZWRhdGUgPT09ICdjdXJyZW50Jykge1xyXG4gICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhZ2VkYXRlID0gYCR7ZC5nZXREYXRlKCl9ICR7bW9udGhOYW1lc1tkLmdldE1vbnRoKCldfSAke2QuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRhZ0hUTUwgPSAnJztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhZ2VUYWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZyA9IHRoaXMucGFnZVRhZ3NbaV07XHJcblxyXG4gICAgICAgICAgICB0YWdIVE1MICs9IGA8ZGl2IGNsYXNzPVwidGFnICR7dGFnfVwiPjxwPiR7dGFnfTwvcD48L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhZ2VDb250ZW50ID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHRpdGxlIGluIHRoaXMucGFnZUNvbnRlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZUNvbnRlbnQuaGFzT3duUHJvcGVydHkodGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGluZWEgPSB0aGlzLnBhZ2VDb250ZW50W3RpdGxlXTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nSFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFsaW5lYUNsYXNzID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZUltYWdlc1t0aXRsZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGl0bGUuaW5jbHVkZXMoJ2ltYWdlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nSFRNTCArPSBgPGltZyBjbGFzcz1cImFsaW5lYUltYWdlUm93XCIgc3JjPVwiLi9pbWFnZXMvcHJvamVjdHMvJHt0aGlzLnBhZ2VJbWFnZXNbdGl0bGVdfS53ZWJwXCIgYWx0PVwiJHt0aGlzLnBhZ2VJbWFnZXNbdGl0bGVdfVwiPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nSFRNTCA9IGA8ZGl2IGNsYXNzPVwiYWxpbmVhSW1hZ2VcIj48aW1nIHNyYz1cIi4vaW1hZ2VzL3Byb2plY3RzLyR7dGhpcy5wYWdlSW1hZ2VzW3RpdGxlXX0ud2VicFwiIGFsdD1cIiR7dGhpcy5wYWdlSW1hZ2VzW3RpdGxlXX1cIj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUuaW5jbHVkZXMoJ3RpdGxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGA8aDM+JHt0aXRsZX08L2gzPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGFnZUNvbnRlbnQgKz0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VBbGluZWEgJHt0aXRsZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAke3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICR7aW1nSFRNTH1cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHthbGluZWF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFnZUxpbmtzID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHRpdGxlIGluIHRoaXMucGFnZUxpbmtzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VMaW5rcy5oYXNPd25Qcm9wZXJ0eSh0aXRsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLnBhZ2VMaW5rc1t0aXRsZV07XHJcblxyXG4gICAgICAgICAgICAgICAgcGFnZUxpbmtzICs9IGA8YSBocmVmPVwiJHtsaW5rfVwiIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48c3Ryb25nPiR7dGl0bGV9PC9zdHJvbmc+PC9hPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFnZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGgyIGlkPVwicGFnZVRpdGxlXCI+JHt0aGlzLnBhZ2VJZH08L2gyPlxyXG4gICAgICAgIDxwIGlkPVwicGFnZURhdGVcIj4ke3RoaXMucGFnZWRhdGV9PC9wPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlVGFnc1wiPiR7dGFnSFRNTH08L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwicGFnZUNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VBbGluZWEgZGVzY3JpcHRpb25cIj48cD4ke3RoaXMucGFnZURlc2NyaXB0aW9ufTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgJHtwYWdlQ29udGVudH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwicGFnZUxpbmtzXCI+XHJcbiAgICAgICAgICAgICR7cGFnZUxpbmtzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZSc7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XHJcblxyXG5pbnRlcmZhY2UgSVByb2plY3Qge1xyXG4gICAgZGF0ZTogc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIGluZGV4OiBzdHJpbmcsXHJcbiAgICBpbWFnZTogc3RyaW5nLFxyXG4gICAgbGlua3M6IHtcclxuICAgICAgICB2aWV3OiBzdHJpbmcsXHJcbiAgICAgICAgZ2l0aHViOiBzdHJpbmcsXHJcbiAgICB9XHJcbiAgICB0YWdzOiBBcnJheTxzdHJpbmc+LFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGNvbnRlbnQ6IE9iamVjdCxcclxuICAgIGltYWdlczogT2JqZWN0LFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdENsYXNzIHtcclxuICAgIHByaXZhdGUgcHJvamVjdDogSVByb2plY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RzW3Byb2plY3ROYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9qZWN0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdC50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9qZWN0SW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdC5pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcmludFByb2plY3RQYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBuZXcgUGFnZSh0aGlzLnByb2plY3QudGl0bGUsIHRoaXMucHJvamVjdC5kYXRlLCB0aGlzLnByb2plY3QuZGVzY3JpcHRpb24sIHRoaXMucHJvamVjdC50YWdzLCB0aGlzLnByb2plY3QuY29udGVudCwgdGhpcy5wcm9qZWN0LmltYWdlcywgdGhpcy5wcm9qZWN0LmxpbmtzKTtcclxuXHJcbiAgICAgICAgcGFnZS5wcmludFBhZ2UoKTtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBwcm9qZWN0cyA9IHtcbiAgICAnc3RhdHNkYl9vdmVybGF5Jzoge1xuICAgICAgICAnZGF0ZSc6ICdjdXJyZW50JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0EgUmFpbmJvdyBTaXggU2llZ2UgaW5nYW1lIHN0YXRpc3RpY3Mgb3ZlcmxheSBtYWRlIGluIGNvbGxhYm9yYXRpb24gd2l0aCBPdmVyd29sZi4nLFxuICAgICAgICAnaW5kZXgnOiAnc3RhdHNkYl9vdmVybGF5JyxcbiAgICAgICAgJ2xpbmtzJzoge1xuICAgICAgICAgICAgJ1N0YXRzREIgQXBwJzogJ2h0dHBzOi8vd3d3Lm92ZXJ3b2xmLmNvbS9hcHAvU3RhdHNEQi1TdGF0c0RCJyxcbiAgICAgICAgICAgICdTdGF0c0RCIFdlYnNpdGUnOiAnaHR0cHM6Ly9zdGF0c2RiLm5ldC8nLFxuICAgICAgICAgICAgJ092ZXJ3b2xmJzogJ2h0dHBzOi8vd3d3Lm92ZXJ3b2xmLmNvbS8nLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICdmZWF0dXJlZCcsXG4gICAgICAgICAgICAnYXBwJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ1N0YXRzREIgT3ZlcmxheScsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdUaGlzIGlzIGEgcHJvamVjdCBpbiBjb2xhYm9yYXRpb24gd2l0aCBPdmVyd29sZi4gT3ZlcndvbGYgaXMgYSBmcmFtZXdvcmsgdGhhdCBhbGxvd3MgM3JkIHBhcnR5IGRldmVsb3BlcnMgdG8gZWFzaWx5IGJ1aWxkIGdhbWluZyBhcHBzIGFuZCBvdmVybGF5cyBpbiBIVE1MIGFuZCBKYXZhU2NyaXB0LiBUaGUgZ29hbCBvZiB0aGlzIHByb2plY3QgaXMgdG8gY3JlYXRlIGFuIGludHVpdGl2ZSBhbmQgZWFzeSB0byB1c2UgUmFpbmJvdyBTaXggU2llZ2Ugb3ZlcmxheSB0byB0cmFjayBhbmQgc2VlIHBsYXllciBzdGF0aXN0aWNzIGluZ2FtZS4gVGhpcyBwcm9qZWN0IEkgaGF2ZSB0ZWFtZWQgdXAgd2l0aCBKb2N1bGFyTWFycm93LicsXG4gICAgICAgICAgICAnU3RhcnR1cCc6ICdUaGUgcHJvamVjdCBzdGFydGVkIGFmdGVyIHdlIGhhZCBzdGFydGVkIG9uIGEgc3RhdGlzdGljcyB3ZWJzaXRlIGZvciBSYWluYm93IFNpeCBTaWVnZSwgYWZ0ZXIgd2UgaGFkIG1vc3RseSBmaW5pc2hlZCB0aGUgd2Vic2l0ZSB3ZSBkZWNpZGVkIHRvIHN1Ym1pdCBhbiBhcHAgcHJvcG9zYWwgdG8gT3ZlcndvbGYuIE5vdCBhIGxvdCBsYXRlciB3ZSBnb3QgYXBwcm92ZWQgYW5kIHN0YXJ0ZWQgd29ya2luZyBvbiB0aGUgb3ZlcmxheS4gTGF0ZXIgaW4gMjAyMCB3ZSBkZWNpZGVkIHRvIHNjcmFwIHRoZSB3ZWJzaXRlIGFuZCB0ZWFtIHVwIHdpdGggU3RhdHNEQi4gQWZ0ZXIgdGhhdCB3ZSBmb2N1c2VkIHNvbGVseSBvbiB0aGUgb3ZlcmxheS4nLFxuICAgICAgICAgICAgJ0NvZGUnOiAnVGhpcyBwcm9qZWN0IEkgd29ya2VkIHdpdGggSFRNTDUsIFNDU1MgYW5kIFR5cGVTY3JpcHQuIFNDU1Mgd2FzIGNob3NlbiBmb3IgdGhpcyBwcm9qZWN0IGJlY2F1c2UgaXQgaGFzIGFuIGltcHJvdmVkIGVhc2llciB0byBpbnRlcnByZXQgc3ludGF4IGNvbXBhcmVkIHRvIENTUzMuIEFuZCBnaXZlcyB5b3UgdGhlIGFiaWxpdHkgdG8gZWFzaWx5IGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcy4gVHlwZVNjcmlwdCB3YXMgY2hvc2VuIGZvciB0aGlzIHByb2plY3QsIGJlY2F1c2UgT3ZlcndvbGYgaGFzIGEgc2FtcGxlIHByb2plY3Qgd3JpdHRlbiBpbiBUeXBlU2NyaXB0LiBPdGhlciByZWFzb25zIGZvciB1cyB0byB1c2UgVHlwZVNjcmlwdCB3ZXJlLCB0aGF0IGl0IGdpdmVzIHVzIHRoZSBhYmJpbGl0eSB0byB1c2UgT3ZlcndvbGZzIFR5cGVTY3JpcHQgZGVjbGFyYXRpb24gZmlsZSBhbmQgZWFybHkgYnVnIHNwb3R0aW5nIGR1cmluZyB0aGUgY29tcGlsZSBzdGFnZS4nLFxuICAgICAgICAgICAgJ0FwcCc6ICdPdXIgZ29hbCB3YXMgdG8gbWFrZSBhIGhpZ2hseSBjdXN0b21pemFibGUgb3ZlcmxheSB3aGljaCB0aGUgdXNlciBjYW4gY3VzdG9taXplIHRvIHRoZWlyIG93biBwcmVmZXJlbmNlcy4gVGhlIGZlYXR1cmVzIG9mIHRoZSBhcHAgaW5jbHVkZSB0aGUgYWJpbGl5IHRvIGdldCB0aGUgc3RhdGlzdGljcyBvZiB0aGUgcGxheWVycyBpbiB5b3VyIGdhbWUgbG9iYnksIHRoZSB0cmFja2luZyBvZiBzdGF0aXN0aWNzIHN1Y2ggYXMgZGFpbHkgYW5kIHdlZWtseSBLL0QgYW5kIFdpbi9Mb3NzIHJhdGlvcy4gRnVydGhlcm1vcmUgeW91IGNhbiByZXZpc2l0IHlvdXIgcGxheWVkIGdhbWVzIGFuZCBzZWUgeW91ciBwZXJmb3JtYW5jZSByb3VuZCBieSByb3VuZC4gSW4gdGVybXMgb2YgY3VzdG9taXNpbmcgdGhlIG92ZXJsYXkgeW91IGNhbiBjaGFuZ2UgdGhvIGNvbG9yIHRoZW1lIGFuZCBjaG9zZSB3aXRoIHN0YXRpc3RpY3MgdG8gc2hvdyBpbmdhbWUgb24gdGhlIG92ZXJsYXkuJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnbG9nby1vdmVyd29sZicsXG4gICAgICAgICAgICAnQ29kZSc6ICdsb2dvLXNjc3MtdHlwZXNjcmlwdCcsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdwb3J0Zm9saW9fd2Vic2l0ZSc6IHtcbiAgICAgICAgJ2RhdGUnOiAnY3VycmVudCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdNeSBjdXJyZW50IHBvcnRmb2xpbyB3ZWJzaXRlLiBBa2EgbXkgY29kaW5nIHNhbmRib3ggZm9yIHRyeWluZyBuZXcgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzIGFuZCBmcmFtZXdvcmtzLicsXG4gICAgICAgICdpbmRleCc6ICdwb3J0Zm9saW9fd2Vic2l0ZScsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdQb3J0Zm9saW8gR2l0SHViJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXIvUG9ydGZvbGlvJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAnZmVhdHVyZWQnLFxuICAgICAgICAgICAgJ3dlYnNpdGUnLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnUG9ydGZvbGlvIFdlYnNpdGUnLFxuICAgICAgICAnY29udGVudCc6IHt9LFxuICAgICAgICAnaW1hZ2VzJzoge30sXG4gICAgfSxcbiAgICAncjZsb29rdXBfd2Vic2l0ZSc6IHtcbiAgICAgICAgJ2RhdGUnOiAnMjkgRGVjZW1iZXIgMjAyMCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdBIFJhaW5ib3cgU2l4IFNpZWdlIHN0YXRpc3RpY3Mgd2Vic2l0ZSBmb3Igc2VhcmNoaW5nIHlvdXIgYW5kIHlvdXIgZW5lbWllcyBnYW1lIHN0YXRpc3RpY3MuJyxcbiAgICAgICAgJ2luZGV4JzogJ3I2bG9va3VwX3dlYnNpdGUnLFxuICAgICAgICAnbGlua3MnOiB7XG4gICAgICAgICAgICAnUjZMb29rdXAgR2l0SHViJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXIvUjZMb29rdXAtV2Vic2l0ZScsXG4gICAgICAgICAgICAnU3RhdHNEQiBXZWJzaXRlJzogJ2h0dHBzOi8vc3RhdHNkYi5uZXQvJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ3RhZ3MnOiBbXG4gICAgICAgICAgICAnd2Vic2l0ZScsXG4gICAgICAgIF0sXG4gICAgICAgICd0aXRsZSc6ICdSNkxvb2t1cCBXZWJzaXRlJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ1RoaXMgcHJvamVjdCBvcmlnaW5hbHkgc3RhcnRlZCBhcyBhIHNtYWxsIHByb2plY3QgdG8gYmUgYWJsZSB0byBjaGVjayBteSBvd24gc3RhdGlzdGljcyBhbmQgcHJvZ3Jlc3Npb24gaW4gUmFpbmJvdyBTaXggU2llZ2UuIEFmdGVyIEkgd2FzIHVuaGFwcHkgd2l0aCB0aGUgY3VycmVudGx5IGF2YWlsYWJsZSB3ZWJzaXRlIHRoYXQgd2hlcmUgc2VydmluZyB0aGUgYWJpbGl0eSB0byBjaGVjayBSYWluYm93IFNpeCBTaWVnaGUgcGxheWVyIHN0YXRpc3RpY3MuIEFmdGVyIEkgd2hpbGUgSSBzdGFydGVkIHdvcmtpbmcgb24gaXQgd2l0aCBKb2N1bGFyTWFycm93LiBUaGlzIHdhcyB0aGUgYmVnaW5pbmcgb2YgdGhlIGFjY3VhbCB3ZWJzaXRlLiBUaGUgd2Vic2l0ZSBpcyBjdXJyZW50bHkgZGlzY29udGludWVkLCBiZWNhdXNlIHdlIGRlY2lkZWQgdG8gc29sZWx5IGZvY3VzIG9uIGRlIE92ZXJ3b2xmIG92ZXJsYXkgYW5kIHdvcmsgdG9nZXRoZXIgd2l0aCBTdGF0c0RCLicsXG4gICAgICAgICAgICAnQ29kZSc6ICdUaGlzIHByb2plY3Qgd2FzIG15IGZpcnN0IGV4cGVyaWVuY2Ugd2l0aCB3b3JraW5nIHdpdGggUEhQLiBBbmQgbXkgZmlyc3QgbWF5b3IgcHJvamVjdCB1c2luZyBIVE1MNSwgSmF2YVNjcmlwdCBhbmQgU0NTUy4gQmVjYXVzZSBJIHdhcyBxdWl0ZSB0aGUgYmVnaW5uZXIgYXQgY29kaW5nIEkgaGFkIHRvIGNsZWFuIHVwIHRoZSBjb2RlIGEgbG90IGFmdGVyIEkgZ290IGJldHRlciBhdCB3b3JraW5nIHdpdGggUEhQLiBJZiBJIHdvdWxkIHN0YXJ0IG92ZXIgSSB3b3VsZCBsaWtlIHRvIGJlbGlldmUgdGhlIHByb2plY3Qgd291bGQgaGF2ZSBiZWVuIGEgbG90IGxlc3MgY29tcGxleCBhbmQgbWVzc3kuJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnbG9nby1yNmxvb2t1cCcsXG4gICAgICAgICAgICAnQ29kZSc6ICdwaHAtbG9nbycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAnYXF1YXpvb19sZWVyZGFtJzoge1xuICAgICAgICAnZGF0ZSc6ICdjdXJyZW50JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VlbiBzY2hvb2xwcm9qZWN0IGluIG9wZHJhY2h0IHZhbiBIYW5zIHZhbiBEYW0gdmFuIEFxdWFab28gTGVlcmRhbSBvbSBkZSBhcXVhcml1bWxpY2h0ZW4gdmFuIGVlbiBhZnN0YW5kIHRlIGJlc3R1cmVuLicsXG4gICAgICAgICdpbmRleCc6ICdhcXVhem9vX2xlZXJkYW0nLFxuICAgICAgICAnbGlua3MnOiB7XG4gICAgICAgICAgICAnQXF1YVpvbyBQcm9qZWN0IEdpdEh1Yic6ICdodHRwczovL2dpdGh1Yi5jb20vVHljaG9Ccm91d2VyL0FxdWFab28tTGVlcmRhbScsXG4gICAgICAgIH0sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ2ZlYXR1cmVkJyxcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgICAgICdhcmR1aW5vJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0FxdWFab28gTGVlcmRhbScsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdEaXQgaXMgZWVuIHByb2plY3QgbmFtZW5zIGRlIG9wZHJhY2h0Z2V2ZXIgQXF1YVpvbyBMZWVyZGFtLiBPbWRhdCBBcXVhWm9vIG1ldCBtZWVyZGVyZSB2cmlqd2lsbGlnZXJzIHdlcmt0IGVuIGhldCBhcXVhcml1bSBkdXMgbmlldCBhbHRpamQgZG9vciBkZXplbGZkZSBwZXJzb29uIGFmZ2VzbG90ZW4gd29yZHQuIEhpZXJkb29yIGthbiBlciBuaWV0IGFsdGlqZCBnZWdhcmFuZGVlcmQgd29yZGVuIG9mIGdlY29udHJvbGVlcmQgd29yZGVuLCBkYXQgZGUgYXF1YXJpdW1sYW1wZW4gb3AgZGUganVpc3RlIHN0YW5kIHppam4gZ2V6ZXQgYmlqIGhldCBhZnNsdWl0ZW4uIFdpaiBoYWRkZW4gZGFhcm9tIGRlIG9wZHJhY2h0IGdla3JlZ2VuIG9tIGVlbiBzeXN0ZWVtIHRlIG9udHdpa2tlbGVuIHdhYXJtZWUgQXF1YVpvbyBMZWVyZGFtIGRlIGxpY2h0ZW4gdmFuIGh1biBhcXVhcml1bXMgb3AgYWZzdGFuZCBrYW4gYmVzdHVyZW4uIEJpbm5lbiBoZXQgcHJvamVjdCBoYWQgaWsgZGUgdGFhayB2YW4gaGV0IHByb2dyYW1tZXJlbiBlbiBvbnR3aWtrZWxlbiB2YW4gaGV0IEFyZHVpbm8gcHJvdG90eXBlIGVuIGNvZGUuIERpdCBwcm9qZWN0IGhlYiBpayBzYW1lbmdld2Vya3QgbWV0IENhaW4gV29lc3RlbmJ1cmcgZW4gRGF2aWQgQmFnaWpuLiBEaWUgemljaCB2b29yYWwgZ2Vmb2N1c2VkIGhlYmJlbiBvcCBoZXQgdm9vcm9uZGVyem9layBuYWFyIGJlc3RhYW5kZSBvcGxvc3Npbmdlbi4nLFxuICAgICAgICAgICAgJ01lZXN0ZXJwcm9lZic6ICdEZSBNZWVzdGVycHJvZWYgaXMgZWVuIGVpbmRleGFtZW5wcm9qZWN0IHZhbiBoZXQgdmFrIE8mTy4gSG9ldCBkb2VsIHZhbiBoZXQgcHJvamVjdCBpcyBkYXQgZGUgbGVlcmluZyBhbGxlIHZhYXJkaWdoZWRlbiBsYWF0IHppZW4gZGllIG5vZGlnIHppam4gb20gZWVuIHRlY2huYXNpdW1sZWVybGluZyB0ZSB6aWpuLiBUaWpkZW5zIGRpdCBwcm9qZWN0IHdvcmR0IGVyIHdlaW5pZyBkb29yIGRlIGRvY2VudGVuIGdlcmVnZWxkIGVuIG1vZXQgZGUgbGVlcmxpbmcgZHVzIHZlZWwgemVsZnN0YW5kaWdoZWlkIGxhdGVuIHppZW4uIFpvIG1vZXRlbiBkZSBncm9lcGplcyB6ZWxmIGVlbiBvcGRyYWNodCBtZXQgZWVuIG9wZHJhY2h0Z2V2ZXIgcmVnZWxlbi4gRWVuIGdlZGVlbHRlIHZhbiBkZSBNZWVzdGVycHJvZWYgdm9ybXQgaGV0IHByb2ZpZWx3ZXJrc3R1ay4nLFxuICAgICAgICAgICAgJ0hldCBQcm9kdWN0JzogJ09ucyBwcm9kdWN0IG1hYWt0IGdlYnJ1aWsgdmFuIGVlbiBBcmR1aW5vIE1lZ2EgMjU2MCBvbSBkZSBsaWNodGVuIHRlIGt1bm5lbiBiZXN0dXJlbi4gT20gZGUgQXJkdWlubyBvcCBhZnN0YW5kIHRlIGt1bm5lbiBiZXN0dXJlbiBoZWJiZW4gd2UgbWV0IGJlaHVscCB2YW4gZWVuIEV0aGVybmV0IFNoaWVsZCBlZW4gd2Vic2VydmVyIG9wZ2V6ZXQuIERlIHdlYnNlcnZlciBpcyBiZXNjaGVybXQgbWV0IGVlbiB3YWNodHdvb3JkLiBWaWEgZGUgd2Vic2VydmVyIGt1bm5lbiBkZSBsYW1wZW4gdmlhIGRlIEFyZHVpbm8gd29yZGVuIGFhbmdlc3R1dXJkLiBBcXVhWm9vIHdpbGRlIG9vayBkZSBtb2dlbGlqa2hlaWQgaGViYmVuIG9tIHRlIGt1bm5lbiBjb250cm9sbGVyZW4gd2FubmVlciBlbiB3aWUgZGUgbGFtcGVuIGhlZWZ0IGJlc3R1dXJkLiBIaWVydm9vciBzbGFhbiB3ZSBkZSBsb2dzIG9wIG9wIGVlbiBTRC1rYWFydCBtZXQgZWVuIHRpbWVzdGFtcCBkaWUgd29yZHQgdmVya3JlZ2VuIGRvb3IgZWVuIFJUQy1tb2R1bGUuJyxcbiAgICAgICAgICAgICd0aXRsZTEnOiAnVm9vciBoZXQgcHJvZHVjdCBoZWJiZW4gd2Ugb29rIGVlbiBiZWh1aXppbmcgb250d29ycGVuIGVuIDNELWdlcHJpbnQuIFdlIGhlYmJlbiBoZXQgb250d2VycCB2b29yIGRlIGJlaHVpemluZyBnZW1hYWt0IG1ldCBiZWh1bHAgdmFuIGJsZW5kZXIuIEhldCBvbnR3ZXJwIGlzIGdlw6t4cG9ydGVlcmQgYWxzIFNUTCBvbSBoZXQgdGUga3VubmVuIHByaW50ZW4gbWV0IGRlIDNELXByaW50ZXIgb3Agc2Nob29sLiBNZXQgaGV0IDNELXByaW50ZW4gbGllcGVuIHdlIHRlZ2VuIG1lZXJkZXJlIG9ic3Rha2VscyBvcCwgem9hbHMgZWVuIG5pZXQgZ29lZCBhZmdlc3RlbGQgcHJpbnRiZWQgZW4gZWVuIHNsZWNodGUgdG9ldm9lZyB2YW4gaGV0IGZpbGFtZW50LicsXG4gICAgICAgICAgICAndGl0bGVpbWFnZTAnOiAnJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5Qcm9kdWN0Z2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+SGV0IGJlbGFuZ3JpamtzdGUgZG9lbCB2YW4gZGl0IHByb2plY3QgYmVzdG9uZCB1aXQgaGV0IG9udHdpa2tlbGVuIHZhbiBoZXQgcHJvdG90eXBlLiBBYW5nZXppZW4gaWsgZGFhciB2ZWVsIHdlcmsgZW4gYWFuZGFjaHQgYWFuIGhlYiBiZXN0ZWVkIHZpbmQgaWsgZGF0IGlrIGdvZWQgcHJvZHVjdGdlcmljaHQgaGViIGdld2Vya3QuIEhpZXJiaWogaGViYmVuIHdlIGNvbnN0YW50IGNvbnRhY3QgZ2VoYWQgbWV0IGRlIG9wZHJhY2h0Z2V2ZXIgZW4gb25zIGdlaG91ZGVuIGFhbiBoZXQgUHJvZ3JhbW1hIHZhbiBFaXNlbiwgb20gZXJ2b29yIHRlIHpvcmdlbiBkYXQgb25zIHByb3RvdHlwZSB2b2xkZWVkIGFhbiBkZSBlaXNlbiBlbiB3ZW5zZW4gdmFuIGRlIG9wZHJhY2h0Z2V2ZXIuPGJyPjxzdHJvbmc+SW5kaXZpZHVlZWwgd2Vya2VuPC9zdHJvbmc+PGJyPkRvb3JkYXQgaGV0IGdyb290c3RlIGRlZWwgdmFuIGRlIHBlcmlvZGUgdmFuIGhldCBwcm9qZWN0IHRpamRlbnMgZGUgQ29yb25hIGxvY2tkb3duIGVuIG1hYXRyZWdlbGVuIGhlZWZ0IHBsYWF0c2dldm9uZGVuLCBoZWJiZW4gd2UgdmVlbCBpbmRpdmlkdWVlbCBtb2V0ZW4gd2Vya2VuLiBIaWVyYmlqIGhlYmJlbiB3ZSB1aXRlcmFhcmQgdmVlciBjb250YWN0IGdlaGFkIG1ldCBlbGthYXIgZW4gZGUgb3BkcmFjaHRnZXZlciBlbiBlZW4gZ29lZGUgdGFrZW52ZXJkZWxpbmcgZ2VtYWFrdCwgd2F0IG5hdHV1cmxpamsgdmFuIGJlbGFuZyBpcyBvbSBnb2VkIGluZGl2aWR1ZWVsIHRlIGt1bm5lbiB3ZXJrZW4uPGJyPjxzdHJvbmc+RG9vcnpldHRlbjwvc3Ryb25nPjxicj5Pb2sgdmluZCBpayBkYXQgd2UgYWxzIGdyb2VwamUgb3AgdmVyc2NoaWxsZW5kZSBnZWJpZWRlbiBnb2VkIGhlYmJlbiBkb29yZ2V6ZXQgb20gdG90IGVlbiBnb2VkIGVpbmRlIHRlIGtvbWVuLiBabyB2ZXJsaWVwIGRlIHN0YXJ0IGFhbiBoZXQgcHJvamVjdCBuaWV0IGhlZWwgc29lcGVsLCBtZWRlIG9tZGF0IHdlIGdlZW4gb3BkcmFjaHRnZXZlciBrb25kZW4gdmluZGVuLiBNYWFyIG5hIHZlZWwgZG9vcnpldHRlbiBlbiBtYWlscyB2ZXJzdHVyZW4gbmFhciBwb3RlbnRpw6tsZSBvcGRyYWNodGdldmVycyBoZWJiZW4gd2UgdG9jaCBlZW4gb3BkcmFjaHQga3VubmVuIHZpbmRlbi4gRWVuIGFuZGVyIGdlYmllZCB3YWFyIGlrIHZpbmQgZGF0IHdlIGdvZWQgZG9vcmdlemV0IGhlYmJlbiBpcyBiaWogaGV0IDNELXByaW50ZW4sIGhpZXJhYW4gaGViYmVuIG1lZXIgZGFuIGVlbiB3ZWVrIGllZGVyZSBkYWcgb3Agc2Nob29sIGVyYWFuIGdld2Vya3Qgb20gaGV0IG1hYXIgZ2VwcmludCB0ZSBrcmlqZ2VuLiBVaXRlaW5kZWxpamsgaGViYmVuIHdlIG9vayBoaWVydm9vciBlZW4gb3Bsb3NzaW5nIGdldm9uZGVuLiBBbHMgbGFhdHN0ZSB2aW5kIGlrIGRhdCBpayB6ZWxmIGdvZWQgaGViIGRvb3JnZXpldCBtZXQgaGV0IHByb2dyYW1tZXJlbiB2YW4gZGUgY29kZSB2b29yIGRlIEFyZHVpbm8uIFByb2dyYW1tZXJlbiBpcyBhbHRpamQgdmVlbCB0ZXN0ZW4gZW4gdWl0cHJvYmVyZW4uIE1lZGUgb21kYXQgaWsgaGV0IHplbGYgb29rIGVyZyBsZXVrIHZpbmQgaGViIGlrIGhpZXJhYW4gaGVsZSBkYWdlbiBhYW4gZG9vcmdld2Vya3Qgb20gdWl0ZWluZGVsaWprIHRvdCBlZW4gd2Vya2VuZCBwcm90b3R5cGUgdGUga29tZW4uJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnbG9nby1hcXVhem9vJyxcbiAgICAgICAgICAgICdIZXQgUHJvZHVjdCc6ICdhcmR1aW5vLW1lZ2EyNTYwJyxcbiAgICAgICAgICAgICd0aXRsZWltYWdlMCc6ICdhcXVhem9vLXByb3RvdHlwZScsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdiNF90ZWNobmlla19jaXJjdWxhaXInOiB7XG4gICAgICAgICdkYXRlJzogJzMwIEp1bmUgMjAyMCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFZW4gc2Nob29sIG9uZGVyem9layBuYW1lbnMgQjQgVGVjaG5pZWsgbmFhciBkZSBtb2dlbGlqa2hlZGVuIHZvb3IgQjQgVGVjaG5pZWsgb20gZWVuIGNpcnVsYWlyZSBsZXZlcmFuY2llciB0ZSB3b3JkZW4uJyxcbiAgICAgICAgJ2luZGV4JzogJ2I0X3RlY2huaWVrX2NpcmN1bGFpcicsXG4gICAgICAgICdsaW5rcyc6IHt9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0I0IFRlY2huaWVrIENpcmN1bGFpcicsXG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ0NpcmN1bGFpcmUgTGV2ZXJhbmNpZXInOiAnTWFyaWVrZSBNZWx0ZW4gaGVlZnQgb25zIG5hbWVucyBCNCBUZWNobmllayBkZSBvcGRyYWNodCBnZWdldmVuIG9tIHZhbiBCNCBUZWNobmllayBlZW4gY2lydWxhaXJlIGxldmVyYW5jaWVyIHRlIHdvcmRlbi4gSGV0IHByb2JsZWVtIGlzIGRhdCBoZXQgbWV1YmlsYWlyIHdhdCBCNCB2ZXJ6b3JndCBuaWV0IGdlcmVjeWNsZWQgZW4gd2VpbmlnIGhlcmdlYnJ1aWt0IHdvcmR0LiBCNCB3aWwgZ3JhYWcgZWVuIGNpcmN1bGFpcmUgbGV2ZXJhbmNpZXIgd29yZGVuLiBEZSBvcGRyYWNodCB3YXMgZHVzOiBcIldhdCBrdW5uZW4gd2Ugb250d2lra2VsZW4gd2FhcmRvb3IgQjQgZWVuIGNpcmN1bGFpcmUgbGV2ZXJhbmNpZXIga2FuIHdvcmRlbj9cIicsXG4gICAgICAgICAgICAnQmV6b2VrIEI0JzogJ1dlIGtvbmRlbiBkb29yIENvcm9uYSBuaWV0IGJpaiBCNCBUZWNobmllayBpbiBHaWVzZW4gb3AgYmV6b2VrLCBtYWFyIHdlIGhlYmJlbiB3ZWwgYWxsZSB2b29yYmVyZWlkaW5nIGdlZGFhbiB2b29yIGhldCBiZXpvZWsuIFdlIGhlYmJlbiBtZWVyZGVyZSB2cmFnZW4gZW4gaWRlZcOrbiBiZWRhY2h0LiBFZW4gZGVlbCB2YW4gZGV6ZSB2cmFnZW4gaGViYmVuIHdlIGxhdGVyIHZpYSBXaGF0c0FwcCB3ZWwga3VubmVuIHZyYWdlbiBlZW4gdmFuIGRlIG1vbnRldXJzIHZhbiBCNCBUZWNobmllaywgUmljaGFyZCB2YW4gQmlqbmVuLicsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ1dlIGhlYmJlbiB2b29yYWwgb25kZXJ6b2VrIGdlZGFhbiBuYWFyIGFsdGVybmF0aWV2ZW4gdm9vciBkZSBodWlkaWdlIG1hdGVyaWFsZW4gdmFuIGRlIEI0IHRhZmVscy4gRGFhcnZvb3IgaGViYmVuIHdlIGFhbiBkZSBtb250ZXVyIGdldnJhYWdkIHdlbGsgbWF0ZXJpYWFsIGdlYnJ1aWt0IHdvcmQgdm9vciBkZSB0YWZlbCwgZGFhcm9wIGtyZWdlbiB3ZSBoZXQgYW50d29vcmQgZGF0IGhldCBlZW4gc3BhYW5wbGFhdCBpcyBtZXQgZWVuIEhQTCB0b3BsYWFnLiBIUEwgaXMgZWlnZW5saWprIGFsbGVlbiB0aGVybWlzY2ggdGUgcmVjeWNsZW4sIGRhdCBpcyBoZXQgdmVyYnJhbmRlbiB2YW4gaGV0IG1hdGVyaWFhbCBvbSBlciBlbmVyZ2llIHVpdCB0ZSBoYWxlbi4gRWVuIGFuZGVyZSBvcGxvc3Npbmcgem91IGhldCBoZXJnZWJydWlrZW4ga3VubmVuIHppam4gaW4gZWVuIG9mIGFuZGVyZSB2b3JtLicsXG4gICAgICAgICAgICAnQ29uY2x1c2llJzogJ0Rvb3IgQ29yb25hIGlzIGhldCBvbmRlcnpvZWsgbmFhciBkdXVyemFtZSBtYXRlcmlhbGVuIGVuIGNpcmN1bGFpcmUgZWNvbm9taWUga29ydGVyIGRhbiBiZWRvZWx0IGVuIGhlYmJlbiB3ZSBiaWp2b29yYmVlbGQgbmlldCBlZW4gZGVlbCB2YW4gaGV0IHRhZmVsYmxhZCwgd2F0IHdlIGJpaiBCNCB6b3VkZW4gb3BoYWxlbiwga3VubmVuIG9uZGVyem9la2VuLiBXZSB6aWpuIGVyIHdlbCBhY2h0ZXIgZ2Vrb21lbiBkYXQgZXIgZ2VlbiBtYWtrZWxpamtlIG9wbG9zc2luZyBpcyB2b29yIGhldCBwcm9ibGVlbSwgb21kYXQgZGUgdGFmZWxzIHRlZ2VuIHZlZWwgdmVyc2NoaWxsZW5kZSBjaGVtaXNjaGUgc3RvZmZlbiBtb2V0IGt1bm5lbi4nLFxuICAgICAgICAgICAgJ0NvbXBldGVudGllcyc6ICc8c3Ryb25nPkluZGl2aWR1ZWVsIHdlcmtlbjwvc3Ryb25nPjxicj5NZWRlbiBkb29yIENvcm9uYSBoZWJiZW4gd2UgdmVlbCBpbmRpdmlkdWVlbCB0aHVpcyBtb2V0ZW4gd2Vya2VuLiBabyBoZWIgaWsgdm9vcmFsIGdld2Vya3QgYWFuIGhldCB6b2VrZW4gdmFuIGV2ZW50dWVsZSBtYXRlcmlhbGVuIG9tIGhldCBodWlkaWdlIG1hdGVyaWFhbCB2YW4gZGUgdGFmZWxzIG1lZSB0ZSB2ZXJwbGFhdHNlbi4gT29rIGhlYiBpayBuYWdlZGFjaHQgb3ZlciBvcGxvc3NpbmdlbiB2b29yIGhldCBzY2hlaWRlbiB2YW4gaGV0IGhvdXRlbiBkZWVsIHZhbiBkZSB0YWZlbCBlbiBkZSBwbGFzdGljIGNvYXRpbmcuPGJyPjxzdHJvbmc+S2VubmlzZ2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+RGl0IHByb2plY3Qgd2FzIHZvb3JhbCBnZXJpY2h0IG9wIGhldCB6b2VrZW4gbmFhciBlZW4gdGhlb3JldGlzY2hlIG9wbG9zc2luZy4gSGV0IHdhcyBkdXMgYmVsYW5ncmlqayBkYXQgZXIgZ29lZCBvbmRlcnpvZWsgZ2VkYWFuIHdlcmQuJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHtcbiAgICAgICAgICAgICdDaXJjdWxhaXJlIExldmVyYW5jaWVyJzogJ2xvZ28tYjR0ZWNobmllaycsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ2xhZGRlci12YW4tbGFuc2luaycsXG4gICAgICAgIH1cbiAgICB9LFxuICAgICdyb2xzdG9lbF9zdGFwcGVudGVsbGVyJzoge1xuICAgICAgICAnZGF0ZSc6ICcxMyBEZWNlbWJlciAyMDE5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VlbiBzY2hvb2wgcHJvamVjdCBlbiBvbmRlcnpvZWsgbmFhciBkZSBtb2dlbGlqa2hlZGVuIHJvbmQgaGV0IGZpdG5lc3MgdHJhY2tlbiB2YW4gZnlzaWVrIGJlcGVya3RlIG1lbnNlbi4nLFxuICAgICAgICAnaW5kZXgnOiAncm9sc3RvZWxfc3RhcHBlbnRlbGxlcicsXG4gICAgICAgICdsaW5rcyc6IHtcbiAgICAgICAgICAgICdSb2xzdG9lbCBQcm9qZWN0IEdpdEh1Yic6ICdodHRwczovL2dpdGh1Yi5jb20vVHljaG9Ccm91d2VyL1JvbHN0b2VsLVByb2plY3QnLFxuICAgICAgICB9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ1JvbHN0b2VsIFN0YXBwZW50ZWxsZXInLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnRGl0IHByb2plY3QgaXMgaW4gb3BkcmFjaHQgdmFuIEFyamFuIFN0ZXJrLCBuYW1lbnMgaGV0IGJlZHJpamYgTW90aW9ucG93ZXIuIEhpZXJiaWogaGViYmVuIHdlIGRlIG9wZHJhY2h0IGdla3JlZ2VuIG9tIGVlbiBwcm90b3R5cGUgdGUgbWFrZW4gdm9vciBlZW4gZml0bmVzcyB0cmFja2VyIHZvb3Igcm9sc3RvZWxnZWJydWlrZXJzIGVuIG1lbnNlbiBtZXQgZWVuIGZ5c2lla2UgYmVwZXJraW5nLiBPbSBkaXQgdGUgcmVhbGlzZXJlbiBoZWJiZW4gd2UgZWVyc3Qgb25kZXJ6b2VrIGdlZGFhbiBuYWFyIHdlbGtlIG1vZ2VsaWpraGVkZW4gZGllIG1lbnNlbiB3ZWwgbm9nIGhlYmJlbi4gT29rIGhlYmJlbiB3ZSBvbmRlcnpvZWsgZ2VkYWFuIG5hYXIgYmVzdGFhbmRlIG9wbG9zc2luZ2VuIHZvb3IuJyxcbiAgICAgICAgICAgICdQcm9kdWN0JzogJ1Zvb3IgaGV0IGVpbmRwcm9kdWN0IGhlYmJlbiB3ZSBlZW4gcHJvdG90eXBlIGdlbWFha3Qgdm9vciBlZW4gcm9sc3RvZWwgc3RhcHBlbnRlbGxlci4gSGlqIGthbiBoZXQgYWFudGFsIHJvdGF0aWVzIHZhbiBlZW4gcm9sc3RvZWwgdGVsbGVuIGRvb3JtaWRkZWwgdmFuIGVlbiBneXJvc2Nvb3AgYWFuZ2VzbG90ZW4gb3AgZWVuIEFyZHVpbm8gVW5vLiBXZSBoZWJiZW4gb29rIGdla2VuIG5hYXIgZWVuIGhhcnRzbGFnbWV0ZXIsIG1hYXIgbWVkZSBkb29yIGJlcGVya3RlIHRpamQgaXMgaGV0IG5pZXQgZ2VsdWt0IG9tIGRlIGhhcnRzbGFnbWV0ZXIgYmV0cm91d2JhYXIgdGUgbWFrZW4uIEJvdmVuZGllbiB6aWpuIGVyIGFsIGJldHJvdXdiYXJlIGhhcnRzbGFnbWV0ZXJzIGJlc2NoaWtiYWFyIHZvb3IgZnlzaWVrIGdlaGFuZGljYXB0ZSBtZW5zZW4uJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5Eb29yemV0dGVuPC9zdHJvbmc+PGJyPkJpaiBoZXQgb250d2lra2VsZW4gdmFuIGhldCBwcm90b3R5cGUgemlqbiB3ZSB0ZWdlbiB2ZWVsIHRlZ2Vuc2xhZ2VuIGdlbG9wZW4uIEVyIHdhcmVuIHZlZWwgY29tcGxpY2F0aWVzIG1ldCBkZSBneXJvc2Nvb3AgZW4gaGV0IHZlcnphbWVsZW4gdmFuIGRlIGdlZ2V2ZW5zIHZhbiBkZSBneXJvc2Nvb3AuIFpvIGhhZCBkZSBneXJvc2Nvb3AgbGFzdCB2YW4gZHJpZnQsIGRpdCBpcyB3YW5uZWVyIGVlbiBneXJvc2Nvb3AgdWl0IGRlIGxpam4gcmFha3QuIERyaWZ0IGthbiB2b29yIGVlbiBncm9vdCBkZWVsIHVpdCBkZSBkYXRhIGdlZmlsdGVyZCB3b3JkZW4gZG9vciBlZW4gS2FsbWFuIGZpbHRlciBvcCBkZSBnZWdldmVucyB0b2UgdGUgcGFzc2VuLjxicj48c3Ryb25nPlByb2R1Y3RnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5CaWogZGl0IHByb2plY3QgaGViYmVuIHdlIGdvZWQgZ2V3ZXJrdCBhYW4gaGV0IG9udHdpa2tlbGVuIHZhbiBoZXQgcHJvdG90eXBlLiBIaWVydm9vciBoZWJiZW4gdmVlbCBuYWdlZGFjaHQgb3ZlciB3YXQgZGUgYmVzdGUgb3Bsb3NzaW5nIGthbiB6aWpuIHZvb3IgaGV0IHByb3RvdHlwZS4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLW1vdGlvbnBvd2VyJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ3BsYXN0aWNfc29lcCc6IHtcbiAgICAgICAgJ2RhdGUnOiAnMjMgU2VwdGVtYmVyIDIwMTknLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRWVuIHNjaG9vbCBwcm9qZWN0IG5hbWVucyBoZXQgYmVkcmlqZiBkZSBXYWFyZGVtYWtlcnMgb20gZWVuIGtlbm5pc2NlbnRydW0gb3AgdGUgemV0dGVuIG9wIGhldCBnZWJpZWQgdmFuIHBsYXN0aWNzIGluIEdvcmluY2hlbS4nLFxuICAgICAgICAnaW5kZXgnOiAncGxhc3RpY19zb2VwJyxcbiAgICAgICAgJ2xpbmtzJzoge30sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnUGxhc2ljIFNvZXAnLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICAgICd0aXRsZTAnOiAnV2UgaGViYmVuIHZhbiBNYXJ0aW4gQmFra2VyLCBuYW1lbnMgaGV0IGJlZHJpamYgZGUgV2FhcmRlbWFrZXJzLCBkZSBvcGRyYWNodCBnZWtyZWdlbiBvbSBtZXQgdGVjaG5hc2l1bSBlZW4ga2VubmlzY2VudHJ1bSBvcCB0ZSByaWNodGVuLiBEaXQga2VubmlzY2VudHJ1bSBpcyBiZWRvZWx0IG9tIGhldCBwbGFzdGljIGluIEdvcmluY2hlbSBpbiBrYWFydCB0ZSBicmVuZ2VuLiBIaWVybWVlIGt1bm5lbiB2b2xnZW5kZSBrbGFzc2VuIHZlcmRlciBtZXQgaGV0IG9uZGVyem9la2VuIG5hYXIgaGV0IHBsYXN0aWMgaW4gR29yaW5jaGVtIGVuIG5hYXIgb3Bsb3NzaW5nZW4gZXJ2b29yIHpvZWtlbi4nLFxuICAgICAgICAgICAgJ1Byb2JsZWVtJzogJ0luIGhldCBiZWdpbiB3YXMgaGV0IHByb2JsZWVtIG5vZyBlcmcgb25kdWlkZWxpamsuIE9tIGRpdCBwcm9ibGVlbSBpbiBrYWFydCB0ZSBicmVuZ2VuIGhlYmJlbiB3ZSBlZW4gb25kZXJ6b2VrIHVpdGdldm9lcmQgbmFhciBoZXQgc3dlcmYgcGxhc3RpYyBpbiBHb3JpbmNoZW0uIE1hYXIgZWVuIGdyb290IGRlZWwgdmFuIGhldCBwbGFzdGljIGluIGRlIG5hdHV1ciB2YWx0IG9uZGVyIGRlIG1pY3JvcGxhc3RpY3MgZGllIG5pZXQgbWV0IGhldCBibG90ZSBvb2cgdGUgemllbiB6aWpuLiBBbCBkaXQgbWFha3QgaGV0IGhlZWwgbW9laWxpamsgb20gaGV0IHByb2JsZWVtIGdvZWQgaW4ga2FhcnQgdGUgYnJlbmdlbi4gT29rIG1hYWt0IGRpdCBoZXQgbW9laWxpamsgb20gaGV0IHByb2JsZWVtIG92ZXIgdGUgYnJlbmdlbiBlbiBjb21tdW5pc2VyZW4gbmFhciBoZXQgcHVibGllay4nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdCaWogZGl0IHByb2plY3QgaGViYmVuIHdlIG9vayB2ZWVsIG9uZGVyem9layBnZWRhYW4gbmFhciBiZXN0YWFuZGUgb3Bsb3NzaW5nZW4gdm9vciBoZXQgb3BydWltZW4gdmFuIHBsYXN0aWMgaW4gZGUgbmF0dXVyIGVuIG5hYXIgZGUgaGVya29tc3QgdmFuIGhldCBwbGFzdGljIGRhdCBkb29yIEdvcmluY2hlbSBrb210LiBEYWFyYmlqIGlzIGdla2VrZW4gbmFhciBkZSB2ZXJzY2hpbGxlbmRlIHJpdmllcmVuIGRpZSBsYW5ncyBlbiBkb29yIEdvaW5jaGVtIHN0cm9tZW4gZW4gYW5kZXJlIGJyb25uZW4gdmFuIHBsYXN0aWMuJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5TYW1lbndlcmtlbjwvc3Ryb25nPjxicj5Wb29yIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2ZWVsIG1vZXRlbiBzYW1lbndlcmtlbiB0dXNzZW4gZGUgdmVyc2NoaWxsZW5kZSBncm9lcGplcyBvbSBzYW1lbiDDqcOpbiBrZW5uaXNjZW50cnVtIHRlIHZlcnphbWVsZW4uIEhpZXJiaWogaGViYmVuIHdlIGdvZWQgbW9ldGVuIGNvw7ZyZGluZXJlbiBvbSBuaWV0IGR1YmJlbCBvbmRlcnpvZWsgdHVzc2VuIGRlIGdyb2VwamVzIHRlIGRvZW4uPGJyPjxzdHJvbmc+S2VubmlzZ2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+RGl0IHByb2plY3Qgd2FzIHZvbGxlZGlnIGdlcmljaHQgb3AgaGV0IG9uZGVyem9layBkb2VuLiBPbSBoZXQgcGxhc3RpYyBwcm9ibGVlbSBpbiBHb3JpbmNoZW0gZWVyc3QgaW4ga2FhcnQgdGUgYnJlbmdlbiBoZWJiZW4gd2Ugc2FtZW4gbWV0IGFsbGUgZ3JvZXBqZXMgZWVuIG9uZGVyem9layBnZWRhYW4gZ2VkYWFuIG5hYXIgaG9ldmVlbCBzd2VyZiBwbGFzdGljIGVyIG5vdSBlY2h0IGluIEdvcmluY2hlbSBpcy4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ1Byb2JsZWVtJzogJ21pY3JvcGxhdGljcy1nb3JpbmNoZW0nLFxuICAgICAgICAgICAgJ09uZGVyem9layc6ICdkZS1yaWpuLWJyb24nLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAnYjRfdGVjaG5pZWtfbWV1YmVscyc6IHtcbiAgICAgICAgJ2RhdGUnOiAnMjQgSnVuZSAyMDE5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VlbiBvbmRlcnpvZWsgbWV0IGFscyBkb2VsIG9tIEI0IFRlY2huaWVrIGFkdmllcyB0ZSBnZXZlbiBvcCBoZXQgZ2ViaWVkIHZhbiBoZXQgdmVyZHV1cnphbWVuIHZhbiBCaU5hUy1sb2thbGVuLicsXG4gICAgICAgICdpbmRleCc6ICdiNF90ZWNobmlla19tZXViZWxzJyxcbiAgICAgICAgJ2xpbmtzJzoge30sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnQjQgVGVjaG5pZWsgTWV1YmlsYWlyJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ0RpdCBwcm9qZWN0IGhlZWZ0IGFscyBkb2VsIG9tIEI0IFRlY2huaWVrIGFkdmllcyBlbiBpbmZvcm1hdGllIHRlIGdldmVuIG92ZXIgaG9lIEI0IFRlY2huaWVrIGVlbiBjaXJjdWxhaXJlIGxldmVyYW5jaWVyIGthbiB3b3JkZW4uIEI0IFRlY2huaWVrIGlzIGVlbiBlbGVrdHJvdGVjaG5pc2NoIGluc3RhbGxhdGllYmVkcmlqZiB2b29yIEJpTmFTLWxva2FsZW4uIFplIGluc3RhbGxlcmVuIG9uZGVyIGFuZGVyZSBkZSBnYXMgZW4gd2F0ZXIgaW5zdGFsbGF0aWVzLCBtYWFyIG1ha2VuIG9vayBzcGVjaWFhbCBtZXViaWxhaXIgdm9vciBCaU5hUyBsb2thbGVuLicsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ1dpaiBoZWJiZW4gZ2Vrb3plbiBvbSB2b29yYWwgb25kZXJ6b2VrIHRlIGRvZW4gbmFhciBoZXQgbWlsaWV1dnJpZW5kZWxpamtlciBtYWtlbiB2YW4gZGUgdGFmZWxzLiBVaXQgb25zIG9uZGVyem9layBpcyBnZWJsZWtlbiBkYXQgZGFhciB2ZWVsIHRlIHZlcmJldGVyZW4gaXMuIFpvIGlzIGRlIGNvYXRpbmcgdmFuIGRlIHRhZmVsYmxhZGVuLCBkaWUgaGV0IG9uZGVyIGFuZGVyZSBiZXNjaGVybXQgdGVnZW4gdmVyc2NoaWxsZW5kZSBjaGVtaXNjaGUgc3RvZmZlbiwgYmlqbmEgb25tb2dlbGlqayB0ZSBzY2hlaWRlbiB2YW4gZGUgaG91dGVuIGJhc2lzLiBNYWFyIG9vayBkZXplIGJhc2lzIGlzIGVlbiBtaXogdmFuIGhvdXRzbmlwcGVycyBlbiBsaWptIGVuIGlzIGR1cyBtb2VpbGlqayB0ZSByZWN5Y2xlbicsXG4gICAgICAgICAgICAnQ29uY2x1c2llJzogJ1VpdCBvbnMgb25kZXJ6b2VrIGlzIGdlYmxla2VuIGRhdCBlciBvcCBoZXQgZ2ViaWVkIHZhbiBkdXVyemFtZSBjaGVtaXNjaCByZXNpc3RlbnRlIGNvYXRpbmdzIHdlaW5pZyBvbnR3aWtrZWxlZCBpcy4gTWVkZSBvbWRhdCBoZXQgbWF0ZXJpYWFsIGNoZW1pc2NoIHJlc2lzdGVudCBpcyBoZXQgbW9laWxpamsgaGV0IG1hdGVyaWFhbCB6ZWxmIHRlIHJlY3ljbGVuLiBXZWwga2FuIGVyIGdla2VrZW4gd29yZGVuIG5hYXIgaGV0IGhlcmdlYnJ1aWtlbiB2YW4gZGUgY29hdGluZ3Mgb2YgZGUgaG91dGVuIGJhc2lzLiBIaWVydm9vciBtb2V0IGVyIHdlbCBlZW4gb3Bsb3NzaW5nIGJlZGFjaHQgd29yZGVuIG9tIGRpZSB2YW4gZWxrYWFyIHRlIHNjaGVpZGVuIC4gRG9vciBiaWp2b29yYmVlbGQgZWVuIGNsaWNrc3lzdGVlbSB0ZSBvbnR3aWtrZWxlbiB3YWFybWVlIGRlIGJhc2lzIGVuIGRlIGNvYXRpbmcgbWFrZWxpamsgdGUgc2NoZWlkZW4gZW4gaGVyZ2VicnVpa2VuIHppam4uJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5TYW1lbndlcmtlbjwvc3Ryb25nPjxicj5CaWogZGl0IHByb2plY3QgaGViYmVuIHdlIHZlZWwgbW9ldGVuIHpvZWtlbiBuYWFyIGJlc3RhYW5kZSBwcm9kdWN0ZW4gZW4gb3Bsb3NzaW5nZW4uIHdpaiBoZWJiZW4gaGllcmJpaiBnb2VkIHNhbWVuZ2V3ZXJrdCBhYW4gaGV0IG9uZGVyem9la2VuIG5hYXIgbW9nZWxpamtoZWRlbi48YnI+PHN0cm9uZz5Qcm9jZXNnZXJpY2h0aGVpZDwvc3Ryb25nPjxicj5Wb29yIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2ZWVsIG1vZWl0ZSBnZXN0b2tlbiBpbiBoZXQgc2NydW1tZW4gZW4gaGV0IGRvY3VtZW50ZXJlbiB2YW4gaGV0IHByb2Nlcy4gWm8gaGViYmVuIHdlIHNwcmludHMgYmlqZ2Vob3VkZW4gdmFuIHR3ZWUgd2VrZW4gZW4gYWFuIGhldCBiZWdpbiB2YW4gZWxrZSBzcHJpbnQgZ29lZCBiZXBhYWx0IHdhdCB3ZSBkaWUgc3ByaW50IGdhYW4gZG9lbi4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLWI0dGVjaG5pZWsnLFxuICAgICAgICAgICAgJ0NvbmNsdXNpZSc6ICdiaW5hcy1sb2thYWwnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICAna2V1emVfa29mZmllYmVrZXJzJzoge1xuICAgICAgICAnZGF0ZSc6ICc0IEphbnVhcmkgMjAxOScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFZW4gb25kZXJ6b2VrIG5hYXIgd2VsayBtYXRlcmlhYWwga29mZmllYmVrZXIgdm9vciBlZW4gYmVkcmlqZiBoZXQgbWVlc3QgbWlsaWV1dnJpZW5kZWxpamtzdCB6b3Ugemlqbi4nLFxuICAgICAgICAnaW5kZXgnOiAna2V1emVfa29mZmllYmVrZXJzJyxcbiAgICAgICAgJ2xpbmtzJzoge30sXG4gICAgICAgICd0YWdzJzogW1xuICAgICAgICAgICAgJ3RlY2huYXNpdW0nLFxuICAgICAgICBdLFxuICAgICAgICAndGl0bGUnOiAnS2V1emUgdmFuIGRlIEtvZmZpZWJla2VyJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ0RpdCBwcm9qZWN0IGlzIGluIG9wZHJhY2h0IHZhbiBDb2ZmZWViYXNlZC4gSGV0IHByb2plY3QgaGVlZnQgYWxzIGRvZWwgb20gdmFzdCB0ZSBzdGVsbGVuIHdlbGtlIHNvb3J0IGtvZmZpZWJla2VyIGhldCBtaWxpZXV2cmllbmRlbGlqa3N0IGlzIHZvb3IgdmVyc2NoaWxsZW5kZSBzb29ydGVuIGVuIGdyb290dGUgYmVkcmlqdmVuLiBIaWVyYmlqIGhlYmJlbiB3ZSBlZXJzdCBnZWtla2VuIG5hYXIgb2YgZGUgaW1hZ29cXCdzIHZhbiBkZSB2ZXJzY2hpbGxlbmRlIGtvZmZpZWJla2VycyB0ZXJlY2h0IHdhcmVuIG9mIG5pZXQuIERhYXJuYSBoZWJiZW4gd2Ugb25kZXJ6b2VrIGdlZGFhbiBuYWFyIGZlaXRlbi4gSGllcnVpdCBoZWJiZW4gd2UgdWl0ZWluZGVsaWprIGVlbiBjb25jbHVzaWUgZ2V0cm9ra2VuIG92ZXIgd2Vsa2Uga29mZmllYmVrZXIgaGV0IG1pbGlldXZyaWVuZGVsaWprc3QgaXMuIEhpZXJiaWogaGViYmVuIHdlIGdla2VrZW4gbmFhciBvbmRlciBhbmRlcmUgZGUgcHJvZHVjdGllIGVuIGhldCBnZWJydWlrIHZhbiBkZSBiZWtlci4gWm8gaXMgYmlqdm9vcmJlZWxkIGhldCBwcm9kdWNlcmVuIHZhbiBlZW4gcG9yc29sZWluZSBiZWtlciB2cmlqIHp3YWFyIG9wIGhldCBtaWxpZXUgZW4gbW9ldCBkZXplIGluIGVlbiB2YWF0d2Fzc2VyIHdvcmRlbiBzY2hvb25nZW1hYWt0LiBFZW4gcGxhc2l0aWMgb2YgYW5kZXJlIHdlZ3dlcnBiZWtlcnMgemlqbiBkYWFyaW50ZWdlbiBsaWNodCB2b29yIGhldCBtaWxpZXUgb20gdGUgcHJvY3VjZXJlbiwgbWFhciB6aWpuIHplIHNpbmdsZSB1c2UgZW4ga3VubmVuIHplIG5hIGhldCB3ZWdnb29pZW4gem9yZ2VuIHZvb3IgbWlsaWV1dmVydnVpbGluZyBlbiBiaWpkcmFnZW4gYWFuIGJpanZvb3JiZWVsZCBkZSBwbGFzdGljc29lcCBpbiBkZSBvY2VhbmVuLicsXG4gICAgICAgICAgICAnT25kZXJ6b2VrJzogJ0JpaiBkaXQgcHJvamVjdCBzdG9uZCBoZXQgb25kZXJ6b2VrZW4gY2VudHJhYWwuIFZvb3IgZGl0IG9uZGVyem9layBoZWJiZW4gd2UgdmVlbCBiZXN0YWFuZGUgb25kZXJ6b2VrZW4gZW4gZ2VnZXZlbnMgZ2V6b2NodC4gT20gZGV6ZSBpbmZvcm1hdGllIGdvZWQgb3ZlciB0ZSBicmVuZ2VuIGhlYmJlbiB3ZSBtZXQgR29vZ2xlIFNpdGVzIGVlbiBpbmZvcm1haWVzaXRlIGdlbWFha3QgbWV0IG9uemUgY29uY2x1c2llcyBlbiBiZXJlZGVuZXJpbmdlbi4gSGllcmJpaiBoZWJiZW4gd2UgdmVyc2NoaWxsZW5kZSBhZHZpZXNlbiBnZWdldmVuIHZvb3IgZGUgdmVyc2NoaWxsZW5kZSBncm9vdHRlIGVuIHNvb3J0ZW4gYmVkcmlqdmVuLicsXG4gICAgICAgICAgICAnQ29tcGV0ZW50aWVzJzogJzxzdHJvbmc+U2FtZW53ZXJrZW48L3N0cm9uZz48YnI+QmlqIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2ZWVsIHNhbWVuIG1vZXRlbiB3ZXJrZW4gZW4gbW9ldGVuIGNvbW11bmlzZXJlbiBtZXQgZWxrYWFyLiBEb29yZGF0IGRpdCBnb2VkIGlzIGdlZ2FhbiB6aWpuIHdlIHNhbWVuIHRvdCBkZSBjb25jbHVzaWUsIHdhYXIgd2UgYWxsZW1hYWwgdGV2cmVkZW4gb3ZlciB6aWpuLCBnZWtvbWVuLjxicj48c3Ryb25nPktlbm5pc2dlcmljaHRoZWlkPC9zdHJvbmc+PGJyPk9tZGF0IGRpdCBwcm9qZWN0IGdlcmljaHQgaXMgb3Agb25kZXJ6b2VrIHdhcyBoZXQgYmVsYW5ncmlqayBkYXQgZXIgZ29lZCBlbiB2ZWVsIG9uZGVyem9layB3ZXJkIGdlZGFhbi4gSWsgdmluZCBkYXQgZGl0IG9uZGVyem9layBnb2VkIGlzIGdlZ2Fhbi4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdiZXN0LWNvZmZlZS1jdXBzJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2ZsZXhpYmVsZV93b29udm9ybWVuJzoge1xuICAgICAgICAnZGF0ZSc6ICc1IE5vdmVtYmVyIDIwMTgnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRWVuIHByb2plY3QgbWV0IGFscyBkb2VsIG9tIGVlbiBwbGFuIHRlIG1ha2VuIHZvb3IgZmxleGliZWxlIHdvb252b3JtZW4gaW4gZGUgZ2VtZWVudGUgR29yaW5jaGVtLicsXG4gICAgICAgICdpbmRleCc6ICdmbGV4aWJlbGVfd29vbnZvcm1lbicsXG4gICAgICAgICdsaW5rcyc6IHt9LFxuICAgICAgICAndGFncyc6IFtcbiAgICAgICAgICAgICd0ZWNobmFzaXVtJyxcbiAgICAgICAgXSxcbiAgICAgICAgJ3RpdGxlJzogJ0ZsZXhpYmVsZSBXb29udm9ybWVuJyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAndGl0bGUwJzogJ0RpdCBwcm9qZWN0IGlzIGluIG9wZHJhY2h0IHZhbiBkZSBnZW1lZW50ZSBHb3JpbmNoZW0uIERlIG9wZHJhY2h0IHZhbiBkZSBnZW1lZW50ZSBpcyBvbSBlZW4gZmxleGliZWwgd29uaW5nY29tcGxleCB0ZSBvbnR3aWtrZWxlbiB2b29yIGhldCBnZWJpZWQgdHVzc2VuIGRlIGJyYW5kd2VlciBrYXplcm5lIGluIEdvcmluY2hlbSBlbiBoZXQgQ29yYmlvbiBpbiBHb3JpbmNoZW0uIE9wIGRpdCB0ZXJlaW4gc3RhYW4gbnUgb3VkZSBsb29kc2VuLiBBbHMgZWVyc3RlIGhlYmJlbiB3ZSBlZW4gUHJvZ3JhbW1hIHZhbiBFaXNlbiBnZW1hYWt0LiBEYWFyaW4gd2FyZW4gZGUgYmVsYW5ncmlqa3N0ZSBlaXNlbiB2b29yIGRlIGluZGVsaW5nIHZhbiBoZXQgZ2ViaWVkLCBkYXQgZGUgd29uaW5nZW4gYmVzdGVtZCB6b3VkZW4gemlqbiB2b29yIG91ZGVyZW4gZW4gc3RhcnRlcnMuIFdpaiBoZWJiZW4gaGllcnZvb3IgZWVuIGluZGVsaW5nIGdlbWFha3QgbWV0IGVlbiBjb21iaW5hdGllIHZhbiB0d2VlLW9uZGVyLWVlbi1rYXB3b25pbmdlbiBlbiBhcHBhcnRlbWVudGVuLiBPb2sgaGViYmVuIHdlIG5hZ2VkYWNodCBvdmVyIGRlIGR1dXJ6YWFtaGVpZCB2YW4gZGUgd29pbmluZ2VuIGVuIGRlIGluZGVsaW5nIHZhbiBkZSBjb2xsZWN0aWV2ZSBydWltdGVzLiBIaWVydm9vciBoZWJiZW4gd2UgYmlqdm9vcmJlZWxkIGVlbiBwYXJramUgaW4gZGUgd29vbndpamsgZ2VwbGFhdHN0LiBBbHMgcHJvZHVjdCBoZWJiZW4gd2UgZWVuIG1hcXVldHRlIGdlbWFha3QgdmFuIGVlbiBldmVudHVlZWwgcGxhbiB2b29yIGRlemUgd29vbndpamsuJyxcbiAgICAgICAgICAgICdDb21wZXRlbnRpZXMnOiAnPHN0cm9uZz5Qcm9kdWN0Z2VyaWNodGhlaWQ8L3N0cm9uZz48YnI+QmlqIGRpdCBwcm9qZWN0IGhlYmJlbiB3ZSB2YW5hZiBoZXQgYmVnaW4gYWYgYWFuIGdvZWQgbmFnZWRhY2h0IG92ZXIgaGV0IGVpbmRwcm9kdWN0LCBkZSBtYXF1ZXR0ZS4gVGlqZGVucyBoZXQgcHJvamVjdCBoZWJiZW4gd2Ugb29rIHZlcmJldGVyaW5nZW4gZW4gYWFucGFzc2luZyBnZW1hYWt0IG9tIGhldCBlaW5kcHJvZHVjdCB0ZSB2ZXJiZXRlcmVuLiBPb2sgaGViYmVuIHdlIGNvbnN0YW50IHJla2VuaW5nIGdlaG91ZGVuIG1ldCBoZXQgUHJvZ3JhbW1hIHZhbiBFaXNlbi4gSGllcmRvb3IgaGViYmVuIHdlIHVpdGVpbmRlbGlqayBlZW4gZ29lZCBwcm9kdWN0IGdlbGV2ZXJkLjxicj48c3Ryb25nPlNhbWVud2Vya2VuPC9zdHJvbmc+PGJyPlRpamRlbnMgZGl0IHBvcmplY3QgaGViYmVuIHdlIHZlZWwgbW9ldGVuIHNhbWVud2Vya2VuIG1ldCBoZXQgb250d2VycGVuIHZhbiBkZSBtYXF1ZXR0ZSBlbiBoZXQgb25kZXJ6b2VrLiBPbWRhdCB3ZSBoZXQgc2NydW1tZW4gZ29lZCBoZWJiZW4gYmlqZ2Vob3VkZW4gd2FzIGhldCBvb2sgZ2VtYWtlbGlqayBvbSBnb2VkIHNhbWVuIHRlIHdlcmtlbiBlbiBkZSB0YWtlbiB0ZSB2ZXJkZWxlbi4nLFxuICAgICAgICB9LFxuICAgICAgICAnaW1hZ2VzJzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICdsb2dvLWdlbWVlbnRlLWdvcmluY2hlbScsXG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuY29uc3QgcHJvamVjdFR5cGVzID0ge1xuICAgICdmZWF0dXJlZCc6IFtcbiAgICAgICAgJ2FxdWF6b29fbGVlcmRhbScsXG4gICAgICAgICdzdGF0c2RiX292ZXJsYXknLFxuICAgICAgICAncG9ydGZvbGlvX3dlYnNpdGUnLFxuICAgIF0sXG4gICAgJ3RlY2hQcm9qZWN0cyc6IFtcbiAgICAgICAgJ2FxdWF6b29fbGVlcmRhbScsXG4gICAgICAgICdiNF90ZWNobmlla19jaXJjdWxhaXInLFxuICAgICAgICAncm9sc3RvZWxfc3RhcHBlbnRlbGxlcicsXG4gICAgICAgICdwbGFzdGljX3NvZXAnLFxuICAgICAgICAnYjRfdGVjaG5pZWtfbWV1YmVscycsXG4gICAgICAgICdrZXV6ZV9rb2ZmaWViZWtlcnMnLFxuICAgICAgICAnZmxleGliZWxlX3dvb252b3JtZW4nLFxuICAgIF0sXG4gICAgJ2ZyZWV0aW1lUHJvamVjdHMnOiBbXG4gICAgICAgICdzdGF0c2RiX292ZXJsYXknLFxuICAgICAgICAncG9ydGZvbGlvX3dlYnNpdGUnLFxuICAgICAgICAncjZsb29rdXBfd2Vic2l0ZScsXG4gICAgXSxcbn07XG5cbmNvbnN0IHByb2plY3RUeXBlTmFtZXMgPSB7XG4gICAgJ2ZlYXR1cmVkJzogJ0ZlYXR1cmVkJyxcbiAgICAndGVjaFByb2plY3RzJzogJ1RlY2huYXNpdW0gUHJvamVjdHMnLFxuICAgICdmcmVldGltZVByb2plY3RzJzogJ0ZyZWUtVGltZSBQcm9qZWN0cycsXG59O1xuXG5jb25zdCBwYWdlcyA9IHtcbiAgICAnYWJvdXQnOiB7XG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgICAgJ3RpdGxlMCc6ICcxMTk4MTlAbXltZXJld2FkZS5ubDxicj50eWNob2Jyb3V3ZXIzM0BnbWFpbC5jb20nLFxuICAgICAgICAgICAgJ3RpdGxlMSc6ICdGb3J0ZXMgTHljZXVtLCBHb3JpbmNoZW08YnI+VGVjaG5hc2l1bSBqYWFyIDQsIDUgZW4gNicsXG4gICAgICAgICAgICAndGl0bGUyJzogJzxzdHJvbmc+TXkgR2l0SHViOiA8L3N0cm9uZz48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1R5Y2hvQnJvdXdlclwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBjbGFzcz1cImJsYW5rTGlua1wiPmh0dHBzOi8vZ2l0aHViLmNvbS9UeWNob0Jyb3V3ZXI8L2E+JyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltYWdlcyc6IHt9XG4gICAgfVxufTtcblxuY29uc3QgbW9udGhOYW1lcyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsXG4gIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJcbl07XG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdHMsXG4gICAgcHJvamVjdFR5cGVzLFxuICAgIHByb2plY3RUeXBlTmFtZXMsXG4gICAgcGFnZXMsXG4gICAgbW9udGhOYW1lc1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==