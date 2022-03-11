import { range } from 'lodash';

export function generatePagesList(numberOfPages: number): number[] {
  return range(1, numberOfPages + 1);
}
