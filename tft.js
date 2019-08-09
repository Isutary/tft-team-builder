/////   CHAMPION START  /////
function Champion(name, level, ...attributes) {
    this.name = name;
    this.level = level;
    this.attributes = attributes;
}

let darius = new Champion("Darius", 1, "Imperial", "Knight");
let elise = new Champion("Elise", 1, "Demon", "Shapeshifter");
let fiora = new Champion("Fiora", 1, "Noble", "Blademaster");
let garen = new Champion("Garen", 1, "Noble", "Knight");
let graves = new Champion("Graves", 1, "Pirate", "Gunslinger");
let kassadin = new Champion("Kassadin", 1, "Void", "Sorcerer");
let khazix = new Champion("Khazix", 1, "Void", "Assassin");
let mordekaiser = new Champion("Mordekaiser", 1, "Phantom", "Knight");
let nidalee = new Champion("Nidalee", 1, "Wild", "Shapeshifter");
let tristana = new Champion("Tristana", 1, "Yordle", "Gunslinger");
let vayne = new Champion("Vayne", 1, "Noble", "Ranger");
let warwick = new Champion("Warwick", 1, "Wild", "Brawler");

let levelOne = [darius, elise, fiora, garen, graves, kassadin, khazix, mordekaiser, nidalee, tristana, vayne, warwick];

let ahri = new Champion("Ahri", 2, "Wild", "Sorcerer");
let blitzcrank = new Champion("Blitzcrank", 2, "Robot", "Brawler");
let braum = new Champion("Braum", 2, "Glacial", "Guardian");
let lissandra = new Champion("Lissandra", 2, "Glacial", "Elementalist");
let lucian = new Champion("Lucian", 2, "Noble", "Gunslinger");
let lulu = new Champion("Lulu", 2, "Yordle", "Sorcerer");
let pyke = new Champion("Pyke", 2, "Pirate", "Assassin");
let reksai = new Champion("Reksai", 2, "Void", "Brawler");
let shen = new Champion("Shen", 2, "Ninja", "Blademaster");
let varus = new Champion("Varus", 2, "Demon", "Ranger");
let zed = new Champion("Zed", 2, "Ninja", "Assassin");
let twisted = new Champion("Twisted Fate", 2, "Pirate", "Sorcerer");

let levelTwo = [ahri, blitzcrank, braum, lissandra, lucian, lulu, pyke, reksai, shen, varus, zed, twisted];

let aatrox = new Champion("Aatrox", 3, "Demon", "Blademaster");
let ashe = new Champion("Ashe", 3, "Glacial", "Ranger");
let evelynn = new Champion("Evelynn", 3, "Demon", "Assassin");
let gangplank = new Champion("Gangplank", 3, "Pirate", "Gunslinger", "Blademaster");
let katarina = new Champion("Katarina", 3, "Imperial", "Assassin");
let kennen = new Champion("Kennen", 3, "Ninja", "Yordle", "Elementalist");
let morgana = new Champion("Morgana", 3, "Demon", "Sorcerer");
let poppy = new Champion("Poppy", 3, "Yordle", "Knight");
let rengar = new Champion("Rengar", 3, "Wild", "Assassin");
let shyvana = new Champion("Shyvana", 3, "Dragon", "Shapeshifter");
let veigar = new Champion("Veigar", 3, "Yordle", "Sorcerer");
let volibear = new Champion("Volibear", 3, "Glacial", "Brawler");

let levelThree = [aatrox, ashe, evelynn, gangplank, katarina, kennen, morgana, poppy, rengar, shyvana, veigar, volibear];

let akali = new Champion("Akali", 4, "Ninja", "Assassin");
let aurelion = new Champion("Aurelion Sol", 4, "Dragon", "Sorcerer"); // THIS
let brand = new Champion("Brand", 4, "Demon", "Elementalist");
let chogath = new Champion("Chogath", 4, "Void", "Brawler");
let draven = new Champion("Draven", 4, "Imperial", "Blademaster");
let gnar = new Champion("Gnar", 4, "Wild", "Yordle", "Shapeshifter");
let kindred = new Champion("Kindred", 4, "Phantom", "Ranger");
let leona = new Champion("Leona", 4, "Noble", "Guardian");
let sejuani = new Champion("Sejuani", 4, "Glacial", "Knight");

