export function Navbar({ title }) {
return (
<nav className="w-full bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow">
<h1 className="text-2xl font-bold">{title}</h1>
<ul className="flex gap-6 text-sm">
<li className="cursor-pointer hover:text-gray-300">Home</li>
<li className="cursor-pointer hover:text-gray-300">About</li>
<li className="cursor-pointer hover:text-gray-300">Contact</li>
</ul>
</nav>
);
}