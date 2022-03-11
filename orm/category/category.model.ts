export const categories = ['books', 'tutorials'] as const;

export type Category = typeof categories[number];

export function getCategoryName(category: Category) {
  return category;
}
