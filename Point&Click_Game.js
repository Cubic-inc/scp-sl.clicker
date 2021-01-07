// Point & Click game by Luuk Schouten LPIAO20A1

// Define Elements
var content = document.getElementById("game-container");

var buttoncontainer = document.getElementById("game-buttons");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var keycardlvl2 = false;
var keycardlvl5 = false;
var Hat = false;
var nuke = true;
var larry = false;

// Add sounds

var Peanutcrunch = new Audio('sounds/NeckSnap.ogg');
var femurbreaker = new Audio('sounds/FemurBreaker.ogg');
var dogbite = new Audio('sounds/Damage.ogg');
var bulletshot = new Audio('sounds/Gunshot.ogg');
var explosion = new Audio('sounds/Nuke.ogg');
var partyhorn = new Audio('sounds/partyhorn.mp3');


//Create extra button

var button4 = document.createElement("BUTTON");

buttoncontainer.append(button4);

//Add styling to button 4

button4.style.color = "red";
button4.style.border = "solid";
button4.style.borderColor = "white";
button4.style.backgroundColor = "#525252";
button4.style.padding = "15px 32px";
button4.style.fontWeight = "bold";
button4.style.fontSize = "16px";
button4.style.textAlign = "center";
button4.style.position = "relative";
button4.style.display = "none";


button2.onclick = start;

function start(){
    console.log("D_class_cells");
    content.style.backgroundImage = "url('images/D_class_cells.jpg')";
    content.style.textAlign = "center";
    document.getElementById("title").style.display = "none";
    document.getElementById("description").style.display = "none";
    button1.style.display = "none";
    button3.style.display = "none";
    button2.innerText = "Exit cells";
    button2.style.marginBottom = "13em";
    button2.style.marginLeft = "55.7em";
    buttoncontainer.style.position = "absolute";
    buttoncontainer.style.width = "800px";
    buttoncontainer.style.height = "200px";
    buttoncontainer.style.bottom = "0px";
    buttoncontainer.style.right = "25%";
    buttoncontainer.style.left = "50%";
    buttoncontainer.style.marginLeft = "-400px";
    button2.style.position = "relative";
    button2.style.marginLeft = "0em";
    button2.style.marginBottom = "0em";
    button1.style.marginTop = "0em";
    button1.style.marginLeft = "0em";
    button1.style.position = "relative";
    button1.style.float = "none";
    button2.onclick = Light_T_front;
}

function Light_T_front(){
    console.log("Light_T_front");
    content.style.backgroundImage = "url('images/Light_T_junction_front.jpg')";
    button1.style.display = "inline-block";
    button3.style.display = "inline-block";
    button1.innerText = "Turn left";
    button2.innerText = "Go back";
    button3.innerText = "EXIT";
    button1.onclick = Light_T_right;
    button2.onclick = start;
    button3.onclick = EXIT;
}

function EXIT(){
    content.style.backgroundImage = "url('images/Exit.jpg')";
    button1.style.display = "inline-block";
    button1.onclick = Light_T_front;
    button2.innerText = "Pass checkpoint";
    button2.onclick = checkcard;
    button1.innerText = "Go back";
    button3.style.display = "none";
}   

function checkcard(){
    button2.onclick = Light_T_front;
    if(keycardlvl5 == true){
        button3.onclick = elevators();
    }else{
        alert("Acces denied");
    }
}

function Light_T_right(){
    content.style.backgroundImage = "url('images/Light_T_junction_right.jpg')";
    button1.innerText = "Go straight";
    button2.onclick = Light_T_front;
    button3.innerText = "GR18";
    button2.innerText = "Go back";
    button1.onclick = Light_cross_section;
    button3.onclick = GR18;
    button1.style.display = "inline-block";
    button3.style.display = "inline-block";
    button4.style.display = "none"
}

function Light_cross_section(){
    content.style.backgroundImage = "url('images/Light_cross_section.jpg')";
    button1.onclick = Light_T_right;
    button4.innerText = "SCP-012";
    button3.innerText = "SCP-173";
    button2.innerText = "SCP-914";
    button1.innerText = "Go back";
    button1.style.display = "inline-block";
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    button4.style.display = "inline-block";
    button2.onclick = ninefourteenfront;
    button3.onclick = oneseventhree;
    button4.onclick = Hat_check;
}

function Hat_check(){
    if(Hat == true){
        alert("The door is jammed");
    }else if(Hat == false){
        zerotwelve();
    }
}

