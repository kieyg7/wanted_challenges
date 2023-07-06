## Router 구현

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
