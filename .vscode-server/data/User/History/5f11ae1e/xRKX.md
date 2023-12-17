docker container -> application 런타임 환경에 필요한 모든 것을 어떤 pc에서도 동일하게 구동 가능  

container vs VM  
VM : 한 운영체제 위에서 동일한 어플리케이션 고립된 다른 환경에서 구동하기 위해서 필요  
각각의 운영체제를 포함하고 있기 때문에(맥 위에서 윈도우, 리눅스)-> 굉장히 무겁고 시작하는데 오래걸림  

경량화된 컨셉이 container -> 개별적인 container로 고립된 환경에서 구동, 운영체제 포함하지 않고 container engine(도커)이 설치된 host OS를 이용  
(운영체제와 커널에 대해 알아야 이해 가능.. 나중에 공부하기)  

# docker?
컨테이너를 만들고 배포하고 구동한다!  
container 만들기 위해서 -> docker파일을 만들고 이미지를 만들어 container구동!  

1. docker file : dj