function GR18(){
    content.style.backgroundImage = "url('images/GR18.jpg')";
    button3.style.display = "inline-block";
    button2.onclick = Light_T_right;
    button1.style.display = "none";
    button2.innerText = "Go back"
    button3.innerText = "Enter GR18";
    button4.style.display = "none";
    if(keycardlvl2 == false){
    button3.onclick = lockerclosed;
    }else{
        button3.onclick = lockerempty;
    }
}

function lockerclosed(){
    content.style.backgroundImage = "url('images/Locker_closed.jpg')";
    button2.onclick = GR18;
    button3.innerText = "Open locker";
    button3.onclick = lockeropen;
    button4.style.display = "none";
}

function lockeropen(){
    content.style.backgroundImage = "url('images/Locker_open.jpg')";
    button4.style.display = "inline-block";
    button4.innerText = "Take keycard";
    button4.onclick = lockerempty;
    button1.style.display = "inline-block";
    button1.innerText = "Close locker";
    button1.onclick = lockerclosed;
}

function lockerempty(){
    content.style.backgroundImage = "url('images/Locker_empty.png')";
    keycardlvl2 = true;
    button2.onclick = GR18;
    button4.style.display = "none";
    button3.style.display = "none";
    button1.style.display = "none";
}

function ninefourteenfront(){
    content.style.backgroundImage = "url('images/914.jpg')";
    button2.style.display = "inline-block";
    button1.onclick = Light_cross_section;
    button2.onclick = controlcard;
    button2.innerText = "Enter 914";
    button3.style.display = "none";
    button4.style.display = "none";
}

function controlcard(){
    if(keycardlvl2 == true){
        ninefourteen();
    }else{
        alert("Acces denied");
    }
}

function ninefourteen(){
    if(keycardlvl5 == false){
    content.style.backgroundImage = "url('images/914_scientist.jpg')";
    }else{
        content.style.backgroundImage = "url('images/914_05.jpg')";
    }
    button1.onclick = ninefourteenfront;
    button2.innerText = "Upgrade keycard";
    button3.style.display = "inline-block";
    button3.innerText = "914 Document";
    button3.onclick = ninefourteenlink;
    button2.onclick = o5keycard;
}

function ninefourteenlink(){
        window.open('http://www.scpwiki.com/scp-914');
    }

function o5keycard(){
    content.style.backgroundImage = "url('images/914_05.jpg')";
    button2.style.display = "none";
    button1.onclick = ninefourteenfront;
    keycardlvl5 = true;
}

function oneseventhree(){
    content.style.backgroundImage = "url('images/173_chamber.jpg')";
    button2.innerText = "Go straight";
    button2.onclick = stairs;
    button1.onclick = Light_cross_section;
    button3.style.display = "inline-block";
    button3.innerText = "173 Document";
    button3.onclick = oneseventhreelink;
    button4.style.display = "none";
}

function oneseventhreelink(){
    window.open('http://www.scpwiki.com/scp-173');
}

function stairs(){
    content.style.backgroundImage = "url('images/173_stairs.jpg')";
    button2.innerText = "Go up";
    button2.onclick = Peanutdeath;
    button1.onclick = oneseventhree;
    button3.style.display = "none";
    button4.style.display = "none";
}

function Peanutdeath(){
    content.style.backgroundImage = "url('images/SCP_173.jpg')";
    setTimeout(peanutdeathscreen, 500);
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
}

function peanutdeathscreen(){
    content.style.backgroundImage = "url('images/Deathscreen.jpg')";
    Peanutcrunch.play();
}

function dogdeathscreen(){
    content.style.backgroundImage = "url('images/Deathscreen.jpg')"; 
    dogbite.play();   
}

function MTFdeathscreen(){
    content.style.backgroundImage = "url('images/Deathscreen.jpg')";
    button2.style.display = "none";
    bulletshot.play();
}

function Nukedeathscreen(){
    content.style.backgroundImage = "url('images/Deathscreen.jpg')";
    explosion.play();
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
}

function zerotwelve(){
    content.style.backgroundImage = "url('images/012_chamber.jpg')";
    button1.onclick = Light_cross_section;
    button2.innerText = "Go straight";
    button2.onclick = Hat_012;
    button3.style.display = "none";
    button4.style.display = "none";
}

function Hat_012(){
    content.style.backgroundImage = "url('images/Hat_012.jpg')";
    button2.innerText = "SCP-268";
    button3.innerText = "SCP-012";
    button3.style.display = "inline-block";
    button4.innerText = "012 Document";
    button4.style.display = "inline-block";
    button4.onclick = zerotwelvelink;
    button2.onclick = controlcard2;
    button3.onclick = () => alert("The door seems to be locked");
}

