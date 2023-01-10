// 데코레이터

// 횡단 관심사를 분리하여 관점 지향 프로그래밍을 적용한 코드를 작성할 수 있음.
// 클래스, 메서드, 접근자, 프로퍼티, 매개변수에 적용 가능.
// 각 요소에 @로 시작하는 데코레이터를 선언하면 데코레이터로 구현된 코드를 함께 실행함.

// 1. 메소드 데코레이터
//  PropertyDescriptor는 객체 속성의 특성을 기술하는 객체로서 enumerable 외에도 여러가지 속성을 가지고 있음.
// enumerable가 true이면 이 속성을 열거형이라는 뜻.
/* 
interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(v: any): void;

}*/
function deco(target: any, property: string, desc: PropertyDescriptor) {
    console.log(target);
    console.log(property);
    console.log(desc);
}

class TestClass {
    @deco
    test() {
        console.log("function");
    }
}

const test = new TestClass();
console.log(test.test());

// 2. 클래스 데코레이터
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    // ...1
    return class extends constructor {
        reportingURL = "http://example.com";
    };
}

@reportableClassDecorator
class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

const bug = new BugReport("Needs dark mode");
console.log(bug);

// ...1 : 클래스 데코레이터 팩토리, 생성자 타입(new (...args:any[]) : {})
// new 키워드와 함께 어떠한 형식의 인수들도 받을 수 있는 타입)을 상속받는 제네릭 타입 T를 가지는 생성자를 팩토리 메소드 인수로 전달하는 것.
