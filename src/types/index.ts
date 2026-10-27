export type SectionId =
  | 'hero'
  | 'services'
  | 'audience'
  | 'process'
  | 'faq'
  | 'pricing'
  | 'footer';

export interface Disposable {
  destroy(): void;
}
