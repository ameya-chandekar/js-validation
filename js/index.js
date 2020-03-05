document.getElementById('age').disabled = true;

// function clearerror() {
//     errors = document.getElementsByClassName('errorpart');
//     for (let item of errors) {
//         item.innerHTML = "";
//     }
// }



function validateform() {
    checkName();
    checkLastName();
    checkPhoneNumber();
    checkOfiiceNumber();
    checkEmail();
    checkPassword();
    checkConfirmpassword();
    checkDate();
    checkGender();
    checkInterest()
    checkAbout();

}




//this code snippet is for firstname 
function checkName() {

    var firstName = document.getElementById('fname').value;
    if (firstName == "") {
        document.getElementById("fnameerr").innerHTML = "* First Name is required!";
        document.getElementById("fname");

    }
    else {
        document.getElementById("fnameerr").innerHTML = "";

    }

}

function checkNoNumName() {
    var firstName = document.getElementById('fname').value;
    // console.log("name", firstName)
    if (firstName.match(/^[a-zA-Z]*$/)) {
        document.getElementById("fnameerr").innerHTML = "";
    }
    else {
        document.getElementById("fnameerr").innerHTML = "cannot have number or special characters in name";
    }
}



//this code snippet is for lastname 
function checkLastName() {

    var lastName = document.getElementById('lname').value;
    if (lastName == "") {
        document.getElementById("lnameerr").innerHTML = "* Last Name is required!";
        document.getElementById("lname");

    }
    else {
        document.getElementById("lnameerr").innerHTML = "";
    }
}
function checkNoNumLastName() {
    var lastName = document.getElementById('lname').value;
    // console.log("name", lastName)
    if (lastName.match(/^[a-zA-Z]*$/)) {
        document.getElementById("lnameerr").innerHTML = "";
    }
    else {
        document.getElementById("lnameerr").innerHTML = "cannot have number or special characters in name";
    }
}





//this code snippet is for phonenumber 
function checkPhoneNumber() {

    var phoneNumber = document.getElementById('phoneno').value;

    if (phoneNumber == "") {
        document.getElementById("phonenoerr").innerHTML = "* Number required!";

    }
    else { document.getElementById("phonenoerr").innerHTML = ""; }
}




//this code snippet is for officenumber 
function checkOfiiceNumber() {

    // var returnvalue = true;
    // clearerror();
    var officeNumber = document.getElementById('officeno').value;

    if (officeNumber == "") {
        document.getElementById("officenoerr").innerHTML = "* Number required!";

    }
    else {
        document.getElementById("officenoerr").innerHTML = "";
    }
}






//this code snippet is for Email
function checkEmail() {

    var email = document.getElementById('email').value;

    if (email == "") {
        document.getElementById("emailerr").innerHTML = "* Email required!";

    }

    else if (/^([a-zA-Z])+([0-9a-zA-Z\.\-])+\@+(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/.test(document.getElementById('email').value)) {
        document.getElementById("emailerr").innerHTML = "";
    }

    else {
        document.getElementById("emailerr").innerHTML = "* enter valid email!";
    }
}



//this code snippet is for password
function checkPassword() {
    //     var returnvalue = true;
    // clearerror();
    var pass = document.getElementById('pass').value;
    cond = /^[A-Za-z]\w{7,11}$/;
    if (pass == "") {
        document.getElementById("passerr").innerHTML = "* password compulsary!! with 8-12 characters and should contain only aplhanumeric values";

    } else if (pass.match(cond)) {
        document.getElementById("passerr").innerHTML = "";
    } else {


    }

}




//this code snippet is for confirm password
function checkConfirmpassword() {
    var pass = document.getElementById('pass').value;
    var cpass = document.getElementById('cpass').value;

    if (cpass == "" || cpass != pass) {
        document.getElementById("cpasserr").innerHTML = "*  Make sure password and confirm password are same!";

    }
    else {
        document.getElementById("cpasserr").innerHTML = "";
    }

}




//this code snippet is for date of birth & Age
function checkDate() {

    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;


    if (day == 0 || month == 0 || year == 0) {
        document.getElementById('doberr').innerHTML = "*Select full date";
        document.getElementById("age").value="";

    }
    else { document.getElementById('doberr').innerHTML = ""; }
}








//this code snippet is for gender
function checkGender() {


    var rdo = document.getElementsByClassName('radio');
    if (
        rdo[0].checked == false &&
        rdo[1].checked == false) {
        document.getElementById("gendererr").innerHTML = "*  Please Select Gender!!!!!! ";


    }
    else { document.getElementById("gendererr").innerHTML = ""; }
}






//this code snippet is for interest section
function checkInterest() {


    var cbox = document.getElementsByClassName('checkbox');
    if (
        cbox[0].checked == false &&
        cbox[1].checked == false &&
        cbox[2].checked == false
    ) {
        document.getElementById("interesterr").innerHTML = "*  Atleast one interest is required!";

    }
    else if (cbox[0].checked == true ||
        cbox[1].checked == true ||
        cbox[2].checked == true) {
        document.getElementById("interesterr").innerHTML = "";
    }
}





//this code snippet is for about
function checkAbout() {

    var about = document.getElementById('about').value;

    if (about == "") {
        document.getElementById("abouterr").innerHTML = "*  required !";

    }
    else { document.getElementById("abouterr").innerHTML = ""; }


    return returnvalue;
}






//this function makes sure that only numbers are entered and allows only 10 numbers
function isNumber(evt) {

    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        document.getElementById("phonenoerr").innerHTML = "* only numbers allowed";

        document.getElementById("officenoerr").innerHTML = "* only numbers allowed";
        return false;
    }
    return true;
}






