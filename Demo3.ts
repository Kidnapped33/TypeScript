//基础静态类型 和 对象类型

// 基础静态类型 number / string / boolean / symbol / null / undefined / void
const userName: string = 'Ashine'
const userAge: number = 18


// 对象类型 的四种形式 = 普通对象类型/数组类型/类类型/函数类型

//普通对象类型
//const dog = {}
//const dog: {} = {}
const dog: {
    name: string,
    age: number

} = {
    name: 'jiojio',
    age: 1
}

//数组类型
//const xiaoJieJie :string[] = []
const xiaoJieJie = ['sunny', 'season', 'irene']
const xiaoJieJie: string[] = ['sunny', 'season', 'irene']

//类类型
class Person { }
const dajiao = new Person()
const dajiao: Person = new Person()

//函数类型
const seeSomeOne = () => { return 'irene' }
const seeSomeOne: () => string = () => { return 'irene' }



//5-6
const userName2: string = 'Ashine'
const userAge2: number = 18

const dog2: {} = {}
const dog3: { name: string, age: number } = { name: 'dog', age: 2 }

const users1 = ['aa', 'bb', 'cc']
const users2: [string] = ['aa']
const users3: [number, number] = [18, 15]
const users4: string[] = ['aa', 'bb', 'cc']
const users5: (string | number)[] = ['aa', 'bb', 18]

class pp { }
const p = new pp()
const p2: pp = new pp()

const fn1 = () => { return 'fn11' }
const fn2: () => string = () => { return 'fn22' }
const fn3: () => number = () => { return 22 }
