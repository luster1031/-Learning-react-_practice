# 합성
+ 작은 함수를 한데 합칠 때
+ 각 함수를 연쇄 호출 or 병렬로 호출 or 여러 작은 함수 더해서 큰 함수로 만들 때

+ replace
    + 점 표기법을 사용해서 문자열 반환 가능
    + [ex01.html](https://github.com/luster1031/Learning-react_practice/blob/main/chapter-03/08_composition/ex01.html)

+ 고차 함수
    ```js
    const compose = (...fns) => 
        (arg) =>   
            fns.reduce(
                (composed, f) => f(composed),
                arg //  함수에 전달하는 초깃값
            );
    ```
    + [ex03.html](https://github.com/luster1031/Learning-react_practice/blob/main/chapter-03/08_composition/ex03.html)


# 하나로 합치기
+ 동작하는 시계 만들기
### [division_function_clock.js](https://github.com/luster1031/Learning-react_practice/blob/main/chapter-03/08_composition/division_function_clock.js)
