function* numberGenrator(){
    let num=1;
    while(true){
        yield num;
        num++;
    }
}

const myGenrator=numberGenrator();
console.log(myGenrator.next().value);
console.log(myGenrator.next().value);
console.log(myGenrator.next().value);