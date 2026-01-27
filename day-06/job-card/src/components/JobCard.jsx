import { Link } from "react-router-dom";
import "./JobCard.css";

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h2 className="job-title">{job.title}</h2>
      <p className="company">🏢 {job.company}</p>
      <p>💼 Experience: {job.experience}</p>
      <p>💰 Salary: {job.salary}</p>

      <Link to={`/job/${job.id}`} className="apply-btn">
        Apply Now
      </Link>
    </div>
  );
}
