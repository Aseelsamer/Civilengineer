

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

// var major1 = prompt('enter your major?');

    //console.log(year);

     function school(){
         //input
         var major = prompt('What is your major?');
var major;        
     while(major !=="Construction Managment" && major!=="Geotechnical engineer");
       major = prompt('What is your major?');

       var numberOfImages = prompt('how many image would you like to see?');
       for (var i =1; i<= numberOfImages; i++) {
           if (major == 'Construction Managment')
           major = major+'<img src="//www.exploreinsiders.com/wp-content/uploads/2020/06/construction-project-management.png">'; 
       } else if (major == 'Geotechnical engineer') {
           major = major + 
       }

         //processing

         if(major == 'Construction Managment'){
                   alert('you will gain alot of informations');
         } else if (major =='Geotechnical engineer'){
                   alert('you will enjoy our courses in this field');
                }else{
                    alert('It is an Engineer website')
                }
                document.write("<h2>"+major+"</h2>")
     }

     
     school();
 


    













