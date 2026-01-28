const JobItem = ({ job }) => {
  return (
    <li>
      <strong>{job.title}</strong>
      <div>{job.company_name}</div>
      <small>{job.candidate_required_location}</small>
    </li>
  );
};

export default JobItem;
