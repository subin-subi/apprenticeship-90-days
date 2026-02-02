function JobCard({ job }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{job.title}</h2>
      <p className="text-gray-600">{job.company_name}</p>
      <p className="text-sm text-gray-500">{job.candidate_required_location}</p>
      <a
        href={job.url}
        target="_blank"
        className="inline-block mt-2 text-blue-600 hover:underline"
      >
        View Job
      </a>
    </div>
  );
}

export default JobCard;
