import { ChangeEvent, useEffect, useState } from "react";

const MakeCounter = () => {
	const [count, setCount] = useState(0);

	const counterMaker = (n: number = 0) => {
		const counter = () => {
			return n++;
		};
		return counter;
	};

	useEffect(() => {
		const counter = counterMaker();
		console.log({ counter: counter() });
		console.log({ counter: counter() });
		console.log({ counter: counter() });
		console.log({ counter: counter() });
		console.log({ counter: counter() });
	}, []);

	return (
		<div>
			<h3>Make Counter</h3>
			<div>
				<form
					onSubmitCapture={(e: ChangeEvent<HTMLFormElement>) => {
						e.preventDefault();
						const f = new FormData(e.target);
						const counterValue = f.get("counterValue")?.toString();
						if (!isNaN(Number(counterValue))) {
							setCount(Number(counterValue));
						} else {
							setCount(0);
							alert("Invalid counter value");
						}
					}}
				>
					<input
						name='counterValue'
						type='number'
						placeholder='Counter Value'
					/>
					<button type='submit'> Submit </button>
				</form>
			</div>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Count: {count}
			</button>
		</div>
	);
};

export default MakeCounter;