function controlcard2(){
    if(keycardlvl2 == true){
        TheHat();
    }else{
        alert("Acces denied");
    }
}


function zerotwelvelink(){
    window.open('http://www.scpwiki.com/scp-012');
}

function TheHat(){
    content.style.backgroundImage = "url('images/SCP_268_FULL.jpg')";
    button2.innerText = "Take SCP-268";
    button2.onclick = TheHat_EMPTY;
    button3.innerText = "268 Document";
    button3.style.display = "inline-block";
    button4.style.display = "none";
    button3.onclick = twosixeight;
}

function twosixeight(){
    window.open('http://www.scpwiki.com/scp-268');
}

function TheHat_EMPTY(){
    content.style.backgroundImage = "url('images/SCP_268_EMPTY.jpg')";
    button2.style.display = "none";
    Hat = true;
}

function elevators(){
    content.style.backgroundImage = "url('images/elevator.jpg')";
    button1.onclick = EXIT;
    button1.style.display = "inline-block";
    button1.innerText = "Go back";
    button3.style.display = "none";
    button2.innerText = "Take elevators";
    button2.onclick = Heavy_T_front;
    button3.style.display = "none";
    button4.style.display = "none";
}

function Heavy_T_front(){
    content.style.backgroundImage = "url('images/Heavy_T_junction_front.jpg')";
    button1.innerText = "Turn left";
    button2.innerText = "Turn back";
    button3.innerText = "Turn right";
    button3.style.display = "inline-block";
    button2.style.display = "inline-block";
    button1.style.display = "inline-block";
    button4.style.display = "none";
    button1.onclick = turn_bottom_left;
    button2.onclick = elevators;
    button3.onclick = turn_bottom_right;
}

function turn_bottom_left(){
    content.style.backgroundImage = "url('images/Heavy_right_turn.jpg')";
    button1.innerText = "Go back";
    button3.style.display = "none";
    button4.style.display = "none";
    button2.innerText = "Turn right";
    button1.onclick = Heavy_T_front;
    button2.onclick = Heavy_T_left_106;
}

function turn_bottom_right(){
    content.style.backgroundImage = "url('images/Heavy_left_turn.jpg')";
    button2.innerText = "Go back";
    button1.innerText = "Turn left";
    button3.style.display = "none";
    button4.style.display = "none";
    button2.onclick = Heavy_T_front;
    button1.onclick = Nukeright;
}

function Heavy_T_left_106(){
    content.style.backgroundImage = "url('images/Heavy_T_junction_left.jpg')";
    button1.innerText = "SCP-106";
    button2.innerText = "Go back";
    button3.style.display = "inline-block";
    button3.innerText = "Go straight";
    button1.onclick = one0sixfront;
    button2.onclick = turn_bottom_left;
    button3.onclick = turn_top_left;
}

function Nukeright(){
    content.style.backgroundImage = "url('images/Warhead_right.jpg')";
    button1.innerText = "Go back";
    button2.innerText = "Go straight";
    button3.innerText = "Alpha Warhead";
    button3.style.display = "inline-block";
    button1.onclick = Heavy_T_front;
    button2.onclick = doorjam;
    button3.onclick = Nuke_on;
}

function doorjam(){
    alert("The door is jammed");
}

function Nuke_off(){
    content.style.backgroundImage = "url('images/Nuke_off.jpg')";
    nuke = false
    button1.innerText = "Go back";
    button2.innerText = "Turn on nuke";
    button3.style.display = "none";
    button1.onclick = Nukeright;
    button2.onclick = Nuke_on;
}

function Nuke_on(){
    content.style.backgroundImage = "url('images/Nuke_on.jpg')";
    nuke = true;
    button2.innerText = "Turn off nuke";
    button2.onclick = Nuke_off;
}

function one0sixfront(){
    content.style.backgroundImage = "url('images/106_chamber.jpg')";
    button1.innerText = "Go back";
    button2.innerText = "Enter chamber";
    button3.innerText = "106 Document";
    button3.style.display = "inline-block";
    button1.onclick = Heavy_T_left_106;
    button2.onclick = one0sixchamber;
    button3.onclick = one0sixlink;
}

function one0sixlink(){
    window.open('http://www.scpwiki.com/scp-106');
}

function one0sixchamber(){
    content.style.backgroundImage = "url('images/106_recontain_button.jpg')";
    button2.innerText = "Recontain SCP-106";
    button3.style.display = "none";
    button1.onclick = one0sixfront;
    button2.onclick = recontained;
}

