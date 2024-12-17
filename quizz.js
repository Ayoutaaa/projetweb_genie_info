const questions = [
    {
        question: "1. Quelle est la solution de l'équation matricielle suivante : AX = B, où A est une matrice inversible ?",
        options: ["X = A * B", "X = A⁻¹ * B", "X = B * A"],
        correct: "X = A⁻¹ * B",
    },
    {
        question: "2. Quelle est la dérivée de e^(3x) ?",
        options: ["3e^(3x)", "e^(3x)", "3x * e^(3x)"],
        correct: "3e^(3x)",
    },
    {
        question: "3. Si une variable aléatoire suit une loi normale de moyenne 0 et d'écart-type 1, quelle est la probabilité qu'elle soit comprise entre -1 et 1 ?",
        options: ["50%", "68%", "95%"],
        correct: "68%",
    },
    {
        question: "4. Calculez l'intégrale de 2x dx entre 0 et 3.",
        options: [ "6", "9", "12"],
        correct: "9",
    },
    {
        question: "5. Quelle est la valeur propre de la matrice identique 3x3 ?",
        options: [  "0", "1", "Non définie"],
        correct: "1",
    },
    {
        question: "6. Le déterminant d'une matrice triangulaire supérieure est :",
        options: [  "La somme des éléments diagonaux", "Le produit des éléments diagonaux", "Toujours égal à 1"],
        correct: "Le produit des éléments diagonaux",
    },
    {
        question: "7. Quel est le résultat de lim(x→∞) (1 + 1/x)^x ?",
        options: [  "1", "x", "e"],
        correct: "e",
    },
    {
        question: "8. Quelle est la transformée de Fourier d'un signal sinusoïdal sin(2πft) ?",
        options: [  "Un pic à la fréquence f", "Une constante", "Un pic à ±f"],
        correct: "Un pic à ±f",
    },
    {
        question: "9. Dans une régression linéaire, que représente le coefficient de détermination R² ?",
        options: [ "La pente de la droite", "La proportion de variance expliquée par le modèle", "L'erreur quadratique moyenne"],
        correct:"La proportion de variance expliquée par le modèle",
    },
    {
        question: "10. Quel est le rang de la matrice suivante ? A = [[1, 2], [2, 4]]",
        options: [  "0",  "1", "Non définie"],
        correct:"1",
    },
    {
        question: "11. Quelle est la valeur de l'intégrale ∫(x² + 2x + 1) dx entre 0 et 2 ?",
        options: ["8", "10", "12"],
        correct: "12",
    },
    {
        question: "12. Quel est le domaine de définition de la fonction f(x) = √(x-1) ?",
        options: ["x > 0", "x ≥ 1", "x ≤ 1"],
        correct: "x ≥ 1",
    },
];

let currentQuestionIndex = 0;
let score = 0;
const quizContainer = document.getElementById("quiz-container");
const nextButton = document.getElementById("next-btn");
const feedbackDiv = document.getElementById("feedback");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <div class="question">
            <h3>${currentQuestion.question}</h3>
            <div class="options">
                ${currentQuestion.options
                    .map(
                        (option, index) =>
                            `<label id="option-${index}">
                                <input type="radio" name="answer" value="${option}" onclick="checkAnswer('${option}', ${index})">
                                ${option}
                            </label>`
                    )
                    .join("")}
            </div>
        </div>
    `;
    feedbackDiv.innerHTML = "";
    nextButton.disabled = true;
}

function checkAnswer(selectedOption, optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correct;

    const selectedLabel = document.getElementById(`option-${optionIndex}`);
    selectedLabel.classList.add(isCorrect ? "correct" : "incorrect");

  
    for (let i = 0; i < currentQuestion.options.length; i++) {
        const optionLabel = document.getElementById(`option-${i}`);
        optionLabel.style.pointerEvents = "none";
    }
   
    

   
    if (isCorrect) {
        score++;
        feedbackDiv.innerHTML = "Bonne réponse ! 😊";
    } else {
        feedbackDiv.innerHTML = `Mauvaise réponse. La bonne réponse est : <strong>${currentQuestion.correct}</strong>`;
    }

    
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.innerHTML = `
        <h2>Quiz terminé !</h2>
        <p>Votre score final est de : <strong>${score}/${questions.length}</strong></p>
    `;
    feedbackDiv.innerHTML = "";
    nextButton.style.display = "none";
}
loadQuestion();
