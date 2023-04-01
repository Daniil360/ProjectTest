"use srtict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bd: 'red'
    }
};

// console.log(options.name);

// delete options.name;

// console.log(options); 

for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}