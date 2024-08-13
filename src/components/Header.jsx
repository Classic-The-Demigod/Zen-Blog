import React from "react";

function Header() {
    return (
      <div className=" bg-gray-200">
        <header className="flex justify-between w-[80%] mx-auto py-4 items-center">
          <h1 className="font-extrabold text-3xl">ZenBlog</h1>

          <nav>
            <ul className="flex gap-4">
              <li>Blog</li>
              <li>Single Post</li>
              <li>Drop Down</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </nav>
          <div className="flex gap-4">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-search"></i>
          </div>
        </header>
      </div>
    );
}

export default Header;
