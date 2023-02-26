const cats=["Milo","Otis","Garfield"];

function destructivelyAppendCat (){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat(){
    const newCat = ["Arnold", ...cats];
    return newCat;
}

function removeLastCat(){
    const removeCat= [...cats.slice(0,-1)];
    return removeCat;
}

function removeFirstCat(){
    const removeOneCat= cats.slice();
    removeOneCat.shift();
    return removeOneCat;
}
