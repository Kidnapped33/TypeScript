//数组类型的定义

const numberArray: number[] = [1, 2, 3]
const stringArray: string[] = ['a', 'b', 'c']
const undefinedArray: undefined[] = [undefined, undefined]
const uArray: (string | number)[] = ['a', 'b', 28]

// type 类型别名 2种方式  普通声明/type声明（逗号） 
//                            type声明可以用class声明（分号）代替

const xiaoJieJies: { name: string, age: number }[] = [
    { name: 'irene', age: 18 },
    { name: 'sunny', age: 18 },
]

type Lady = { name: string, age: number }
const xiaoJieJies: Lady[] = [
    { name: 'irene', age: 18 },
    { name: 'sunny', age: 18 },
]


class Lady { name: string; age: number }
const xiaoJieJies: Lady[] = [
    { name: 'irene', age: 18 },
    { name: 'sunny', age: 18 },
]