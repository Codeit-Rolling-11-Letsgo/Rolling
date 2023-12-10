import './PrimaryButton.scss';

const Button = ({ type, size, children }) => {
	const classNames = ['button', type, size].filter(Boolean).join(' ');

	return (
		<button className={classNames}>
			<div>{children}</div>
		</button>
	);
};

export default Button;

/*
// App.jsx
import React from "react";
import Button from "./Primary.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Button type="focus" size="basic">
        버튼 테스트
      </Button>
    </div>
  );
}
*/
