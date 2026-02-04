const JobCard = ({ title, type }) => {
return (
<div className="bg-white p-6 rounded-lg shadow flex flex-col">
<h3 className="font-semibold text-lg">{title}</h3>
<p className="text-gray-600 text-sm mb-4">{type}</p>
<button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded">
Apply
</button>
</div>
);
};


export default JobCard;