import { useState } from 'react';
import './MortgageCalculator.css';

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(350000);
  const [downPayment, setDownPayment] = useState(70000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [propertyTax, setPropertyTax] = useState(3500);
  const [homeInsurance, setHomeInsurance] = useState(1200);
  const [hoaFees, setHoaFees] = useState(0);
  
  const [results, setResults] = useState(null);

  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    // Calculate monthly principal & interest using mortgage formula
    const principalInterest = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const monthlyPropertyTax = propertyTax / 12;
    const monthlyInsurance = homeInsurance / 12;
    const monthlyHoa = hoaFees;
    
    const totalMonthly = principalInterest + monthlyPropertyTax + monthlyInsurance + monthlyHoa;
    
    setResults({
      principalInterest: principalInterest.toFixed(2),
      propertyTax: monthlyPropertyTax.toFixed(2),
      insurance: monthlyInsurance.toFixed(2),
      hoa: monthlyHoa.toFixed(2),
      total: totalMonthly.toFixed(2)
    });
  };

  return (
    <div className="mortgage-calculator">
      <h2>Mortgage Calculator</h2>
      
      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="homePrice">Home Price ($)</label>
          <input
            id="homePrice"
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            step="1000"
          />
        </div>

        <div className="form-group">
          <label htmlFor="downPayment">Down Payment ($)</label>
          <input
            id="downPayment"
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            step="1000"
          />
        </div>

        <div className="form-group">
          <label htmlFor="loanTerm">Loan Term (years)</label>
          <select
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
          >
            <option value={15}>15 years</option>
            <option value={20}>20 years</option>
            <option value={30}>30 years</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            id="interestRate"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="propertyTax">Annual Property Tax ($)</label>
          <input
            id="propertyTax"
            type="number"
            value={propertyTax}
            onChange={(e) => setPropertyTax(Number(e.target.value))}
            step="100"
          />
        </div>

        <div className="form-group">
          <label htmlFor="homeInsurance">Annual Home Insurance ($)</label>
          <input
            id="homeInsurance"
            type="number"
            value={homeInsurance}
            onChange={(e) => setHomeInsurance(Number(e.target.value))}
            step="100"
          />
        </div>

        <div className="form-group">
          <label htmlFor="hoaFees">Monthly HOA Fees ($)</label>
          <input
            id="hoaFees"
            type="number"
            value={hoaFees}
            onChange={(e) => setHoaFees(Number(e.target.value))}
            step="10"
          />
        </div>

        <button
          onClick={calculateMortgage}
          className="cta-button"
        >
          Calculate
        </button>
      </div>

      {results && (
        <div className="results">
          <h3>Monthly Payment Breakdown</h3>
          
          <div className="result-row">
            <span className="result-label">Principal & Interest:</span>
            <span className="result-value">${results.principalInterest}</span>
          </div>
          
          <div className="result-row">
            <span className="result-label">Property Tax:</span>
            <span className="result-value">${results.propertyTax}</span>
          </div>
          
          <div className="result-row">
            <span className="result-label">Home Insurance:</span>
            <span className="result-value">${results.insurance}</span>
          </div>
          
          {hoaFees > 0 && (
            <div className="result-row">
              <span className="result-label">HOA Fees:</span>
              <span className="result-value">${results.hoa}</span>
            </div>
          )}
          
          <div className="result-row result-total">
            <span className="result-label">Total Monthly Payment:</span>
            <span className="result-value">${results.total}</span>
          </div>
        </div>
      )}
    </div>
  );
}