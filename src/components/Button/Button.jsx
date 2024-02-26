
"use client";

export default function Button({ onClick, children, withoutMarginTop }) {
  return (
    <button
      className={`w-full p-3 transition duration-300 rounded-full bg-neutral-100 text-neutral-900 hover:bg-neutral-300 ${!withoutMarginTop && "mt-4"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
