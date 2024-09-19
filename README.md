<h1 align="center">Quiz Aplication</h1>

<h2 align="center">⚒️ Languages-Frameworks-Tools ⚒️</h2>
<br/>
<div align="center">
    <img src="https://skillicons.dev/icons?i=nodejs,javascript,vite,html,css,npm,htmx" />
</div>

## Overview

This is a Quiz Application built with **React** and **Vite** that fetches questions and answers from an API. Users can answer multiple-choice questions, and the app provides immediate feedback by changing the color of the selected answer:
- **Green** for correct answers
- **Red** for incorrect answers, while also revealing the correct answer.

At the end of the quiz, the user is presented with their score.

## Features

- Fetches questions and answers dynamically from an API
- Displays immediate feedback after answering each question:
  - Correct answer: highlighted in **green**
  - Incorrect answer: selected answer highlighted in **red** and correct answer revealed in **green**
- Displays the user's total score at the end
- Simple and responsive UI built with React

## Technology Stack

- **Frontend**: React (with hooks)
- **Build Tool**: Vite
- **CSS**: Custom CSS
- **State Management**: React `useState`, `useEffect`
- **HTTP Client**: Axios / Fetch API

## Application Flow

1. **Fetching Questions**:
   - On component mount, the app sends a GET request to the API and retrieves the quiz questions and answers.

2. **Rendering Questions**:
   - Each question is rendered with multiple options. The user can select one option per question.

3. **Answer Feedback**:
   - After a user selects an answer:
     - If the answer is correct, it turns **green**.
     - If the answer is incorrect, the chosen answer turns **red**, and the correct answer is highlighted in **green**.

4. **Score Calculation**:
   - At the end of the quiz, the user's score is displayed based on the number of correct answers.

## Components

### `Quiz.js`
- Responsible for rendering the list of questions and managing the quiz state.
- Handles user interactions and updates the state to reflect whether the selected answer is correct or not.
- Renders a single question along with its answer options.
- Handles the color feedback logic when an answer is selected.
- Displays the user's total score after the quiz is completed.

## License

This project is licensed under the MIT License.

