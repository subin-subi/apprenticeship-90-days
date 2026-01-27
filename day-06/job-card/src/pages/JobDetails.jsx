import { useParams } from "react-router-dom";
import jobs from "../data/Jobs";


export default function JobDetails() {
const { id } = useParams();
const job = jobs.find((j) => j.id === Number(id));


if (!job) return <p className="text-center">Job not found</p>;


return (
<div className="p-6 max-w-xl mx-auto">
<h2 className="text-2xl font-bold">{job.title}</h2>
<p className="text-gray-600 mt-2">🏢 {job.company}</p>
<p className="mt-2">💼 Experience: {job.experience}</p>
<p className="mt-2">💰 Salary: {job.salary}</p>


<button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-xl">
Confirm Apply
</button>
</div>
);
}