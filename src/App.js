import { useState } from "react";

import Accordion from "./components/Accordion/Accordion";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.scss";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  const slides = [
    { image: "slide1.jpg", alt: "Slide 1" },
    { image: "slide2.jpg", alt: "Slide 2" },
    { image: "slide3.jpg", alt: "Slide 3" },
  ];

  return (
    <div>
      <Header />
      <section>
        <Accordion />
      </section>
      <section>
        <div id="goal-form">
          <CourseInput onAddGoal={addGoalHandler} />
        </div>
        <div id="goals">{content}</div>
      </section>
      <section>
        <Carousel slides={slides} />
      </section>
    </div>
  );
}

export default App;
