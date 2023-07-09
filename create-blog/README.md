## Create Markdown Blog

### 과제
- **폴더 구조 및 라우팅**

- 사용자는 루트 경로의 `__posts` 폴더에 작성된 마크다운 파일(`.md`)를 작성할 수 있어야 합니다. 해당 파일은 마크다운 본문과 게시물에 대한 meta data를 담을 수 있어야 합니다. 아래는 마크다운에 jekyll에서 만든 `frontmatter`라는 문법([링크](https://jekyllrb.com/docs/front-matter/))을 적용한 예시입니다

```markdown
---
categories:
  - Development
  - VIM
date: "2012-04-06"
description: 설명을 적는 곳입니다
slug: spf13-vim-3-0-release-and-new-website
tags:
  - .vimrc
  - plugins
  - spf13-vim
  - vim
title: hello
---

## 예시입니다
- 예시입니다

```

<br />

- 블로그에 작성된 게시물을 렌더링하는 `목록 페이지`와 개별 게시물을 렌더링하는 `상세 페이지`로 나누어 작성해주세요.
    - `/` - 목록 페이지
    - `/[id]` - 상세 페이지
    - 마크다운을 JavaScript로 변환해주는 도구는 `remark`(마크다운 Parser), `remark-html`(remark로 파싱한 데이터를 html로 변환) 을 참고
    - 각 마크다운의 meta data는 `gray-matter`, `frontmatter` 참고
    - 마크다운을 React에 삽입할 때는 `dangerouslySetInnerHTML` 을 사용 ([참고 링크](https://ko.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml))
    - (추가 구현) 코드 하이라이터는 `highlight.js`, `prism.js` 를 참고


<br />

- **Next.js 12에서 지원하는 Prefetching 메서드를 적절히 사용해주세요.**
	- Next.js 13을 설치하고 Pages Router를 사용하셔도 됩니다.
	- 정적 페이지를 생성할 때 필요한 데이터 생성 → `getStaticProps`
	- 각 포스트를 그려줄 상세 페이지 경로를 생성  → `getStaticPaths`