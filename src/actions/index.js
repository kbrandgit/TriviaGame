export const LOAD_QUESTION = "load_question";

export function loadQuestion() {
  const question = {
    "Response_code": 0,
    "Results": [
      {
        "Category": "Entertainment: Music",
        "Type": "multiple",
        "Difficulty": "hard",
        "Question": "How many members are there in the idol group &quot;&micro;&#039;s&quot;?",
        "Correct_answer": "9",
        "Incorrect_answers": ["48", "6", "3"]
      }
    ]
  };
  return {
    type: LOAD_QUESTION,
    payload: question
  };
}