
     document.title = "UnpaidCreations-Calculator";
      let numbers = [,];
      function runaddition(){
        numbers[0]=Number(document.getElementById('inputOne').value);
        numbers[1]=Number(document.getElementById('inputTwo').value);
        let addResult=numbers[0]+numbers[1];
        document.getElementById('outputN').innerHTML=addResult;
        if (addResult === 67){
  document.getElementById('resultState').innerHTML='Go Die'
} else {
  document.getElementById('resultState').innerHTML=''
}
      };
      function runsub(){
        numbers[0]=Number(document.getElementById('inputOne').value);
        numbers[1]=Number(document.getElementById('inputTwo').value);
        let addResult=numbers[0]-numbers[1];
        document.getElementById('outputN').innerHTML=addResult;
        if (addResult === 67){
  document.getElementById('resultState').innerHTML='Go Die'
} else {
  document.getElementById('resultState').innerHTML=''
}
      };
      function runmult(){
        numbers[0]=Number(document.getElementById('inputOne').value);
        numbers[1]=Number(document.getElementById('inputTwo').value);
        let addResult=numbers[0]*numbers[1];
        document.getElementById('outputN').innerHTML=addResult;
        if (addResult === 67){
  document.getElementById('resultState').innerHTML='Go Die'
} else {
  document.getElementById('resultState').innerHTML=''
}
      };
      function rundiv(){
        numbers[0]=Number(document.getElementById('inputOne').value);
        numbers[1]=Number(document.getElementById('inputTwo').value);
        let addResult=numbers[0]/numbers[1];
        document.getElementById('outputN').innerHTML=addResult;
        if (addResult === 67){
  document.getElementById('resultState').innerHTML='Go Die'
} else {
  document.getElementById('resultState').innerHTML=''
}
      };
      function runclear(){
        document.getElementById('inputOne').value='';
        document.getElementById('inputTwo').value='';
        document.getElementById('outputN').innerHTML='';
        document.getElementById('resultState').innerHTML='Result';
      }
