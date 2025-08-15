import { usePathname, useRouter } from "next/navigation";
import useMenuStore from "../shared/store/useMenuStore";

const Navbar = () => {
  const { menuItems } = useMenuStore();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="bg-bg text-text h-16 flex justify-center">
      <div className="flex gap-4 max-w-screen-xl w-full items-center">
        {menuItems.map((item, i) => (
          <button
            key={item.label}
            onClick={() => {
              router.push(item.path);
            }}
            className={`px-4 py-1 font-bold ${
              pathname === item.path ? "text-primary" : "text-text"
            } hover:text-primary`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
