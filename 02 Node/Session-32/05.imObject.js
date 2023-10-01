const languageKnown={
    'java':"Java Proggramming Language",
    'node':"Node Js",
    'ang':"Angular Js",
    'rea':"React Js",
    'exp':"Express",
}

console.log(languageKnown);
languageKnown.test="Testing Using Jasmin Karma";
console.log(languageKnown);

//the above Object is mutable , means we can add the new item to it
// how to make it immutable?

const frozenObject=Object.freeze(languageKnown);

console.log(frozenObject);

console.log('Frozen',Object.isFrozen(frozenObject));

frozenObject.py="Python";

console.log("After Updating",frozenObject);

delete frozenObject.ang;

console.log("After Deleting",frozenObject);

// the above example is immutable, we can not modify the object