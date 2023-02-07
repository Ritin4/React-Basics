function choice(fruits){
    let fruit = Math.floor(Math.random() * fruits.length);
    return fruits[fruit];
}

function remove(fruits, fruit){
    for(let i=0; i< fruits.length; i++){
        if(fruits[i] === fruit){
            return [...fruits.slice(0,i), ...fruits.slice(i+1)]
        }
    }
}

export { choice, remove };