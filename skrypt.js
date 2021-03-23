window.onscroll = function() {myFunction()};
var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
(function() {
  const myQuestions = [
    {
      question: "Czym jest psychologia kolorów?",
      answers: {
        a: "To wpływ na nasze emocje i zachowania",
        b: "To działanie jakie nie ma większego znaczenia, jedynie wpływa na aspekt wizualny",
        },
      correctAnswer: "a"
    },
    {
      question: "Jakie jest znaczenie koloru pomarańczowego?",
      answers: {
        a: "Wesołość i ciepło",
        b: "Emocje, entuzjazm",
        c: "Wywołuje łagodzący, uspokajający efekt"
      },
      correctAnswer: "b"
    },
    {
      question: "Jakie jest znaczenie koloru niebieskiego",
      answers: {
        a: "spokojne emocje, budzi zaufani",
        b: "Naturę i uspakajający efekt",
        c: "Tajemniczy, pomysłowy i duchowy",
        d: "Czystość, niewinność"
      },
      correctAnswer: "a"
    },
	 {
      qquestion: "Jakie jest znaczenie koloru czerwonego?",
      answers: {
        a: "Naturę i uspakajający efekt",
        b: "Wesoły i ciepły",
        c: "Emocje, namiętność i miłość"
      },
      correctAnswer: "c"
    }
  ];

  function buildQuiz() {
    
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      const answers = [];

      
      for (letter in currentQuestion.answers) {
        
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
   
    const answerContainers = quizContainer.querySelectorAll(".answers");

    
    let numCorrect = 0;

    
    myQuestions.forEach((currentQuestion, questionNumber) => {
     
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      
      if (userAnswer === currentQuestion.correctAnswer) {
        
        numCorrect++;

        
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        
        answerContainers[questionNumber].style.color = "red";
      }
    });

    
    resultsContainer.innerHTML =`Uzyskałeś ${numCorrect} z ${myQuestions.length} punktów`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();