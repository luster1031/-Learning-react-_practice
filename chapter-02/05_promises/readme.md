# 비동기 자바스크립트 - promises
## 1. fetch

+ 대기중인 promise는 데이터가 도착하기 전의 상태를 표현함
+ `.then()` 를 대기 중인 프라미스에 연쇄 호출해야함
    + 콜백 함수를 인수로 받음
        + 바로 앞에 있는 연산(프라미스)이 성공하면 콜백이 호출 됨

<br>

+ `fetch()` : 데이터 받아 옴
+ `then()` : 데이터가 도착하면 그 데이터를 가지고 다른 일을 함
    + 프라미스가 정상적으로 완료되면 콜백 함수를 한 번만 호출함
        + 이 콜백함수가 반환하는 값은 그 다음에 오는 then 함수의 콜백에 전달되는 인자가 됨
            + then을 연쇄적으로 호출할 수 있음

    ```js
    fetch("https://api.randomuser.me/?nat=US&results=10")
        .then(response => response.json())
        .then(members => console.log(members))
        .catch(err => console.error(err))
    ```

## 2. async/await
+ 프라미스 다음에 있는 코드를 실행하기 전에 프라미스가 끝날 때까지 기다리라고 명령할 수 있음
    + then 함수를 연쇄 호출해 프라미스의 결과를 기다리는 대신
    ```js
    const getFakeMembers = async() => {
        try{
            let res = await fetch(`https://api.randomuser.me/?nat=US&results=1`);
            const {results} = res.json();
            console.log(results);
        }catch(error{
            console.log(error);
        }
    };

    getFakeMembers();
    ```