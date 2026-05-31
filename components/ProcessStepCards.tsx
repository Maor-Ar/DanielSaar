import { StepNumberLabel } from "@/components/StepNumberLabel";

export type ProcessStep = {
  n: string;
  title: string;
  body: string;
};

const rowClassName =
  "flex w-full max-w-[312px] flex-col items-start gap-5 self-center sm:max-w-none lg:max-w-none lg:flex-row lg:flex-nowrap lg:items-stretch lg:justify-center lg:gap-[71px]";

const cardClassName =
  "flex w-full flex-col items-start gap-1.5 rounded-lg bg-white p-4 text-right shadow-[0px_4px_2px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 lg:w-[310px] lg:gap-1.5 lg:p-4";

export function ProcessStepCards({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className={rowClassName}>
      {steps.map((s) => (
        <div key={s.n} className={cardClassName}>
          <StepNumberLabel n={s.n} className="text-5xl lg:text-[60px]" />
          <h3 className="w-full text-right text-xl font-bold text-slate-900 lg:text-2xl">{s.title}</h3>
          <p className="w-full text-right text-xl font-normal leading-normal text-slate-900 lg:text-xl lg:leading-7">
            {s.body}
          </p>
        </div>
      ))}
    </div>
  );
}
