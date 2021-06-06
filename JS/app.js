'use strict';

let rightpic;
let midpic;
let leftpic;
let rounds = 25;
let counts = 0;

//const. func.
function products (name, source){

    this.name = name;
    this.source = source;
    this.pick = 0;
    products.call.push(this);
}

products.all = [];

//instance

new products ('bag', '' )

