"use strict";
// // -------- type annotation 類型註解
// let foo: string = "aaa";
// // -------- type inference 類型推斷
// let num = 123;
// const pet: {
//   type: string;
//   age: number;
// } = {
//   type: "dog",
//   age: 3,
// };
// let arr: (string | number)[] = ["a", 3];
// let arr2: string[][] = [["aa", "bb"]];
// let arr3: (string[] | string)[] = [["a"], "a"];
// const objArr: { name: string }[] = [{ name: "a" }];
// // tuple 元祖 ----------------------------------------------------------------
// let list: [number, string, boolean] = [1, "name", true];
// // csv 常用
// let list2: [string, string, number][] = [
//   ["dell", "male", 3],
//   ["Amy", "female", 3],
// ];
// // enum 枚舉 -------------------------------------------------------------
// enum liveStatus {
//   SUCCESS = 0,
//   FAIL = -1,
//   STREAMING = 1,
//   OFFLINE,
// }
// const AStatus = liveStatus.SUCCESS;
// console.log(liveStatus[1]);
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
//   name: "John",
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
// interface Women extends Person {
//   weight: number;
// }
// const Amy: Women = {
//   name: "Amy",
//   age: 20,
//   weight: 50,
// };
// const callPerson = (person: Person): void => {
//   console.log(person.name);
//   console.log(person.age);
// };
// callPerson({ name: "Jan", age: 100 });
// const AA = { name: "AA", age: 20, sex: "female", say: () => "3" };
// callPerson(AA); // 若是傳變數 不會完全比對 interface
// callPerson({ name: "AA", age: 20, sex: "female" }); // 若是直接帶 會深層比對 interface
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
//   name: "Minami",
//   age: 26,
//   teach: () => {
//     console.log("japan");
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
//   console.log("hello");
//   // return 'a'
// }
// function errorEmitter(): never {
//   // 不會跑到最後
//   throw Error;
//   while (true) {}
//   console.log("error");
// }
// function add({ first, second }: { first: string; second: string }) {
//   // 解構型別註解
//   return first + second;
// }
// add({ first: "a", second: "bc" });
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
//   const res = await fetch("some");
//   const data = (await res.json()) as Data;
// }
// interface Bird {
//   canFly: boolean;
//   sing: () => {};
// }
// interface Dog {
//   canFly: boolean;
//   bark: () => {};
// }
// // 類型保護
// function trainAnimal(animal: Bird | Dog) {
//   if (animal.canFly) {
//     (animal as Bird).sing(); //as 語法做到類型保護
//   } else {
//     (animal as Dog).bark();
//   }
// }
// function trainAnimalSecond(animal: Bird | Dog): void {
//   if ("sing" in animal) {
//     //in 語法做到類型保護
//     animal.sing();
//   } else {
//     animal.bark();
//   }
// }
// function concatParam(first: number | string, second: number | string) {
//   //typeof 語法做到類型保護
//   if (typeof first === "string" || typeof second === "string") {
//     return `${first}${second}`;
//   } else {
//     return first + second;
//   }
// }
// class CountInstance {
//   count: number;
//   constructor(count: number) {
//     this.count = count;
//   }
// }
// function getObjectCount(
//   //instanceof 語法做到類型保護
//   first: object | CountInstance,
//   second: object | CountInstance
// ) {
//   if (first instanceof CountInstance && second instanceof CountInstance) {
//     return first.count + second.count;
//   }
// }
// // ----- class -----------------------------------------------------------------------
// //   私有 (只能在自己class內被調用)
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
// const live = new Live("1號", "001", "female");
// // live.id;
// console.log(live); // 還是會印出private屬性
// class MyLive extends Live {
//   show() {
//     return "my" + super.show() + this.sex;
//   }
// }
// const myLive = new MyLive("2號", "001", "female");
// console.log(myLive.show());
// class Animal {
//   constructor(public age: number) {}
// }
// class Cat extends Animal {
//   constructor(public name: string) {
//     super(3); //若有繼承，要先在constructor super過
//   }
// }
// const Doi = new Cat("doi");
// console.log(Doi);
// class Dog {
//   constructor(public _name: string) {}
//   get name() {
//     return this._name + " dog";
//   }
// }
// const shiro = new Dog("shiro");
// console.log(shiro.name);
// class Only {
//   // 單一實例
//   private static instance: Only;
//   private constructor() {}
//   static getInstance() {
//     //static 直接掛在類上而不是實例
//     if (!this.instance) {
//       this.instance = new Only();
//     }
//     return this.instance;
//   }
// }
// const only1 = Only.getInstance();
// const only2 = Only.getInstance();
// console.log(only1);
// console.log(only2);
// // 抽象累
// abstract class Geom {
//   //抽象類無法直接實體化，只能繼承
//   constructor(width: number) {}
//   getType() {
//     return "gemo";
//   }
//   abstract getArea(): number;
// }
// class Circle extends Geom {
//   getArea() {
//     return 123;
//   }
// }
// class Square {
//   // getArea(){
//   // }
// }
// // ts -> .d.ts 翻譯文件 ＠types/superagent -> js
// // -------- 泛型 generic ------------------------------------------------
// // generic 泛指的類型
// function print<T>(data: T) {
//   console.log("data", data); //not sure type
// }
// print<number>(3); //define when call the function
// class Print<T> {
//   data: T;
//   constructor(d: T) {
//     this.data = d;
//   }
// }
// const p = new Print<string>("bun");
// console.log("p", p);
// function join<ABC>(first: ABC, second: ABC) {
//   return `${first}${second}`;
// }
// join<string>("1", "-2");
// interface Item {
//   name: string;
// }
// class DataManager<T extends Item> {
//   constructor(private data: T[]) {}
//   getItem(index: number): string {
//     return this.data[index].name;
//   }
// }
// const data = new DataManager([
//   {
//     name: "dell",
//   },
// ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1DQUFtQztBQUNuQywyQkFBMkI7QUFDM0Isa0NBQWtDO0FBQ2xDLGlCQUFpQjtBQUVqQixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixRQUFRO0FBQ1IsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWixLQUFLO0FBQ0wsMkNBQTJDO0FBQzNDLHlDQUF5QztBQUN6QyxrREFBa0Q7QUFDbEQsc0RBQXNEO0FBRXRELCtFQUErRTtBQUMvRSwyREFBMkQ7QUFFM0QsWUFBWTtBQUNaLDRDQUE0QztBQUM1Qyx5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLEtBQUs7QUFFTCwyRUFBMkU7QUFDM0Usb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYixJQUFJO0FBRUosc0NBQXNDO0FBRXRDLDhCQUE4QjtBQUM5QixnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBRTVCLHFDQUFxQztBQUNyQyw0QkFBNEI7QUFFNUIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixlQUFlO0FBQ2YsS0FBSztBQUVMLHlCQUF5QjtBQUN6QixVQUFVO0FBQ1YsVUFBVTtBQUNWLEtBQUs7QUFFTCxvRkFBb0Y7QUFDcEYsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsSUFBSTtBQUVKLG1CQUFtQjtBQUNuQiw4QkFBOEI7QUFDOUIsSUFBSTtBQUVKLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixLQUFLO0FBRUwsbUNBQW1DO0FBQ25DLDBDQUEwQztBQUMxQyw0RUFBNEU7QUFFNUUscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QiwwQ0FBMEM7QUFDMUMsSUFBSTtB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