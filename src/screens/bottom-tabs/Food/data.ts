import type { Food } from "./types";

export type FoodCategory = keyof typeof foodCategories;
export const foodCategories = {
  breakfast: {
    name: "Breakfast",
    foods: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  lunch: { name: "Lunch", foods: [12, 13] },
  dinner: { name: "Dinner", foods: [12] },
  other: { name: "Other", foods: [3] },
};

export const foods: Food[] = [
  {
    name: "Fried egg",
    description: "A fried egg, fried in butter, with a runny yolk.",
    calories: 90,
    protein: 6,
    salt: 0.1,
  },
  {
    name: "Bacon",
    description: "Two strips of bacon.",
    calories: 90,
    protein: 6,
    salt: 0.1,
  },
  {
    name: "Toast",
    description: "Two slices of toast with butter.",
    calories: 90,
    protein: 6,
    salt: 0.1,
  },
  {
    name: "Coffee",
    description: "A cup of coffee.",
    calories: 90,
    protein: 6,
    salt: 0.1,
  },
  {
    name: "Orange juice",
    description: "A glass of orange juice.",
    calories: 90,
    protein: 6,
    salt: 0.1,
  },
  {
    name: "Pancakes",
    description: "Three pancakes with butter and syrup.",
    calories: 90,
    protein: 6,
    salt: 0.1,
  },
  {
    name: "Waffles",
    description: "Two waffles with butter and syrup.",
    calories: 90,
    protein: 6,
    salt: 0.1,
  },
  {
    name: "Milk",
    description: "A glass of milk.",
    calories: 90,
    protein: 6,
    salt: 0.1,
  },
  {
    name: "Cereal",
    description: "A bowl of cereal with milk.",
    calories: 90,
    protein: 6,
    salt: 0.1,
  },
  {
    name: "Oatmeal",
    description: "A bowl of oatmeal with milk.",
    calories: 90,
    protein: 6,
    salt: 0.1,
  },
  {
    name: "Yogurt",
    description: "A bowl of yogurt.",
    calories: 90,
    protein: 6,
    salt: 0.1,
  },
  {
    name: "Fruit",
    description: "A bowl of fruit.",
    calories: 90,
    protein: 6,
    salt: 0.1,
  },
  {
    name: "Salad",
    description: "A bowl of salad.",
    calories: 90,
    protein: 6,
    salt: 0.1,
  },
  {
    name: "Sandwich",
    description: "A sandwich.",
    calories: 90,
    protein: 6,
    salt: 0.1,
  },
];
