const mockEmployees = [
  { id: 1, firstName: "Ram", lastName: "Charan", email: "ram.charan@example.com", department: "Entertainment", role: "Actor" },
  { id: 2, firstName: "Virat", lastName: "Kohli", email: "virat.kohli@example.com", department: "Sports", role: "Batsman" },
  { id: 3, firstName: "Allu", lastName: "Arjun", email: "allu.arjun@example.com", department: "Entertainment", role: "Dancer" },
  { id: 4, firstName: "Rohit", lastName: "Sharma", email: "rohit.sharma@example.com", department: "Sports", role: "Captain" },
  { id: 5, firstName: "Mahesh", lastName: "Babu", email: "mahesh.babu@example.com", department: "Entertainment", role: "Actor" },
  { id: 6, firstName: "KL", lastName: "Rahul", email: "kl.rahul@example.com", department: "Sports", role: "Wicket Keeper" },
  { id: 7, firstName: "Nani", lastName: "Ghanta", email: "nani.ghanta@example.com", department: "Entertainment", role: "Actor" },
  { id: 8, firstName: "Jasprit", lastName: "Bumrah", email: "bumrah.jasprit@example.com", department: "Sports", role: "Bowler" },
  { id: 9, firstName: "NTR", lastName: "Jr", email: "ntr.jr@example.com", department: "Entertainment", role: "Hero" },
  { id: 10, firstName: "Hardik", lastName: "Pandya", email: "hardik.pandya@example.com", department: "Sports", role: "All-Rounder" }
];


const existing = JSON.parse(localStorage.getItem("employees")) || [];

// Only push mock data if localStorage is empty
if (existing.length === 0) {
  localStorage.setItem("employees", JSON.stringify(mockEmployees));
}
