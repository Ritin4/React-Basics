// import React from 'react'
import { choice, remove } from './helpers'
import fruits from './foods'

//Randomly fraw a fruit from the array
let fruit = choice(fruits);
console.log(`I'd like one fruit ${fruit} please.`);
console.log(`Here you go: ${fruit} `);
console.log("Delicious!! May I have another??");
let remaining =  remove(fruits,fruit);
console.log(`I'm sorry, we're all out. We have ${remaining.length} left`);