import { IAgeRating } from '../src/types';

export function getAgeRating(rate: number): IAgeRating {
  if (rate <= 10) return { rateClass: 'age10', rateValue: '10' };
  if (rate <= 12) return { rateClass: 'age12', rateValue: '12' };
  if (rate <= 14) return { rateClass: 'age14', rateValue: '14' };
  if (rate <= 16) return { rateClass: 'age16', rateValue: '16' };
  if (rate <= 18) return { rateClass: 'age18', rateValue: '18' };
}
