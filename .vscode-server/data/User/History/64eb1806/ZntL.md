# docker 

<img src="https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png" width="100%" height="100%"/>

### 컨테이너?
1. sw는 os와 라이브러리에 의존성을 띈다.  
컨테이너는 개별 sw의 실행에 필요한 실행환경을 독립적으로 운용할 수 있도록 도와주는 운영체제 수준의 격리 기술이다.  
2. 실제 구동 환경으로 부터 추상화 할 수 있는 논리 패키징 메커니즘을 제공   
3. 하나의 Host OS 위에서 마치 각각의 프로그램처럼 관리,실행  
4. 불필요한 OS를 만드는 작업 및 Infra를 독립적으로 나눌 필요가 없어 확장성이 좋다.  

## docker?  
- 컨테이너 기반의 오픈 소스 가상화 플랫폼 중 하나  
- docker 사용 -> Infra에서 app분리하여 컨테이너로 추상화시켜 소프트웨어를 - 빠르게 제공 가능, 이는 주어진 하나의 host OS 안에서 여러 컨테이너를 동시에 실행 가능  
- !! 어떤 프로그램도 컨테이너로 추상화하여 어떤 컴퓨터 환경에서도 실행 가능  

>docker는 **environment disparity의 문제**를 해결해줌!  
(다른 머신에도 같은 환경을 구현할 수 있도록!)  
>- **하나의 서버**에서 **각기 다른 환경의 컨테이너**를 설정할 수 있게 해줌  
(이 컨테이너 들은 분리, 독립)  
>1. 원하는 개발 환경을 파일에 저장하면, docker는 내가 원하는 어떤 머신이든 해당 환경을 시뮬레이션 해줌.  
>2. 이러한 환경은 독립적으로 존재, 원하는 무슨 환경이든 모듈식으로 조정 가능  
모든 독립적 운용은 docker하나로 가능(파이썬 서버, 자바 서버를 따로 구매할 필요X)


### docker 데몬  
docker Api 요청 수신, 이미지, 컨테이너, 네트워크와 같은 **도커 객체 및 도커 서비스 관리**  
(docker는 클라이언트-서버 구조, **docker 클라이언트와 docker 데몬이** RestApi를 사용하여 **통신**)  

### Docker 클라이언트  
Docker 사용자가 Docker와 **상호작용하기 위한 방법**  
도커 명령어를 통해 Docker 데몬과 통신  

### Docker 레지스트리  
**Docker 이미지를 저장**  
Docker hub라는 공용 레지스토리와 개인 private한 레지스토리가 존재, 일반적으로 공용에서 실행  
```
docker pull, docker run // 사용하면  필수이미지 가져온다.  
docker push //  레지스트리에 저장  
```
### docker 객체  
**도커 이미지** : 도커 이미지는 컨테이너 **실행에 필요한** 파일, 설정값 등을 포함(용량큼)   
**컨테이너** : 컨테이너는 도커 이미지의 **실행 가능**한 인스턴스  
```
docker run //이를 통해 실행 컨테이너 실행이 가능하다.
```  
### 도커 이미지  
컨테이너에 따른 상태값이 변하지 않으므로 라이브러리의 버전이 바뀌어도 의존성 문제 발생 XXX  
컨테이너는 이미지를 실행한 상태, 변하는 값은 컨테이너에 저장(이미지는 변하지 않는다.)  
같은 이미지에서 여러 개의 컨테이너 생성 가능  

### Docker Layer  
도커의 이미가 변할 때마다 새롭게 다운 받는다면 이미지의 용량이 큼->비효율적  
해결책 : layer 개념


>참고  
[노마드코더-docker?](https://www.youtube.com/watch?v=chnCcGCTyBg)  
[컨테이너 및 도커 개념정리](https://velog.io/@geunwoobaek/%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88-%EB%B0%8F-%EB%8F%84%EC%BB%A4-%EA%B0%9C%EB%85%90%EC%A0%95%EB%A6%AC#:~:text=%EB%8F%84%EC%BB%A4%EB%8A%94%20%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88%20%EA%B8%B0%EB%B0%98%20%EC%9D%98%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%20%EA%B0%80%EC%83%81%ED%99%94%20%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%A4%91%20%ED%95%98%EB%82%98%EC%9D%B4%EB%8B%A4.,%ED%98%B8%EC%8A%A4%ED%8A%B8OS%EC%95%88%EC%97%90%EC%84%9C%20%EC%97%AC%EB%9F%AC%20%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88%EB%A5%BC%20%EB%8F%99%EC%8B%9C%EC%97%90%20%EC%8B%A4%ED%96%89%20%ED%95%A0%20%EC%88%98%20%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.)
[Docker란?-aws](https://aws.amazon.com/ko/docker/)  
[Docker란?-docker공식 문서](https://www.docker.com/why-docker/)  
[Docker 사용 이유-ibm](https://www.ibm.com/kr-ko/topics/docker)  

>목표  
토요일 : docker개념 이해 + docker 명령어  
일요일 : 라우팅 본격적으로 해보기  
