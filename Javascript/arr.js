//create an arr
//let names=['akansha','sneha','shreya','nicky',];
//console.log(names);

//length of aarays
//console.log(names.length);

//indexing
//console.log(names[1]);

//last index
//console.log(names[names.length-1]);

//change arrays in array list
//names[2]='hena'
//console.log(names);

//method in arrys

//push: insert new value insid the arrays
//let arr=['akansha','nicky','sneha','shreya'];
//arr.push('hena');
//console.log(arr);

//slice
//console.log(arr.slice(1,3));

//splice
//let family=['gutur','nicky','sonu','monu']
//family.splice(2,1,'hena','keshav');

//concatenation
//let arr1=[1,2,3,4];
//let arr2=[5,6,7,8];
//console.log(arr1.concat(arr2));

//fill
// let arr4=[1,2,3,4,56,7,8];
// arr4.fill('akansha',2,4);
// console.log(arr4);

//let arr1=[1,2,3,4,5,6,7,8,9];
//arr1.fill('akansha','deepak',2,4);
//console.log(arr1)

//include
// let num=[1,2,3,4,5,6,7,8];
// console.log(num.includes(6,7));

//indexOf
//let bum=[1,2,3,4,5,6,7,8];
//console.log(bum.indexOf(4));


//join:joint a character b/w all the elements of an arryas
// let arr5=[1,2,3,4,];
// console.log(arr5.join('love'));

//last index of
// let arr6=[1,2,3,'akuu',4,'akuu',6,'akuu'];
// console.log(arr6.lastIndexOf("akuu"));

//map
//let num=[49,,81,64,225];
//console.log(num.map(Math.sqrt));

 //pop:pop last item
//  let maths=[1,2,3,45];
//  console.log(maths.pop());
//  console.log(maths);
 
//reverse 
 //let maths=[1,2,3,4,5];
// console.log(maths.reverse());

//shift:taking first item
//console.log(maths.shift());
  
//sort
// let family=['papa','maa','gutur','nicky','sonu','monu'];
//console.log(family.sort());

//decending:reverse
//console.log(family.reverse(family.sort()));

 //unshift
//  let family=['papa','maa','gutur','nicky','sonu','monu'];
//  family.unshift('prasad','jaiswal');
//  console.log(family);

 //for of
 let family=['papa','maa','gutur','nicky','sonu','monu'];
 let pariwar=[];//empty arrys
 for(let names of family){
    pariwar.push(names.toUpperCase());
 }
console.log(pariwar);