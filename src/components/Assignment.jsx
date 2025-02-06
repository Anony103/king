import React from 'react';

function Assignment() {
  return (
    <section id="assignment" className="my-8 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center">Assignment</h2>
      <div className="mt-4">
        <h3 className="text-xl md:text-2xl font-semibold">Machine Learning</h3>
        <p className="text-sm md:text-base">A branch of artificial intelligence that enables systems to learn and improve from experience without explicit programming.</p>

        <h3 className="text-xl md:text-2xl font-semibold mt-4">Artificial Intelligence (AI)</h3>
        <p className="text-sm md:text-base">The simulation of human intelligence in machines programmed to think, learn, and make decisions.</p>

        <h3 className="text-xl md:text-2xl font-semibold mt-4">Supervised Data/Model</h3>
        <p className="text-sm md:text-base">A machine learning method where the model is trained on labeled data to predict outcomes.</p>

        <h3 className="text-xl md:text-2xl font-semibold mt-4">Unsupervised</h3>
        <p className="text-sm md:text-base">A machine learning method where the model identifies patterns or structures in unlabeled data.</p>

        <h3 className="text-xl md:text-2xl font-semibold mt-4">Deep Learning</h3>
        <p className="text-sm md:text-base">A subset of machine learning that uses neural networks with many layers to analyze data and solve complex problems.</p>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Problem-Solving Task</h2>
        <h3 className="text-xl md:text-2xl font-semibold mt-4">Fixing a State Update Bug in React</h3>
        <p className="text-sm md:text-base">
          You are given a React component that updates a counter when a button is clicked. However, the counter is not updating correctly.
          Your task is to:
        </p>
        <ol className="list-decimal ml-6 md:ml-8 mt-2 text-sm md:text-base">
          <li>Identify the issue causing the incorrect state update.</li>
          <li>Debug and isolate the problem.</li>
          <li>Fix the error and test the component.</li>
          <li>Document the entire procedure, including how you identified the bug and how you fixed it.</li>
        </ol>
        
        <h3 className="text-xl md:text-2xl font-semibold mt-4">Example Code:</h3>
        <pre className="bg-gray-100 p-4 md:p-6 rounded-md mt-2 overflow-x-auto">
          <code className="text-sm md:text-base">
            {`import React, { useState } from 'react';

            function Counter() {
              const [count, setCount] = useState(0);

              const increment = () => {
                setCount(count + 1); // Potential issue here
              };

              return (
                <div>
                  <p>Count: {count}</p>
                  <button onClick={increment}>Increment</button>
                </div>
              );
            }

            export default Counter;`}
          </code>
        </pre>
      </div>
    </section>
  );
}

export default Assignment;
