import './App.css';
import Home from './AppLayout/Home';

function App() {
  return (
    <div class='bg-white h-screen'>
      <Home/>
      <div class="h-1/2 flex flex-col justify-center items-center">
      <div className="text-3xl font-bold underline">
        <h1>Sample Projects</h1>
      </div>
      </div>
    </div>
  );
}

export default App;
