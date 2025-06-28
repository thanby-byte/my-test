// import React, { useState } from "react";
// import questions from "./questions";
// import QuestionPage from "./QuestionPage";

// function App() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const handleAnswer = (answer) => {
//     // You can store selected answers in state here if needed
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       alert("Quiz completed!");
//       // Optionally show results
//     }
//   };

//   return (
//     <div>
//       <QuestionPage
//         questionData={questions[currentQuestion]}
//         currentIndex={currentQuestion}
//         total={questions.length}
//         onAnswer={handleAnswer}
//       />
//     </div>
//   );
// }

// export default App;


import React, { useState, useRef } from "react";
import questions from "./questions";
import QuestionPage from "./QuestionPage";
import SurpriseResult from "./SurpriseResult";
import { Element, scroller } from "react-scroll";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);

      // Smooth scroll to bottom
      // setTimeout(() => {
      //   scroller.scrollTo("surpriseSection", {
      //     duration: 1000,
      //     delay: 100,
      //     smooth: "easeInOutQuart"
      //   });
      // }, 0); // brief delay after last answer
    }
  };

  return (
    <div>
      {!isFinished && (
        <QuestionPage
          questionData={questions[currentQuestion]}
          currentIndex={currentQuestion}
          total={questions.length}
          onAnswer={handleAnswer}
        />
      )}

      {/* Scroll Target */}
      <Element name="surpriseSection">
        {isFinished && <SurpriseResult />}
      </Element>
    </div>
  );
}

export default App;
