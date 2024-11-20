import { useEffect } from "react";

const Mean = () => {
	const mean = (n: number[]) => {
		const meanValue = () => {
			if (n.length === 0) {
				return NaN;
			} else {
				const total = n.reduce((a, b) => a + b, 0);
				return Math.round((total / n.length) * 100) / 100;
			}
		};
		return meanValue;
	};
	useEffect(() => {
		const meanVal = mean([4, 2, 8, 6]);
		console.log({ meanVal: meanVal() });
	}, []);
	return <div>Mean</div>;
};

export default Mean;
