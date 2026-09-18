@AGENTS.md

# 프로젝트 개요

Next.js 16(App Router) + React 19 + TypeScript(strict) + Tailwind v4 + shadcn `base-nova` 스타일(`@base-ui/react` 기반) 스타터 프로젝트. 폼은 `react-hook-form` + `zod` 조합을 사용한다.

# 컴포넌트 아키텍처 (레이어드)

`src/components`는 아래 순서의 레이어로 구성되며, **상위 레이어는 하위 레이어만 참조**한다 (역참조·레이어 스킵 금지):

```
src/lib, src/hooks  →  ui/*  →  layout/*  →  복합 ui/*(dialog, sheet 등)  →  forms/*  →  sections/*, app/*
```

- `src/components/ui/*`는 **shadcn CLI 소유 영역**이다. 수동으로 편집하지 않는다. 새 프리미티브가 필요하면 `npx shadcn add`로 추가하고, 커스텀 조합은 `layout/`, `forms/`, `sections/`에 만든다.

# shadcn base-nova / @base-ui 패턴

- 각 `ui/*` 컴포넌트는 `@base-ui/react/<name>`을 얇게 래핑하고 `data-slot` 속성을 붙인다.
- variant/size는 `cva`로 정의하고, 클래스 병합은 항상 `cn()`(`src/lib/utils.ts`)을 사용한다. 문자열 concat으로 클래스를 합치지 않는다.
- `asChild` prop 대신 base-ui의 `render` prop을 사용한다.
- React 19 프로젝트이므로 `forwardRef`를 쓰지 않는다. `ref`는 일반 prop으로 받는다.

# 다크모드

`next-themes` 등 테마 라이브러리를 새로 도입하지 않는다. 이 프로젝트의 방식은:

- `.dark` 클래스 + oklch CSS 변수(`src/app/globals.css`)로 색상 전환.
- `src/lib/theme-script.ts`: 페인트 전에 동기적으로 `.dark`를 적용하는 인라인 스크립트(`layout.tsx`의 `<head>`에서 `dangerouslySetInnerHTML`로 삽입, FOUC 방지).
- `src/hooks/use-theme.ts`: 별도 Context/Provider 없이 `localStorage` 기반으로 토글 상태를 관리.
- `<html>`에는 `suppressHydrationWarning`을 반드시 유지한다.

# 폼 & 알림

- classic shadcn `Form`/`FormField`는 사용하지 않는다.
- `react-hook-form`의 `<Controller>` + `zodResolver`(zod 스키마, `z.infer`로 타입 추론) + `Field`/`FieldLabel`/`FieldError`(`src/components/ui/field.tsx`) 조합으로 통일한다.
- 알림(notification)은 `toast.add({ title, description, type })`만 사용한다. `sonner` 등 별도 토스트 라이브러리를 추가하지 않는다.

# 경로 별칭

`tsconfig.json` 기준 `@/*` → `src/*` 하나만 존재한다 (`components.json`의 `components`, `ui`, `lib`, `hooks`, `utils` 별칭도 동일 매핑).

# 테스트

현재 테스트 프레임워크가 설치되어 있지 않다. 테스트 설정이 없는 상태에서 임의로 프레임워크(Jest, Vitest 등)를 도입하지 말고, 먼저 사용자에게 확인한다.

# 검증

코드 변경 후에는 다음을 실행해 확인한다: `npm run lint`, `tsc --noEmit`, 필요 시 `npm run build`.
