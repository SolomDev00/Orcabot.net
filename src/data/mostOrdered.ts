import Pizza from "../assets/icons/pizza.svg";

export const categories = [
  { id: 1, name: "بيتزا", count: 12 },
  { id: 2, name: "برجر", count: 8 },
  { id: 3, name: "مشروبات", count: 6 },
  { id: 4, name: "وجبات", count: 10 },
  { id: 5, name: "حلويات", count: 5 },
];

export const rating = [
  { id: 1, name: "1 نجمة أو أكثر", rate: 1 },
  { id: 2, name: "2 نجوم أو أكثر", rate: 2 },
  { id: 3, name: "3 نجوم أو أكثر", rate: 3 },
  { id: 4, name: "4 نجوم أو أكثر", rate: 4 },
  { id: 5, name: "5 نجوم أو أكثر", rate: 5 },
];

export const prices = [
  { id: 1, name: "20 جنية او أكثر", price: 20 },
  { id: 2, name: "40 جنية او أكثر", price: 40 },
  { id: 3, name: "60 جنية او أكثر", price: 60 },
  { id: 4, name: "100 جنية او أكثر", price: 100 },
  { id: 5, name: "200 جنية او أكثر", price: 200 },
  { id: 6, name: "300 جنية او أكثر", price: 300 },
];

export const products = [
  {
    id: 1,
    name: "Italian Pizza",
    price: 37.49,
    categoryId: 1,
    image: Pizza,
    rating: 5,
  },
  {
    id: 2,
    name: "Cheese Pizza",
    price: 58.99,
    categoryId: 1,
    image: Pizza,
    rating: 5,
  },
  {
    id: 25,
    name: "Cheese Pizza Prime",
    price: 118.99,
    categoryId: 1,
    image: Pizza,
    rating: 5,
  },
  {
    id: 21,
    name: "Cheese Pizza",
    price: 28.99,
    categoryId: 1,
    image: Pizza,
    rating: 4,
  },
  {
    id: 52,
    name: "Cheese Pizza",
    price: 98.99,
    categoryId: 1,
    image: Pizza,
    rating: 3,
  },
  {
    id: 3,
    name: "Beef Burger",
    price: 105.49,
    categoryId: 2,
    image: Pizza,
    rating: 1,
  },
  {
    id: 4,
    name: "Chicken Burger",
    price: 206.49,
    categoryId: 2,
    image: Pizza,
    rating: 5,
  },
  {
    id: 5,
    name: "Coca Cola",
    price: 22.99,
    categoryId: 3,
    image: Pizza,
    rating: 2,
  },
  {
    id: 6,
    name: "Pepsi",
    price: 42.49,
    categoryId: 3,
    image: Pizza,
    rating: 4,
  },
];
