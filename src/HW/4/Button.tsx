type ButtonPropsType = {
	callBack: () => void; // НУЖНО ПРОТИПИЗИРОВАТЬ any
	name: string; // НУЖНО ПРОТИПИЗИРОВАТЬ any
};

export const Button = (props: ButtonPropsType) => {
	const callBackHandler = () => {
    props.callBack()
	};

	return (
		<button id={"hw04-button"} onClick={callBackHandler}>
			{props.name}
		</button>
	);
};
