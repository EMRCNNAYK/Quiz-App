const questions = [
       {
          question: " Hangi devletin kaynaklarında Türk ismi 'güç,kuvvet' anlamında kullanılmıştır?",
          answers:[ 
            {text:"Hunlar", correct:false },
            {text:"Bulgarlar", correct:false },
            {text:"Uygurlar", correct:true },
            {text:"Karluklar", correct:false },
          ]
       },

       {
        question: " Kaşgarlı Mahmut'un “Dîvânu Lugâti't-Türk” adlı eserinde Türk adı hangi anlamda kullanılmıştır?",
          answers:[ 
            {text:"Olgunluk Çağı", correct:true },
            {text:"Töreli Kavim", correct:false },
            {text:"Güçlü Adam", correct:false },
            {text:"Miğfer", correct:false },
          ]
       },

       {
        question: " Tarihte Türk adıyla kurulan ilk Türk devleti hangisidir? ", 
          answers:[ 
            {text:"Türgişler", correct:false },
            {text:"Hunlar", correct:false },
            {text:"İskitler", correct:false },
            {text:"Göktürkler", correct:true },
          ]
       },

       {
        question: " Teoman hangi devletin kurucusudur? ", 
          answers:[ 
            {text:"Hunlar", correct:true },
            {text:"Selçuklular", correct:false },
            {text:"Sakalar", correct:false },
            {text:"Göktürkler", correct:false },
          ]
       },

       {
        question: " Onluk sistem adı verilen askeri teşkilatı ilk defa kuran Türk komutan kimdir? ", 
          answers:[ 
            {text:"Sultan Alparslan", correct:false},
            {text:"Teoman", correct:false },
            {text:"Mete Han", correct:true },
            {text:"Fatih Sultan Mehmet", correct:false },
          ]
       },

       {
        question: "  Türklerin kullandığı ilk alfabe hangisidir? ", 
          answers:[ 
            {text:"Hun Alfabesi", correct:false },
            {text:"Uygur Alfabesi", correct:false },
            {text:"Kiril Alfabesi", correct:false },
            {text:"Göktürk Alfabesi", correct:true },
          ]
       },
       
       {
        question: " Maniheizm inancına sahip Türk topluluğu hangisidir? ", 
          answers:[ 
            {text:"Uygurlar", correct:true },
            {text:"Selçuklular", correct:false },
            {text:"Sakalar", correct:false },
            {text:"Karahanlilar", correct:false },
          ]
       },

       {
        question: " Türk tarihinin ilk donanmasını kuran ilk amiral kabul edilen komutan kimdir? ", 
          answers:[ 
            {text:"Piri Reis", correct:false},
            {text:"Teoman", correct:false },
            {text:"Çaka Bey", correct:true },
            {text:"Barbaros Hayrettin Paşa", correct:false },
          ]
       },

       {
        question: " Hangi şehir Anadolu Selçuklu Devletine başkentlik yapmıştır? ", 
          answers:[ 
            {text:"Ankara", correct:false },
            {text:"Bursa", correct:false },
            {text:"İzmir", correct:false },
            {text:"İznik", correct:true },
          ]
       },

       {
        question: " Mustafa Kemal ATATÜRK ne zaman Cumhurbaşkanı olmuştur? ", 
          answers:[ 
            {text:"29 Ekim 1923", correct:true },
            {text:"10 Kasım 1938", correct:false },
            {text:"19 Mayıs 1919", correct:false },
            {text:"23 Nisan 1920", correct:false },
          ]
       }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
         const button = document.createElement("button");
         button.innerHTML = answer.text;
         button.classList.add("btn");
         answerButtons.appendChild(button);
         if (answer.correct){
            button.dataset.correct = answer.correct;
         }
         button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
   nextButton.style.display = "none";
   while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
   }
}

function selectAnswer(e) {
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct === "true";

   if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
   }else {
    selectedBtn.classList.add("incorrect");
   }
   Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
        button.disabled = true;
   });
     nextButton.style.display = "block";
}

function showScore(){
resetState();
questionElement.innerHTML = `Skorun ${score} / ${questions.length}!`;
nextButton.innerHTML = "Tekrar Oynayınız!!";
nextButton.style.display = "block";
}

function handleNextButton(){
 currentQuestionIndex++;
 if(currentQuestionIndex < questions.length) {
    showQuestion();
 }
else{
    showScore();
}
}

nextButton.addEventListener("click", ()=>{
   if(currentQuestionIndex < questions.length){
        handleNextButton();
   } 
   else {
     startQuiz();
 }
}  )
startQuiz(); 