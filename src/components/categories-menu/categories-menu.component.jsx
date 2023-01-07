import CategoryItem from "./category/category-item.component";
import "./categories-menu.styles.scss";

const CategoriesMenu = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://images.unsplash.com/photo-1533603531139-2c4d04df8f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl:
        "https://images.pexels.com/photos/7679455/pexels-photo-7679455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1a",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    },
    {
      id: 4,
      title: "T-shirts",
      imageUrl:
        "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Jeans",
      imageUrl:
        "https://images.pexels.com/photos/1482180/pexels-photo-1482180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="categories-menu-container">
      {categories.map((categories) => {
        return <CategoryItem key={categories.id} category={categories} />;
      })}
    </div>
  );
};

export default CategoriesMenu;
