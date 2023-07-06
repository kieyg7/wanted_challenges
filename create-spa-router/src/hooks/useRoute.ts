export function useRoute() {
  const push = (path: string) => {
    history.pushState({}, "", path);
    window.onpopstate?.(new PopStateEvent("popstate"));
  };

  return { push };
}
