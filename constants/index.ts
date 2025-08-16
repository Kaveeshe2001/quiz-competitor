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
                text: 'Which number logically replaces the question mark? 2, 6, 12, 20, 30, ?',  // The difference increases by 2 each time (+4, +6, +8, +10, +12)
                options: ['A). 32', 'B). 40', 'C). 42', 'D). 36'],
                correctAnswerIndex: 2 // 30 + 12 = 42
            },
            {
                id: 2,
                text: 'If 2 = 6, 3 = 12, 4 = 20, then 5 = ?', // The pattern is n * (n + 1)
                options: ['A). 25', 'B). 30', 'C). 35', 'D). 40'],
                correctAnswerIndex: 1 // 5 * (5 + 1) = 30
            },
            {
                id: 3,
                text: 'What letter comes next? A D H K O', // The pattern of jumps between letters is +3, +4, +3, +4...
                options: ['A). R', 'B). S', 'C). T', 'D). U'],
                correctAnswerIndex: 0 // O (15) + 3 = 18, which is R
            },
            {
                id: 4,
                text: 'In a classroom, the ratio of male to female students is 3:5. If there are 40 students in total, how many are female?',
                options: ['A). 15', 'B). 20', 'C). 25', 'D). 30'],
                correctAnswerIndex: 2 // Total parts = 8. 40/8 = 5 per part. Females = 5 * 5 = 25
            },
            {
                id: 5,
                text: 'A printer prints 25 pages per minute. How long to print 600 pages?',
                options: ['A). 20 min', 'B). 24 min', 'C). 25 min', 'D). 30 min'],
                correctAnswerIndex: 1 // 600 pages / 25 ppm = 24 minutes
            },
            {
                id: 6,
                text: 'Find the odd one out:',
                options: ['A). Triangle', 'B). Circle', 'C). Square', 'D). Rectangle'],
                correctAnswerIndex: 1 // Circle is a curve, the others are polygons
            },
        ],
    },
    {
        id: 'maths',
        name: 'Maths & Statistics',
        questions: [
            {
                id: 1,
                text: 'A car travels 120 km in 1 hour 36 mins. Average speed?',
                options: ['A). 100 km/h', 'B). 75 km/h', 'C). 80 km/h', 'D). 90 km/h'],
                correctAnswerIndex: 1 // 120 km / 1.6 hours = 75 km/h
            },
            {
                id: 2,
                text: 'Rs.1000 increases 10% yearly for 2 years with compound interest. Final value?',
                options: ['A). Rs.1210', 'B). Rs.1200', 'C). Rs.1220', 'D). Rs.1100'],
                correctAnswerIndex: 0 // 1000 * 1.10 * 1.10 = 1210
            },
            {
                id: 3,
                text: 'Cube with side 3m. Diagonal of one face?',
                options: ['A). √18', 'B). √27', 'C). √9', 'D). √12'],
                correctAnswerIndex: 0 // √(3² + 3²) = √(9 + 9) = √18
            },
            {
                id: 4,
                text: 'If a process handles 4 tasks/sec, how long (in minutes) to complete 1920 tasks?',
                options: ['A). 6', 'B). 8', 'C). 10', 'D). 12'],
                correctAnswerIndex: 1 // 1920 tasks / 4 tps = 480 seconds. 480 / 60 = 8 minutes
            },
            {
                id: 5,
                text: 'Convert 5.5 feet to cm (1 ft = 30.48 cm)?',
                options: ['A). 167.64 cm', 'B). 165.20 cm', 'C). 155.40 cm', 'D). 160.94 cm'],
                correctAnswerIndex: 0 // 5.5 * 30.48 = 167.64
            },
            {
                id: 6,
                text: 'Double a number, add 6 = 20. What’s the number?',
                options: ['A). 7', 'B). 6', 'C). 8', 'D). 9'],
                correctAnswerIndex: 0 // (20 - 6) / 2 = 7
            },
            {
                id: 7,
                text: 'A 5kg cotton bag vs a 5kg iron ball. Which is heavier?',
                options: ['A). Cotton', 'B). Iron', 'C). Same', 'D). Depends on gravity'],
                correctAnswerIndex: 2 // 5kg is 5kg, regardless of the material
            },
            {
                id: 8,
                text: 'Probability of drawing 2 red cards in a row from 52-card deck (no replacement)?',
                options: ['A). 1/13', 'B). 25/102', 'C). 13/102', 'D). 1/26'],
                correctAnswerIndex: 1 // (26/52) * (25/51) = 25/102
            },
            {
                id: 9,
                text: 'A Student travels 20 km by 30 minutes by bike. What is their average speed in km/h?',
                options: ['A). 30', 'B). 40', 'C). 50', 'D). 60'],
                correctAnswerIndex: 1 // 20 km / 0.5 hours = 40 km/h
            },
            {
                id: 10,
                text: 'What will len("Hello") return in Python?',
                options: ['A). 4', 'B). 5', 'C). 6', 'D). Error'],
                correctAnswerIndex: 1 // The string "Hello" has 5 characters
            },
        ],
    },
    {
        id: 'cs',
        name: 'Computer Science',
        questions: [
            {
                id: 1,
                text: 'Alan Turing is known for the Turing Test. What does it primarily evaluate?',
                options: ['A). Machine accuracy', 'B). CPU speed', 'C). AI’s human-likeness', 'D). Encryption strength'],
                correctAnswerIndex: 2
            },
            {
                id: 2,
                text: 'Your printer isn’t recognized even after driver installation. What’s the next best step?',
                options: ['A). Install antivirus', 'B). Change paper settings', 'C). Check device manager', 'D). Format the PC'],
                correctAnswerIndex: 2
            },
            {
                id: 3,
                text: 'You want to back up your photos. Which is best?',
                options: ['A). RAM', 'B). SSD', 'C). Cloud storage', 'D). Graphics card'],
                correctAnswerIndex: 2
            },
            {
                id: 4,
                text: 'Which protocol ensures reliable transmission over the Internet?',
                options: ['A). UDP', 'B). TCP', 'C). HTTP', 'D). IP'],
                correctAnswerIndex: 1
            },
            {
                id: 5,
                text: 'A compressed ZIP file contains multiple folders. Which operation preserves the structure while viewing?',
                options: ['A). Drag to desktop', 'B). Recompress', 'C). Extract to folder', 'D). Rename'],
                correctAnswerIndex: 2
            },
            {
                id: 6,
                text: 'Keyboard layout changed accidentally. Which shortcut helps revert quickly in Windows?',
                options: ['A). Alt + Shift', 'B). Ctrl + Z', 'C). Win + P', 'D). Ctrl + Shift'],
                correctAnswerIndex: 0
            },
            {
                id: 7,
                text: 'Bluetooth is primarily used for,',
                options: ['A). Charging phones', 'B). Short-range wireless communication', 'C). Internet browsing', 'D). Scanning QR codes'],
                correctAnswerIndex: 1
            },
            {
                id: 8,
                text: 'High phone temperature during gaming indicates load on,',
                options: ['A). GPU shaders', 'B). ROM cache', 'C). Kernel processes', 'D). Backlight system'],
                correctAnswerIndex: 0
            },
            {
                id: 9,
                text: 'You are typing in Word, but the letters appear in Sinhala by mistake. What’s the fastest fix?',
                options: ['A). Change the font', 'B). Restart the computer', 'C). Change the keyboard layout', 'D). Paste the text again'],
                correctAnswerIndex: 2
            },
            {
                id: 10,
                text: 'If your laptop has 8GB RAM, what does it affect most?',
                options: ['A). Display quality', 'B). Processing speed', 'C). Sound output', 'D). Printer speed'],
                correctAnswerIndex: 1
            },
        ],
    },
    {
        id: 'algo',
        name: 'Algorithms',
        questions: [
            {
                id: 1,
                text: 'You are building a task scheduler where tasks are added in real-time and must be executed in the exact order they arrive. Which data structure is the best choice for this scenario?',
                options: ['A). Stack', 'B). Queue', 'C). Linked List', 'D). Binary Tree'],
                correctAnswerIndex: 1 // Queue follows a First-In, First-Out (FIFO) principle
            },
            {
                id: 2,
                text: 'Which algorithm is most efficient for finding the maximum in an unsorted array?',
                options: ['A). Binary Search', 'B). Bubble Sort', 'C). Linear Search', 'D). Merge Sort'],
                correctAnswerIndex: 2 // Linear search is O(n), while sorting first would be slower.
            },
            {
                id: 3,
                text: 'Which of the following is not a stable sorting algorithm in its typical implementation.',
                options: ['A). Insertion Sort', 'B). Merge Sort', 'C). Quick Sort', 'D). Bubble Sort'],
                correctAnswerIndex: 2 // Quick Sort is not stable.
            },
            {
                id: 4,
                text: 'What will be the output? stack = []; stack.append(10); stack.append(20); stack.pop(); stack.append(30); print(stack[0])',
                options: ['A). 10', 'B). 20', 'C). 30', 'D). Error'],
                correctAnswerIndex: 0 // Steps: [10] -> [10, 20] -> [10] -> [10, 30]. The element at index 0 is 10.
            },
            {
                id: 5,
                text: 'from collections import deque; dq = deque([1,2,3]); dq.append(4); dq.popleft(); print(list(dq))',
                options: ['A). [1,2,3,4]', 'B). [2,3,4]', 'C). [4,1,2,3]', 'D). [1,2,3]'],
                correctAnswerIndex: 1 // Steps: [1,2,3] -> [1,2,3,4] -> [2,3,4].
            },
             {
                id: 6,
                text: 'What is the result of 5 % 2 in most programming languages?',
                options: ['A). 2', 'B). 1', 'C). 0', 'D). 2.5'],
                correctAnswerIndex: 1 // The modulo operator returns the remainder of a division.
            },
        ],
    },
];