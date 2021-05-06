
//静态类型

interface Animal {
    name: string
    color: string
    age: number
}

const cat: Animal = {
    name: 'jiojio',
    color: 'black',
    age: 1
}

console.log(cat.name);

//5-6 静态类型

interface Animal2 { }
interface Animal2 {
    name: string
    age: number
}

const dog1 = {
    name: 'dog1',
    age: 2
}


