# Micro Service Architectur Practice

## Run

```bash
npm install
npm run start:dev user-service # 3001 port
npm run start:dev test-service # 3002 port
npm run start:dev api-gateway # 3000 port
```

## Fetch Test (GET)

> http://localhost:3000/user/1 <br />
> http://localhost:3000/test

## Description

Nest.js에서 제공하는 MicroService api를 사용하여 간단한 MSA 구현

- 총 3개의 마이크로 앱으로 구성
- api-gateway가 모든 요청을 받아 user-service, test-service 앱에 네트워크 요청
- Redis 방식으로 변경하여도 동일하게 구성 가능

## Reference (Official Docs)

> EN: https://docs.nestjs.com/microservices/basics <br />
> KR: https://nestjs.burt.pe.kr/microservices/basics <br />
> (현재, KR링크로 접속하면 404에러 발생해서 nestjs.burt.pe.kr로 접속 후 메뉴 찾아야함)
