## Perspective Camera

- 절두체를 만들어서 카메라를 만들어서 화면에 렌더링하게됨

fovy: 절두체에 높이에 대한 방향 단위 디그리
aspect = width / height 절두체의 가로를 세로로 나눈 비율
zNear 카메라로부터의 거리
zFar 카메라로부터의 거리

zNear와 zFar사이에 있는 것들을 렌더링함

## Orthographic

- 거리감없이 카메라를 렌더링 하게 됨 직육면체를 만듦, 원근감이 없는 것이 특징임

xLeft, xRight: 직육면체의 가장 앞의 면에 가로 길이이다
yBottom, yTop: 직육면체의 가장 앞의 면에 세로 길이이다.
zNear 카메라로부터의 거리
zFar 카메라로부터의 거리

zNear와 zFar사이에 있는 것들을 렌더링함

# Shadow

- 섀도우는 빛에 따라 생기는 것이다.
  섀도우를 주기 위해서는 다음 세가지가 되어야 한다.

1. renderer.shadowMap.enabled = true;
2. castShadow = true
3. receiveShadow = true

렌더러가 shadowMap활성화 시키고
빛은 castShadow로 그림자를 내보내며
각 객체는 받고 내보내는 방식으로 그림자를 렌더링 할 수 있다.

그림자는 Orthographic 카메라와 마찬가지로 직육면체 형식으로 렌더링을 하는데 이는
light.shadow.camera 로 조정 할 수가 있다.

light.shadow.mapSize는 그림자의 선명도를 조절 할 수 있다.
light.shadow.radus는 그림자의 블러처리를 담당한다.
