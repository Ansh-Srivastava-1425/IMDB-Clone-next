"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold text-red-500">Something went wrong!</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{error?.message || "An unexpected error occurred."}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
      >
        Try Again
      </button>
    </div>
  );
}