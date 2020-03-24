function* heyGenerator() {
    yield "hey"
    yield "Salom"
    yield "Kalom"

    return "hi"
}


const reslutGenerator = heyGenerator();


console.log(reslutGenerator.next());
console.log(reslutGenerator.next());
console.log(reslutGenerator.next());


const resultForof = heyGenerator();

for (let iterator of resultForof) {

    console.log(iterator)

}
