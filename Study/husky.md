````md
# Husky + 자동 prefix 설정 문제 해결 과정 정리

## 0. 목표 정리

- 커밋 메시지 앞에  
  `feat / fix / docs / style / refactor / chore ...`  
  같은 **접두사(prefix)** 를 *자동*으로 붙이고 싶었음.
- 이를 위해 **Husky + Git Hook(commit-msg)** 를 사용하기로 함.
- 중간에:
  - `npm test` 스크립트 없음 에러
  - `.husky/_/_/husky.sh` 경로 에러
  - `husky - DEPRECATED` 경고
  - `NUL` 파일 등  
  여러 가지가 겹쳐서 복잡하게 꼬였음.

---

## 1. Commitizen 도입 – 커밋 타입 선택 자동화

1. **Commitizen 설치**

   ```bash
   npm install -D commitizen cz-conventional-changelog
````

2. **`package.json` 설정**

   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview",
       "commit": "cz"
     },
     "config": {
       "commitizen": {
         "path": "cz-conventional-changelog"
       }
     }
   }
   ```

3. **사용**

   ```bash
   npm run commit
   ```

   * 타입 선택: `feat / fix / docs / ...`
   * 설명 입력: 짧은 커밋 메시지
   * → 자동으로 `feat: ~`, `fix: ~` 형태로 커밋 메시지 생성

> ✅ 이 단계에서 **Commitizen은 정상 동작** -> 근데 자동으로 선택할 수 있게 떠서 좋긴한데 명령어를 다르게 써야 하기도 하고
선택한 다음에 또 커밋메세지를 써야 한다는것이 상당히 불편함 그래서 그냥 git hook을 쓰기로 함

---

## 2. Husky 도입 – Git Hook(커밋 시 자동 동작) 연결

###  목표

* 단순 `git commit -m "오류 수정"` 을 해도

  * 내용에 따라 `fix: 오류 수정`처럼 **자동으로 prefix가 붙게** 만들고 싶었음.
* 그래서 **Husky(Git Hook 관리 도구)** 를 쓰기로 함.



## 6. 최종 해결 – Husky v9 기준으로 완전 재설정

### 6-1. `.husky` 폴더 삭제

꼬인 설정을 다 정리하기 위해 아예 삭제:

```bash
rm -rf .husky
```

---

### 6-2. Husky v9 방식으로 설치

```bash
npm install -D husky
npm pkg set scripts.prepare="husky"
npm run prepare
```

* 이렇게 하면:

  * `package.json` 의 `"scripts.prepare": "husky"` 설정이 생기고
  * `npm install` 할 때 자동으로 Husky 세팅이 준비됨.
  * `.husky/_/husky.sh`, `.husky/_/_.gitignore` 가 생성됨.

생성 직후의 정상 구조:

```text
.husky/
  _/
    husky.sh
    _.gitignore
```

---

### 6-3. pre-commit 훅 최소 버전 생성

**Husky v9에서는** 더 이상 `husky.sh`를 직접 호출할 필요가 없으므로
pre-commit은 이렇게 최소한으로만 둠:

```bash
echo '#!/bin/sh' > .husky/pre-commit
chmod +x .husky/pre-commit
```

`.husky/pre-commit` 내용:

```sh
#!/bin/sh
```

> 필요하면 나중에 `eslint`, `prettier`, `lint-staged` 같은 걸 여기에서 직접 실행하는 식으로 확장 

---

### 6-4. commit-msg 훅 생성 + 자동 prefix 스크립트 추가

1. 파일 생성

   ```bash
   echo '#!/bin/sh' > .husky/commit-msg
   chmod +x .husky/commit-msg
   ```

2. 내용 채우기 (커밋 내용 기반으로 prefix 자동 붙이기):

   ```sh
   #!/bin/sh

   msg_file="$1"
   msg="$(cat "$msg_file")"

   # 이미 prefix(feat/fix/docs...) 있으면 건드리지 않음
   if echo "$msg" | grep -qE "^(feat|fix|docs|style|refactor|chore|test):"; then
     exit 0
   fi

   type="feat"  # 기본 prefix

   # 1) 버그/오류 관련 → fix
   if echo "$msg" | grep -qiE "fix|bug|오류|버그|에러|error"; then
     type="fix"

   # 2) 문서/README → docs
   elif echo "$msg" | grep -qiE "docs|문서|readme|README"; then
     type="docs"

   # 3) 리팩터링 → refactor
   elif echo "$msg" | grep -qiE "refactor|리팩터링"; then
     type="refactor"

   # 4) 스타일/포맷 → style
   elif echo "$msg" | grep -qiE "style|스타일|포맷|서식|정렬|들여쓰기|indent|lint"; then
     type="style"

   # 5) 테스트 관련 → test
   elif echo "$msg" | grep -qiE "test|테스트"; then
     type="test"

   # 6) 설정/빌드/환경 → chore
   elif echo "$msg" | grep -qiE "config|설정|환경|build|빌드|의존성|deps"; then
     type="chore"
   fi

   echo "$type: $msg" > "$msg_file"
   ```

---


## 8. 최종 동작 확인

이제 설정이 끝난 상태에서:

### 예시 1

```bash
git commit -m "오류 수정"
```

→ commit-msg 훅이 `"오류"`라는 단어를 보고 `fix` 로 분류
→ 최종 커밋 메시지:

```text
fix: 오류 수정
```

---

### 예시 2

```bash
git commit -m "README 업데이트"
```

→ `"README"` 키워드 → `docs`로 분류
→ 최종:

```text
docs: README 업데이트
```

---

### 예시 3

```bash
git commit -m "GSAP 학습 페이지 레이아웃 추가"
```

→ 특별 키워드 없음 → 기본값 `feat` 적용
→ 최종:

```text
feat: GSAP 학습 페이지 레이아웃 추가
```

---

## 9. 정리 요약

1. **Commitizen** 으로 `npm run commit` 기준 자동 prefix 선택 기능 도입
2. **Husky 설치** 후 pre-commit에 들어있던 `npm test` 때문에 `"Missing script: test"` 에러 발생 → pre-commit 수정
3. `.husky/_/_/husky.sh` 에러는 **Git 훅 경로 + 꼬인 .husky 구조** 때문에 발생
4. Husky v9의 `DEPRECATED` 경고로 **husky.sh 직접 호출 방식은 버리기로** 결정
5. `.husky` 전체 삭제 → v9 공식 방식으로 설치 (`npm pkg set scripts.prepare="husky"`, `npm run prepare`)
6. `pre-commit` 은 최소 shell 파일로 두고,
   `commit-msg` 에만 자동 prefix 스크립트 구현


```
```
