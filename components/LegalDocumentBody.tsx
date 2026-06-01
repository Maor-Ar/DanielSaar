import type { LegalDocument } from "@/content/legal/types";

type Props = {
  document: LegalDocument;
  titleId: string;
};

export function LegalDocumentBody({ document, titleId }: Props) {
  return (
    <article className="text-right">
      <h2 id={titleId} className="mb-6 text-xl font-semibold text-slate-900">
        {document.title}
      </h2>
      <div className="flex flex-col gap-6">
        {document.sections.map((section) => (
          <section key={section.id} aria-labelledby={`${titleId}-${section.id}`}>
            <h3 id={`${titleId}-${section.id}`} className="mb-2 text-base font-semibold text-slate-900">
              {section.title}
            </h3>
            <div className="flex flex-col gap-2">
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-sm leading-7 text-slate-900/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
