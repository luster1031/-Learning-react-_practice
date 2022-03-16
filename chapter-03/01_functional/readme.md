1. ex01 : 함수를 배열에 넣을 수 있음

    ![image](https://user-images.githubusercontent.com/61460836/158609639-3ebda325-5061-4dba-8336-b61ddb21aacf.png)

2. ex02 : 함수가 함수를 반환할 수 있음
    ```js
    const createScream = function(logger){
            console.log(logger);    
            
            return function(message2){
                console.log(message2);
                logger(message2.toUpperCase() + "!!!!");
            };
        };

        const scream = createScream(message1 => console.log(message1));

        scream('함수가 함수를 반환할 수 있음');
        scream('createScream은 함수를 반환함');
        scream('scream은 createScream이 반환한 함수를 가리킴');
    ```
    ![image](https://user-images.githubusercontent.com/61460836/158612052-d04e7630-64d7-4d37-8d2e-b9701b23b07c.png)
    
    + logger가 `message => console.log(message)`임
    + scream이 createScream의 반환값(return)을 가르키기 때문에, `scream('매개변수')`로 넣으면 createScream의 return function의 `message2`가 `'매개변수'`가 된다. 
