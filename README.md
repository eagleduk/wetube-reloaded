1. 개발환경
   1. express
   1. @babel/core
   1. @babel/preset-env
   1. @babel/node
      - permission 에러가 발생하여 관리자 권한으로 설치 진행.
   1. nodemon
      - permission 에러가 발생하여 관리자 권한으로 설치 진행.
   1. morgan

### \* route

- Browser 가 Server 에서 가려고 하는 곳 (목적지)

### \* request

- Browser 가 route 에 대하여 Server 에게 요청을 하는 것

### \* response

- Server 에서 route 에 대하여 Browser 의 request 에 대하여 응답을 하는 것

### \* middleware

- Browser 에서 request 가 발생하였을 때 response 하기 전에 request 를 가진 채 거쳐 가는 곳 (경유지)
- 모든 middleware 가 response 가 될 수 있고, 모든 response 가 middleware 가 될 수 있다.
- 모든 response 에 대하여 middleware 라고 정의 할 수 있다.