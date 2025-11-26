import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LessonTemplate from "../components/LessonTemplate";

const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#green-box", {
      x:250,
      opacity: 2, //초 단위 투명
      repeat: -1,
      yoyo: true,
      rotation:360,
      duration:2,
      ease:'circ.inout'
    });
  });

    useGSAP(() => {
    gsap.from("#pink-box", {
      x:250,
      scale:0.2,
      repeat: -1,
      yoyo: true,
      rotation:360,
      duration:2,
      ease:'power1.inOut'
    });
  });

  return (
    <div>
      <LessonTemplate
        title="GSAP FROM"
        highlight="from() 학습하기"
        intro={
          <>
            <code className="px-1 py-0.5 bg-slate-200 ">gsap.from()</code>{" "}
            메소드는 요소를 시작지점을 내가 지정하고 <strong></strong>
          </>
        }
        summaryBox={
          <>
            <p className="text-slate-600 leading-relaxed">
              <code className="px-1 py-0.5 bg-slate-200 rounded text-xs">
                gsap.from()
              </code>{" "}
            </p>
          </>
        }
      >
        <div className="space-y-10">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm mb-4">
              {" "}
              <code className="text-indigo-600">gsap.from()</code>
              서서히 투명해졌다가 나타나는 효과
            </p>

            <div className="relative h-[500px] bg-slate-100 rounded-xl p-6 overflow-hidden">
              <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm mb-4">
              {" "}
              <code className="text-indigo-600">gsap.from()</code>
              박스가 작았다가 점점 커지는 효과
              <br />

            </p>

            <div className="relative h-[300px] bg-slate-100 rounded-xl p-6 overflow-hidden">
              <div
                id="pink-box"
                className="w-20 h-20 bg-pink-500 rounded-lg"
              />
            </div>
          </div>
        </div>
      </LessonTemplate>
    </div>
  );
};

export default GsapFrom;
