<#assign employees = [
  {"id": 1, "firstName": "Ram", "lastName": "Charan", "email": "ram.charan@example.com", "department": "Entertainment", "role": "Actor"},
  {"id": 2, "firstName": "Virat", "lastName": "Kohli", "email": "virat.kohli@example.com", "department": "Sports", "role": "Batsman"},
  {"id": 3, "firstName": "Allu", "lastName": "Arjun", "email": "allu.arjun@example.com", "department": "Entertainment", "role": "Dancer"},
  {"id": 4, "firstName": "Rohit", "lastName": "Sharma", "email": "rohit.sharma@example.com", "department": "Sports", "role": "Captain"}
]>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Employee Directory</title>
  <link rel="stylesheet" href="/static/css/style.css">
</head>
<body>

  <!-- Header -->
  <header>
    <h1>Employee Directory</h1>
    <div class="search-container">
      <input type="text" id="search-input" placeholder="Search by name or email" />
      <button id="filter-toggle-btn">Filter</button>
      <!-- Filter Popup -->
    <div id="filter-popup" class="filter-popup hidden">
    <h3>Filter Employees</h3>
  
        <label for="filter-firstname">First Name:</label>
        <input type="text" id="filter-firstname" />

        <label for="filter-department">Department:</label>
            <select id="filter-department">
                <option value="">All</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Sports">Sports</option>
            </select>

        <label for="filter-role">Role:</label>
        <select id="filter-role">
            <option value="">All</option>
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
            <option value="Analyst">Analyst</option>
            <option value="Designer">Designer</option>
            <option value="Actor">Actor</option>
            <option value="Hero">Hero</option>
            <option value="Batsman">Batsman</option>
            <option value="Bowler">Bowler</option>
        </select>

        <div class="filter-buttons">
            <button id="apply-filter">Apply</button>
            <button id="clear-filter">Clear</button>
        </div>
    </div>  

    </div>
  </header>

  <!-- Controls -->
 <div class="controls">
  <div class="sort-show-group">
    <label for="sort">Sort:</label>
    <select id="sort">
      <option value="">--Select--</option>
      <option value="firstName">First Name</option>
      <option value="department">Department</option>
    </select>

    <label for="itemsPerPage">Show:</label>
    <select id="itemsPerPage">
      <option value="5" selected>5</option>
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
  <div id="pagination-controls" class="pagination"></div>
  <button id="add-employee-btn">Add Employee</button>
</div>


  <!-- Employee Cards -->
  <main>
    <div id="employee-list-container">
      <!-- JS or Freemarker will populate employee cards here -->

      <!-- Sample Freemarker Loop (for backend rendering) -->
      
      <#list employees as employee>
        <div class="employee-card" data-id="${employee.id}">
          <h3>${employee.firstName} ${employee.lastName}</h3>
          <p><strong>Email:</strong> ${employee.email}</p>
          <p><strong>Department:</strong> ${employee.department}</p>
          <p><strong>Role:</strong> ${employee.role}</p>
          <button class="edit-btn" data-id="${employee.id}">Edit</button>
          <button class="delete-btn" data-id="${employee.id}">Delete</button>
        </div>
      </#list>
     

    </div>
  </main>

  <!-- Footer -->
  <footer>
    © 2025 Employee Directory App. All rights reserved.
  </footer>

  <!-- Scripts -->
<script src="/static/js/data.js"></script>

<script src="/static/js/app.js"></script>



</body>
</html>
