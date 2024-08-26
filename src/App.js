// import logo from './logo.svg';
import './styles/Button.css';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Button onClick={() => alert('Primary!')} className="primary">
        Primary Button
      </Button>
      <Button onClick={() => alert('Secondary!')} className="secondary">
        Secondary Button
      </Button>
      <h1 className="text-xl font-bold underline font-mono">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
