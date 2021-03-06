// -------- type annotation 類型註解
let foo: string = "aaa";
// -------- type inference 類型推斷
let num = 123;

const pet: {
  type: string;
  age: number;
} = {
  type: "dog",
  age: 3,
};
let arr: (string | number)[] = ["a", 3];
let arr2: string[][] = [["aa", "bb"]];
let arr3: (string[] | string)[] = [["a"], "a"];
const objArr: { name: string }[] = [{ name: "a" }];

// any vs unknown vs never ----------------------------------------------------------

// any 等於沒在檢查
let valueAny: any;

valueAny.foo.bar; // OK
valueAny.trim(); // OK
valueAny(); // OK

// unknown 變換前檢查
let valueUnknown: unknown;

valueUnknown = 42; // OK
valueUnknown = undefined; // OK
let value1: unknown = valueUnknown; // OK
let value2: any = valueUnknown; // OK
let value3: number = valueUnknown; // Error
value.foo.bar; // Error
value.trim(); // Error
value(); // Error

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 利用 never 类型的特性来实现全面性检查
type Foo = string | number;
function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo;
  }
}
// tuple 元祖 ----------------------------------------------------------------
let list: [number, string, boolean] = [1, "name", true];

// csv 常用
let list2: [string, string, number][] = [
  ["dell", "male", 3],
  ["Amy", "female", 3],
];

// enum 枚舉 -------------------------------------------------------------
enum liveStatus {
  SUCCESS = 0,
  FAIL = -1,
  STREAMING = 1,
  OFFLINE,
}

const AStatus = liveStatus.SUCCESS;

console.log(liveStatus[1]);
// union --------------------
let aaa: number | string;

// type --------------------- 不可擴充
type A = number | string;

type Point = {
  x: number;
  y: number;
};

const point: Point = {
  x: 1,
  y: 2,
};

// interface ---------------------------------------------------------------- 可擴充
interface User {
  name: string;
  age: number;
}

interface User {
  hobby: string; // 可後面補家屬性
}

const obj: User = {
  name: "John",
  age: 20,
  // hobby: 'tennis'
};

const rawData = '{"name":"aa"}';
// const newData = JSON.parse(rawData);
const newData: Person = JSON.parse(rawData); // TS 無法判斷 parse 的型別，必須加類型註解

interface Person {
  name: string;
  readonly age: number;
  color?: string;
  say?: () => string;
  // [propName: string]: any; //可擴充新的屬性
}

let ro: ReadonlyArray<number> = [1, 2, 3];
ro[0] = 12; // error!
ro.push(5); // error!

interface Women extends Person {
  weight: number;
}

const Amy: Women = {
  name: "Amy",
  age: 20,
  weight: 50,
};

const callPerson = (person: Person): void => {
  console.log(person.name);
  console.log(person.age);
};

callPerson({ name: "Jan", age: 100 });
const AA = { name: "AA", age: 20, sex: "female", say: () => "3" };
callPerson(AA); // 若是傳變數 不會完全比對 interface
callPerson({ name: "AA", age: 20, sex: "female" }); // 若是直接帶 會深層比對 interface

const getPerson = (baby: { age: number }, text: string): Person => {
  return { ...baby, name: text };
};

interface Teacher extends Person {
  teach: () => void;
}

class User implements Person {
  name;
  age;
  constructor(name1: string) {
    this.name = name1;
    this.age = 100;
  }
}

const Minami: Teacher = {
  name: "Minami",
  age: 26,
  teach: () => {
    console.log("japan");
  },
};

interface social {
  (word: string): void;
}

const sayHi: social = (hello) => {
  console.log(hello);
};

// function ----------------------------------------------------------------
const get3: () => number = () => 3;
const get33 = (): number => 33;

function tsDemo(data: { x: number; y: number }): number {
  return data.x + data.y;
}
const tsDemo2 = (data: { x: number; y: number }): number => data.x + data.y;
const tsDemo22 = (data: { x: number; y: number }) => data.x + data.y;
const tsDemo3: (data: { x: number; y: number }) => number = (data) =>
  data.x + data.y;

tsDemo({ x: 1, y: 2 });

const toNum = (str: string): number => parseInt(str);
const toNum2: (str: string) => number = (str) => 3;

function sayHello(): void {
  console.log("hello");
  // return 'a'
}

function errorEmitter(): never {
  // 不會跑到最後
  throw Error;
  while (true) {}
  console.log("error");
}

function add({ first, second }: { first: string; second: string }) {
  // 解構型別註解
  return first + second;
}

add({ first: "a", second: "bc" });

// undefined --------------------------------------------------------------------
function hello(name: string) {
  console.log(name);
}

function hello2(a: string, b?: string) {
  // if (b === undefined) return;
  hello(b);
}

// assert unknown --------------------------------------------------------------------

type Data = {
  userId: string;
  age: number;
};

async function fetchData() {
  const res = await fetch("some");
  const data = (await res.json()) as Data;
}

interface Bird {
  canFly: boolean;
  sing: () => {};
}
interface Dog {
  canFly: boolean;
  bark: () => {};
}

// 類型保護
function trainAnimal(animal: Bird | Dog) {
  if (animal.canFly) {
    (animal as Bird).sing(); //as 語法做到類型保護
  } else {
    (animal as Dog).bark();
  }
}

