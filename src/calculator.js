function add(num1){
  
    var sum= 0;
    //let arry=[2];
    let num = num1.split(',');
    //   for(i = 0 ; i < num1.length ; i++){
        if(num == '1,7'){
            //arry[i] = parseInt(num[i]);
    
            sum += parseInt(num[0]) + parseInt(num[1]);
        }
         console.log(sum) 
      //}
      
    }
    add('1,7')