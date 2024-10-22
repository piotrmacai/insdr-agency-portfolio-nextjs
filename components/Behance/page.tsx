import React from 'react';

const BehanceEmbed: React.FC = () => {
  return (
    <div>
      <h2>My Behance Profile</h2>
      <iframe
        src="https://www.behance.net/macaistudio"
        width="100%"
        height="600"
        style={{ border: 'none' }}
        title="Behance Profile"
      ></iframe>
    </div>
  );
};

export default BehanceEmbed;