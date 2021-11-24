/**
 * Arrow Function
 */

const power = function(x){
    return x * x;
}

let numbers = [1,2,3,4,5];
numbers.forEach(function(n){
    process.stdout.write(`${n}:${power(n)}\t`);
});

console.log("------\n");
numbers.forEach(function(n){
    // let result = (function(x){
    //     return x * x;
    // })(n);

    // let result = ((x) => {
    //     return x * x;
    // })(n);

let result = (x => x * x)(n);

    process.stdout.write(`${n}:${power(n)}\t`);
});


// ex4 - this를 어휘적 바인딩 (Lexical Bind)
console.log("\n-----\n");
const dooly = {
    name: '둘리',
    friends: ['또치', '마이콜', '도우너', '길동'],
    printFriends: function(){
        this.friends.forEach(function(f){
            console.log(`${this.name}의 친구 ${f}`);
        });
    }
}

dooly.printFriends();