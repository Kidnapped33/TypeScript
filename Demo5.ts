//同4
//函数参数和返回值定义

// type annotation 类型注解
// type inference 类型推断

//给123，不明确，但是能推断是 number
//给 :number =123 ,明确，是 number
//能推断出来的，就可以不写类型，不能推断的就要明确类型

let xx: number = 123
let yy: string = ''
let zz: string[] = []


//参数声明类型
//: number
function add(a: number, b: number) {
    return a + b
}

let total = add(1, 2)
console.log(total);

//函数返回值声明类型
//: number
function add2(a: number, b: number): number {
    return a + b + ''
}

let total2 = add2(1, 2)
console.log(total2);

// void 设置函数无返回值，用 void，这样函数就没有返回值
//: void 
function sayHello(): void {
    console.log('hello');
    return ''
}

// never 执行不完的/死循环的/
//:never

function errorFunction(): never {
    throw new Error()
    console.log('error');
}

function forNever(): never {
    while (true) { }
    console.log('true');

}

//函数参数是对象，声明类型
//: { one: number, two: number }
function sum({ one, two }: { one: number, two: number }) {
    return one + two
}
let total3 = sum({ one: 1, two: 2 })

