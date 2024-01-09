
const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
      answer: "Mars"
    },
    
  ];
  
 
  function displayQuestions() {
    const questionContainer = document.getElementById('questionContainer');
  
    questions.forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      questionDiv.innerHTML = `
        <p>${index + 1}. ${q.question}</p>
        ${q.options.map((opt, idx) => `
          <input type="radio" id="q${index}_opt${idx}" name="q${index}" value="${opt}">
          <label for="q${index}_opt${idx}">${opt}</label><br>
        `).join('')}
      `;
      questionContainer.appendChild(questionDiv);
    });
  }
  
  
  function calculateScore() {
    let score = 0;
    questions.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name=q${index}]:checked`);
      if (selectedOption && selectedOption.value === q.answer) {
        score++;
      }
    });
    return score;
  }

  function showResult() {
    const result = document.getElementById('result');
    const score = calculateScore();
    result.textContent = `Your score is ${score} out of ${questions.length}`;
  }
 
  function submitAnswers() {
    showResult();
  }
  
  
  window.onload = displayQuestions;
  