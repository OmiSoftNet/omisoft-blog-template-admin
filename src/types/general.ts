export interface IListChoise {
  label: string;
  value: string;
}

export enum FORM_STATUS {
  CURRENT = 'CURRENT',
  SIGNED = 'SIGNED',
  UNSIGNED = 'UNSIGNED',
}

export type InputChangePredicate = (event: React.ChangeEvent<HTMLInputElement>) => boolean;
export type CustomInputBlurHandler = (event: React.FocusEvent<HTMLInputElement, Element>, name: string) => void;


