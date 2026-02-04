import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";


const Navbar = () => {
const [open, setOpen] = useState(false);


return (
<nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
<h1 className="text-xl font-bold">JobPortal</h1>


<ul className="hidden md:flex gap-6 font-medium">
<li>Home</li>
<li>Jobs</li>
<li>About</li>
<li>Contact</li>
</ul>


<button
className="md:hidden text-2xl"
onClick={() => setOpen(!open)}
>
☰
</button>


{open && <MobileMenu />}
</nav>
);
};


export default Navbar;