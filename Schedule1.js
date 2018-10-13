var startDate;
var endDate;
var startHr;
var endHr;

function getStDate ()
{
    startDate = event.target.value;
    
}

function getEndDate ()
{
    endDate = event.target.value;

}

function getStHour ()
{
    startHr = event.target.value;
}

function getEndHour ()
{
    endHr = event.target.value;
}

var matrix = [];
//15 possible work hours in a day, starting with 09:00
function  buildDaddyMatrix() {
for( var i=1; i < 31; i++) {
    matrix[i] = [];
    var hour = 9;
    for(var j=0; j<14; j++) {       
    hour++;
        matrix[i][j] = hour;
    }      
}
    }

                                                buildDaddyMatrix();
//console.log(matrix.join('\n'));

var matrixClone = [];
function buildCloneMatrix () {

for(var i=1; i<31; i++) {
    matrixClone[i] = [];
    for(var j=0; j<14; j++) {
        
        matrixClone[i][j] = 0;
    }
}
}

                                                buildCloneMatrix();

var cloneJan = [];
var cloneFeb = [];
var cloneMar = [];
var cloneApr = [];
var cloneMay = [];
var cloneJun = [];
var cloneJul = [];
var cloneAug = [];
var cloneSep = [];
var cloneOct = [];
var cloneNov = [];
var cloneDec = [];

function jan () {

for(var i=1; i<31; i++) {
    cloneJan[i] = [];
    for(var j=0; j<14; j++) {
        
        cloneJan[i][j] = 0;
    }
}
}
                                                jan();
function feb () {

for(var i=1; i<31; i++) {
    cloneFeb[i] = [];
    for(var j=0; j<14; j++) {
        
        cloneFeb[i][j] = 0;
    }
}
}
                                                feb();
function mar () {

for(var i=1; i<31; i++) {
    cloneMar[i] = [];
    for(var j=0; j<14; j++) {
        
        cloneMar[i][j] = 0;
    }
}
}
                                                mar();
function apr () {

for(var i=1; i<31; i++) {
    cloneApr[i] = [];
    for(var j=0; j<14; j++) {
        
        cloneApr[i][j] = 0;
    }
}
}
                                                apr();
function may () {

for(var i=1; i<31; i++) {
    cloneMay[i] = [];
    for(var j=0; j<14; j++) {
        
        cloneMay[i][j] = 0;
    }
}
}
                                                may();
function jun () {

for(var i=1; i<31; i++) {
    cloneJun[i] = [];
    for(var j=0; j<14; j++) {
        
        cloneJun[i][j] = 0;
    }
}
}
                                                jun();
function jul () {

for(var i=1; i<31; i++) {
    cloneJul[i] = [];
    for(var j=0; j<14; j++) {
        
        cloneJul[i][j] = 0;
    }
}
}
                                                jul();
function aug () {

for(var i=1; i<31; i++) {
    cloneAug[i] = [];
    for(var j=0; j<14; j++) {
        
        cloneAug[i][j] = 0;
    }
}
}
                                                aug();
function sep () {

for(var i=1; i<31; i++) {
    cloneSep[i] = [];
    for(var j=0; j<14; j++) {
        
        cloneSep[i][j] = 0;
    }
}
}
                                                sep();
function oct () {

for(var i=1; i<31; i++) {
    cloneOct[i] = [];
    for(var j=0; j<14; j++) {
        
        cloneOct[i][j] = 0;
    }
}
}
                                                oct();
function nov () {

for(var i=1; i<31; i++) {
    cloneNov[i] = [];
    for(var j=0; j<14; j++) {
        
        cloneNov[i][j] = 0;
    }
}
}
                                                nov();
function dec () {

for(var i=1; i<31; i++) {
    cloneDec[i] = [];
    for(var j=0; j<14; j++) {
        
        cloneDec[i][j] = 0;
    }
}
}
                                                dec();


function editCloneMatrix ()
{   var selectBox = document.getElementById("select");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    //alert(selectedValue);
    for (var i=startDate; i<=endDate; i++)
                       for (var j = 1; j<14; j++)/* {if (matrix[0][j] == employee.hrSt) matrixClone[0][j] += 1;} */
                           {for (var t=startHr; t <= endHr; t++) 
                                            {   
                                                //if (matrix[i][j] == t) matrixClone[i][j] += 1;
                                                if ((matrix[i][j] == t) && (selectedValue == 'jan') ) cloneJan[i][j] +=1;
                                                if ((matrix[i][j] == t) && (selectedValue == 'feb') ) cloneFeb[i][j] +=1;
                                                if ((matrix[i][j] == t) && (selectedValue == 'mar') ) cloneMar[i][j] +=1;
                                                if ((matrix[i][j] == t) && (selectedValue == 'apr') ) cloneApr[i][j] +=1;
                                                if ((matrix[i][j] == t) && (selectedValue == 'may') ) cloneMay[i][j] +=1;
                                                if ((matrix[i][j] == t) && (selectedValue == 'jun') ) cloneJun[i][j] +=1;
                                                if ((matrix[i][j] == t) && (selectedValue == 'jul') ) cloneJul[i][j] +=1;
                                                if ((matrix[i][j] == t) && (selectedValue == 'aug') ) cloneAug[i][j] +=1;
                                                if ((matrix[i][j] == t) && (selectedValue == 'sep') ) cloneSep[i][j] +=1;
                                                if ((matrix[i][j] == t) && (selectedValue == 'oct') ) cloneOct[i][j] +=1;
                                                if ((matrix[i][j] == t) && (selectedValue == 'nov') ) cloneNov[i][j] +=1;
                                                if ((matrix[i][j] == t) && (selectedValue == 'dec') ) cloneDec[i][j] +=1;
                                            }
                                       }
    
                                //alert(matrix.join('\n'))
                                //alert(matrixClone.join('\n'))
                      }
