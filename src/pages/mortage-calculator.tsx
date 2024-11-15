import { ChangeEvent, useState } from "react";

const MortageCalculator = () => {
	//use state
	const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
	const [totalPayment, setTotalPayment] = useState<number | null>(null);
	const [totalInterest, setTotalInterest] = useState<number | null>(null);

	//Functions for calculating.

	const calculate = (e: ChangeEvent<HTMLFormElement>) => {
		//Prevent Default form submission
		e.preventDefault();

		//Get the values from the form element
		const f = new FormData(e.target);
		const loanAmount = Number(f.get("loan_amount")?.toString());
		const roi = Number(f.get("roi")?.toString());
		const monthlyInterest = roi / 12 / 100;
		const loan_period = Number(f.get("loan_period")?.toString());
		const loan_term = loan_period * 12;

		const calculateMonthlyPayment = Math.round(
			(loanAmount *
				(monthlyInterest * Math.pow(1 + monthlyInterest, loan_term))) /
				(Math.pow(1 + monthlyInterest, loan_term) - 1)
		);
		setMonthlyPayment(calculateMonthlyPayment);

		const calculateTotalPayment = calculateMonthlyPayment * loan_term;
		setTotalPayment(calculateTotalPayment);

		const calculateTotalInterest = calculateTotalPayment - loanAmount;
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
						type='number'
						placeholder='Loan Amount'
					/>
					<input
						name='roi'
						type='number'
						placeholder='Annual interest rate(%)'
					/>
					<input
						name='loan_period'
						type='number'
						placeholder='Loan period'
					/>
				</div>
				<button type='submit'>Calculate</button>
				<div>
					{monthlyPayment !== null && (
						<span>
							Monthly Payment: ₹{monthlyPayment.toFixed(2)}
						</span>
					)}
				</div>
				<div>
					{totalPayment !== null && (
						<span>Total Payment: ₹{totalPayment.toFixed(2)}</span>
					)}
				</div>
				<div>
					{totalInterest !== null && (
						<span>Total Interest: ₹{totalInterest.toFixed(2)}</span>
					)}
				</div>
			</form>
		</div>
	);
};

export default MortageCalculator;
