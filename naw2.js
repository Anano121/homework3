let a=1
console.log(a)

function f1(start,end){
    let arr=[];
     arr.push()
     
    for (start;start<=end;start++){
        arr.push(start)
    }
    return arr
}
console.log(f1(5,10))


let person={
    firstname:"anano",
    lastnamee:"anano",
    age:20
}
function f2(age){
    if (age<18){
        console.log(person.firstname + " arasrulwlovania")

    }
    else {
        console.log(person.firstname +" srulwlovania")
    }
    
}

f2(23)


//an

let person1={
    firstname:"tika",
    lastname:"chezhia",
    age:20
}

function f4(firstname,age){
   if (age<18)
     return firstname +" არასწულწლოვანია" 
    
    else
     return  firstname +" სრულწლოვანია"
    

}

 console.log(f4("nino",15));

let num=0
 while (num<23){ 

 console.log(num)
 num++

};

let i=2
for (i;i<13;i+=2)
console.log(i)

//or


i=2
while (i<13){

 console.log(i)
    i+=2
}