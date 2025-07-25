import useMenuStore from "../shared/store/useMenuStore";

const Navbar = () => {
  const { menuItems, selectedMenu, setSelectedMenu } = useMenuStore();

  return (
    <div className="bg-bg text-text h-16 flex justify-center">
      <div className="flex gap-4 max-w-screen-xl w-full items-center">
        {menuItems.map((item, i) => (
          <button
            key={item}
            onClick={() => setSelectedMenu(item)}
            className={`px-4 py-1 rounded-md ${selectedMenu === item ? "bg-primary text-white" : "bg-navbar-tab"}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
