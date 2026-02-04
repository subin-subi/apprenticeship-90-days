import JobCard from "../components/JobCard/JobCard";


const Jobs = () => {
const jobs = [
{ title: "Frontend Developer", type: "Remote" },
{ title: "Backend Developer", type: "Full Time" },
{ title: "UI Designer", type: "Contract" },
];


return (
<section className="py-12 px-4">
<h2 className="text-2xl font-bold mb-6">Latest Jobs</h2>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{jobs.map((job, i) => (
<JobCard key={i} {...job} />
))}
</div>
</section>
);
};


export default Jobs;