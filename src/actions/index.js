export const LOAD_QUESTIONS = "load_question";
export const GAME_STATE = "gameData";
export const INCREMENT_SCORE = "incrementScore";
export const INCREMENT_QUESTION = "incrementQuestion";

export function loadQuestions() {
  const questions = {
    response_code: 0,
    results: [
      {
        category: 'Entertainment: Books',
        type: 'multiple',
        difficulty: 'medium',
        question:
          'Who wrote the &quot;A Song of Ice And Fire&quot; fantasy novel series?',
        correct_answer: 'George R. R. Martin',
        incorrect_answers: ['George Lucas', 'George Orwell', 'George Eliot']
      },
      {
        category: 'Entertainment: Video Games',
        type: 'multiple',
        difficulty: 'medium',
        question:
          'Which one of the following actors did not voice a character in &quot;Saints Row: The Third&quot;?',
        correct_answer: 'Ron Jeremy',
        incorrect_answers: ['Sasha Grey', 'Burt Reynolds', 'Hulk Hogan']
      },
      {
        category: 'General Knowledge',
        type: 'multiple',
        difficulty: 'hard',
        question:
          'Before the 19th Century, the &quot;Living Room&quot; was originally called the...',
        correct_answer: 'Parlor',
        incorrect_answers: ['Open Room', 'Sitting Room', 'Loft']
      },
      {
        category: 'Entertainment: Music',
        type: 'multiple',
        difficulty: 'medium',
        question:
          'Which Toronto landmark was featured on the cover art of Canadian rapper Drake&#039;s 2016 album &quot;Views&quot;?',
        correct_answer: 'CN Tower',
        incorrect_answers: [
          'Allan Gardens',
          'Union Station',
          'Prince of Wales Theatre'
        ]
      },
      {
        category: 'Science: Computers',
        type: 'multiple',
        difficulty: 'medium',
        question:
          'While Apple was formed in California, in which western state was Microsoft founded?',
        correct_answer: 'New Mexico',
        incorrect_answers: ['Washington', 'Colorado', 'Arizona']
      },
      {
        category: 'Entertainment: Video Games',
        type: 'multiple',
        difficulty: 'easy',
        question: 'Who is the main protagonist of Dead Space?',
        correct_answer: 'Isaac Clarke',
        incorrect_answers: [
          'Commander Shepard',
          'Gordon Freeman',
          'Master Chief'
        ]
      },
      {
        category: 'Entertainment: Comics',
        type: 'multiple',
        difficulty: 'medium',
        question:
          'Which of the following superheros did Wonder Woman NOT have a love interest in?',
        correct_answer: 'Green Arrow',
        incorrect_answers: ['Superman', 'Batman', 'Steve Trevor']
      },
      {
        category: 'Geography',
        type: 'multiple',
        difficulty: 'hard',
        question: 'What city is known as the Rose Capital of the World?',
        correct_answer: 'Tyler, Texas',
        incorrect_answers: [
          'San Diego, California',
          'Miami, Florida',
          'Anaheim, California'
        ]
      },
      {
        category: 'Entertainment: Video Games',
        type: 'multiple',
        difficulty: 'easy',
        question:
          'Which of the following is not a faction in Tom Clancy&#039;s The Division?',
        correct_answer: 'CDC',
        incorrect_answers: ['Cleaners', 'Last Man Batallion', 'Rikers']
      },
      {
        category: 'Geography',
        type: 'multiple',
        difficulty: 'easy',
        question: 'What is the capital of Spain?',
        correct_answer: 'Madrid',
        incorrect_answers: ['Barcelona', 'Sevilla', 'Toledo']
      }
    ]
  };
  return {
    type: LOAD_QUESTIONS,
    payload: questions
  };
}

export function gameState() {
  let gameData = { 
    currentQuestion: 0,
    winner: null,
    players: [
      { name: 'Knox', score: 0, color: '#43BCCD' },
      { name: 'Alice', score: 0, color: '#662E9B' },
      { name: 'Richie', score: 0, color: '#F04E37' },
      { name: 'Rick', score: 0, color: '#F86624' },
      { name: 'Carl', score: 0, color: '#F9C80E' },
      { name: 'Jason', score: 0, color: '#3d3d3d' },
      { name: 'Rich', score: 0, color: '#756540' },
      { name: 'Aaron', score: 0, color: '#43a855' },
      { name: 'Edward', score: 0, color: '#3c60c4' },
      { name: 'Sean', score: 0, color: '#c63bbb' }
    ]
  };
  return {
    type: GAME_STATE,
    payload: gameData
  };
}

export function updateScore(id) {
  return {
    type: INCREMENT_SCORE,
    payload: id
  };
}

export function updateRound(nextQuestion) {
  return {
    type: INCREMENT_QUESTION,
    payload: nextQuestion
  };
}
