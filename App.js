import Header from './Header';
import StoryList from './StoryList';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <Header />
      <StoryList />
    </div>
  );
}

export default App;