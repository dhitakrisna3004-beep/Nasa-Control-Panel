const logs = document.getElementById("logs");

function addLog(text){
  logs.innerHTML += "<br>> " + text;
  logs.scrollTop = logs.scrollHeight;
}

function launchMissile(){

  addLog("Missile launch initiated...");
  
  document.getElementById("fuel").innerText = "75%";
  
  document.getElementById("threat").innerText = "HIGH";

  setTimeout(()=>{
    addLog("Missile launched successfully 🚀");
  },1500);

}

function scanPlanet(){

  const planets = [
    "Unknown Ice Planet",
    "Volcanic Planet XR-7",
    "Alien Ocean World",
    "Destroyed Civilization",
    "Black Hole Detected",
    "Life Signal Found"
  ];

  const randomPlanet =
    planets[Math.floor(Math.random()*planets.length)];

  addLog("Scanning nearby planets...");
  
  setTimeout(()=>{
    addLog("Scan Result: " + randomPlanet);
  },1200);

}

setInterval(()=>{

  const warnings = [
    "Solar flare detected",
    "Signal interference",
    "Asteroid passing nearby",
    "Satellite connection stable",
    "Unknown transmission received"
  ];

  const random =
    warnings[Math.floor(Math.random()*warnings.length)];

  addLog(random);

},7000);