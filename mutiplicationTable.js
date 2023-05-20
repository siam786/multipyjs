// declare a function with single argument num
function multiplicationTable(num){
    for(let i=1;i<10;i++){
        let product = num*i;
        console.log(`${num}x${i}=${product}`);
        
    }
}
//function initialize
multiplicationTable(5)

/* output below
5x1=5
5x2=10
5x3=15
5x4=20
5x5=25
5x6=30
5x7=35
5x8=40
5x9=45
*/
