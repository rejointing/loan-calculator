// import section
import './App.css';
import {useState, useEffect} from "react"


function App() {
 // vanilla jsx section
 const [amount, setAmount] = useState(1000)
 const [interest, setInterest] = useState(0)
 const [termInYears, setTermInYears] = useState(0)
 const [loanMonthlyPayment, setLoanMonthlyPayment] = useState("") 

 function calculateLoanMonthlyPayment(amount,interest,termInYears){
  if (amount <= 0 || interest <= 0 || termInYears <= 0) {
    return "Invalid input";
  }
  const interestRateInYearsNotAsPercentage = interest / 100;
  const interestRateInMonths = interestRateInYearsNotAsPercentage / 12;
  const termInMonths = termInYears * 12;
  const numerator =
    amount * interestRateInMonths * Math.pow(1 + interestRateInMonths, termInMonths);

  const denominator = Math.pow(1 + interestRateInMonths, termInMonths) - 1;
  if (denominator === 0) {
    return "Divide by zero error";
  }
  const monthlyPayment = numerator / denominator;
  return monthlyPayment.toFixed(2);
 }


 // useEffect
 useEffect(() => {
  let monthlyPayment = calculateLoanMonthlyPayment(amount,interest,termInYears)
  setLoanMonthlyPayment(monthlyPayment) 
}, [amount,interest,termInYears]);

  return (
    <div>
      <form>
        <div>
          <label>
            <div>
              Amount
            </div>
            <input value={amount} onChange = {e=>setAmount(e.target.valueAsNumber)} type="number"/>
          </label>
        </div>
        <div>
          <label>
            <div>
              Interest
            </div>
            <input onChange = {e=>setInterest(e.target.valueAsNumber)} type="number"/>
          </label>
        </div>
        <div>
          <label>
            <div>
              Term
            </div>
            <input onChange = {e=>setTermInYears(e.target.valueAsNumber)} type="number"/>
          </label>
        </div>
      </form>
      <div>
        <div>
          Monthly Payment
        </div>
        <div>
          {loanMonthlyPayment} 
        </div>
      </div>
    </div>
  );
}

export default App;
