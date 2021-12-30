// // -------- type annotation 類型註解
// let foo: string = 'aaa';
// // -------- type inference 類型推斷
// let num = 123;

// const pet: {
//   type: string;
//   age: number;
// } = {
//   type: 'dog',
//   age: 3,
// };
// let arr: (string | number)[] = ['a', 3];
// let arr2: string[][] = [['aa', 'bb']];
// let arr3: (string[] | string)[] = [['a'], 'a'];
// const objArr: { name: string }[] = [{ name: 'a' }];

// // tuple 元祖 ----------------------------------------------------------------
// let list: [number, string, boolean] = [1, 'name', true];

// // csv 常用
// let list2: [string, string, number][] = [
//   ['dell', 'male', 3],
//   ['Amy', 'female', 3],
// ];

// // enum 枚舉 -------------------------------------------------------------
// enum liveStatus {
//   SUCCESS = 0,
//   FAIL = -1,
//   STREAMING = 1,
// }

// const AStatus = liveStatus.SUCCESS;

// // union --------------------
// let aaa: number | string;

// // type --------------------- 不可擴充
// type A = number | string;

// type Point = {
//   x: number;
//   y: number;
// };

// const point: Point = {
//   x: 1,
//   y: 2,
// };

// // interface ---------------------------------------------------------------- 可擴充
// interface User {
//   name: string;
//   age: number;
// }

// interface User {
//   hobby: string; // 可後面補家屬性
// }

// const obj: User = {
//   name: 'John',
//   age: 20,
//   // hobby: 'tennis'
// };

// const rawData = '{"name":"aa"}';
// // const newData = JSON.parse(rawData);
// const newData: Person = JSON.parse(rawData); // TS 無法判斷 parse 的型別，必須加類型註解

// interface Person {
//   name: string;
//   readonly age: number;
//   color?: string;
//   say?: () => string;
//   // [propName: string]: any; //可擴充新的屬性
// }

// const callPerson = (person: Person): void => {
//   console.log(person.name);
//   console.log(person.age);
// };

// callPerson({ name: 'Jan', age: 100 });
// const AA = { name: 'AA', age: 20, sex: 'female', say: () => '3' };
// callPerson(AA); // 若是傳變數 不會完全比對 interface
// callPerson({ name: 'AA', age: 20, sex: 'female' }); // 若是直接帶 會深層比對 interface

// const getPerson = (baby: { age: number }, text: string): Person => {
//   return { ...baby, name: text };
// };

// interface Teacher extends Person {
//   teach: () => void;
// }

// class User implements Person {
//   name;
//   age;
//   constructor(name1: string) {
//     this.name = name1;
//     this.age = 100;
//   }
// }

// const Minami: Teacher = {
//   name: 'Minami',
//   age: 26,
//   teach: () => {
//     console.log('japan');
//   },
// };

// interface social {
//   (word: string): void;
// }

// const sayHi: social = (hello) => {
//   console.log(hello);
// };

// // function ----------------------------------------------------------------
// const get3: () => number = () => 3;
// const get33 = (): number => 33;

// function tsDemo(data: { x: number; y: number }): number {
//   return data.x + data.y;
// }
// const tsDemo2 = (data: { x: number; y: number }): number => data.x + data.y;
// const tsDemo22 = (data: { x: number; y: number }) => data.x + data.y;
// const tsDemo3: (data: { x: number; y: number }) => number = (data) =>
//   data.x + data.y;

// tsDemo({ x: 1, y: 2 });

// const toNum = (str: string): number => parseInt(str);
// const toNum2: (str: string) => number = (str) => 3;

// function sayHello(): void {
//   console.log('hello');
//   // return 'a'
// }

// function errorEmitter(): never {
//   // 不會跑到最後
//   throw Error;
//   while (true) {}
//   console.log('error');
// }

// function add({ first, second }: { first: string; second: string }) {
//   // 解構型別註解
//   return first + second;
// }

// add({ first: 'a', second: 'bc' });

// // undefined --------------------------------------------------------------------
// function hello(name: string) {
//   console.log(name);
// }

// function hello2(a: string, b?: string) {
//   // if (b === undefined) return;
//   hello(b);
// }

// // assert unknown --------------------------------------------------------------------

// type Data = {
//   userId: string;
//   age: number;
// };

// async function fetchData() {
//   const res = await fetch('some');
//   const data = (await res.json()) as Data;
// }

// // ----- class -----------------------------------------------------------------------

// // private 私有 (只能在自己class內被調用)
// // public 公開 (default 內外調用都可)
// // protected 受保護 （允許在類內及繼承子類使用）

// // class Live {
// //   public rootName: string;
// //   private id: string;
// //   protected sex: string;
// //   show() {
// //     return this.id;
// //   }

// //   constructor(rootName1: string, id1: string, sex1: string) {
// //     this.rootName = rootName1;
// //     this.id = id1;
// //     this.sex = sex1;
// //   }
// // }

// // 可簡化

// class Live {
//   constructor(
//     public rootName1: string,
//     private id: string,
//     protected sex: string
//   ) {}
//   show() {
//     return this.id;
//   }
// }

// const live = new Live('1號', '001', 'female');
// // live.id;
// console.log(live); // 還是會印出private屬性

// class MyLive extends Live {
//   show() {
//     return 'my' + super.show() + this.sex;
//   }
// }
// const myLive = new MyLive('2號', '001', 'female');
// console.log(myLive.show());

// class Animal {
//   constructor(public age: number) {}
// }

// class Cat extends Animal {
//   constructor(public name: string) {
//     super(3); //若有繼承，要先在constructor super過
//   }
// }
// const Doi = new Cat('doi');
// console.log(Doi);

// class Dog {
//   constructor(public _name: string) {}
//   get name() {
//     return this._name + ' dog';
//   }
// }

// const shiro = new Dog('shiro');
// console.log(shiro.name);

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
// -------- 泛型-------------------------------------------------------------------------
// function print<T>(data: T) {
//   console.log('data', data);
// }

// print<number>(3);

// class Print<T> {
//   data: T;
//   constructor(d: T) {
//     this.data = d;
//   }
// }

// const p = new Print<string>('bun');
// console.log('p', p);