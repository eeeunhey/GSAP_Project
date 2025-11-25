import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LessonTemplate from "../components/LessonTemplate";

export const GsapTo = () => {
  // 1) 파란 박스: 단순 이동
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      y: 250,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  // 2) 남색 박스: 반복 + 회전 + yoyo
  useGSAP(() => {
    gsap.to("#indigo-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "elastic",
    });
  }, []);

  return (
    <LessonTemplate
      title="GSAP"
      highlight="to() 학습하기"
      intro={
        <>
          <code className="px-1 py-0.5 bg-slate-200 rounded text-xs">
            gsap.to()
          </code>{" "}
          메소드는 요소를 <strong>현재 상태 → 원하는 상태</strong>로
          애니메이션하는 함수입니다.
        </>
      }
      summaryBox={
        <>
          <p className="text-slate-600 leading-relaxed">
            <code className="px-1 py-0.5 bg-slate-200 rounded text-xs">
              gsap.to()
            </code>{" "}
            는 요소를 지금 위치에서 <strong>목표 위치</strong>로 이동시키는
            애니메이션을 만듭니다.
          </p>

          <p className="text-slate-600 leading-relaxed">
            <code className="px-1 py-0.5 bg-slate-200 rounded text-xs">
              gsap.from()
            </code>{" "}
            은 반대로, 요소를 <strong>새로운 상태 → 현재 상태</strong>로
            되돌아오게 하는 애니메이션입니다.
          </p>

          <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
            <p className="text-slate-700 text-sm leading-relaxed">
              💡 <strong>정리</strong>
              <br />– <code className="text-indigo-600">gsap.to()</code> : 현재
              상태 → 새로운 상태
              <br />– <code className="text-indigo-600">gsap.from()</code> :
              시작 상태 → 현재 상태
            </p>
          </div>
        </>
      }
    >
      {/* 👉 여기부터는 "실습 결과물" 영역 (children) */}
      <div className="space-y-10">
        {/* 예제 1: 단순 이동 박스 */}
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-500 text-sm mb-4">
            아래의 파란 박스는 페이지가 로드되면{" "}
            <code className="text-indigo-600">gsap.to()</code> 로 오른쪽 아래로
            이동합니다.
          </p>

          <div className="relative h-[500px] bg-slate-100 rounded-xl p-6 overflow-hidden">
            <div
              id="blue-box"
              className="w-20 h-20 bg-blue-500 rounded-lg"
            />
          </div>
        </div>

        {/* 예제 2: 반복 + 회전 + yoyo 박스 */}
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-500 text-sm mb-4">
            아래의 남색 박스는{" "}
            <code className="text-indigo-600">gsap.to()</code> 를 사용해
            <br />
            오른쪽으로 이동하면서 회전하고, 왕복(yoyo) 애니메이션을 무한 반복합니다.
          </p>

          <div className="relative h-[300px] bg-slate-100 rounded-xl p-6 overflow-hidden">
            <div
              id="indigo-box"
              className="w-20 h-20 bg-indigo-500 rounded-lg"
            />
          </div>
        </div>
      </div>
    </LessonTemplate>
  );
};
