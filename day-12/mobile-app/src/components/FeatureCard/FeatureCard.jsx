const FeatureCard = ({ title, desc }) => {
return (
<div className="bg-white p-6 rounded-lg shadow text-center">
<h3 className="font-semibold text-lg mb-2">{title}</h3>
<p className="text-gray-600 text-sm">{desc}</p>
</div>
);
};


export default FeatureCard;