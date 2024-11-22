import { useEffect } from "react";

const MinBy = () => {
	const minBy = <T,>(array: Array<T>, iterates: (value: T) => any) => {
		let val: T | undefined = undefined;
		array.forEach((e) => {
			if (
				val === undefined &&
				iterates(e) !== undefined &&
				iterates(e) !== null
			) {
				val = e;
			} else if (val && iterates(val) > iterates(e)) {
				val = e;
			}
		});
		return val;
	};
	useEffect(() => {
		const meanVal = minBy([4, 2, 8, 6], (num) => num);
		console.log({ meanVal: meanVal });
		const minByVal2 = minBy([{ n: 0 }, { n: 2 }], (o) => o.n);
		console.log(minByVal2);
		const minByVal3 = minBy(
			[{ n: 1 }, { n: 2, m: 3 }, { m: 4 }],
			(o) => o.m
		);
		console.log(minByVal3);
	}, []);

	return <div>Min By</div>;
};

export default MinBy;
