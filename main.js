function showLevelInfo() {

 var levelEntry = Number(document.getElementById("stageInput").value);

    switch (levelEntry) {
    case 1:
        document.getElementById("displayLevel").innerHTML = 
        "Level: Easy Mode";
        break;

    case 2:
        document.getElementById("displayLevel").innerHTML = 
        "Level: Normal Mode";
        break;
        
    case 3:
        document.getElementById("displayLevel").innerHTML = 
        "Level: Difficult Mode";
        break;

    default:
        window.alert("Invalid Section Number");
    }



}
   
