import { useState } from "react";

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
  const [isAnswerRevealed, setAnswerRevealed] = useState(false);
  const [timer, setTimer] = useState(TimeDuration);
  
  return (
    <div>
      App
    </div>
  )
}

export default App
