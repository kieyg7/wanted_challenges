## SPA Router 구현

1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**
* - `/`→`root`페이지
- `/about`→`about`페이


2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.
   힌트) window.onpopstate,window.location.pathnameHistory API(pushState)


3) Routes, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.
   ```jsx
   ReactDOM.createRoot(container).render(
   <Routes>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
   </Routes>
   );
    ```

4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.최소한의 push 기능을 가진 useRouter Hook을 작성한다.

   ```js 
    const { push } = useRouter();
   ```

---

## 구현
![](https://github.com/kieyg7/wanted_challenges/blob/main/create-spa-router/public/create_route.gif?raw=true)
---

## ✨TIL
- react-router-dom으로 편하게 spa route 관련 설정을 하다가 직접 만들어 보는 계기가 되어 흥미로웠다.

### 1. yarn vite

```txt
  yarn create vite
```


- 프랑스어로 ‘빠르다’는 뜻을 가진 자바스크립트 빌드 툴
- 프로젝트 스캐폴딩 템플릿 지원하고, 설정이 매우 간단함(거의 불필요함)
- CRA에 비해 프로젝트에 담긴 의존성 규모가 작아서 인스톨 시간에 대한 부담이 없음
- HMR 및 빌드 속도가 매우 빠름
- [https://vitejs-kr.github.io/guide/#scaffolding-your-first-vite-project](https://vitejs-kr.github.io/guide/#scaffolding-your-first-vite-project)


### 2. React.Children.map(children, function)

  - 자식 요소에 접근하고 조작해야 할 때 사용.
  - Children.map()은 React의 React.Children 유틸리티 함수 중 하나
	
	```jsx


	import { Children } from "react";
	
	const ParentsComp = () => {
     {...}
	  const childRender = () => {

	    // children 배열의 각 요소에 대해 주어진 콜백 함수를 실행.
        // 이 콜백 함수는 각 요소를 child라는 변수로 받아들이고 해당 요소에 대해 수행할 작업을 정의
        // children은 배열이고 child는 children 배열의 각 요소를 나타내는 변수
        return Children.map(children, (child) => {

          // child의 props에도 접근할 수 있다. 
          const {props: { path, component: RouteComponent }}: IProps = child;
          return path === pathName ? <RouteComponent /> : null;
          });
        }
    }

	```


	cf> React.cloneElement()
	
	- React에서 자식 요소에 접근하고 조작하는 또 다른 방법
	```js
	import React from 'react';

	function ParentComponent() {
	  const childElement = <ChildComponent />;
	  const modifiedChild = React.cloneElement(childElement, { newProp: true });
	  return modifiedChild;
	}

	```
	- ParentComponent는 ChildComponent를 복제하고 newProp이라는 새로운 속성을 추가하여 반환. 이렇게 하면 부모 컴포넌트에서 자식 컴포넌트에 속성을 전달하거나 수정할 수 있다.
	- React.cloneElement() 함수를 사용하여 자식 요소를 복제하면, 복제된 요소는 원본 요소와 완전히 독립된 새로운 요소가 된다. 따라서 복제된 요소를 수정해도 원본 요소에는 영향을 주지 않는다.

### 3. window.onpopstate 이벤트를 처리하는 2가지 방법.
	
```js
 A : window.addEventListener('popstate', handleLocationChange);
	
 B : window.onpopstate = () => handleLocationChange;
```

이 두 가지 방법의 차이점은 이벤트 리스너를 등록하는 방식이다. addEventListener를 사용하면 다른 이벤트 리스너도 동일한 이벤트에 대해 등록할 수 있다. 즉, 여러 개의 리스너를 등록할 수 있는 것. 반면 onpopstate에 함수를 직접 할당하면 해당 이벤트에 대해 하나의 함수만 할당할 수 있다. 따라서 이미 할당된 함수가 있는 경우, 다른 함수로 변경하려면 직접 할당을 해제하고 다시 할당해야 함.

결론적으로, A의 방법은 여러 개의 리스너를 등록하고 관리할 수 있는 유연성을 제공하며, B의 방법은 하나의 함수에 대한 직접적인 할당을 통해 간단하게 처리할 수 있다. 사용하는 상황과 개발자의 선호도에 따라 적절한 방법을 선택하면 됨.


 - Evnet Trigger

 ```js
  A :  window.onpopstate?.(new PopStateEvent("popstate"))

  B : window.dispatchEvent(new PopStateEvent("popstate"))
 ```

- A
	- window.onpopstate는 브라우저의 popstate 이벤트 핸들러. 이 핸들러는 브라우저의 이전/다음 버튼을 클릭하거나 history 객체를 사용하여 페이지 이동이 발생했을 때 호출.
	- new PopStateEvent("popstate")는 popstate 이벤트를 생성. 이벤트 객체를 생성하여 window.onpopstate에게 전달.
	- 현재 브라우저의 popstate 이벤트 핸들러가 존재하면 해당 함수를 호출하고, 이벤트 객체를 전달하여 popstate 이벤트를 트리거하는 역할을 한다.


- B
	- window.dispatchEvent()는 지정된 이벤트를 문서상의 노드에 디스패치(전달)하는 메서드.
	- new PopStateEvent("popstate")는 popstate 이벤트를 생성. 이벤트 객체를 생성하여 window.dispatchEvent()에게 전달.
	- popstate 이벤트 객체를 생성한 후, window.dispatchEvent()를 사용하여 이벤트를 발생. 이는 브라우저에서 popstate 이벤트를 강제로 트리거하고자 할 때 사용. 즉, 이벤트 핸들러를 등록하지 않은 상태에서 popstate 이벤트를 처리하거나, 특정 조건에 따라 이벤트를 수동으로 발생시켜야 할 때 사용할 수 있다.

	즉, A의 방법은 기존의 popstate 이벤트 핸들러를 호출하며, B는 popstate 이벤트를 직접 발생시키는 차이가 있다. 사용 용도는 이벤트 핸들러 호출과 이벤트 발생을 구분하여 선택.


















