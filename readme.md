# 러닝 리액트
### 리액트 연습

> 예제 코드 : https://github.com/MoonHighway/learning-react

-----

+ ### [chapter-02 : 문법 ](https://github.com/luster1031/Learning-react_practice/tree/main/chapter-02)(변수 선언, 함수, 객체와 배열)
+ ### [chapter-03 : 자바스크립트를 활용한 **함수형 프로그래밍**](https://github.com/luster1031/Learning-react_practice/tree/main/chapter-03)


# 리액트 작동 원리
### 1. 페이지 설정
+ React : 뷰를 만들기 위한 라이브러리
    + DOM을 갱신해주기 위해 만들어진 라이브러리
+ ReactDOM : UI를 실제로 브라우저에 렌더링할 때 사용하는 라이브러리
### 2. 리액트 엘리먼트
+ 가상 DOM은 리액트 엘리먼트로 이뤄짐
    + 리액트 엘리먼트 : 자바스크립트 객체
    + 가상 DOM를 직접 다루는게 훨씬 빠름
+ 우리가 가상 DOM 을 변경 -> 리액트가 DOM API를 통해 변경사항을 효율적으로 렌더링 해줌
+ 브라우저의 DOM : DOM 엘리먼트로 이뤄짐
+ 리액트 DOM : 리액트 엘리먼트로 이뤄짐
    + 리액트 엘리먼트 : 실제 DOM 엘리먼트가 어떻게 생겨야하는지 기술함
        + 브라우저 DOM을 만드는 방법을 알려줌
```js
React.createElement("h1", {id : "recipe-0"}, "연어")
↓
<h1 id="recipe-0">연어<h1>
```

+ props : DOM 엘리먼트를 만들기 위해 필요한 데이터, 자식 엘리먼트들을 표현함

### 3. ReactDOM
+ 리액트 엘리먼트를 브라우저에 렌더링하는데 필요한 모든 도구가 들어있음
+ ReactDOM.render : 리액트 엘리먼트 + 모든 자식 엘리먼트 렌더링하기 위함
