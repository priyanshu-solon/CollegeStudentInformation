  const homeLink = document.getElementById('home-link');
  const studentsLink = document.getElementById('students-link');
  const addLink = document.getElementById('add-link');
  const homeHeading = document.getElementById('home-heading');
  const homeDescription = document.getElementById('home-description');
  const studentTable = document.getElementById('student-table');
  const addStudentForm = document.getElementById('add-student-form');

  const students = []; // Existing student data array

  homeLink.addEventListener('click', function() {
    showHomePage();
  });

  studentsLink.addEventListener('click', function() {
    showStudentTable();
  });

  addLink.addEventListener('click', function() {
    showAddStudentForm();
  });

  function showHomePage() {
    homeHeading.style.display = 'block';
    homeDescription.style.display = 'block';
    studentTable.style.display = 'none';
    
