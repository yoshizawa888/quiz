type CounterState = {
	count: number;
};
export const quizCounter = () => {
	// counter_stateは保持する状態のkey,idを指定するので全体で重複がないようにする
	const state = useState<CounterState>('counter_state', () => ({
		count: 0,
	}));
	return {
		coutntState: readonly(state),
		countUp: countUp(state),
		resetCount: resetCount(state),
	};
	state;
};
const countUp = (state: Ref<CounterState>) => {
	return () => state.value.count++;
};
const resetCount = (state: Ref<CounterState>) => {
	return () => (state.value.count = 0);
};

type AnswerState = {
	answer: string[][];
};
export const quizeAnswer = () => {
	const state = useState<AnswerState>('answer_state', () => ({
		answer: [],
	}));
	return {
		answerState: readonly(state),
		pushAnswer: pushAnswer(state),
		resetAnswer: resetAnswer(state),
	};
};
const pushAnswer = (state: Ref<AnswerState>) => {
	return (len: number, str: string, ans: string) => {
		if (!state.value.answer[len]) {
			state.value.answer[len] = [];
		}
		state.value.answer[len][0] = str;
		state.value.answer[len][1] = ans;
	};
};
const resetAnswer = (state: Ref<AnswerState>) => {
	return () => {
		state.value.answer = [];
	};
};
