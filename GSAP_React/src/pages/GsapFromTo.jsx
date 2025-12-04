import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LessonTemplate from "../components/LessonTemplate";

export const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#blue-box",
      { x: 0, rotation: 0, borderRadius: "0%" },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotation: 360,
        duration: 2,
        ease: "bounce.out",
      }
    );
  }, []);

  // useGSAP(() => {
  //   gsap.formTo("#indigo-box", {
  //     x: 250,
  //     repeat: -1,
  //     yoyo: true,
  //     rotation: 360,
  //     duration: 2,
  //     ease: "elastic",
  //   });
  // }, []);

  return (
    <LessonTemplate
      title="GSAP FromTO"
      highlight="to() 학습하기"
      intro={
        <>
          <code className="px-1 py-0.5 bg-slate-200 rounded text-xs">
            gsap.fromTo()
          </code>{" "}
          메소드는 요소를{" "}
          <strong>
            기존 상태 지정해주고 그 이후에 지정한 새로운 상태로 반영해준다
          </strong>
          로 애니메이션하는 함수입니다.
          {"기존 상태값"} {"반영할 새로운 상태값"}
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
              <br />– <code className="text-indigo-600">gsap.fromTo()</code> :
              시작 상태(내가지정) → 현재 상태(내가 지정)
            </p>
          </div>
        </>
      }
    >
      <div className="space-y-10">
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-500 text-sm mb-4">
            아래의 파란박스는 둥근 원의 형태로 바뀐다{" "}
            <code className="text-indigo-600">gsap.Fromto()</code>
            초기 상태를 박스로 지정하고 최신상태를 원으로 반영하라고 셋팅했다
          </p>

          <div className="relative h-[500px] bg-slate-100 rounded-xl p-6 overflow-hidden">
            <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
          </div>
        </div>

        {/* <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-500 text-sm mb-4">
            아래의 남색 박스는{" "}
            <code className="text-indigo-600">gsap.to()</code> 를 사용해
            <br />
            오른쪽으로 이동하면서 회전하고, 왕복(yoyo) 애니메이션을 무한
            반복합니다.
          </p>

          <div className="relative h-[300px] bg-slate-100 rounded-xl p-6 overflow-hidden">
            <div
              id="indigo-box"
              className="w-20 h-20 bg-indigo-500 rounded-lg"
            />
          </div>
        </div> */}
      </div>
    </LessonTemplate>
  );
};
