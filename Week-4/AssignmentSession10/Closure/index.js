function counter()
{
    let count=0;
    return function(){
        count++;
        return count;
    }
}

const firstCounter=counter();
const secondCounter=counter();


const firstValue=[];
for(let i=0;i<5;i++)
{
    firstValue.push(firstCounter());
}

const secondValue=[];
for(let i=0;i<3;i++)
{
    secondValue.push(secondCounter());
}

console.log("firstValues:",firstValue);
console.log("secondValues:",secondValue);