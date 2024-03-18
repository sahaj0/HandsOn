//Arrow function

const add =(a,b)=> a+b;
const result=add(2,5);
console.log(result);

const Multiply =(a,b)=> a*b;
const resultMultiply=Multiply(2,5);
console.log(resultMultiply);

//Destructuring Assignment

const person={
    name:'John Doe',
    age:30,
    occupation:'Engineer'
};

 //with arrow
 const extraction=({name, age})=>{
    console.log(name+" "+age);
 };
 extraction(person);
//withou arrow
 const {name,age}= person;
  console.log(name+" "+age);

//Template Literals
const name1="sam";
const age1=25;
console.log(name1+age1);
console.log(age1+name1);

  //Spread and Rest Operators

  const arr1=[1,2,3];
  const arr2=[1,2,3];
const mergeArr=[...arr1,...arr2];
console.log(mergeArr);
function sum(){
    return mergeArr.reduce((total,num)=>total+num,0);
}
const r=sum(mergeArr);
console.log(r);

// Class
class Car{
    constructor(make,model){
        this.make=make;
        this.model=model;
        console.log(make);
        console.log(model);
        console.log("vroom vroom vroommm ....... ");
    }
    startEngine(){
        console.log("Engine started");
    
    }
}

const myCar=new Car("BUGATTI","Devo");
myCar.startEngine();

//Promise
function delayed(){
    return new Promise((result)=>{
        setTimeout(()=>{
            result("Delaying");
        },2000);
    })
};
delayed().then((message)=>{
    console.log(message);
})

//Map
const number=[1,2,3,45,6];
const doubleNumber=number.map((number)=>number*2);
const greaterThan=number.filter((number)=>number>2);
console.log(doubleNumber+"-----"+greaterThan);