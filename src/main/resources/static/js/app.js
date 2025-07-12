let currentPage = 1;
let itemsPerPage = 5;
let searchQuery = '';
let sortKey = '';

// Render employees on the UI
function renderEmployees(employeeList) {
  const container = document.getElementById("employee-list-container");
  container.innerHTML = "";

  employeeList.forEach(emp => {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.dataset.id = emp.id;

    card.innerHTML = `
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <button class="edit-btn" data-id="${emp.id}">Edit</button>
      <button class="delete-btn" data-id="${emp.id}">Delete</button>
    `;

    container.appendChild(card);
  });

  // Bind events
  document.querySelectorAll(".edit-btn").forEach(btn => btn.addEventListener("click", handleEdit));
  document.querySelectorAll(".delete-btn").forEach(btn => btn.addEventListener("click", handleDelete));
}

// Delete employee
function handleDelete(event) {
  const id = parseInt(event.target.dataset.id);
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  employees = employees.filter(emp => emp.id !== id);
  localStorage.setItem("employees", JSON.stringify(employees));
  getPaginatedEmployees(); // Re-render with updated list
}

// Edit employee
function handleEdit(event) {
  const id = event.target.dataset.id;
  window.location.href = `form.html?editId=${id}`;
}

// Search handler
document.getElementById("search-input").addEventListener("input", function (e) {
  searchQuery = e.target.value.toLowerCase();
  currentPage = 1;
  getPaginatedEmployees();
});

// Sort handler
document.getElementById("sort").addEventListener("change", function () {
  sortKey = this.value;
  currentPage = 1;
  getPaginatedEmployees();
});

// Toggle filter popup
const filterPopup = document.getElementById("filter-popup");
const filterBtn = document.getElementById("filter-toggle-btn");

filterBtn.addEventListener("click", () => {
  filterPopup.classList.toggle("hidden");
});

// Apply and Clear filter
document.getElementById("apply-filter").addEventListener("click", () => {
  const name = document.getElementById("filter-firstname").value.toLowerCase();
  const dept = document.getElementById("filter-department").value;
  const role = document.getElementById("filter-role").value;

  let employees = JSON.parse(localStorage.getItem("employees")) || [];

  if (name) {
    employees = employees.filter(e => e.firstName.toLowerCase().includes(name));
  }
  if (dept) {
    employees = employees.filter(e => e.department === dept);
  }
  if (role) {
    employees = employees.filter(e => e.role === role);
  }

  currentPage = 1;
  renderEmployees(employees.slice(0, itemsPerPage));
  renderPaginationControls(employees.length);
  filterPopup.classList.add("hidden");
});

document.getElementById("clear-filter").addEventListener("click", () => {
  document.getElementById("filter-firstname").value = "";
  document.getElementById("filter-department").value = "";
  document.getElementById("filter-role").value = "";
  filterPopup.classList.add("hidden");
  getPaginatedEmployees();
});


// Items per page handler
document.getElementById("itemsPerPage").addEventListener("change", function () {
  itemsPerPage = parseInt(this.value);
  currentPage = 1;
  getPaginatedEmployees();
});


// Get data and apply search + sort + pagination
function getPaginatedEmployees() {
  let employees = JSON.parse(localStorage.getItem("employees")) || [];

  // Apply search
  if (searchQuery.trim()) {
    employees = employees.filter(emp =>
      emp.firstName.toLowerCase().includes(searchQuery) ||
      emp.lastName.toLowerCase().includes(searchQuery) ||
      emp.email.toLowerCase().includes(searchQuery)
    );
  }

  // Apply sort
  if (sortKey) {
    employees.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
  }

  const start = (currentPage - 1) * itemsPerPage;
  const paginated = employees.slice(start, start + itemsPerPage);

  renderEmployees(paginated);
  renderPaginationControls(employees.length);
}

// Render pagination buttons
function renderPaginationControls(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const container = document.getElementById("pagination-controls");
  container.innerHTML = "";

  if (totalPages <= 1) return;

  // Previous
  if (currentPage > 1) {
    const prev = document.createElement("button");
    prev.textContent = "Previous";
    prev.onclick = () => {
      currentPage--;
      getPaginatedEmployees();
    };
    container.appendChild(prev);
  }

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = (i === currentPage) ? "active" : "";
    btn.onclick = () => {
      currentPage = i;
      getPaginatedEmployees();
    };
    container.appendChild(btn);
  }

  // Next
  if (currentPage < totalPages) {
    const next = document.createElement("button");
    next.textContent = "Next";
    next.onclick = () => {
      currentPage++;
      getPaginatedEmployees();
    };
    container.appendChild(next);
  }
}

// Init page
window.onload = () => {
  const addBtn = document.getElementById("add-employee-btn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      window.location.href = "form.html";
    });
  }

  getPaginatedEmployees();
};
