/*var employee =  {
        dateSt : '',
        dateEnd : '',
        hrSt : undefined,
        hrEnd : ''
}*/

/*function Employee(dateSt, dateEnd, hrSt, hrEnd) {
  this.dateSt = dateSt;
  this.dateEnd = dateEnd;
  this.hrSt = hrSt;
  this.hrEnd = hrEnd;
}*/

var startDate;
var endDate;
var startHr;
var endHr;

function getSt ()
{
    startDate = event.target.value;
    
}

function getEnd ()
{
    endDate = event.target.value;
    buildMatrix();

}

var t = 14;
var x = 12;
var matrix = [];
//var newEmployee = new Employee (13,14,15,16);
function  buildMatrix() {

for( var i=0; i < endDate-startDate; i++) {
    matrix[i] = [];
    var hour = 9;
    for(var j=0; j<14; j++) {
        
    hour++;
        matrix[i][j] = hour;
    }
}
    buildCloneMatrix();
}
var matrixClone = [];
//alert(matrix.join('\n'))
function buildCloneMatrix () {

for(var i=0; i<(endDate-startDate); i++) {
    matrixClone[i] = [];
    for(var j=0; j<14; j++) {
        
        matrixClone[i][j] = 0;
    }
}
}

//alert(matrixClone.join('\n'))

function getStHour () { startHr = event.target.value;
                       alert(startHr);
                       for (var i=0; i<(endDate-startDate); i++)
                       for (var j = 0; j<14; j++)/* {if (matrix[0][j] == employee.hrSt) matrixClone[0][j] += 1;} */
                           {for (var t=startHr; t <= endHr; t++) 
                                            {
                                                if (matrix[i][j] == t) matrixClone[i][j] += 1;
                                            }
                                       }
                                //alert(matrix.join('\n'))
                                //alert(matrixClone.join('\n'))
                      }

function getEndHour() {endHr = event.target.value;
                        alert(endHr);
                       for(var i=0; i<(endDate-startDate); i++)
                      for (var j = 0; j<14; j++)/* {if (matrix[0][j] == employee.hrSt) matrixClone[0][j] += 1;} */
                           {for (var t=startHr; t <= endHr; t++) 
                                            {
                                                if (matrix[i][j] == t) matrixClone[i][j] += 1;
                                            }
                                       }
                                //alert(matrix.join('\n'))
                               // alert(matrixClone.join('\n')) 
                        }


var btn = document.createElement('button');
btn.onclick = function () {alert(matrix.join('\n'));
                            alert(matrixClone.join('\n'));
                          };
document.body.append(btn);

 /*{for (var i=employee.hrSt; i <= employee.hrEnd; i++) 
                                            {
                                                if (matrix[0][j] == i) matrixClone[0][j] += 1;
                                            }
                                       } */
