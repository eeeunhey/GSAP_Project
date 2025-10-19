import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // 1) Lenis: 부드러운 스크롤
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    // gsap.ticker는 초 단위 → Lenis.raf는 ms 단위
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // 2) animate-text 준비
  document.querySelectorAll(".animate-text").forEach((el) => {
    // ::before에서 쓸 텍스트 복제
    el.setAttribute("data-text", (el.textContent || "").trim());

    // 초기값(완전 가려진 상태)
    el.style.setProperty("--clip-value", "100%");

    // 3) 스크롤 트리거
    ScrollTrigger.create({
      trigger: el,
      start: "top 60%",       // 필요에 따라 조정: "top 80%"로 더 쉽게 테스트 가능
      end: "bottom 40%",
      scrub: 1,
      onUpdate: (self) => {
        const clipValue = Math.max(0, 100 - self.progress * 100);
        // 🔧 핵심 수정: inline style에 직접 넣기
        el.style.setProperty("--clip-value", `${clipValue}%`);
      },
    });
  });

  // 4) 이미지/폰트 로딩으로 레이아웃 바뀐 뒤 재계산
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
