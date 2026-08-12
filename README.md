# Next.js 웹 스타터킷

Next.js 16(App Router) + Tailwind CSS v4 + shadcn(base-ui) 기반으로, 다크모드·반응형 레이아웃·검증된 폼 처리까지 미리 구성해 둔 범용 웹 스타터킷입니다.

## 기술 스택

| 영역 | 기술 |
| --- | --- |
| 프레임워크 | Next.js 16 (App Router) |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS v4 |
| UI 컴포넌트 | shadcn (style: `base-nova`, `@base-ui/react` 기반) |
| 아이콘 | lucide-react |
| 폼 검증 | react-hook-form + zod + @hookform/resolvers |

> ⚠️ 이 프로젝트는 최신 버전의 Next.js/shadcn을 사용합니다. 기존에 알던 관행(next-themes, classic radix shadcn `Form` 컴포넌트 등)과 다른 부분이 있으니, 새 코드를 작성하기 전에 이 문서와 `node_modules/next/dist/docs/`를 먼저 확인하세요.

## 시작하기

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 결과를 확인할 수 있습니다.

## 폴더 구조

컴포넌트는 아래처럼 계층별로 분리되어 있습니다. 상위 계층은 하위 계층만 참조합니다.

```
Layer 0  파운데이션   src/lib/theme-script.ts, src/hooks/use-theme.ts   다크모드 스크립트/훅
Layer 1  UI 프리미티브 src/components/ui/*                              shadcn 컴포넌트 (CLI 소유)
Layer 2  레이아웃 셸   src/components/layout/*                          Header/Footer/Container
Layer 3  복합 컴포넌트 src/components/ui/{dialog,sheet,dropdown-menu,...} 상호작용 컴포넌트
Layer 4  폼/검증      src/components/forms/*                            react-hook-form + zod
Layer 5  페이지 조립   src/components/sections/*, src/app/page.tsx      데모 페이지
```

`src/components/ui/`는 shadcn CLI가 생성·관리하는 영역이므로 가급적 직접 수정하지 않는 것이 좋습니다. 커스텀 조합은 `layout/`, `forms/`, `sections/`에 작성하세요.

## 컴포넌트 추가하기

이 프로젝트는 shadcn `base-nova` 스타일(`@base-ui/react` 기반)을 사용합니다. 새 컴포넌트는 아래 명령으로 추가합니다.

```bash
npx shadcn add <컴포넌트명>
```

실제로 존재하는 컴포넌트인지는 `https://ui.shadcn.com/r/styles/base-nova/<컴포넌트명>.json` 로 확인할 수 있습니다. classic(radix 기반) shadcn과 이름이 다른 경우가 있습니다 — 예를 들어 `Form`/`FormField` 컴포넌트는 이 스타일에 없고, 대신 `field`(`Field`, `FieldLabel`, `FieldError` 등)를 사용합니다.

기존 컴포넌트(예: `button.tsx`)를 참고할 때는 다음 패턴을 따르세요.

- `@base-ui/react/<name>`의 primitive를 얇게 감싸고 `data-slot` 속성을 부여
- variant는 `class-variance-authority`(cva)로 관리, 클래스 병합은 `cn()`(`src/lib/utils.ts`) 사용
- `asChild` 대신 base-ui의 `render` prop을 그대로 전달(예: `<Button render={<Link href="/" />}>`)
- React 19 기준이라 `forwardRef`를 쓰지 않음

## 다크모드

Next.js 16 공식 가이드(`preventing-flash-before-hydration`)가 권장하는 방식을 그대로 구현했습니다. `next-themes` 같은 서드파티 라이브러리는 사용하지 않습니다.

1. `src/lib/theme-script.ts`의 인라인 스크립트가 `src/app/layout.tsx`의 `<head>` 첫 자식으로 삽입되어, 페인트 전에 `localStorage`(없으면 `prefers-color-scheme`)를 읽어 `<html>`에 `.dark` 클래스를 동기 적용합니다. 이를 통해 새로고침 시 테마 깜빡임(FOUC)을 방지합니다.
2. `<html suppressHydrationWarning>`으로 React의 클래스 불일치 경고를 방지합니다.
3. `src/hooks/use-theme.ts`의 `useTheme()` 훅이 `.dark` 클래스를 읽고 토글합니다. 별도의 Context/Provider는 없습니다.
4. `src/components/mode-toggle.tsx`가 `Button` + lucide `Sun`/`Moon` 아이콘으로 토글 UI를 제공합니다.

개발 모드의 React StrictMode 재마운트가 클래스를 리셋하는 문제는 `useTheme()`의 `useLayoutEffect`가 보정합니다.

## 폼 작성 가이드

`src/components/forms/contact-form.tsx`를 예시로 참고하세요. classic shadcn의 `Form`/`FormField`가 아니라, `field.tsx`의 `Field`/`FieldLabel`/`FieldError`를 react-hook-form의 `<Controller>`와 직접 조합합니다.

```tsx
<Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor="email">이메일</FieldLabel>
      <Input {...field} id="email" aria-invalid={fieldState.invalid} />
      <FieldError errors={[fieldState.error]} />
    </Field>
  )}
/>
```

검증 스키마는 `zod`로 정의하고 `@hookform/resolvers/zod`의 `zodResolver`로 `useForm`에 연결합니다. 제출 결과 알림은 `src/components/ui/toast.tsx`가 export하는 `toast.add({ title, description, type })`를 사용합니다(`sonner`가 아닌 base-ui 네이티브 `toast`를 채택 — `next-themes`에 의존하지 않기 때문입니다).

## 커스터마이징

- 테마 색상: `src/app/globals.css`의 `:root`/`.dark` 블록 내 CSS 변수(`--primary`, `--background` 등) 수정
- shadcn 설정: `components.json`(스타일, alias, baseColor 등)
- 폰트: `src/app/layout.tsx`의 `Geist`/`Geist_Mono` 설정

## 참고 링크

- [shadcn 문서](https://ui.shadcn.com/docs)
- [base-ui 문서](https://base-ui.com)
- [Next.js 16 문서](https://nextjs.org/docs) (또는 로컬 `node_modules/next/dist/docs/`)
