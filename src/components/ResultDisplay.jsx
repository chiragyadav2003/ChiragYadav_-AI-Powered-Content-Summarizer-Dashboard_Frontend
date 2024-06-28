
const ResultsDisplay = ({ summary }) => (
  <div className="mt-8">
    <h2 className="text-xl font-semibold mt-4 mb-2">AI-Generated Summary:</h2>
    <div className="p-4 border rounded bg-gray-100 whitespace-pre-wrap">{summary}</div>
  </div>
);

export default ResultsDisplay;