function addCloneToDivJan ()
{   var get =  document.getElementById('jan');
    get.innerHTML = '';
    for(var i=1; i<28; i++) 
    { var x=document.createElement('pre');
      
    for(var j=0; j<14; j++) {
        x.innerHTML += cloneJan[i][j];
    }
     document.getElementById('jan').appendChild(x);
    
}
}
function addCloneToDivFeb ()
{   var get =  document.getElementById('feb');
    get.innerHTML = '';
    for(var i=1; i<28; i++) 
    { var x=document.createElement('pre');
      
    for(var j=0; j<14; j++) {
        x.innerHTML += cloneFeb[i][j];
    }
     document.getElementById('feb').appendChild(x);
    
}
}
function addCloneToDivMar ()
{   var get =  document.getElementById('mar');
    get.innerHTML = '';
    for(var i=1; i<28; i++) 
    { var x=document.createElement('pre');
      
    for(var j=0; j<14; j++) {
        x.innerHTML += cloneMar[i][j];
    }
     document.getElementById('mar').appendChild(x);
    
}
}
function addCloneToDivApr ()
{   var get =  document.getElementById('apr');
    get.innerHTML = '';
    for(var i=1; i<28; i++) 
    { var x=document.createElement('pre');
      
    for(var j=0; j<14; j++) {
        x.innerHTML += cloneApr[i][j];
    }
     document.getElementById('apr').appendChild(x);
    
}
}
function addCloneToDivJun ()
{   var get =  document.getElementById('jun');
    get.innerHTML = '';
    for(var i=1; i<28; i++) 
    { var x=document.createElement('pre');
      
    for(var j=0; j<14; j++) {
        x.innerHTML += cloneJun[i][j];
    }
     document.getElementById('jun').appendChild(x);
    
}
}
function addCloneToDivJul ()
{   var get =  document.getElementById('jul');
    get.innerHTML = '';
    for(var i=1; i<28; i++) 
    { var x=document.createElement('pre');
      
    for(var j=0; j<14; j++) {
        x.innerHTML += cloneJul[i][j];
    }
     document.getElementById('jul').appendChild(x);
    
}
}
function addCloneToDivAug ()
{   var get =  document.getElementById('aug');
    get.innerHTML = '';
    for(var i=1; i<28; i++) 
    { var x=document.createElement('pre');
      
    for(var j=0; j<14; j++) {
        x.innerHTML += cloneAug[i][j];
    }
     document.getElementById('aug').appendChild(x);
    
}
}
function addCloneToDivSep ()
{   var get =  document.getElementById('sep');
    get.innerHTML = '';
    for(var i=1; i<28; i++) 
    { var x=document.createElement('pre');
      
    for(var j=0; j<14; j++) {
        x.innerHTML += cloneSep[i][j];
    }
     document.getElementById('sep').appendChild(x);
    
}
}
function addCloneToDivOct ()
{   var get =  document.getElementById('oct');
    get.innerHTML = '';
    for(var i=1; i<28; i++) 
    { var x=document.createElement('pre');
      
    for(var j=0; j<14; j++) {
        x.innerHTML += cloneOct[i][j];
    }
     document.getElementById('oct').appendChild(x);
    
}
}
function addCloneToDivNov ()
{   var get =  document.getElementById('nov');
    get.innerHTML = '';
    for(var i=1; i<28; i++) 
    { var x=document.createElement('pre');
      
    for(var j=0; j<14; j++) {
        x.innerHTML += cloneNov[i][j];
    }
     document.getElementById('nov').appendChild(x);
    
}
}
function addCloneToDivDec ()
{   var get =  document.getElementById('dec');
    get.innerHTML = '';
    for(var i=1; i<28; i++) 
    { var x=document.createElement('pre');
      
    for(var j=0; j<14; j++) {
        x.innerHTML += cloneDec[i][j];
    }
     document.getElementById('dec').appendChild(x);
    
}
}
function addCloneToDivMay ()
{   var get =  document.getElementById('may');
    get.innerHTML = '';
    for(var i=1; i<28; i++) 
    { var x=document.createElement('pre');
      
    for(var j=0; j<14; j++) {
        x.innerHTML += cloneMay[i][j];
    }
     document.getElementById('may').appendChild(x);
    
}
}




$('#editForEmployee').click(function() {
                                    editCloneMatrix();
                                        console.log(cloneJan.join('\n'));
                                        console.log(cloneFeb.join('\n'));
                                            
                                            console.log(matrixClone.join('\n'));});