let arr = [
  { id: 1, year: 1998, engine: 1, name: "Tico" },
  { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
  { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
  { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
  { id: 5, year: 2012, engine: 2, name: "Malibu" },
  { id: 6, year: 2000, engine: 1.2, name: "Damas" },
  { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
];

// */==========CRUD===========*/

// */============READ============*/
// ==number==
// const sortByyear = () => {
//   let result = arr.sort((a, b) => a.year - b.year);
//   return (result = arr);
// };

// console.log(sortByyear());

// ==string==
// const sortByname = () => {
//   let result = arr.sort((a, b) => a.name.localeCompare(b.name));
//   return (result = arr);
// };
// console.log(sortByname());

// */================DELETE=================*/

// const onDelete = (id) => {
//   let result = arr.filter((a) => a.id !== id);
//   return (id = result);
// };
// console.log(onDelete(3));

// */=========================UPDATE====================*/

// const upDate = (data) => {
//   let result = arr.map((a) =>
//     a.id === data.id ? { ...a, [data.key]: data.value } : a
//   );
//   return (data = result);
// };

// console.log(upDate({ id: 3, key: "name", value: "lasetti" }));

// */===========================CREATE=================================*/

// const addCar = (car) => {
//   arr.push(car);
// };
// addCar({ id: 8, year: 2023, engine: 1.2, name: "onix" });
// console.log(arr);
