
/*      Exercice 1:
        Write a JavaScript program that compare two objects 
        to determine if the first one contains equivalent 
        property values to the second one.
*/

var favorite ={
    movie : " Back to the future",
    book: "	Skinnybones",
    app :"Pinterest",
    fruit: "watermelon" ,

}
var favorite2={
    movie : " Harry Potter ",
    book: "Animal farm",
    app :"Pinterest",
    fruit: "watermelon" ,

}
var favorite3={
    app :"Pinterest",
    fruit: "watermelon" ,
}
function compare(obj1,obj2 ){

for(key in obj2){

    if(obj1[key]!==obj2[key]){
        return false;
    }
}    return true;

}

console.log(compare(favorite,favorite2));
console.log(compare(favorite,favorite3));
console.log(compare(favorite2,favorite3));








      /*   Exercice 2:
        Write a JavaScript function to find the common elements from two arrays
        console.log(difference([1, 2, 3], [100, 2, 1, 10]));
        ["1", "2"] */
        function difference(arr1, arr2) {
            var common = [];                  
            for(var i=0 ; i<arr1.length ; ++i) {
              for(var j=0 ; j<arr2.length ; ++j) {
                if(arr1[i] == arr2[j]) {       
                  common.push(arr1[i]);        
                }
              }
            }
            
            return common;   
        }     
          var A= [1, 2, 3];
          var B= [100, 2, 1, 10];
          
         
          console.log( difference(A, B));









