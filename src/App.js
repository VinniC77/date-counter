import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}
// Each components have its own state

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Vini" });

  const handlePrevious = () =>
    step > 1 && setStep((currentState) => currentState - 1);
  // When we want to update the state based on the current state, we should use a callback function, as above

  const handleNext = () => {
    step < 3 && setStep((currentState) => currentState + 1);
    // That's the right way to update an object using useState
    // setTest({ name: "Clunc" });
  };

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((currSt) => !currSt)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button backGround="#7950f2" color="#fff" onFunc={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button backGround="#7950f2" color="#fff" onFunc={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

const Button = ({ backGround, color, onFunc, children }) => {
  return (
    <button
      style={{ backgroundColor: backGround, color: color }}
      onClick={onFunc}
    >
      {children}
    </button>
  );
};
