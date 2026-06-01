export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type LegalDocument = {
  id: string;
  title: string;
  sections: LegalSection[];
};
