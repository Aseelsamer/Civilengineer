

var today = new Date;
console.log(today);

var name = prompt('enter your name please');

function aseel() {
    //input 
    var year = prompt('year of graduation');
    var year;

    //processing 

    if (year > 2017) {
        alert('YOU HAVE EXPERIENCE');
    } else if (year < 2019) {
        alert('YOU Are freshly graduated ');
    } else {
        alert('zero experience');
    }

    //output

    document.write('<h2>Welcome everyone</h2>');

}
aseel();

// var major1 = prompt('enter your major?');

//console.log(year);

function school() {
    //input
    var major = prompt('What is your major?');
    var subject;

    //processing

    while (major !== 'Construction Managment' && major !== 'Geaotichnical engineer') {
        var major = prompt('what is your major?');

    }

    var numberOfImages = prompt('how many items you want to see?');

    for (var i = 1; i <= numberOfImages; i++) {

        if (major == "Construction Managment") {
            subject = '<img src="https://i1.pngguru.com/preview/153/990/376/home-logo-construction-company-business-building-business-cards-general-contractor-construction-management-png-clipart.jpg">'
            document.write('<h3>' + subject + '</h3>');
        
        } else if (major == "Geaotichnical engineer") {
            subject = '<img src="https://img2.pngio.com/faculty-of-civil-engineering-and-built-environment-uthm-geotechnical-engineering-png-900_431.png">'
            document.write('<h3>' + subject + '</h3>');
        
        }


    }

   // document.write('<h3>' + subject + '</h3>');
}



school();



















