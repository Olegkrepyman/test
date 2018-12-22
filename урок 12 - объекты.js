let options = {
    width: 1024,
    height: 869,
    name: "Test"
};

console.log(options.name);
    options.bool = true;
    options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;
console.log(options);

for (let key in options){
    console.log("Свойства "+ key + " имеет значение "+ options[key]);
}

console.log(object.keys(options).length);