//function for calculating age
function agecal() {
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;

    var dob = new Date(year, month, day);

    var todaydate = new Date();

    var todaysYear = todaydate.getFullYear();
    var todaysmonth = todaydate.getMonth() + 1;

    var todaysDay = todaydate.getDate();


    var dobyear = dob.getFullYear();
    var dobmonth = dob.getMonth();

    var dobDay = dob.getDate();


    var ageyears = todaysYear - dobyear;
    var agemonths = todaysmonth - dobmonth;



    //this condition is for checking if birthmonth > currentdatesmonth
    if (dobmonth > todaysmonth) {
        ageyears = ageyears - 1;
        if (dobDay > todaysDay) {
            agemonths = agemonths + 11;
        } else {
            agemonths = agemonths + 12;
        }
    }

    //this condition is for checking if birthmonth = currentdatesmonth
    else if (dobmonth == todaysmonth) {
        if (dobDay <= todaysDay) {

            agemonths = 0;
        } else {
            ageyears = ageyears - 1;
            agemonths = 11;
        }
    }

    //this condition is for checking if birthmonth < currentdatesmonth
    else {
        if (dobDay > todaysDay) {

            agemonths = agemonths - 1;

        } else {

            agemonths = agemonths;
        }

    }

    let age = " " + ageyears + " years" + " " + agemonths + " months";

    document.getElementById("age").value = age;
}





function getmonth() {
    //line342-398 is for rendering months

    let monthArray = ["month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    document.getElementById("month").innerHTML = "";
    if (document.getElementById("year").value == new Date().getFullYear()) {
        // max_day = new Date().getDate();
        max_month = new Date().getMonth() + 1;
        // // console.log(max_month);

        // document.getElementById("month").innerHTML = "";

        for (m = 0; m <= max_month; m++) {
            let month_option = document.createElement("option");
            month_option.value = m;
            month_option.innerHTML = monthArray[m];
            document.getElementById("month").appendChild(month_option);
        }
    }
    else {
        for (m = 0; m <= 12; m++) {
            let month_option = document.createElement("option");
            month_option.value = m;
            month_option.innerHTML = monthArray[m];
            document.getElementById("month").appendChild(month_option);
        }
    }
}
function getday() {

    let max_day = 0;
    if (document.getElementById("year").value == new Date().getFullYear() && document.getElementById("month").value == new Date().getMonth() + 1) {

        //line no 379-397 is to dynamically render days in select option
        max_day = new Date().getDate();
        document.getElementById("day").innerHTML = "";
        for (let j = 1; j <= max_day; j++) {
            let day_option = document.createElement("option");
            day_option.value = j;
            day_option.innerHTML = j;
            document.getElementById("day").appendChild(day_option);
        }
    }

    else if (document.getElementById("month").value == 2) {
        max_day = document.getElementById('year').value % 4 == 0 ? 29 : 28;
        document.getElementById("day").innerHTML = "";

        for (let j = 1; j <= max_day; j++) {
            let day_option = document.createElement("option");
            day_option.value = j;
            day_option.innerHTML = j;
            document.getElementById("day").appendChild(day_option);
        }
    }
    else {
        max_day = 31;
        document.getElementById("day").innerHTML = "";

        for (let j = 1; j <= max_day; j++) {
            let day_option = document.createElement("option");
            day_option.value = j;
            day_option.innerHTML = j;
            document.getElementById("day").appendChild(day_option);
        }
    }
}

//line 400-412 is for rendering years option
let year = 1980;
let day = 1;

let currentyear = new Date().getFullYear();

var select_year = document.getElementById("year");

for (var i = year; i <= currentyear; i++) {
    var optn = document.createElement("option");
    optn.value = i;
    optn.innerHTML = i;
    select_year.appendChild(optn);
}