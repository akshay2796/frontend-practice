import { Link } from "react-router-dom";

const PracticeQuestions = () => {
	return (
		<div>
			<h1>Practice Questions</h1>
			<p>Here are some practice questions</p>
			<ol>
				<li>
					<Link to='/practice-questions/mortage-calculator'>
						Mortage Calculator
					</Link>
				</li>
				<li>
					<Link to='/practice-questions/make-counter'>
						Make Counter
					</Link>
				</li>
			</ol>
		</div>
	);
};
export default PracticeQuestions;
