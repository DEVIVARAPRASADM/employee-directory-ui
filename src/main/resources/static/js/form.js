document.getElementById("employee-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const newEmp = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    department: document.getElementById("department").value,
    role: document.getElementById("role").value
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmp.email)) {
    alert("Invalid email");
    return;
  }

  let employees = JSON.parse(localStorage.getItem("employees")) || [];

  const editId = new URLSearchParams(window.location.search).get("editId");
  if (editId) {
    const index = employees.findIndex(e => e.id == editId);
    if (index !== -1) {
      employees[index] = { id: parseInt(editId), ...newEmp };
    }
  } else {
    const newId = Date.now();
    employees.push({ id: newId, ...newEmp });
  }

  localStorage.setItem("employees", JSON.stringify(employees));
  window.location.href = "index.html";
});

document.getElementById("cancel-btn").addEventListener("click", () => {
  window.location.href = "index.html";
});
