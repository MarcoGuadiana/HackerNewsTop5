const StoryItem = ({ story }) => {
  return (
    <div style={{ borderBottom: '1px solid #eee', padding: '15px' }}>
      {/* Title with a link to the URL */}
      <h3>
        <a href={story.url} target="_blank" rel="noreferrer">
          {story.title || "No Title Provided"}
        </a>
      </h3>
      
      {/* Text (Hacker News uses HTML in text, so we use dangerouslySetInnerHTML) */}
      {story.text && (
        <div 
          style={{ fontSize: '0.9rem', color: '#555' }}
          dangerouslySetInnerHTML={{ __html: story.text }} 
        />
      )}
      
      {/* Small URL footer if no title link exists */}
      {!story.title && <p>{story.url}</p>}
    </div>
  );
};

export default StoryItem;