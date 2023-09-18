import React from 'react';
import './EpicMoments.css';  // Import the custom CSS

const EpicMoments = () => {
  return (
    <div className="epic-moments" style={{ backgroundImage: "url('/palm_trees.jpg')",  backgroundSize: '100%'  }}>
      <img className="epic-image" src="WhatsApp%20Image%202023-09-01%20at%2013.36.06.jpeg" alt="Epic Moment 1" />
      <img className="epic-image" src="WhatsApp%20Image%202023-09-01%20at%2013.36.06%20(2).jpeg" alt="Epic Moment 2" />
      <img className="epic-image" src="WhatsApp%20Image%202023-09-01%20at%2013.34.37.jpeg" alt="Epic Moment 3" />
      {/* Add the other images here */}
    </div>
  );
};

export default EpicMoments;
