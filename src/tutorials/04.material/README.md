Material 은 재질을 표현하는 객체다.  
Object3D 의 Points, Line, Mesh를 표현하기 위한 객체이다.

# PointsMaterial

point에 대한

# LinkBasicMaterial

선에 대한 색상을 지정해서 선의 재질을 정할 수 있다.

## LineDashedMaterial

dash 선을 지정해서 선을 그리게 된다.

## MeshBasicMaterial

3D에서 가장 기본적인 머테리얼로 wireframe을 true로 하면 구성되는 폴리곤의 형태를 볼 수가 있다.

depth Buffer는 깊이 버퍼이고 z버퍼라고도 함. z 버퍼는 3차원 객체를 카메라를 통해 좌표를 변환시켜 화면상에 렌더링 될 때,  
해당 3차원 객체를 구성하는 각 픽셀에 대한 z값 좌표값을 0~1로 정규화 시킴.  
이 정규화된 z값이 저장된 버퍼가 z버퍼이다. 이 값이 작을 수록 카메라에서 가까운 3차원 객체의 픽셀이다.

더 멀리에있는 객체가 가까히에 있는 객체를 덮지 않기 위해서 사용되는 버퍼이다.

side는 광원을 받는지 않받는지에 대해서 큰 차이를 나타낸다.

## MeshLambertMaterial

광원에 영향을 받는 Mesh 재질의 구성이다.
emissive는 객체 자체에서 빛을 받지 않아도 표현되는 색을 지정할 수도 잇다.
컬러랑 혼합이 되서 최종 렌더링함.

## MeshPhongMaterial

메쉬가 렌더링하는 픽셀단위로, 광원의 계산을 하는 재질이다.
specular 빛이 비쳐지는 곳에 색상을 지정 할 수 있다.
shiness 빛을 얼마나 받을지에 대한 속성을 정의 할 수 있다.
flatShading 메쉬를 평평하게 할 것인지

# PBR (피지컬 베이스드 렌더링)

## MeshStandardMaterial

roughness: 거칠기 0일 경우 거울같은 상태
metalness: 금속성

## MeshPhysicallMaterial

Mesh에 코팅을 넣을 수 있고, 실제 유리같은 효과도 표현이 가능함
clearcoat: 코팅 정도
clearcoatRoughness: 코팅에 대한 거칠기이다.

# Texture

메쉬에서 map에 넣으면 된다
텍스처 객체는 이미지나 동영상을 넣을 수 있다

filter: 원래 사용

magFilter: 원래 이미지보다 크게 확대 할 경우 사용되는 필터
minFilter: 원래 이미지보다 작게 렌더링 하게 될 경우 사용되는 필터

mipmap이란 이미지에 비율에 맞춰서 미리 만들어 두는 것을 말한다.

## NearestMipmapLinearFilter

1. 크기가 가장 비슷한 mipmap 이미지 두개 선택
2. 가장 가까운 픽셀을 두개에서 하나씩 취득
3. 가중치 평균을 내서 최종 색상값을 뽑아냄

## LinearMipmapNearestFilter

크기가 가장가까운 mipmap을 1개를 가져와서 픽셀을 4개 취득후 선형 보간

## LinearMipmapLinearFilter

크기가 가장가까운 mipmap을 2개를 가져와서 픽셀을 4개 취득후 선형 보간

Mipmap을 사용하는 것이 보통 더 렌더링 품질이 더 좋음 하지만 메모리 연산이 많이 들어가게 됨.
