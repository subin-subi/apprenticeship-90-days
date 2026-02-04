const MobileMenu = () => {
return (
<div className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden">
<ul className="flex flex-col gap-4 p-4 font-medium">
<li>Home</li>
<li>Jobs</li>
<li>About</li>
<li>Contact</li>
</ul>
</div>
);
};


export default MobileMenu;