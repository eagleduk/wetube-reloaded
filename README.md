1. 개발환경
   1. express
   1. @babel/core
   1. @babel/preset-env
   1. @babel/node
      - permission 에러가 발생하여 관리자 권한으로 설치 진행.
   1. nodemon
      - permission 에러가 발생하여 관리자 권한으로 설치 진행.
   1. morgan
   1. pug
      - extends / include / block
      - variable
      - conditionals
      - iteration
      - mixins
   1. mongoose
      - model 을 정의하기 전에, custom function 을 만들어 사용할 수 있다.
   1. bcrypt
      - password 를 암호화(hash) 및 비교할 수 있다.
   1. express-session
      - 사용자의 정보를 저장 cookie 에 저장할 수 있다.
   1. connect-mongo
      - session 을 mongoDB 에 저장할 수 있게 해준다.
   1. dotenv
      - 환경설정 파일을 읽어서 process.env 에 저장해 준다.
      - 최상위 js 에서 import 를 해주어야 하위 모든 곳에서 사용가능하다. ( 무엇보다 제일 먼저 실행이 되어야 한다)
   1. node-fetch
      - nodejs 에서 fetch 명령어를 가능하게 해준다.

### \* route

- Browser 가 Server 에서 가려고 하는 곳 (목적지)
- Route(URL) 주소를 맵핑하는데 정규식도 포함할 수 있다.
  - "/:id(\\d+)" => 파라메터 명이 id 인 숫자만으로 이루어진 변수

### \* request

- Browser 가 route 에 대하여 Server 에게 요청을 하는 것

### \* response

- Server 에서 route 에 대하여 Browser 의 request 에 대하여 응답을 하는 것

### \* middleware

- Browser 에서 request 가 발생하였을 때 response 하기 전에 request 를 가진 채 거쳐 가는 곳 (경유지)
- 모든 middleware 가 response 가 될 수 있고, 모든 response 가 middleware 가 될 수 있다.
- 모든 response 에 대하여 middleware 라고 정의 할 수 있다.
