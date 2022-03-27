# 데이터 변환
+ 함수형 프로그래밍 : 함수를 사용해 원본을 변경한 복사본을 만들어낸다. 
    + 순수함수 사용하면 → 코드가 덜 명령형 됨, 복잡도 감소함


+ Array.map 
    + 변환 함수를 인자로 받음
        + [map01.html](https://github.com/luster1031/Learning-react_practice/blob/main/chapter-03/05_transforming-data/map01.html)
        + [map02.html](https://github.com/luster1031/Learning-react_practice/blob/main/chapter-03/05_transforming-data/map02.html)
        + [map03.html](https://github.com/luster1031/Learning-react_practice/blob/main/chapter-03/05_transforming-data/map03.html)

+ Array.filter
    + 원본 배열로부터 새로운 배열 만들어냄
        + [filter01.html](https://github.com/luster1031/Learning-react_practice/blob/main/chapter-03/05_transforming-data/filter01.html)

        + [filter02.html](https://github.com/luster1031/Learning-react_practice/blob/main/chapter-03/05_transforming-data/filter02.html)
+ Object.keys
    + 객체를 배열로 바꾸고 싶을 때
        + Array.filter도 가능
        + [keys01.html](https://github.com/luster1031/Learning-react_practice/blob/main/chapter-03/05_transforming-data/keys01.html)

+ Array.reduce
    + 객체-> 수, 문자열, 불린 값, 객체, 함수와 같은 값으로 변환 가능(reduceRight)
        + reduceRight : 배열의 마지막 원소부터 축약 시작
        + [reduce01.html](https://github.com/luster1031/Learning-react_practice/blob/main/chapter-03/05_transforming-data/reduce01.html)
        + 배열 -> 객체로 변환
            + [reduce02.html](https://github.com/luster1031/Learning-react_practice/blob/main/chapter-03/05_transforming-data/reduce02.html)
        + 서로 다른 값이 한 번씩만 들어 있는 배열
            + [reduce03.html](https://github.com/luster1031/Learning-react_practice/blob/main/chapter-03/05_transforming-data/reduce03.html)