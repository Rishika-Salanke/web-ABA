document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('testForm');
  const questionContainer = document.getElementById('questionContainer');
  const addQuestionBtn = document.getElementById('addQuestion');

  let questionCount = 0;

  addQuestionBtn.addEventListener('click', function() {
    questionCount++;
    const questionHTML = `
      <div class="question">
        <label for="question${questionCount}">Question ${questionCount}:</label>
        <input type="text" id="question${questionCount}" name="question${questionCount}" required>
        <br>
      </div>
    `;
    questionContainer.insertAdjacentHTML('beforeend', questionHTML);
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Collect test data here (test name, description, questions)
    const formData = new FormData(form);
    const testData = {};
    formData.forEach((value, key) => {
      testData[key] = value;
    });
    console.log(testData); // Replace with your backend API call to save the test data
    alert('Test saved successfully!');
    form.reset();
    questionContainer.innerHTML = ''; // Reset question container
    questionCount = 0; // Reset question count
  });
});