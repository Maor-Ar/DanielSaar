import { StepNumberLabel } from "@/components/StepNumberLabel";

export type ProcessStep = {
  n: string;
  title: string;
  body: string;
};

const rowClassName =
  "flex w-full max-w-[312px] flex-col items-start gap-5 self-center steps:max-w-none steps:flex-row steps:flex-nowrap steps:items-stretch steps:justify-center steps:gap-[72px]";

const cardClassName =
  "flex h-[237px] w-full shrink-0 flex-col items-start justify-center gap-1.5 rounded-lg bg-white p-4 text-right shadow-[0px_4px_2px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 steps:h-full steps:justify-start steps:w-[310px] steps:gap-1.5 steps:p-4";

export function ProcessStepCards({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className={rowClassName}>
      {steps.map((s) => (
        <div key={s.n} className="flex w-full flex-row items-center self-stretch steps:w-auto">
          <div className={cardClassName}>
            <StepNumberLabel n={s.n} className="text-5xl tracking-[0.16px] steps:text-[60px]" />
            <div className="flex w-full flex-col items-start gap-1.5">
              <h3 className="w-full text-right text-xl font-bold tracking-[0.16px] text-[#0f172a] steps:text-[24px]">
                {s.title}
              </h3>
              <p className="w-full max-w-none text-right text-xl font-normal tracking-[0.16px] text-[#0f172a] steps:max-w-[280px] steps:text-[20px] steps:leading-7">
                {s.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
