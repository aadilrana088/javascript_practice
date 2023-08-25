const array = [
    { name: 'P', id: 1 },
    { name: 'P', id: 1 },
    { name: 'R', id: 3 },
    { name: 'R', id: 3, data: 7 },
    { name: 'R', id: 3, data: 7 },
];

// [{ name: "P", id: 1 }, { name: "R", id: 3 }, { name: "R", id: 3, data: 7 }];

const removeDuplicates = (arr) => {
    let data = [];
    data = arr.map(item => JSON.stringify(item))
    let uniqueData = new Set([...data])
    console.log(uniqueData);
    let uniqueArray = []
    uniqueData.forEach(item => uniqueArray.push(JSON.parse(item)))
    console.log(uniqueData);
    // for (let key of uniqueData) {
    //     console.log(key);
    //     uniqueArray.push(JSON.parse(key))
    // } 
    return uniqueArray;
};

console.log(removeDuplicates(array));

// const removeDuplicates = (arr) => {
//     let data = [];

//     console.log(JSON.stringify(arr[0]));

//     for (let i = 0; i < arr.length; i++) {
//         data.push(JSON.stringify(arr[i]));
//     }

//     let uniquedata = new Set([...data]);

//     let uniqueArray = [];

//     for (let elem of uniquedata) {
//         uniqueArray.push(JSON.parse(elem));
//     }

//     return uniqueArray;
// };

console.log(removeDuplicates(array));

console.log(1<2<3);
console.log(3>2>1);

console.log(NaN === NaN)

console.log({} == {})

let a = {}
let b = a
console.log(a === b);

var hero = {
    _name: "Aadil Rana",
    getSecret: function() {
        return this._name
    }
}

var stoleSec = hero.getSecret;
console.log(stoleSec());
//Output
stoleSec = hero.getSecret.bind(hero);
console.log(stoleSec());

console.log(hero.getSecret())