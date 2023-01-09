// 데코레이터

// 횡단 관심사를 분리하여 관점 지향 프로그래밍을 적용한 코드를 작성할 수 있음.
// 클래스, 메서드, 접근자, 프로퍼티, 매개변수에 적용 가능.
// 각 요소에 @로 시작하는 데코레이터를 선언하면 데코레이터로 구현된 코드를 함께 실행함.

function deco(target: any, property: string) {
    console.log("deco");
}

class TestClass {
    @deco
    test() {
        console.log("function");
    }
}

const test = new TestClass();
console.log(test.test());
