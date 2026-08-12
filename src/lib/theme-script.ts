export const THEME_STORAGE_KEY = "theme"

/**
 * head에서 동기 실행되는 다크모드 초기화 스크립트.
 * 페인트 전에 .dark 클래스를 적용해 FOUC(테마 깜빡임)를 방지한다.
 * (Next.js 16 공식 가이드: preventing-flash-before-hydration)
 */
export const themeInitScript = `(function(){try{
  var k="${THEME_STORAGE_KEY}";
  var t=localStorage.getItem(k);
  if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}
  document.documentElement.classList.toggle("dark", t === "dark");
}catch(e){}})();`
