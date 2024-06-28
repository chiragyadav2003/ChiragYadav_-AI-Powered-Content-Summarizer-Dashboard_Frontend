// src/pages/Dashboard.jsx
import { useState } from 'react';
import TextInputArea from '../components/TextInputArea';
import UrlInputField from '../components/UrlInputField';
import ResultsDisplay from '../components/ResultDisplay'
import HistorySection from '../components/HistorySection';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchContentFromUrl } from '../utils/WebScraping';
import { getAISummary } from '../utils/aiAummarization'

const Dashboard = () => {
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  const [summaryLength, setSummaryLength] = useState('short');
  const [url, setUrl] = useState('');

  const handleUrlSubmit = async (url) => {
    setLoading(true);
    setError('');
    try {
      const scrapedContent = await fetchContentFromUrl(url);
      setContent(scrapedContent);
      setUrl(url);
    } catch (error) {
      setError('Failed to fetch content from the provided URL');
    } finally {
      setLoading(false);
    }
  };

  const handleSummarize = async () => {
    setLoading(true);
    setError('');
    try {
      const summary = await getAISummary(url, summaryLength);
      setSummary(summary);
      console.log("summary", summary)
      setHistory([...history, { content, summary }]);
    } catch (error) {
      setError('Failed to summarize the content');
    } finally {
      setLoading(false);
    }
  };

  console.log("summary", summary)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">AI-Powered Content Summarizer Dashboard</h1>
      <UrlInputField onSubmit={handleUrlSubmit} />
      <TextInputArea value={content} onChange={setContent} />
      <div className="mt-4">
        <label className="mr-2">Summary Length:</label>
        <select value={summaryLength} onChange={(e) => setSummaryLength(e.target.value)} className="border p-1 rounded">
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </select>
      </div>
      <button
        className="bg-blue-500 text-white p-2 mt-4 rounded"
        onClick={handleSummarize}
        disabled={loading}
      >
        Summarize
      </button>
      {loading && <LoadingSpinner />}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <ResultsDisplay summary={summary} />
      <HistorySection history={history} />
    </div>
  );
};

export default Dashboard;
