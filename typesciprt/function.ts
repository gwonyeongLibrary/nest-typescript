// ----------------------
function add(a: number, b: number) {
    return a + b;
}

const add_arrow = (a: number, b: number) => a + b;
//이 함수에 타입을 작성하지 않았음에도 함수의 반환값이 number라고 이야기 해주고 있음.

type Add_type = (a: number, b: number) => number;
// call signature : 변수, 함수 등에 마우스를 올렸을 때 출력되는 것.

// overloading
// 패키지나 라이브러리는 오버로딩을 많이 시킴.

type AddOverloading = {
    (a: number, b: number): number;
    (a: number, b: string): number;
};

const addOverloadingFunction: AddOverloading = (a, b) => {
    if (typeof b === "string") return a;
    return a + b;
};

type AddOverloading2 = {
    (a: number, b: number): number;
    (a: number, b: number, c: number): number;
};
const addOverloadingFunction2: AddOverloading2 = (a, b, c?: number) => {
    if (c) return a + b + c;
    return a + b;
};

//다형성
// Poly : many, several, much
// gon : 각도
// morphos란?
// form, structure 등과 같은 뜻
// 다형성 : 여러 타입을 받아들임으로써 여러 형태를 가지는 것을 의미함.
type SuperPrint = {
    (arr: number[]): void;
    (arr: boolean[]): void;
};

const superPrint: SuperPrint = (arr) => {
    arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);

// generic : 타입의 placeholder, 타입을 매개변수로

superPrint([1, 2, true, false]); // 이는 동작하지 않음.
//콜 시그니처를 작성할 때, 들어올 확실한 타입을 모를 때 generic을 사용
type SuperPrintGeneric = {
    <T>( // 제네릭 타입의 이름은 임의로, 보통은 T를 많이 씀.
        arr: T[]
    ): void;
};

const superPrintGeneric: SuperPrintGeneric = (arr) => {
    arr.forEach((element) => {
        console.log(element);
    });
};
superPrintGeneric([1, 2, true, false]);

// generic은 타입스크립트를 읽어보고 콜 시그니처를 띄운다.
// generic은 여러개를 만들 수 있음.
type genericExample = <T, M>(a: T, b: M) => T;

// Conclusions

function superPrintFunction<T>(a: T[]) {
    return a[0];
}

type PlayerEx<E> = {
    name: string;
    extraInfo: E;
};

type NicoPlayer = PlayerEx<{ favFood: string }>;

const nick: NicoPlayer = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
};