let levelFour = [akali, aurelion, brand, chogath, draven, gnar, kindred, leona, sejuani];

let anivia = new Champion("Anivia", 5, "Glacial", "Elementalist");
let karthus = new Champion("Karthus", 5, "Phantom", "Sorcerer");
let kayle = new Champion("Kayle", 5, "Noble", "Knight");
let miss = new Champion("Miss Fortune", 5, "Pirate", "Gunslinger");
let swain = new Champion("Swain", 5, "Imperial", "Demon", "Shapeshifter");
let yasuo = new Champion("Yasuo", 5, "Exile", "Blademaster");

let levelFive = [anivia, karthus, kayle, miss, swain, yasuo];

let allChampions = [...levelOne, ...levelTwo, ...levelThree, ...levelFour, ...levelFive];
/////   CHAMPION END    /////

/////   ATTRIBUTE START /////
function Attribute(name, ...amount) {
    this.name = name;
    this.amount = amount;
    this.current = 0;
    this.index = 0;
    this.next = this.amount[this.index];
}

Attribute.prototype.add = function() {
    this.current++;
    if (this.current == this.next) {
        if (this.index != this.amount.length - 1) {
            this.index++;
            this.next = this.amount[this.index];
        }
    }
}

Attribute.prototype.remove = function() {
    this.current--;
    if (this.index > 0) {
        if (this.current < this.amount[this.index - 1]) {
            this.index--;
            this.next = this.amount[this.index];
        }
    }
}

let assassin = new Attribute("Assassin", 3, 6);
let blademaster = new Attribute("Blademaster", 3, 6);
let brawler = new Attribute("Brawler", 2, 4);
let elementalist = new Attribute("Elementalist", 3);
let guardian = new Attribute("Guardian", 2);
let gunslinger = new Attribute("Gunslinger", 2, 4);
let knight = new Attribute("Knight", 2, 4, 6);
let ranger = new Attribute("Ranger", 2, 4);
let shapeshifter = new Attribute("Shapeshifter", 3);
let sorcerer = new Attribute("Sorcerer", 3, 6);

let demon = new Attribute("Demon", 2, 4, 6);
let dragon = new Attribute("Dragon", 2);
let exile = new Attribute("Exile", 1);
let glacial = new Attribute("Glacial", 2, 4, 6);
let imperial = new Attribute("Imperial", 2, 4);
let noble = new Attribute("Noble", 3, 6);
let ninja = new Attribute("Ninja", 1, 4);
let pirate = new Attribute("Pirate", 3);
let phantom = new Attribute("Phantom", 2);
let robot = new Attribute("Robot", 1);
let yordle = new Attribute("Yordle", 3, 6);
let void_ = new Attribute("Void", 3);
let wild = new Attribute("Wild", 2, 4);

let allBuffs = [assassin, blademaster, brawler, elementalist, guardian, gunslinger, knight, ranger, shapeshifter, 
                sorcerer, demon, dragon, exile, glacial, imperial, noble, ninja, pirate, phantom, robot, yordle, void_, wild];
/////   ATTRIBUTE END   /////

/////   TEAM START  /////
function Team() {
    this.size = 0;
    this.buffs = allBuffs;
    this.champions = [];
    this.active = [];
}

Team.prototype.add = function(championName) {
    this.size++;
    let champion = allChampions.find((element) => element.name == championName);
    if (this.champions.includes(champion.name)) {
        this.champions.push(champion.name);
        return;
    }
    this.champions.push(champion.name);
    for (let attribute of champion.attributes) {
        for (let buff of this.buffs) {
            if (buff.name == attribute) {
                buff.add();
                if (buff.current >= buff.amount[0] && !this.active.includes(buff)) {
                    this.active.push(buff);
                }
            }
        }
    }
}

Team.prototype.remove = function(championName) {
    let champion = allChampions.find((element) => element.name == championName);
    if (!this.champions.includes(champion.name)) return;
    this.champions.splice(this.champions.indexOf(champion.name), 1);
    if (this.champions.includes(champion.name)) return;
    for (let attribute of champion.attributes) {
        for (let buff of this.buffs) {
            if (buff.name == attribute) buff.remove();
        }
    }
    for (let buff of this.active) {
        if (buff.current < buff.amount[0]) {
            this.active.splice(this.active.indexOf(buff), 1);
        }
    }
    this.size--;
}

