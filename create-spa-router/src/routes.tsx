import React, { Children, useEffect, useState } from "react";

type IProps = {
  path: string;
  component: React.ReactNode;
  currentPath?: string;
};

const Routes = ({ children }: React.ReactNode) => {
  const [pathName, setPathName] = useState(window.location.pathname);

  useEffect(() => {
    window.onpopstate = () => {
      setPathName(window.location.pathname);
    };
    return () => {
      window.onpopstate = null;
    };
    /**
     * window.history.pushState 로 URL에 변화를 주어도 popstate 이벤트가 즉시 발생하지 않는다.
     * window.onpopstate 는 기본적으로 뒤로가기/앞으로가기 클릭, history.back(), history.forward() 실행 시 디텍팅이 된다.
     * window.history.pushState 후 window.onpopstate() 실행으로 트리거.
     */
  }, []);

  const renderComponentForPath = () => {
    return Children.map(children, (child) => {
      const {
        props: { path, component: RouteComponent },
      }: IProps = child;
      return path === pathName ? <RouteComponent /> : null;
    });
  };

  return <>{renderComponentForPath()}</>;
};

const Route = ({ path, component }: IProps): React.ReactNode => {
  if (!path) console.warn("Path is required!");
  if (!component) console.warn("Component is required!");
  return null; // render 관련 설정은 Routes 에서 children control
};

export { Routes, Route };
