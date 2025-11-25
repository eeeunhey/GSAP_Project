import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LessonTemplate from "../components/LessonTemplate";

export const GsapTo = () => {
  useGSAP(() => {
    // to(해당 id를 (객체), 얼만큼 이동할지 )
    gsap.to("#blue-box", {
      x: 250,
      y: 250,
    });
  }, []);

  return (
    <LessonTemplate
      title="GSAP TO"
      highlight="to() 학습하기"
      intro={
        <>
          <code className="px-1 py-0.7 bg-slate-200 rounded text-xs">
            gsap.to()
          </code>{" "}
          메소드는 요소를 <strong>현재 상태 → 원하는 상태</strong>로 이동
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
            반대로{" "}
            <code className="px-1 py-0.5 bg-slate-200 rounded text-xs">
              gsap.from()
            </code>{" "}
            은 요소를 <strong>새로운 상태 → 현재 상태</strong>로
            애니메이션합니다.
          </p>

          <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
            <p className="text-slate-700 text-sm leading-relaxed">
              💡 <strong>정리</strong>
              <br />– <code className="text-indigo-600">gsap.to()</code> : 현재
              상태 → 목표 상태
              <br />– <code className="text-indigo-600">gsap.from()</code> :
              시작 상태 → 현재 상태
            </p>
          </div>
        </>
      }
    >
      {/* 여기가 실습 영역(Playground) */}
      <div className="p-10 bg-white rounded-2xl shadow-sm border border-slate-200">
        <p className="text-slate-500 text-sm mb-4">
          아래의 파란 박스는 페이지가 로드되면{" "}
          <code className="text-indigo-600">gsap.to()</code> 로 오른쪽 아래로
          이동합니다.
        </p>

        <div className="relative h-[500px] bg-slate-100 rounded-xl p-6 overflow-hidden">
          <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
        </div>
      </div>
    </LessonTemplate>

    // <main>
    //     <h1>GsapTo</h1>

    //     <p className="mt-5 text-gray-500">
    //         <code>gsap.to()</code> 란 메소드는 요소를 지금 상태에서 다른 상태로 변경하는 애니메이션이다
    //     </p>

    //     <p className="mt-5 text-gray-500">
    //         <code>gsap.to</code> 는 <code>gasp.from</code> 차이가 있다
    //     </p>

    //     <p className="mt-5 text-gray-500">
    //         <code>gsap.to()</code> : 현재 상태 → 새로운 상태
    //         <code>gsap.from()</code> : 새로운 상태 → 현재 상태
    //     </p>
    //     <p>

    //     </p>
    //     <div className="mt-20">
    //         <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg">

    //         </div>
    //     </div>

    // </main>
  );
};
