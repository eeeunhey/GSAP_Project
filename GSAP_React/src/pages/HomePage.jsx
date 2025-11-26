// src/pages/HomePage.jsx
import React from "react";
import LearningCard from "../components/LearningCard"; 
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main
      className="
        min-h-screen px-6 py-10 flex flex-col items-center
        bg-[radial-gradient(circle_at_top,_#f7f5ff_0,_#ffffff_60%,_#f5fbff_100%)]
        text-slate-900
      "
    >
      <header className="max-w-2xl text-center mb-10">


        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          GSAP 학습 페이지
        </h1>

        <p className="text-sm md:text-base leading-relaxed text-slate-500">
          애니메이션 기초부터 하나씩 실습하면서<br />
          눈으로 바로 확인하고 배워볼 수 있는 페이지
        </p>
      </header>

      <section className="w-full max-w-4xl">
        <h2 className="text-lg font-bold mb-4">📚 학습 메뉴</h2>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <LearningCard
            title="GSAP To 실습"
            description={
              <>
                <code className="px-1 py-0.5 rounded bg-slate-100 text-[11px]">
                  gsap.to()
                </code>
                메소드를 활용한 애니메이션 실습
              </>
            }
            to="/gaspTo"
          />

          <LearningCard
            title="GSAP From"
            description={
              <>
                 <code className="px-1 py-0.5 rounded bg-slate-100 text-[11px]">
                  gsap.from()
                </code>
                메소드를 활용한 애니메이션 실습
              </>
            }
                      
            to="/gaspFrom"
          />

          <LearningCard
            title="Timeline"
            description="여러 애니메이션을 시간 순서대로 묶어서 컨트롤하는 연습 공간입니다."
            disabled={true}
            tag="준비 중"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
