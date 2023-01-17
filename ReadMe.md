# why not JS?

안정성!

-   타입 안정성
    -   타입 안정성 덕에 좋은 개발자 경험
    -   타입 안정성 덕에 생산성이 늘고 버그가 줄어들음.

개발자가 멍청한 코드를 작성해도 최대한 이해해줌!

JS는 에러를 보여주지 않으려 노력한다.

-   [1,2,3,4] 같은 배열이 있고 이 배열에 false를 더한다면?
    -   '1,2,3,4false'라는 원하지 않은 값이 출력됨.
-   사실 더하는 것 자체가 말이 안되는 것인데!

```
function divide(a,b){
    return a/b
}

divide('xxx')
// NaN
```

매개변수를 하나만 보내고 숫자가 아닌 값을 보냈는데도 JS는 그냥 실행하고있음. <br>에러조차 띄우지 않는 것임!

컴퓨터에게 a와 b가 숫자여야 한다고 알리지 않고있으며 JS는 그냥 코드를 실행시킬 뿐.
