// Sample job data
const jobs = [
  { id: 1, title: "Frontend Developer", salary: 40000, experience: 2, applicants: 25 },
  { id: 2, title: "Backend Developer", salary: 60000, experience: 4, applicants: 40 },
  { id: 3, title: "Full Stack Developer", salary: 80000, experience: 5, applicants: 30 },
  { id: 4, title: "Junior Developer", salary: 25000, experience: 1, applicants: 15 }
];


//  Filter job list by salary (> 40000)
const highSalaryJobs = jobs.filter(job => job.salary > 40000);
console.log("Filtered Jobs:", highSalaryJobs);


//  Count total applicants
const totalApplicants = jobs.reduce((total, job) => total + job.applicants, 0);
console.log("Total Applicants:", totalApplicants);


//  Sort jobs by experience (ascending)
const sortedByExperience = [...jobs].sort((a, b) => a.experience - b.experience);
console.log("Sorted by Experience:", sortedByExperience);


// Map job titles
const jobTitles = jobs.map(job => job.title);
console.log("Job Titles:", jobTitles);


//  Reduce total salary
const totalSalary = jobs.reduce((sum, job) => sum + job.salary, 0);
console.log("Total Salary:", totalSalary);
