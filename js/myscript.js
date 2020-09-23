

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
        var grade = prompt('Please enter your average in percentage?');
        var grade;

        //processing
        if(grade>70){
            alert('GOOD!');
       }else if (grade==80) {
            alert('VERY GOOD!');
       }else if (grade<90){
           alert('EXCELLENT!');
       }

       //output

       document.write('<h3>HOPE TO SEE YOU SOON');

    }

school();
//console.log(grade);














