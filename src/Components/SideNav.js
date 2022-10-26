import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/course`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      {products.map((product) => (
        <aside key={product.id} class="md:w-64" aria-label="Sidebar">
          <div class="overflow-y-auto py-4 px-3  bg-gray-50 rounded dark:bg-gray-800">
            <ul class="space-y-2">
              <li>
                <Link
                  to={`/course/${product.id}`}
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span class="ml-3">{product.title}</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      ))}
    </div>
  );
};

export default SideNav;
