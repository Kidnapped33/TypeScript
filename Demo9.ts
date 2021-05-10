interface Girl {
    name: string;
    age: number;
    tall: number;
    city?: string;
    [propname: string]: any
}

const girl = {
    name: 'Amy',
    age: 25,
    tall: 165,
    xxx: 123,
    yyy: 456
}

const jianli = (girl: Girl) => {

    girl.age > 18 && girl.tall > 160 ? console.log(girl.name + '简历通过') : console.log(girl.name + '简历淘汰')
}

const getJianli = (girl: Girl) => {

    console.log(girl.name + girl.age + girl.tall);
    console.log(girl.xxx + girl.yyy);
}

jianli(girl)
getJianli(girl)


//5-10
interface Girl {
    name: string;
    age: number;
    tall: number;
    city?: string;
    [propname: string]: any
}

const girl = {
    name: 'Amy',
    age: 25,
    tall: 165,
    xxx: 123,
    yyy: 456
}

const jianli = (girl: Girl) => {

    girl.age > 18 && girl.tall > 160 ? console.log(girl.name + '简历通过') : console.log(girl.name + '简历淘汰')
}

const getJianli = (girl: Girl) => {

    console.log(girl.name + girl.age + girl.tall);
    console.log(girl.xxx + girl.yyy);
}

jianli(girl)
getJianli(girl)