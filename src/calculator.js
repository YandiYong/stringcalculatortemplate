//This solves for 2  numbers
 function add(num1){
  
     var sum= 0;
    
     let num = num1.split(',');
     let arry = [num.length];
        
         if(num == num1){
              
             sum += parseInt(num[0]) + parseInt(num[1]);
         }

       console.log(sum)
   }
     add('1,7')

//This solves to unknown numbers
 function add1(numbers){
  
     let sum = 0;

     let num = numbers.split(',');// This will turn into an array of two string characters 
     let arry = [num.length];

     for(i = 0; i < num.length; i++){
            
         if(num == numbers){
            
            arry[i] = parseInt(num[i])
            sum += arry[i];
         }
         
     }
     console.log(sum)
 }   

 add1('1,5,4')