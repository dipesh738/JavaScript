var fruits = [
  {
    id: 2,
    name: "apple",
    place: "humla",
  },
  {
    id: 3,
    name: "banana",
    place: "tikapur",
  },
  {
    id: 4,
    name: "mango",
    place: "kalaiya",
  },
];

const searchByName = (array, value) => {
  const result = array.find(
    (item) => item.name.toUpperCase() === value.toUpperCase()
  );
  console.log(result);
};

searchByName(fruits, "mango");
