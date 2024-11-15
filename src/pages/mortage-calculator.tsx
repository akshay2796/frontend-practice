import { ChangeEvent, useState } from "react";

const MortageCalculator = () => {
	//use state
	const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
	const [totalPayment, setTotalPayment] = useState<number | null>(null);
	const [totalInterest, setTotalInterest] = useState<number | null>(null);
	const [error, setError] = useState<string | null>(null);

	//Functions for calculating.

	const calculate = (e: ChangeEvent<HTMLFormElement>) => {
		//Prevent Default form submission
		e.preventDefault();

		//Get the values from the form element
		const f = new FormData(e.target);
		const loanAmount = f.get("loan_amount")?.toString();
		const roi = f.get("roi")?.toString();
		const loan_period = f.get("loan_period")?.toString();

		//Validation
		if (!loanAmount || isNaN(Number(loanAmount))) {
			setError("Please enter a valid loan amount value");
			return;
		}
		if (!roi || isNaN(Number(roi))) {
			setError("Please enter a valid rate of interest value");
			return;
		}
		if (!loan_period || isNaN(Number(loan_period))) {
			setError("Please enter a valid loan period");
			return;
		}

		const loanAmountNum = Number(loanAmount);
		const roiNum = Number(roi);
		const loanPeriodNum = Number(loan_period);

		const monthlyInterest = roiNum / 12 / 100;
		const loan_term = loanPeriodNum * 12;

		const calculateMonthlyPayment = Math.round(
			(loanAmountNum *
				(monthlyInterest * Math.pow(1 + monthlyInterest, loan_term))) /
				(Math.pow(1 + monthlyInterest, loan_term) - 1)
		);
		setMonthlyPayment(calculateMonthlyPayment);

		const calculateTotalPayment = calculateMonthlyPayment * loan_term;
		setTotalPayment(calculateTotalPayment);

		const calculateTotalInterest = calculateTotalPayment - loanAmountNum;
		setTotalInterest(calculateTotalInterest);
	};

	//Html Structure
	return (
		<div>
			<h4>Mortage Calculator</h4>
			<form
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "1rem",
					flexDirection: "column",
				}}
				onSubmitCapture={(e: ChangeEvent<HTMLFormElement>) => {
					calculate(e);
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "1rem",
					}}
				>
					<input
						name='loan_amount'
						type='text'
						placeholder='Loan Amount'
					/>
					<input
						name='roi'
						type='text'
						placeholder='Annual interest rate(%)'
					/>
					<input
						name='loan_period'
						type='text'
						placeholder='Loan period'
					/>
				</div>
				<button type='submit'>Calculate</button>
				{error ? (
					<div style={{ color: "red" }}>{error}</div>
				) : (
					<>
						<div>
							{monthlyPayment !== null && (
								<span>
									Monthly Payment: ₹
									{monthlyPayment.toFixed(2)}
								</span>
							)}
						</div>
						<div>
							{totalPayment !== null && (
								<span>
									Total Payment: ₹{totalPayment.toFixed(2)}
								</span>
							)}
						</div>
						<div>
							{totalInterest !== null && (
								<span>
									Total Interest: ₹{totalInterest.toFixed(2)}
								</span>
							)}
						</div>
					</>
				)}
			</form>
		</div>
	);
};

export default MortageCalculator;
