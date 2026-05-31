/** Step index label (e.g. `.01`) — `dir="ltr"` keeps the dot before digits in RTL pages. */
export function StepNumberLabel({ n, className = "" }: { n: string; className?: string }) {
  return (
    <p dir="ltr" className={`w-full text-end font-bold leading-none text-[#e98c00] ${className}`.trim()}>
      .{n}
    </p>
  );
}
