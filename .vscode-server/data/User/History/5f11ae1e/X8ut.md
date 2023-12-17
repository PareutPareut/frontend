docker container -> application 런타임 환경에 필요한 모든 것을 어떤 pc에서도 동일하게 구동 가능  

container vs VM  
VM : 한 운영체제 위에서 동일한 어플리케이션 고립된 다른 환경에서 구동하기 위해서 필요  
각각의 운영체제를 포함하고 있기 때문에(맥 위에서 윈도우, 리눅스)-> 굉장히 무겁고 시작하는데 오래걸림  

경량화된 컨셉이 container -> 개별적인 container로 고립된 환경에서 구동, 운영체제 포함하지 않고 container engine(도커)이 설치된 host OS를 이용  
(운영체제와 커널에 대해 알아야 이해 가능.. 나중에 공부하기)  

# docker?
컨테이너를 만들고 배포하고 구동한다!  
container 만들기 위해서 -> docker파일을 만들고 이미지를 만들어 container구동!  

1. docker file : container레시피  
어플리케이션 구동하기위해 꼭 필요한 파일? 외부 dependencies, 환경 변수, 어떻게 구동해야하는지 script  

2. docker file -> image  
이미지 안에 어플리케이션 실행에 필요한 모든 setting이 포함되고 있음, 실행되고 있는 어플리케이션의 상태를 snapshot!불변 불가!  

3.container  
이미지를 고립된 환경에서 실행 가능, 컨테이너 안에서 app 실행  


