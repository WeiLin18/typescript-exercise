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
let foo = 'aaa';
let num = 123;
let arr = ['a', 'b'];
let arr2 = [['aa', 'bb']];
let data = [1, 'name', true];
// enum 枚舉 --------------------
var liveStatus;
(function (liveStatus) {
    liveStatus[liveStatus["SUCCESS"] = 0] = "SUCCESS";
    liveStatus[liveStatus["FAIL"] = -1] = "FAIL";
    liveStatus[liveStatus["STREAMING"] = 1] = "STREAMING";
})(liveStatus || (liveStatus = {}));
const AStatus = liveStatus.SUCCESS;
// union --------------------
let aaa;
const obj = {
    name: 'John',
    age: 20,
    // hobby: 'tennis'
};
// function ----------------
function hello(a) {
    return Number(a);
}
// undefined --------------------
function hello2(a, b) {
    if (b === undefined)
        return;
    hello(b);
}
const func = () => {
    return 1;
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('some');
        const data = yield res.json();
    });
}
// ----- class -------
// private 私有
// public 公開
// protected 受保護
class Live {
    constructor(rootName1, id1) {
        this.rootName = rootName1;
        this.id = id1;
    }
}
const live = new Live('1號', '001');
console.log(live);
// -------- 泛型---------
function print(data) {
    console.log('data', data);
}
print(3);
class Print {
    constructor(d) {
        this.data = d;
    }
}
const p = new Print('bun');
console.log('p', p);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUksR0FBRyxHQUFXLEtBQUssQ0FBQTtBQUN2QixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFFZCxJQUFJLEdBQUcsR0FBYSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQTtBQUM3QixJQUFJLElBQUksR0FBZSxDQUFDLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFFcEMsSUFBSSxJQUFJLEdBQThCLENBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQTtBQUVyRCwrQkFBK0I7QUFDL0IsSUFBSyxVQUlKO0FBSkQsV0FBSyxVQUFVO0lBQ2IsaURBQVcsQ0FBQTtJQUNYLDRDQUFTLENBQUE7SUFDVCxxREFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUpJLFVBQVUsS0FBVixVQUFVLFFBSWQ7QUFFRCxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFBO0FBRWxDLDZCQUE2QjtBQUM3QixJQUFJLEdBQW9CLENBQUM7QUFlekIsTUFBTSxHQUFHLEdBQVM7SUFDaEIsSUFBSSxFQUFFLE1BQU07SUFDWixHQUFHLEVBQUUsRUFBRTtJQUNQLGtCQUFrQjtDQUNuQixDQUFBO0FBRUQsNEJBQTRCO0FBQzVCLFNBQVMsS0FBSyxDQUFFLENBQVE7SUFDdEIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUVELGlDQUFpQztBQUNqQyxTQUFTLE1BQU0sQ0FBRSxDQUFRLEVBQUMsQ0FBUztJQUNqQyxJQUFHLENBQUMsS0FBSyxTQUFTO1FBQUUsT0FBTTtJQUMxQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDVixDQUFDO0FBRUQsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFO0lBQ2hCLE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFBO0FBU0QsU0FBZSxTQUFTOztRQUN0QixNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQVUsQ0FBQztJQUN4QyxDQUFDO0NBQUE7QUFFRCxzQkFBc0I7QUFFdEIsYUFBYTtBQUNiLFlBQVk7QUFDWixnQkFBZ0I7QUFFaEIsTUFBTSxJQUFJO0lBSVIsWUFBWSxTQUFnQixFQUFFLEdBQVU7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFbEIsdUJBQXVCO0FBQ3ZCLFNBQVMsS0FBSyxDQUFJLElBQU87SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUE7QUFDMUIsQ0FBQztBQUVELEtBQUssQ0FBUyxDQUFDLENBQUMsQ0FBQTtBQUVoQixNQUFNLEtBQUs7SUFFVCxZQUFZLENBQUc7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtJQUNmLENBQUM7Q0FDRjtBQUVELE1BQU0sQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFTLEtBQUssQ0FBQyxDQUFBO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFBIn0=