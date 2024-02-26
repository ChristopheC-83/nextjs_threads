
"use client";

export default function Button({ onClick, children }) {
  return (
    <button
      className={`w-full p-3 transition duration-300 rounded-full bg-neutral-100 text-neutral-900 hover:bg-neutral-300`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
