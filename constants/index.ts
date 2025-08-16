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

export const quizData: Category[] = [
    {
        id: 'iq',
        name: 'IQ',
        questions: [
            { 
                id: 1, 
                text: 'Which number logically replaces the question mark? 2, 6, 12, 20, 30, ?', 
                options: ['A). 32', 'B). 40', 'C). 42', 'D). 36'], correctAnswerIndex: 2 
            },
            { 
                id: 2, 
                text: 'If 2 = 6, 3 = 12, 4 = 20, then 5 = ?', 
                options: ['A). 25', 'B). 30', 'C). 35', 'D). 40'], correctAnswerIndex: 2 
            },
            { 
                id: 3, 
                text: 'What letter comes next? A D H K O', 
                options: ['A). R', 'B). S', 'C). T', 'D). U'], correctAnswerIndex: 2 
            },
            { 
                id: 4, 
                text: 'In a classroom, the ratio of male to female students is 3:5. If there are 40 students in total, how many are female?', 
                options: ['A). 15', 'B). 20', 'C). 25', 'D). 30'], correctAnswerIndex: 2 
            },
            { 
                id: 5, 
                text: 'A printer prints 25 pages per minute. How long to print 600 pages?', 
                options: ['A). 20 min', 'B). 24 min', 'C). 25 min', 'D). 30 min'], correctAnswerIndex: 2 
            },
            { 
                id: 6, 
                text: 'Find the odd one out:', 
                options: ['A). Triangle', 'B). Circle', 'C). Square', 'D). Rectangle'], correctAnswerIndex: 2 
            },
            
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
            { 
                id: 1, 
                text: 'Alan Turing is known for the Turing Test. What does it primarily evaluate? ', 
                options: ['A). Machine accuracy', 'B). CPU speed', 'C). AI’s human-likeness', 'D). Encryption strength'], correctAnswerIndex: 2 
            },
            { 
                id: 2, 
                text: 'If 2 = 6, 3 = 12, 4 = 20, then 5 = ?', 
                options: ['A). 25', 'B). 30', 'C). 35', 'D). 40'], correctAnswerIndex: 2 
            },
            { 
                id: 3, 
                text: 'What letter comes next? A D H K O', 
                options: ['A). R', 'B). S', 'C). T', 'D). U'], correctAnswerIndex: 2 
            },
            { 
                id: 4, 
                text: 'In a classroom, the ratio of male to female students is 3:5. If there are 40 students in total, how many are female?', 
                options: ['A). 15', 'B). 20', 'C). 25', 'D). 30'], correctAnswerIndex: 2 
            },
            { 
                id: 5, 
                text: 'A printer prints 25 pages per minute. How long to print 600 pages?', 
                options: ['A). 20 min', 'B). 24 min', 'C). 25 min', 'D). 30 min'], correctAnswerIndex: 2 
            },
            { 
                id: 6, 
                text: 'Find the odd one out:', 
                options: ['A). Triangle', 'B). Circle', 'C). Square', 'D). Rectangle'], correctAnswerIndex: 2 
            },
        ],
    },
    {
        id: 'algo',
        name: 'Algorithms',
        questions: [
        { 
                id: 1, 
                text: 'You are building a task scheduler where tasks are added in real-time and must be executed   in the exact order they arrive. Each task has a name and a priority, but the priority is ignored—only the arrival order matters. Which data structure is the best choice for this scenario?', 
                options: ['A). Stack', 'B). Queue', 'C). Linked List', 'D). Binary Tree'], correctAnswerIndex: 2 
            },
            { 
                id: 2, 
                text: 'Which of the following sequence of stack operations will result in the value 2 being the topmost element?', 
                options: ['A). push(1), push(2), pop(), push(2)', 'B). push(2), push(1), pop()', 'C). push(2), push(3), pop(), push(2)', 'D). push(3), push(2), pop(), push(2)'], correctAnswerIndex: 2 
            },
            { 
                id: 3, 
                text: 'Which algorithm is most efficient for finding the maximum in an unsorted array?', 
                options: ['A). Binary Search', 'B). Buble Sort', 'C). Linear Serch', 'D). Merge Sort'], correctAnswerIndex: 2 
            },
            { 
                id: 4, 
                text: 'Which of the following is not a stable sorting algorithm in its typical implementation.', 
                options: ['A). Insertion', 'B). Merge Sort', 'C). Quick Sort', 'D). Bubble Sort'], correctAnswerIndex: 2 
            },
        ],
    },
];