const cats = ["Milo", "Otis", "Garfield",]

function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
    const lastCat = [...cats, "Broom"];
    return lastCat;
}
function prependCat() {
    const firstCat = ["Arnold", ...cats]
    return firstCat
}
function removeLastCat() {
    const lastCat2 = cats.slice(0,-1);
    return lastCat2
}
function removeFirstCat() {
    const firstCat2 = cats.slice(1);
    return firstCat2
}