# Project Name  
Dev Stack

---

## Table of Contents

- [About the Project](#about-the-project)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Installation️ & Setup](#installation--setup)
- [Folder Structure](#folder-structure)
- [Contributions](#contributions)
- [How to Contribute](#how-to-contribute)
- [Contact](#contact)

---

## About the Project 
This website contains sets of technologies used together to build a website, software, web app, etc. Choose your stack to work with and continue learning and moving forward.

---

## Project Overview  
- A bunch of information on the technologies and choice to build your stack yourself. 



---

## Key Features  

- Technology information cards, categories, types, rating
- Add or Remove technologies 
- Responsive design

---

## Tech Stack  
- React.js
- Tailwind CSS, DaisyUI, React Icons
- TypeScript
- JavaScript (ES6+)
- React-Toastify
- JSON 
- Vite

---

## Dependencies 

- React
- React DOM
- JavaScript
- TypeScript
- Vite
- Tailwind CSS


---

## Installation️ & Setup


---

## Folder Structure

```text
Dev-Stack/
├── public/
│   ├── icons/
│   ├── data.json
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── TechnologiesSection/
│   │   │   ├── TechnologiesSection.tsx
│   │   │   ├── TechnologyStack.tsx
│   │   │   ├── TechnologyStackCards.tsx
│   │   │   ├── YourStack.tsx
│   │   │   └── YourStackCard.tsx
│   │   ├── Banner.tsx
│   │   ├── Footer.tsx
│   │   └── NavBar.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── README.md
├── package.json
└── vite.config.ts
```

---

## How to Contribute (Optional)

  - Fork the Project
  - Create a branch (`git checkout -b feature/AmazingFeature`)
  - Commit changes (`git commit -m 'Add some AmazingFeature'`)
  - Push the branch (`git push origin feature/AmazingFeature`)
  - Open a Pull Request

---
## Q&A

1. What is JSX, and why is it used in React?
  - JSX is like an extended version of JavaScript where we can write/use HTML. It is used in React because it allows us to write HTML in React.
2. What is the difference between props and state?
  - State works like a variable in React, and sending data as props is a way to pass down data from one component to another component as object.
3. What does the useState hook do, and where did you use it in this project?
  - useState hook let us set state in a React project, which works like a variable to work with. I used useState to set the selected stack array that stores     array of 'stack' data. 
4. What does the useEffect hook do, and why did you need it to load the JSON data?
  - useEffect hook fetches data and it let us use the data. useEffect or modern use() allow use to use data fetched from the api. Without useEffect, we can't use fetched data in the application.
5. Why does every item in a .map() list need a unique key prop?
  - Uniqe key prop is needed to as a uniqe id or something like that to use as an identifier for the elements. This helps React track the elements and keep a stable way to re-render data in the application. 
6. What is conditional rendering? Show one place you used it (example: the empty stack message).
  - A conditional rendering is when a render depends on a certain condition and React renders certain content or re-renders it based on the logic. Such as, I used 'Add to Stack' button as one of conditional rendering. When a stack is added to Your stack, it will re-render that button text as  '✓ Added to Stack' and if the stack is cleared from Your Stack, it will again re-render and render text as 'Add to Stack'
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
  - From one component to another component, data is passed down as props. React is a unidirectional data flow library. In React, it's not possible to access data from a child. But if the data flows from parent to child, then every child under that parent can access the data. 
---

## Contact

**Live URL:** [Live Site](https://dev-stack-ar.netlify.app/)
**Email:** [Email](dev.abdurrahman0205@gmail.com)
