type Props = {
  className?: string;
};

/** Minimal chevron (∧) — two strokes, no vertical tail. */
export function ChevronUpIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
}
