# Rolling
**기획 내용**: 추억의 롤링 페이퍼를 웹 상에서도 즐길 수 있는 서비스 <br/>
**배포 링크:** https://rolling-537.pages.dev/  <br/>
**진행 기간**: 2023.12.09~ 2023.12.22 <br/>
**팀원**: [정용준(팀장)](https://github.com/dkile), [이찬주](https://github.com/ckswnskfk), [김동빈](https://github.com/d0ngbb00), [안소연](https://github.com/sozign) <br/>
**기술 스택**: react, react-router, scss, [ky](https://github.com/sindresorhus/ky), [framer-motion](https://www.framer.com/motion/) <br/>
**협업 툴**: github project, github wiki, 디스코드  <br/>
**프로젝트 진행 방식**: 제시된 피그마 시안, api 명세 및 swagger를 바탕으로 협업을 진행 <br/>
![피그마 시안](https://github.com/Codeit-Rolling-11-Letsgo/Rolling/assets/148179726/b836e4e3-7444-4df1-b6bd-a8d3da6a01a7)

## 프로젝트 폴더 구조

```
📦src
 ┣ 📂apis
 ┃ ┣ 📂icon
 ┃ ┣ 📂post
 ┃ ┣ 📂recipients
 ┣ 📂assets
 ┃ ┣ 📜globals.scss
 ┃ ┣ 📜reset.scss
 ┃ ┣ 📜utilities.scss
 ┃ ┗ 📜variables.scss
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┣ 📂home
 ┃ ┣ 📂list
 ┃ ┗ 📂post
 ┣ 📂constants
 ┃ ┣ 📜fontNames.js
 ┃ ┗ 📜routes.js
 ┣ 📂contexts
 ┃ ┗ 📜ModalContext.jsx
 ┣ 📂hooks
 ┃ ┣ 📂common
 ┣ 📂pages
 ┃ ┣ 📂PostIdMessage
 ┃ ┣ 📂home
 ┃ ┣ 📂list
 ┃ ┗ 📂post
 ┣ 📂queries
 ┃ ┗ 📜useIconQuery.js
 ┣ 📂utils
 ┃ ┣ 📜dateUtils.js
 ┃ ┣ 📜framerAnimation.js
 ┃ ┣ 📜iconUtil.js
 ┃ ┣ 📜kakaoShareFormatting.js
 ┃ ┗ 📜util.js
 ┗ 📜main.jsx
```
