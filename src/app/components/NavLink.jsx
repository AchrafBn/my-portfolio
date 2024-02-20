const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 text-[#d5d5d5] sm:text-lg rounded md:p-0 hover:text-white"
    >
      {title}
    </a>
  );
};

export default NavLink;
