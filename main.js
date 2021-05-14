var nameofthestundentarray =[];
function submit(){
    var displaystudentarray =[];
    for(var j=1; j<=4; j++){
        var nameofthestudent= document.getElementById("studen_" +j).value;
        console.log(nameofthestudent);
        nameofthestundentarray.push(nameofthestudent);
    }
    console.log(nameofthestundentarray);
    var length=nameofthestundentarray.length;
    console.log(length);
for(var k=0; k<length; k++){
    displaystudentarray.push("<h4> name-"+nameofthestundentarray[k]+"</h4>" );
    console.log(displaystudentarray);
}   
document.getElementById("displayname").innerHTML=displaystudentarray;
var removecommas=displaystudentarray.join(" ");
console.log(removecommas);
document.getElementById("displaynamewithoutcommas").innerHTML=removecommas
document.getElementById("submitbutton").style.display="none";
document.getElementById("sorttbutton").style.display="inline-block";
}
function sorting(){
    nameofthestundentarray.sort();
    console.log(nameofthestundentarray);
    var displaystudentarraysorting =[];
    var length=nameofthestundentarray.length;
    console.log(length);
    for(var k=0; k<length; k++){
        displaystudentarraysorting.push("<h4> name-"+nameofthestundentarray[k]+"</h4>" );
        console.log(displaystudentarraysorting);
    }   
    var removecommas=displaystudentarraysorting.join(" ");
    console.log(removecommas);
    document.getElementById("displaynamewithoutcommas").innerHTML=removecommas;
}