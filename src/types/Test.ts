import Answer from "./Answer";

interface Test {
  answers: Answer[];
  question: string;
  currentAnswer: number;
  id?: number;
}
export default Test;
