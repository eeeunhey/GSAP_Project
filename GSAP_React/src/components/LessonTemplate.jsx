import React from "react";

const LessonTemplate = ({
  title, // 제목
  highlight, // 강조 문구
  intro, // 소개 문구
  summaryBox, // 요약 박스
  children, // 실습영역
}) => {
  return (
    <main className="">
      <header className="max-w-3xl mx-auto text-cente my-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
          {title}{" "}
          {highlight && <span className="text-indigo-600">{highlight}</span>}
        </h1>
        {intro && (
          <p className="mt-3 text-sm md:text-base text-slate-500">{intro}</p>
        )}
      </header>

      {/* 내용 요약 정리 */}
      <section className="max-w-3xl mx-auto mb-16 space-y-6">
        {summaryBox}
      </section>

      {/* 실습섹션 */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold text-slate-700 mb-4">실습 결과물</h2>
        {children}
      </section>
    </main>
  );
};

export default LessonTemplate;
