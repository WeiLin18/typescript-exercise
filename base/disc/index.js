"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// -------- type annotation 類型註解
let foo = "aaa";
// -------- type inference 類型推斷
let num = 123;
const pet = {
    type: "dog",
    age: 3,
};
let arr = ["a", 3];
let arr2 = [["aa", "bb"]];
let arr3 = [["a"], "a"];
const objArr = [{ name: "a" }];
// tuple 元祖 ----------------------------------------------------------------
let list = [1, "name", true];
// csv 常用
let list2 = [
    ["dell", "male", 3],
    ["Amy", "female", 3],
];
// enum 枚舉 -------------------------------------------------------------
var liveStatus;
(function (liveStatus) {
    liveStatus[liveStatus["SUCCESS"] = 0] = "SUCCESS";
    liveStatus[liveStatus["FAIL"] = -1] = "FAIL";
    liveStatus[liveStatus["STREAMING"] = 1] = "STREAMING";
    liveStatus[liveStatus["OFFLINE"] = 2] = "OFFLINE";
})(liveStatus || (liveStatus = {}));
const AStatus = liveStatus.SUCCESS;
console.log(liveStatus[1]);
// union --------------------
let aaa;
const point = {
    x: 1,
    y: 2,
};
const obj = {
    name: "John",
    age: 20,
    // hobby: 'tennis'
};
const rawData = '{"name":"aa"}';
// const newData = JSON.parse(rawData);
const newData = JSON.parse(rawData); // TS 無法判斷 parse 的型別，必須加類型註解
const Amy = {
    name: "Amy",
    age: 20,
    weight: 50,
};
const callPerson = (person) => {
    console.log(person.name);
    console.log(person.age);
};
callPerson({ name: "Jan", age: 100 });
const AA = { name: "AA", age: 20, sex: "female", say: () => "3" };
callPerson(AA); // 若是傳變數 不會完全比對 interface
callPerson({ name: "AA", age: 20, sex: "female" }); // 若是直接帶 會深層比對 interface
const getPerson = (baby, text) => {
    return Object.assign(Object.assign({}, baby), { name: text });
};
class User {
    constructor(name1) {
        this.name = name1;
        this.age = 100;
    }
}
const Minami = {
    name: "Minami",
    age: 26,
    teach: () => {
        console.log("japan");
    },
};
const sayHi = (hello) => {
    console.log(hello);
};
// function ----------------------------------------------------------------
const get3 = () => 3;
const get33 = () => 33;
function tsDemo(data) {
    return data.x + data.y;
}
const tsDemo2 = (data) => data.x + data.y;
const tsDemo22 = (data) => data.x + data.y;
const tsDemo3 = (data) => data.x + data.y;
tsDemo({ x: 1, y: 2 });
const toNum = (str) => parseInt(str);
const toNum2 = (str) => 3;
function sayHello() {
    console.log("hello");
    // return 'a'
}
function errorEmitter() {
    // 不會跑到最後
    throw Error;
    while (true) { }
    console.log("error");
}
function add({ first, second }) {
    // 解構型別註解
    return first + second;
}
add({ first: "a", second: "bc" });
// undefined --------------------------------------------------------------------
function hello(name) {
    console.log(name);
}
function hello2(a, b) {
    // if (b === undefined) return;
    hello(b);
}
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("some");
        const data = (yield res.json());
    });
}
// 類型保護
function trainAnimal(animal) {
    if (animal.canFly) {
        animal.sing(); //as 語法做到類型保護
    }
    else {
        animal.bark();
    }
}
function trainAnimalSecond(animal) {
    if ("sing" in animal) {
        //in 語法做到類型保護
        animal.sing();
    }
    else {
        animal.bark();
    }
}
function concatParam(first, second) {
    //typeof 語法做到類型保護
    if (typeof first === "string" || typeof second === "string") {
        return `${first}${second}`;
    }
    else {
        return first + second;
    }
}
class CountInstance {
    constructor(count) {
        this.count = count;
    }
}
function getObjectCount(first, second) {
    if (first instanceof CountInstance && second instanceof CountInstance) {
        return first.count + second.count;
    }
}
// ----- class -----------------------------------------------------------------------
// private 私有 (只能在自己class內被調用)
// public 公開 (default 內外調用都可)
// protected 受保護 （允許在類內及繼承子類使用）
// class Live {
//   public rootName: string;
//   private id: string;
//   protected sex: string;
//   show() {
//     return this.id;
//   }
//   constructor(rootName1: string, id1: string, sex1: string) {
//     this.rootName = rootName1;
//     this.id = id1;
//     this.sex = sex1;
//   }
// }
// 可簡化
class Live {
    constructor(rootName1, id, sex) {
        this.rootName1 = rootName1;
        this.id = id;
        this.sex = sex;
    }
    show() {
        return this.id;
    }
}
const live = new Live("1號", "001", "female");
// live.id;
console.log(live); // 還是會印出private屬性
class MyLive extends Live {
    show() {
        return "my" + super.show() + this.sex;
    }
}
const myLive = new MyLive("2號", "001", "female");
console.log(myLive.show());
class Animal {
    constructor(age) {
        this.age = age;
    }
}
class Cat extends Animal {
    constructor(name) {
        super(3); //若有繼承，要先在constructor super過
        this.name = name;
    }
}
const Doi = new Cat("doi");
console.log(Doi);
class Dog {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name + " dog";
    }
}
const shiro = new Dog("shiro");
console.log(shiro.name);
class Only {
    constructor() { }
    static getInstance() {
        //static 直接掛在類上而不是實例
        if (!this.instance) {
            this.instance = new Only();
        }
        return this.instance;
    }
}
const only1 = Only.getInstance();
const only2 = Only.getInstance();
console.log(only1);
console.log(only2);
// 抽象累
class Geom {
    //抽象類無法直接實體化，只能繼承
    constructor(width) { }
    getType() {
        return "gemo";
    }
}
class Circle extends Geom {
    getArea() {
        return 123;
    }
}
class Square {
}
// ts -> .d.ts 翻譯文件 ＠types/superagent -> js
// -------- 泛型 generic ------------------------------------------------
// generic 泛指的類型
function print(data) {
    console.log("data", data); //not sure type
}
print(3); //define when call the function
class Print {
    constructor(d) {
        this.data = d;
    }
}
const p = new Print("bun");
console.log("p", p);
function join(first, second) {
    return `${first}${second}`;
}
join("1", "-2");
class DataManager {
    constructor(data) {
        this.data = data;
    }
    getItem(index) {
        return this.data[index].name;
    }
}
const data = new DataManager([
    {
        name: "dell",
    },
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGdDQUFnQztBQUNoQyxJQUFJLEdBQUcsR0FBVyxLQUFLLENBQUM7QUFDeEIsK0JBQStCO0FBQy9CLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUVkLE1BQU0sR0FBRyxHQUdMO0lBQ0YsSUFBSSxFQUFFLEtBQUs7SUFDWCxHQUFHLEVBQUUsQ0FBQztDQUNQLENBQUM7QUFDRixJQUFJLEdBQUcsR0FBd0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEMsSUFBSSxJQUFJLEdBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLElBQUksSUFBSSxHQUEwQixDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0MsTUFBTSxNQUFNLEdBQXVCLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUVuRCw0RUFBNEU7QUFDNUUsSUFBSSxJQUFJLEdBQThCLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUV4RCxTQUFTO0FBQ1QsSUFBSSxLQUFLLEdBQStCO0lBQ3RDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztDQUNyQixDQUFDO0FBRUYsd0VBQXdFO0FBQ3hFLElBQUssVUFLSjtBQUxELFdBQUssVUFBVTtJQUNiLGlEQUFXLENBQUE7SUFDWCw0Q0FBUyxDQUFBO0lBQ1QscURBQWEsQ0FBQTtJQUNiLGlEQUFPLENBQUE7QUFDVCxDQUFDLEVBTEksVUFBVSxLQUFWLFVBQVUsUUFLZDtBQUVELE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFFbkMsT0FBTyxDQUFD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