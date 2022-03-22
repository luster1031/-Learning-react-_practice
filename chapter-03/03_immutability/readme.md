# 불변성

+ ex01 
    ```js
    function rateColor(color, rating){
        color.rating = rating;
        return color;
    }
    ```

<br>

+ ex02
    ```js
    var rateColor = function (color, rating) {
        return Object.assign({}, color, { rating: rating });
    }
    ```
    + Object.assin : 
        1. 빈 객체를 받고, 
        2. color객체를 빈 객체에 복사
        3. 복사본에 있는 rating 프로퍼티 값을 rating파라미터 값으로 
        

+ ex03
    ```js
    const rateColor = (color, rating) => ({
        ...color,
        rating
    });
    ```
    + 화살표 함수
        + color를 변경불가능한 객체로 취급함
        + `()`필요함

+ ex04
    ```js
    var addColor = function (title, colors) {
        colors.push({ title: title });
        return colors;
    };
    ```
    
    + push
        + 불변성 함수가 아님
        + 원래 배열을 변화 안 시킬려면, `Array.concat`사용해야함
            ```js
            const addColor = (title, array) =>
            array.concat({ title });

            ```
+ ex05
    ```js
    const addColor = (title, list) => [
        ...list,
        { title }
    ];
    ```
    + 원본 list의 원소들을 새로운 배열에 복사
    + title 파라미터로 받은 값을 title 프로퍼티로 하는 객체를 새 배열 뒤에 추가함
    