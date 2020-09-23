

var today = new Date;
console.log(today);

var name = prompt('enter your name please');


function aseel() {
    //input 
    var year = prompt('year of graduation');
    var year;
    
    //processing 
    
    if(year>2017){
        alert('YOU HAVE EXPERIENCE');  
    } else if (year<2019){
        alert('YOU Are freshly graduated ');
    } else {
        alert('zero experience');
    }
    
    //output
    
    document.write('<h2>Welcome everyone</h2>');

}

    aseel();
    //console.log(year);

    function school() {
        //input
        var major = prompt('Please enter your major?');
        var major;

        //processing
        if(major==Construction managment ){
            alert('YOU WILL ENJOY THIS MAJOR WITH US ');
       }else if (major==Geotichnical enginneer) {
            alert('HOPE YOU FIND US HELPFUL!');
       }else if (major==none){
           alert('YOU MAY BE NOT INTERESTED');
       }

       //output

       document.write('<h3>HOPE TO SEE YOU SOON');

    }

school();
//console.log(major);














