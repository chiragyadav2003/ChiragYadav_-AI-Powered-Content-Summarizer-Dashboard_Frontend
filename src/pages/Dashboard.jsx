import { useState } from 'react';
import TextInputArea from '../components/TextInputArea';
import UrlInputField from '../components/UrlInputField';
import ResultsDisplay from '../components/ResultDisplay';
import HistorySection from '../components/HistorySection';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchContentFromUrl } from '../utils/WebScraping';
import { getAISummary } from '../utils/aiSummarization';

const Dashboard = () => {
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  const [outputSentences, setOutputSentences] = useState(3);
  const [url, setUrl] = useState('');

  const handleUrlSubmit = async (url) => {
    setLoading(true);
    setError('');
    try {
      const scrapedContent = await fetchContentFromUrl(url);
      setContent(scrapedContent);
      setUrl(url => url);
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
      const summaryData = await getAISummary(content, outputSentences);
      setSummary(summaryData); // Adjust based on the actual response structure
      setHistory([...history, { content, summary: summaryData }]); // Adjust based on the actual response structure
    } catch (error) {
      setError('Failed to summarize the content');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">AI-Powered Content Summarizer Dashboard</h1>
      <UrlInputField onSubmit={handleUrlSubmit} />
      <TextInputArea value={content} onChange={setContent} />
      <div className="mt-4">
        <label className="mr-2">Number of Output Sentences:</label>
        <select value={outputSentences} onChange={(e) => setOutputSentences(e.target.value)} className="border p-1 rounded">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
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
      <ResultsDisplay content={content} summary={summary} />
      <HistorySection history={history} />
    </div>
  );
};

export default Dashboard;