Team.prototype.printBuffs = function() {
    for (let buff of this.buffs) {

        if (buff.current > 0) console.log(buff.name, ":", buff.current, "/", buff.next);
    }
}

Team.prototype.printTeam = function() {
    console.log(this.champions);
}

Team.prototype.printFind = function() {
    for (let buff of this.buffs) {
        if (buff.current + 1 == buff.next && buff.current != 0) {
            let options = [];
            for (let champion of allChampions) {
                if (champion.attributes.includes(buff.name) && !this.champions.includes(champion.name)) {
                    options.push(champion.name);
                }
            }
            console.log(buff.name, options);
        }
    }
}

Team.prototype.find = function() {
    let list = [];
    for (let buff of this.buffs) {
        if (buff.current + 1 == buff.next && buff.current != 0) {
            let options = [buff];
            for (let champion of allChampions) {
                if (champion.attributes.includes(buff.name) && !this.champions.includes(champion.name)) {
                    options.push(champion);
                }
            }
            list.push(options);
        }
    }
    return list;
}
/////   TEAM END    /////

let team = new Team();

function add(element, championName) {
    let level = element.classList[1];
    let teamDiv = document.getElementById("team");
    let div = createDiv(championName, level, "remove");
    teamDiv.appendChild(div);
    team.add(championName);
    find();
}

function createDiv(championName, level, action) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = `../icons/${championName}Square.png`;
    img.alt = championName;
    div.appendChild(img);
    if (level == 1) level = "levelOne";
    else if (level == 2) level = "levelTwo";
    else if (level == 3) level = "levelThree";
    else if (level == 4) level = "levelFour";
    else if (level == 5) level = "levelFive";
    div.className = `portrait ${level}`;
    div.setAttribute("onclick", `${action}(this, '${championName}')`);
    return div;
}

function remove(element, championName) {
    let teamDiv = document.getElementById("team");
    teamDiv.removeChild(element);
    team.remove(championName);
    find();
}

function createImgDiv(championName, level) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = `../icons/${championName}Square.png`;
    img.alt = championName;
    div.appendChild(img);
    if (level == 1) level = "levelOne";
    else if (level == 2) level = "levelTwo";
    else if (level == 3) level = "levelThree";
    else if (level == 4) level = "levelFour";
    else if (level == 5) level = "levelFive";
    div.className = `portrait ${level}`;
    return div;
}

function createBuffDiv(buff) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    //div.style.border = "2px solid gold";
    div.style.backgroundImage = `url('../icons/${buff.name}_TFT_icon.png')`;
    div.style.backgroundPosition = "-2px -2px";
    /*img.src = `../icons/${buff.name}_TFT_icon.png`;
    img.alt = buff.name;
    img.className = "imgFix";*/
    div.innerHTML = buff.current + " / " + buff.next;
    div.appendChild(img);
    div.className = `portrait`;
    return div;
}

function createRow(list) {
    let div = document.createElement("div");
    div.appendChild(createBuffDiv(list[0]));
    for (let i=1; i<list.length; i++) {
        let imgDiv = createImgDiv(list[i].name, list[i].level);
        div.appendChild(imgDiv);
    }
    div.className = "row";
    return div;
}

function find() {
    let list = team.find();
    console.log(list);
    let main = document.getElementById("main");
    let oldNeed = document.getElementById("need");
    main.removeChild(oldNeed);
    let need = document.createElement("need");
    need.id = "need";
    need.className = "need";
    for (let item of list) {
        need.appendChild(createRow(item));
    }
    main.appendChild(need);
    active();
}

function fill() {
    let championsDiv = document.getElementById("champions");
    for (let champion of allChampions) {
        championsDiv.appendChild(createDiv(champion.name, champion.level, "add"));
    }
}

function createBuffRow() {
    let row = document.createElement("div");
    let added = [];
    for (let buff of team.active) {
        if (!added.includes(buff)) {
            let div = createBuffDiv(buff);
            row.appendChild(div);
            added.push(buff);
        }
    }
    row.id = "buffRow"
    return row;
}

function active() {
    let have = document.getElementById("have");
    let row = document.getElementById("buffRow");
    have.removeChild(row);
    have.appendChild(createBuffRow());
}