
    





let arr=[3,12,25,46,99,88,65,1,71,9,2,7,5]

// 1) max deyer method ile
// function show(array){
//     let here=[];
//     let max= Math.max(...array)
//     here.push(max)
//    console.log(here) 
// }
// show(arr)

// 1*2) max deyeri metodsuz

// let max = arr[0];
// function show(array,valute){
//     for(let a=1; a<array.length;a++){
//         array[a]>valute? valute=array[a]:null;
//     } 
//     return valute
// }

// console.log(show(arr,max))

// 2 min deyeri tapmaq

// let min= arr[0];
// function show(array,valute){
//     for(let a=1; a<array.length; a++){
//         array[a]<valute? valute=array[a]:null;
//     }
//     return valute;
// }
// console.log(show(arr, min))

// 3) kicik ededin oldugu indexin tapilmasi

// let min=0
// function show(array, valute){
//     for(let a=1;a<array.length;a++){
//         array[a]<array[valute]? valute=a:null;
//     }
//     return valute;
// }
// console.log(show(arr,min))

// 4) boyuk ededin oldugu indexin tapilmasi
// let max=0
// function show(array, valute){
//     for(let a=1;a<array.length;a++){
//         array[a]>array[valute]? valute=a:null;
//     }
//     return valute;
// }
// console.log(show(arr,max))


// 5) sade yolla return deyismekle min deyeri ve yaxut min deyerin tutdugu indexsin tapilmasi (not! debug) 

// function show(array){
//     let min=0
//     for(let a=1;a<array.length;a++){
//         array[a]<array[min]?min=a:null
//     }
    // return array[min];              
//     return min;
// }

// console.log(show(arr))

// 6) tek indexli reqemlerin toplanmasi

// function show(array){
//     let sum=0
//     for(let a=0;a<array.length;a++){
//         a%2===1? sum+=array[a]:null
//     }
//     return sum;
// }
// console.log(show(arr))

// 7) arraydaki tek reqemlerin sayilmasi

// function show(array){
//     let sum=0
//     for(let a=0;a<array.length;a++){
//         array[a]%2===1? sum++:null
//     }
//     return sum
    
// }

// console.log(show(arr))



//8) arrayin ilk yarisi ile 2 ci yarisinin yerini deyismek

 let number=[1,2,3,4,5,6,7,8]
  let busy=[]
// function show(array,here){
    
//    for(let b=array.length/2;b<array.length;b++){
//         here.push(array[b])
        
//     }
     
//     for(let a=0;a<array.length/2;a++){

//         here.push(array[a].sort((a,b)=>b-a))
        
//       }

//     return here
// }

// console.log(show(number,busy))

// 9) arrayin 2 yasirisin ve 2 ci yarisinin xususi deyisimi

function show(array,here){
     for(let b=array.length/2;b<array.length ;b++){
        here.push(array[b]);
     }

   let reverse=[];
   for(let a=0;a<array.length/2;a++){
    reverse.push(array[a])
   }
    
   for(c=reverse.length-1;c>=0;c--){
      here.push(reverse[c])
   }
   return here
}
console.log(show(number,busy))
