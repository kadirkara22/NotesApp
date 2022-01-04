import './App.css';
import NoteList from './components/noteContent/NoteList';
import NoteTile from './components/noteTitle/NoteTile';

function App() {
  return (
    <div className="app">
      <NoteTile />
      <NoteList />
    </div>
  );
}

export default App;
