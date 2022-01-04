import './App.css';
import NoteContent from './components/noteContent/NoteContent';
import NoteTile from './components/noteTitle/NoteTile';

function App() {
  return (
    <div className="app">
      <NoteTile />
      <NoteContent />
    </div>
  );
}

export default App;
