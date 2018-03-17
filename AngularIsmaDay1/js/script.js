
var y = 0;
var s = [5];
window.onload=function() {

    //************************for print the form*****************

   // buttonp();



    //****************when the number of seats>100*******************
    var t1 = document.getElementById("tableA");
    var t2 = document.getElementById("tableB");
    var t3 = document.getElementById("tableC");
    var t4 = document.getElementById("tableD");
    var t5 = document.getElementById("tableE");
    var t6 = document.getElementById("tableF");
    j = 1;
    t1.innerHTML = "<tr><td>A</td></tr>";
    for (i = 1; i <= 4; i++) {
      
        
        t1.innerHTML += "<tr><td class='choice'>" + j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td></tr>";
        ++j;
      
      
    }
    j = 1;
    t2.innerHTML = "<tr><td>B</td></tr>";
    for (i = 1; i <= 4; i++) {


        t2.innerHTML += "<tr><td class='choice'>" + j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td></tr>";
        ++j;


    }
    j = 1;
    t3.innerHTML = "<tr><td>C</td></tr>";
    for (i = 1; i <= 4; i++) {


        t3.innerHTML += "<tr><td class='choice'>" + j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td></tr>";
        ++j;


    }
    j = 1;
    t4.innerHTML = "<tr><td>D</td></tr>";
    for (i = 1; i <= 4; i++) {


        t4.innerHTML += "<tr><td class='choice'>" + j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td></tr>";
        ++j;


    }
    j = 1;
    t5.innerHTML = "<tr><td>F</td></tr>";
    for (i = 1; i <= 4; i++) {


        t5.innerHTML += "<tr><td class='choice'>" + j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td></tr>";
        ++j;


    }
    j = 1;
    t6.innerHTML = "<tr><td>E</td></tr>";
    for (i = 1; i <= 4; i++) {


        t6.innerHTML += "<tr><td class='choice'>" + j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td><td class='choice'>" + ++j + "</td></tr>";
        ++j;


    }


    //******************** unavialable function for select randomly some seats to be unavialable***********
    unavialable();
        



    //***********************choice function to color the select place*********************
    choice();
  


    



}//***********************end of the function onload*********************
function choice() {

    var len = document.getElementsByClassName("choice").length;
    //alert(len);
    var n=0;//index of arry s for put the number of seats
    for (x = 0; x < len; x++) {
       
        document.getElementsByClassName("choice")[x].addEventListener('click', function () {
            this.style.backgroundColor = "rgba(11, 234, 11, 0.79)";
            y++;
            s[n] = x;
            n++;

            //alert(y);
            document.getElementById("seatsnum").innerHTML = y;
        }, false);

    }

    //alert(y);
}



function unavialable() {
    
    //*********** this for loop for select some places randomly to be unavialable*********
    //*************we will select 35 seats to be  unavialable****************

    for (u = 0; u <92; u++) {
        r = Math.floor(1 + Math.random() * 192);
        document.getElementsByClassName("choice")[r].style.backgroundColor = "#cd8913";
    }

}



//*******************click  the print button**************
//function buttonp() {
//    document.getElementsByClassName("bprint").onclick = function () {
//        alert("noa");

//        //window.print();
//    }
//}