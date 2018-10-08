var employee =  {
        dateSt : '',
        dateEnd : '',
        hrSt : undefined,
        hrEnd : ''
}

var matrix = [];
for(var i=0; i<1; i++) {
    matrix[i] = [];
    var hour = 9;
    for(var j=0; j<12; j++) {
        
    hour++;
        matrix[i][j] = hour;
    }
}

//alert(matrix.join('\n'))

var matrixClone = [];
for(var i=0; i<1; i++) {
    matrixClone[i] = [];
    for(var j=0; j<12; j++) {
        
        matrixClone[i][j] = 0;
    }
}

//alert(matrixClone.join('\n'))

function getStHour () { employee.hrSt = event.target.value;
                       alert(employee.hrSt)
                       for (var j = 0; j<12; j++)/* {if (matrix[0][j] == employee.hrSt) matrixClone[0][j] += 1;} */
                           {for (var i=employee.hrSt; i <= employee.hrEnd; i++) 
                                            {
                                                if (matrix[0][j] == i) matrixClone[0][j] += 1;
                                            }
                                       }
                                alert(matrix.join('\n'))
                                alert(matrixClone.join('\n')) }

function getEndHour() {employee.hrEnd = event.target.value;
                        alert(employee.hrEnd)
                      for (var j = 0; j<12; j++)/* {if (matrix[0][j] == employee.hrSt) matrixClone[0][j] += 1;} */
                           {for (var i=employee.hrSt; i <= employee.hrEnd; i++) 
                                            {
                                                if (matrix[0][j] == i) matrixClone[0][j] += 1;
                                            }
                                       }
                                alert(matrix.join('\n'))
                                alert(matrixClone.join('\n')) 
                        }

var btn = document.createElement('button');
btn.onclick = function () {alert(matrixClone);};
document.body.append(btn);

 /*{for (var i=employee.hrSt; i <= employee.hrEnd; i++) 
                                            {
                                                if (matrix[0][j] == i) matrixClone[0][j] += 1;
                                            }
                                       } */
