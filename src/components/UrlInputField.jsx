// src/components/UrlInputField.jsx
import { useState } from 'react';

const UrlInputField = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      onSubmit(url);
      setUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="url"
        className="w-full p-2 border rounded"
        placeholder="Enter URL to scrape content"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">
        Scrape
      </button>
    </form>
  );
};

export default UrlInputField;
