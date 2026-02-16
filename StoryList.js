import { useState, useEffect } from 'react';
import StoryItem from './StoryItem';


const StoryList = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this URL with your Python backend endpoint (e.g., http://localhost:5000/top-stories)
    
    fetch('http://127.0.0.1:5000/top-stories')
      .then(res => res.json())
      .then(data => {
        setStories(data);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching stories:", err));
  }, []);

  if (loading) return <p>Loading the latest stories...</p>;

  return (
    <main>
      {stories.map(item => (
        <StoryItem key={item.id} story={item} />
      ))}
    </main>
  );
};

export default StoryList;