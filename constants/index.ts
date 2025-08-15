export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswerIndex: number;
}

export interface Category {
    id: string;
    name: string;
    questions: Question[];
}

export const quizData: Category[] = [
    {
        id: 'iq',
        name: 'IQ',
        questions: [
            { id: 1, text: 'What does "CPU" stand for?', options: ['Central Process Unit', 'Computer Personal Unit', 'Central Processing Unit', 'Central Processor Unit'], correctAnswerIndex: 2 },
            { id: 2, text: 'Which company developed the React library?', options: ['Google', 'Facebook', 'Twitter', 'Microsoft'], correctAnswerIndex: 1 },
            { id: 3, text: 'What is the main purpose of CSS?', options: ['To structure web pages', 'To style web pages', 'To handle server logic', 'To manage databases'], correctAnswerIndex: 1 },
        ],
    },
    {
        id: 'maths',
        name: 'Maths',
        questions: [
        { id: 1, text: 'What is the chemical symbol for water?', options: ['H2O', 'O2', 'CO2', 'NaCl'], correctAnswerIndex: 0 },
        { id: 2, text: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], correctAnswerIndex: 1 },
        { id: 3, text: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondrion', 'Cell Wall'], correctAnswerIndex: 2 },
        ],
    },
    {
        id: 'cs',
        name: 'Computer Science',
        questions: [
        { id: 1, text: 'Who was the first President of the United States?', options: ['Abraham Lincoln', 'Thomas Jefferson', 'George Washington', 'John Adams'], correctAnswerIndex: 2 },
        { id: 2, text: 'In which year did World War II end?', options: ['1942', '1945', '1950', '1939'], correctAnswerIndex: 1 },
        ],
    },
    {
        id: 'algo',
        name: 'Algorithms',
        questions: [
        { id: 1, text: 'What is the capital of Japan?', options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'], correctAnswerIndex: 2 },
        { id: 2, text: 'Which is the largest ocean on Earth?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correctAnswerIndex: 3 },
        { id: 3, text: 'What is the longest river in the world?', options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'], correctAnswerIndex: 1 },
        ],
    },
];