import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="ml-20 mr-20 mb-20">
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10">
        <div className="collapse-title text-xl font-medium">What are the different ways to manage a state in a React application?</div>
        <div className="collapse-content">
          <p>Beau Carnes. React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10">
        <div className="collapse-title text-xl font-medium">How does prototypical inheritance work?</div>
        <div className="collapse-content">
          <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10">
        <div className="collapse-title text-xl font-medium"> What is a unit test? Why should we write unit tests?</div>
        <div className="collapse-content">
          <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10">
        <div className="collapse-title text-xl font-medium">React vs. Angular vs. Vue?</div>
        <div className="collapse-content">
          <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
