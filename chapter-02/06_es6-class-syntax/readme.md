# 클래스
+ 자바스크립트는 **프로토타입을 사용한 상속**을 사용함
+ new를 사용해 호출해야하는 Vacation 생성자
    ```js
    function Vacation(destination, length){
        this.destination = destination;
        this.length = length;
    }

    Vacation.prototype.print=function(){    //  메서드
        console.log(this.destination + " will take "+ this.length + " days");
    }

    var maui = new Vacation("Maui", 7); //  print메서드 상속받음

    maui.print();
    ```
    + new를 이용한 것

+ class
    ```js
    class Vacation {
        constructor(destination, length) {
            this.destination = destination
            this.length = length
        }
        print() {
            console.log(`${this.destination} will take ${this.length} days.`);
        }
    }

    const trip = new Vacation("Santiago, Chile", 9);

    trip.print();
    ```
    + 새로운 객체 생성하기 위해 원하는 만큼 new 호출가능
    + 클래스 확장 가능

# ES6 모듈
+ 모듈 : 다른 자바스크립트 파일에서 이름 충돌이 없이 쉽게 불러서 활용할 수 있는 재사용 가능한 코드 조각
+ 자바스크립트 -> 모듈을 한 모듈당 하나씩 별도의 파일로 저장함
+ 모듈 외부에 export 
    1. 한 모듈에서 여러 자바스크립트 객체를 외부에 노출
    2. 한 모듈에 하나의 자바스크립트 객체를 노출