function recontained(){
    femurbreaker.play();
    larry = true;
}

function turn_top_left(){
    content.style.backgroundImage = "url('images/Heavy_right_turn.jpg')";
    button1.innerText = "Go back";
    button2.innerText = "Turn right";
    button3.style.display = "none";
    button1.onclick = Heavy_T_left_106;
    button2.onclick = Heavy_T_left;
}

function Heavy_T_left(){
    content.style.backgroundImage = "url('images/Heavy_T_junction_left.jpg')";
    button1.innerText = "Turn left";
    button2.innerText = "Go back";
    button3.innerText = "Go straight";
    button3.style.display = "inline-block";
    button1.onclick = Entrance_checkpoint;
    button2.onclick = turn_top_left;
    button3.onclick = doorjam;
}

function Entrance_checkpoint(){
    content.style.backgroundImage = "url('images/Entrance_checkpoint.jpg')";
    button1.innerText = "Go back";
    button2.innerText = "Pass checkpoint";
    button3.style.display = "none";
    button4.style.display = "none";
    button1.onclick = Heavy_T_left;
    button2.onclick = Entrance_straight;
}

function Entrance_straight(){
    content.style.backgroundImage = "url('images/Entrance_T_junction_left.jpg')";
    button1.innerText = "Evacuation shelter";
    button2.innerText = "Go straight";
    button3.innerText = "Dr. Maynard's office";
    button4.innerText = "Go back";
    button3.style.display = "inline-block";
    button4.style.display = "inline-block";
    button1.onclick = N3N_Death;
    button2.onclick = MTFdeath;
    button3.onclick = doorjam;
    button4.onclick = Entrance_checkpoint;
    
}

function N3N_Death(){
    content.style.backgroundImage = "url('images/SCP_939.jpg')";
    setTimeout(dogdeathscreen, 500);
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
}

function MTFdeath(){
    content.style.backgroundImage = "url('images/MTF_death.jpg')";
    button1.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    window.value = setTimeout(MTFdeathscreen, 2500);
    if(Hat == true){
        button2.innerText = "Use SCP-268";
        button2.onclick = Entrance_T_left;
    }else{
        button1.style.display = "none";
        button1.style.display = "none";
        button1.style.display = "none";
        button1.style.display = "none";
    }
}

function Entrance_T_left(){
    content.style.backgroundImage = "url('images/Entrance_T_junction_left.jpg')";
    clearTimeout(window.value);
    button1.innerText = "Go back";
    button2.innerText = "Turn left";
    button3.innerText = "Go straight";
    button4.innerText = "Cafeteria";
    button1.style.display = "inline-block";
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
    button4.style.display = "inline-block";
    button1.onclick = MTFdeath;
    button2.onclick = GateA;
    button3.onclick = Entrance_right_turn;
    button4.onclick = doorjam;
}

function GateA(){
    content.style.backgroundImage = "url('images/Gate_A.jpg')";
    button2.innerText = "Take elevator";
    button3.style.display = "none";
    button4.style.display = "none";
    button1.onclick = Entrance_T_left;
    button2.onclick = ESCAPED;
}

function Entrance_right_turn(){
    content.style.backgroundImage = "url('images/Entrance_right_turn.jpg')";
    button2.innerText = "Turn right";
    button3.style.display = "none";
    button4.style.display = "none";
    button1.onclick = Entrance_T_left;
    button2.onclick = GateBclosed;
}

function GateBclosed(){
    content.style.backgroundImage = "url('images/Gate_B_closed.jpg')";
    button3.style.display = "none";
    button2.innerText = "Open gate";
    button1.onclick = Entrance_right_turn;
    button2.onclick = GateBopen;
}

function GateBopen(){
    content.style.backgroundImage = "url('images/Gate_B_open.jpg')";
    button2.innerText = "Use elevator";
    button3.style.display = "inline-block";
    button3.innerText = "Close gate";
    button1.onclick = Entrance_right_turn;
    button2.onclick = Nukecondition;
    button3.onclick = GateBclosed;
}

function Nukecondition(){
    if(nuke == false){
        ESCAPED();
    }else{
        Nukedeathscreen();
    }
    console.log(Nukecondition);
}

function horn(){
    partyhorn.play();
}

function ESCAPED(){
    content.style.backgroundImage = "url('images/Outside.jpg')";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button1.style.display = "inline-block";
    button1.innerText = "Congratulations! You escaped.";
    button1.onclick = horn;
}

