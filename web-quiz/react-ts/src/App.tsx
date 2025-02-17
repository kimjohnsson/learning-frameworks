import { Link } from 'react-router';
import './App.css';

const App = () => {
  return (
    <>
      <main>
        <h1>React Web Quiz</h1>

        <p>
          10 questions about video games! Multiple choice one is right. Answer every question within
          15 seconds. 2 life lines will be provided one 50/50 and one +10 s. Each lifeline can only
          be used once during a game."
        </p>

        <Link to="/game">Start</Link>
      </main>
    </>
  );
};

export default App;
