// const jianli = (name: string, age: number, tall: number) => {

//     age > 18 && tall > 160 ? console.log(name + '简历通过') : console.log(name + '简历淘汰')
// }

// const getJianli = (name: string, age: number, tall: number) => {

//     console.log(name + age + tall);
// }

// jianli('Amy', 25, 165)
// getJianli('Amy', 25, 165)


//重复的部分，就可以用interface
//优化以上代码

interface Girl {
    name: string;
    age: number;
    tall: number;
    city?: string
}

const girl = {
    name: 'Amy',
    age: 25,
    tall: 165
}

const jianli = (girl: Girl) => {

    girl.age > 18 && girl.tall > 160 ? console.log(girl.name + '简历通过') : console.log(girl.name + '简历淘汰')
}

const getJianli = (girl: Girl) => {

    console.log(girl.name + girl.age + girl.tall);
}

jianli(girl)
getJianli(girl)