<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${employee?? ? "Edit Employee" : "Add Employee"}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="/static/css/style.css">
</head>
<body class="form-page">
  <main>
    <form id="employee-form">
      <h1 id="form-title">${employee?? ? "Edit Employee" : "Add Employee"}</h1>

      <label for="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required value="${employee.firstName!}"/>

      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" required value="${employee.lastName!}"/>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required value="${employee.email!}"/>

      <label for="department">Department</label>
      <select id="department" name="department" required>
        <option value="">Select</option>
        <option value="HR" ${employee.department == "HR"?then("selected", "")}>HR</option>
        <option value="IT" ${employee.department == "IT"?then("selected", "")}>IT</option>
        <option value="Finance" ${employee.department == "Finance"?then("selected", "")}>Finance</option>
        <option value="Marketing" ${employee.department == "Marketing"?then("selected", "")}>Marketing</option>
      </select>

      <label for="role">Role</label>
      <select id="role" name="role" required>
        <option value="">Select</option>
        <option value="Manager" ${employee.role == "Manager"?then("selected", "")}>Manager</option>
        <option value="Developer" ${employee.role == "Developer"?then("selected", "")}>Developer</option>
        <option value="Analyst" ${employee.role == "Analyst"?then("selected", "")}>Analyst</option>
        <option value="Designer" ${employee.role == "Designer"?then("selected", "")}>Designer</option>
      </select>

      <div class="form-buttons">
        <button type="button" id="cancel-btn">Cancel</button>
        <button type="submit" id="save-btn">Save</button>
      </div>
    </form>
  </main>

  <script src="/static/js/form.js"></script>
</body>
</html>
