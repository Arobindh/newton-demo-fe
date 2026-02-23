export interface AgeRating {
  value: string;
  label: string;
}

export const AGE_RATINGS: readonly AgeRating[] = [
  { value: 'E', label: 'E - Everyone' },
  { value: 'E10+', label: 'E10+ - Everyone 10+' },
  { value: 'T', label: 'T - Teen' },
  { value: 'M', label: 'M - Mature' },
  { value: 'AO', label: 'AO - Adults Only' }
] as const;

