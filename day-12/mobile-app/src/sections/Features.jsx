import FeatureCard from "../components/FeatureCard/FeatureCard";


const Features = () => {
const features = [
{ title: "Verified Jobs", desc: "Trusted companies" },
{ title: "Fast Apply", desc: "One click apply" },
{ title: "Remote Work", desc: "Work anywhere" },
];


return (
<section className="py-12 px-4">
<h2 className="text-2xl font-bold text-center mb-8">Why Choose Us</h2>


<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
{features.map((f, i) => (
<FeatureCard key={i} {...f} />
))}
</div>
</section>
);
};


export default Features;