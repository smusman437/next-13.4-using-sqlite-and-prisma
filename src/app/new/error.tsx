"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">{error.message}</h1>
      </header>

      <button
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        onClick={() => reset()}
      >
        Try again
      </button>
    </>
  );
}
