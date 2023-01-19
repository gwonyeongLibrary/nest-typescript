// 1. 타입 스크립트
// [선언 키워드][변수명] : [타입]

const numberA: number = 1;
const nickname: string = "gwonyeong";

// var와 let은 호이스팅의 차이

// 2. 타입스크립트는 자바스크립트가 가지는 자료형을 모두 포함함.

const var1: boolean = true; // 참, 거짓을 나타내는 논리값
const var2: null = null; // 유효하지 않음을 나타냄.
const var3: undefined = undefined; // 값이 존재하지 않음.
const var4: number = 1; //-(2^53 -1)과 2^53 -1 사이의 정수, 실수
const var5: bigint = 2n; // Number의 범위를 넘어서는 정수를 안전하게 저장하고 연산. 정수 끝에 n을 추가해야함.
const var6: string = "gwonyeong"; // 문자열, 변경 불가능 함.

// 객체 타입
const people = {
    name: "gwonyeong",
    age: 25,
    hobby: ["hearing music"]
};

// 인터페이스
// '틀'을 정해놓는 것임.

interface User {
    name: string;
    age: number;
}

const member1: User = {
    name: "gwonyeong",
    age: 25
};

// User라는 타입으로 지정해놓고 이 틀에 맞지 않는 타입을 넣으면 에러가 발생함.

// 3. 유니온 타입

function getLength(obj: string | string[]) {
    return obj;
}
// 위의 타입은 stirng과 string[] 타입 중 하나를 가질 수 있음.

// 또한 유니온 타입은 변수가 가질 수 없는 값을 제한할 수도 있음.

type Status = "Ready" | "Waiting";

const status1: Status = "Ready";
// const errStatus2: Status = "ready"; // 에러가 발생

// 열거형 enum
enum StatusEnum {
    READY = "Ready",
    WAITING = "Waitinh"
}

// 4. 제네릭 타입
// 어떠한 타입이든 정의될 수 있지만 호출되는 시점에 타입이 결정됨.

function identity<T>(arg: T): T {
    return arg;
}
// 함수는 기본적으로 함수의 타입과 같은 타입을 반환해주어야함.
// 함수가 number값이라면 return으로 넘겨주는 값도 number타입이여야 하는 것.

identity(10);

// -----------------
// alias type

type Player = {
    name: string;
    age?: number;
};

const jo: Player = {
    name: "gwonyeong"
};

const gwon: Player = {
    name: "jo",
    age: 25
};

// readonly : 말 그대로 읽기 전용
//

type PlayerRead = {
    readonly name: string;
    age?: number;
};
const player: PlayerRead = {
    name: "권영"
};
// player.name = 'hi' 같은 식으로 작성하면 readonly타입이기 때문에 변경할 수 없다고 에러를 발생시킴!

const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push() Error!

// tuple
const playerTup: [string, number, boolean] = ["jo", 1, true]; // 정해진 갯수의 정해진 요소를 가지는 타입

// ----------------------
function add(a: number, b: number) {
    return a + b;
}

const add_arrow = (a: number, b: number) => a + b; //이 함수에 타입을 작성하지 않았음에도 함수의 반환값이 number라고 이야기 해주고 있음.

type Add_type = (a: number, b: number) => number;
// call signature
