
"use client"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <span className="flex flex-col items-center">
        <span className="block w-16 h-16 border-4 border-green-600 border-t-white rounded-full animate-spin"></span>
        <span className="mt-4 text-green-700 font-semibold text-lg">Loading...</span>
      </span>
      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          div.fixed {
            background-color: rgba(30, 41, 59, 0.5); /* override with darker bg on dark mode */
          }
          span.text-green-700 {
            color: #bbf7d0;
          }
        }
      `}</style>
    </div>
  );
}
