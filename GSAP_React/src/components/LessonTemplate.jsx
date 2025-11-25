

const LessonTemplate = ({
  title,          // 큰 제목
  highlight,      // 강조 텍스트 (예: "gsap.to()")
  intro,          // 제목 아래 한 줄 설명
  summaryBox,     // 정리/팁 박스 내용 (JSX)
  children,       // 실습 영역(데모 박스)
}) => {
  return (
    <main className="min-h-screen px-6 py-10 bg-gray-50">
      {/* 헤더 */}
      <header className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
          {title}{" "}
          {highlight && (
            <span className="text-indigo-600">{highlight}</span>
          )}
        </h1>

        {intro && (
          <p className="mt-3 text-sm md:text-base text-slate-500">
            {intro}
          </p>
        )}
      </header>

      {/* 내용 요약/정리 */}
      <section className="max-w-3xl mx-auto mb-16 space-y-6">
        {summaryBox}
      </section>

      {/* 실습 섹션 */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold text-slate-700 mb-4">🧪 실습</h2>
        {children}
      </section>
    </main>
  );
};

export default LessonTemplate;
