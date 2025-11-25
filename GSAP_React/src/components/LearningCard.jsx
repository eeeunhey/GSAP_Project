// src/components/LearningCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const LearningCard = ({
  title,
  description,
  to,
  disabled = false,
  tag,
}) => {
  return (
    <article
      className={`
        bg-white rounded-2xl p-5 shadow-md 
        border ${disabled ? "border-dashed opacity-80" : "border-slate-200"} 
        flex flex-col gap-2
      `}
    >
      <h3 className="text-base md:text-lg font-bold">
        {title}
        {tag && (
          <span className="ml-2 text-xs text-indigo-500">( {tag} )</span>
        )}
      </h3>

      <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
        {description}
      </p>

      {disabled ? (
        <button
          disabled
          className="
            inline-flex items-center justify-center
            mt-2
            px-3 py-1.5
            rounded-full
            text-xs font-semibold
            bg-slate-100 text-slate-400
            cursor-not-allowed
          "
        >
          곧 오픈 예정
        </button>
      ) : (
        <Link
          to={to}
          className="
            inline-flex items-center justify-center
            mt-2
            px-3 py-1.5
            rounded-full
            text-xs font-semibold
            bg-indigo-600 text-white
            hover:bg-indigo-700
            shadow-sm hover:shadow transition
          "
        >
          실습하러 가기
        </Link>
      )}
    </article>
  );
};

export default LearningCard;
