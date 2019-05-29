function selectAll(){
        var items=document.getElementsByName('check');
        for(var i=0; i<items.length; i++){
          if(items[i].type=='checkbox')
            items[i].checked=true;
        }
      }
      
      function UnSelectAll(){
        var items=document.getElementsByName('check');
        for(var i=0; i<items.length; i++){
          if(items[i].type=='checkbox')
            items[i].checked=false;
        }
      }   
 function UpdateCost() {
  var sum = 0;
  var Numbers, elem;
  for ( var i=0; i<6; i++) {
    Numbers= 'values'+i;
    elem = document.getElementById(Numbers);
    if (elem.checked == true) { sum += Number(elem.value); }
  }
  document.getElementById('totalcost').value = sum;
  document.write(" Total Is:" + totalcost.value);
  return false
} 