function trainAnimalSecond(animal: Bird | Dog): void {
  if ("sing" in animal) {
    //in 語法做到類型保護
    animal.sing();
  } else {
    animal.bark();
  }
}

function concatParam(first: number | string, second: number | string) {
  //typeof 語法做到類型保護
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  } else {
    return first + second;
  }
}

class CountInstance {
  count: number;
  constructor(count: number) {
    this.count = count;
  }
}

function getObjectCount(
  //instanceof 語法做到類型保護
  first: object | CountInstance,
  second: object | CountInstance
) {
  if (first instanceof CountInstance && second instanceof CountInstance) {
    return first.count + second.count;
  }
}

const EVALUATION_FACTOR = Math.PI;
function evaluatePrice(vehicle: Vehicle) {
  return vehicle.capacity * EVALUATION_FACTOR;
}

const myTruck: Truck = { vType: "truck", capacity: 9.5 };
evaluatePrice(myTruck);
// ----- class -----------------------------------------------------------------------

//   私有 (只能在自己class內被調用)
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

class Coffee {
  favor: string;
  price: number;
  private secretMethod: string;
  constructor(favor: string) {
    this.price = 50;
    this.favor = favor;
    this.secretMethod = "some secret method";
  }
}

const latte = new Coffee("latte");

console.log(latte.price); // 50;
console.log(latte.secretMethod); // error
class Live {
  constructor(
    public rootName1: string,
    private id: string,
    protected sex: string
  ) {}
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
  constructor(public age: number) {}
}

class Cat extends Animal {
  constructor(public name: string) {
    super(3); //若有繼承，要先在constructor super過
  }
}
const Doi = new Cat("doi");
console.log(Doi);

class Dog {
  constructor(public _name: string) {}
  get name() {
    return this._name + " dog";
  }
}

const shiro = new Dog("shiro");
console.log(shiro.name);

class Only {
  // 單一實例
  private static instance: Only;
  private constructor() {}

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
abstract class Geom {
  //抽象類無法直接實體化，只能繼承
  constructor(width: number) {}
  getType() {
    return "gemo";
  }
  abstract getArea(): number;
}
class Circle extends Geom {
  getArea() {
    return 123;
  }
}

class Square {
  // getArea(){
  // }
}

// ts -> .d.ts 翻譯文件 ＠types/superagent -> js

// -------- 泛型 generic ------------------------------------------------
// generic 泛指的類型
// T（Type）：表示一个 TypeScript 类型
// K（Key）：表示对象中的键类型
// V（Value）：表示对象中的值类型
// E（Element）：表示元素类型

function print<T>(data: T) {
  console.log("data", data); //not sure type
}

print<number>(3); //define when call the function

class Print<T> {
  data: T;
  constructor(d: T) {
    this.data = d;
  }
}

const p = new Print<string>("bun");
console.log("p", p);

function join<ABC>(first: ABC, second: ABC) {
  return `${first}${second}`;
}
join<string>("1", "-2");

interface Item {
  name: string;
}
class DataManager<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name;
  }
}

const data = new DataManager([
  {
    name: "dell",
  },
]);

interface Person3 {
  name: string;
  gender: string;
}
class Teacher {
  constructor(private info: Person3) {}
  getInfo<T extends keyof Person3>(key: T): Person3[T] {
    return this.info[key];
  }
}
const sakura = new Teacher({
  name: "sa",
  gender: "girl",
});

const test = sakura.getInfo("name");

// -------------- 鴨子類型（duck typing): 面向街口編程 而不是面向對象編程

// typeof in typescript
const family = {
  count: 5,
  haveHouse: true,
};

type Family = typeof family;

type ParamType<T> = T extends (...args: infer P) => any ? P : T;

// extend & infer ----------------------------------------------------------------
interface Name {
  firstName: string;
  lastName: string;
}

// 使用 T extends Name，限制 T 一定要是 Name 型別的子集合
function printName<T extends Name>(person: T) {
  return `${person.firstName} ${person.lastName}`;
}

type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : any;

type func = () => number;
type variable = string;
type funcReturnType = ReturnType2<func>; // funcReturnType 类型为 number
type varReturnType = ReturnType2<variable>; // varReturnType 类型为 string

// before infer
type Ids = number[];
type Names = string[];

type Unpacked<T> = T extends Names ? string : T extends Ids ? number : T;

type idType = Unpacked<Ids>; // idType 类型为 number
type nameType = Unpacked<Names>; // nameType 类型为string

// after infer
type Unpacked2<T> = T extends (infer R)[] ? R : T;

type idType2 = Unpacked<Ids>; // idType 类型为 number
type nameType2 = Unpacked<Names>; // nameType 类型为string

// 取 promise<xxx> 中 xxx 類型
type Response3 = Promise<number[]>;
type Unpacked3<T> = T extends Promise<infer R> ? R : T;

type resType = Unpacked3<Response3>; // resType 类型为number[]

// Partial 将某个类型里的属性全部变为可选项

interface Todo {
  title: string;
  description: string;
}

// Partial<Todo> 相當於
// {
//   title?: string | undefined;
//   description?: string | undefined;
// }

const myTodo: Partial<Todo> = {
  title: "a",
  age: 3,
};

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

console.log(todo2); //{title: "organize desk", description: "throw out trash"}
