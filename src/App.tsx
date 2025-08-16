import { useEffect, useRef, useState } from "react";
import { quizData } from '../constants'

// --- quizData remains the same ---
interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
}

interface Category {
  id: string;
  name: string;
  questions: Question[];
}

const TimeDuration = 90;

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const App = () => {
  const [view, setView] = useState<'category' | 'question'>('category');
  const [displayedCategories, setDisplayedCategories] = useState<Category[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [timer, setTimer] = useState(TimeDuration);

  const usedQuestionIds = useRef<Record<string, number[]>>({});

  // Timer effect - no changes needed here
  useEffect(() => {
    if (view === 'question' && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [view, timer]);

  // Runs only once on initial mount to set up the first round
  useEffect(() => {
    setDisplayedCategories(shuffleArray(quizData));
  }, []);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);

    if (!usedQuestionIds.current[category.id]) {
      usedQuestionIds.current[category.id] = [];
    }

    let availableQuestions = category.questions.filter(
      (q) => !usedQuestionIds.current[category.id].includes(q.id)
    );

    if (availableQuestions.length === 0) {
      // If all questions in a category are used, reset them for that category
      usedQuestionIds.current[category.id] = [];
      availableQuestions = category.questions;
    }

    const question = shuffleArray(availableQuestions)[0];
    usedQuestionIds.current[category.id].push(question.id);

    setCurrentQuestion(question);
    setView('question');
    setTimer(TimeDuration);
    setIsAnswerRevealed(false);
  };

  const handleRestartTimer = () => {
    setTimer(TimeDuration);
  };

  const handleRevealAnswer = () => {
    setIsAnswerRevealed(true);
  };

  // Contains the new logic for cycling through categories
  const handleNextQuestion = () => {
    if (!selectedCategory) return;

    // Create a new list of categories, excluding the one just played
    const remainingCategories = displayedCategories.filter(
        (cat) => cat.id !== selectedCategory.id
    );

    if (remainingCategories.length === 0) {
        // If no categories are left, the round is over.
        // Start a new round by shuffling all categories again.
        console.log("Round finished! Starting a new round of categories.");
        setDisplayedCategories(shuffleArray(quizData));
    } else {
        // Otherwise, continue the current round with the remaining categories.
        setDisplayedCategories(remainingCategories);
    }

    // Reset state to go back to the category selection screen
    setView('category');
    setCurrentQuestion(null);
    setSelectedCategory(null);
    setIsAnswerRevealed(false);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col items-center justify-center font-sans p-4">

      <div className="flex items-center justify-center">
        <img src="/images/TechMath.png" alt="Techmath" className="w-[300px] h-auto mb-10" />
      </div>
      <div className="w-full max-w-6xl mx-auto bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-6">
          Buzzer Round
        </h1>

        {view === 'category' && (
          <div className="animate-fade-in">
            <h2 className="text-xl md:text-2xl text-center mb-6">
              Choose a Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* This JSX now correctly renders all available categories for the round */}
              {displayedCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category)}
                  className="bg-slate-700 p-6 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:scale-105 transition-transform duration-300"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'question' && currentQuestion && selectedCategory && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-cyan-400 bg-slate-700 px-3 py-1 rounded">
                {selectedCategory.name}
              </h2>
              <div className={`text-4xl font-bold transition-colors duration-300 ${timer <= 10 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
                {formatTime(timer)}
              </div>
            </div>

            <div className="bg-slate-700 p-6 rounded-lg mb-6">
              <p className="text-xl md:text-2xl text-center">{currentQuestion.text}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {currentQuestion.options.map((option, index) => {
                const isCorrect = index === currentQuestion.correctAnswerIndex;
                const highlightClass = isAnswerRevealed && isCorrect ? 'bg-green-600 ring-2 ring-white' : 'bg-slate-600';

                return (
                  <div
                    key={index}
                    className={`p-4 rounded-lg text-center transition-colors duration-300 ${highlightClass}`}
                  >
                    {option}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleRestartTimer}
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Restart Timer
              </button>
              <button
                onClick={handleRevealAnswer}
                disabled={isAnswerRevealed}
                className="bg-green-500 hover:bg-green-600 text-slate-900 font-bold py-2 px-4 rounded-lg transition-colors disabled:bg-slate-500 disabled:cursor-not-allowed"
              >
                Correct
              </button>
              <button
                onClick={handleNextQuestion}
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div> 
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;