# chapter 3
1. 함수형이란
    + 함수를 배열에 넣을 수 있다. 
    + 함수가 함수를 반환할 수 있다.
2. 명령형 프로그래밍과 선언적 프로그래밍
    + 명령형 프로그래밍 : 코드가 원하는 결과를 달성해 나가는 과정에만 관심 둠
        ```js
        for(var i = 0; i<10; i++){
            if(...){}
            else{}
        }
        ```
    + 선언적 프로그래밍 : 접근 방법이 쉽고 추론하기 쉬움
        ```js
        const str = string.replace(//g, "-");
        ```
3. 함수형 프로그래밍의 개념
    1. [불변성](https://github.com/luster1031/Learning-react_practice/tree/main/chapter-03/03_immutability)
    2. [순수성](https://github.com/luster1031/Learning-react_practice/tree/main/chapter-03/04_pure-function)
    3. [데이터 변환](https://github.com/luster1031/Learning-react_practice/tree/main/chapter-03/05_transforming-data)
    4. 고차 함수
    5. 재귀