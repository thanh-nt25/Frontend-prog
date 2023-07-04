// var a = 'toihocode';
// document.write(a+'<br>');

function check(){
    return 2==1;
}

function element_of_arr(new_arr){
    for(let i=0; i < new_arr.length; ++i){
        console.log(new_arr[i]);
    }
}

console.log(check());

var new_arr = new Array(1,2,3);
console.log(new_arr.valueOf('-'));
new_arr.push(4);
new_arr.pop();
new_arr.shift();
new_arr.unshift(1);

new_arr.splice(1, 2, 4, 5, 7,3);
console.log( new_arr.join(' '));

new_arr.sort();
console.log( new_arr.join(' '));

new_arr.reverse();
console.log( new_arr.join(' '));

let num = 'abc 10';
console.log(parseInt(num));

var d = new Date();
console.log(d.gety);

var car = {
    color:'blue',
    number: 2,

    open_the_door: function(){
        alert('open the door')
    }
};

for (let key in car){
    console.log(`Key ${key} có giá trị là ${car[key]}`);
}

