const newsLoader = () => {
  const res = fetch("http://localhost:3000/news");
  return res.json();
};

export default newsLoader;
