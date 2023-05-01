
const categoriesLoader = () => {
  const res = fetch("http://localhost:3000/categories");
  return res.json();
};

export default categoriesLoader;
