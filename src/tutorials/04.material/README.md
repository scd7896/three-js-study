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
