
const HistorySection = ({ history }) => (
  <div className="mt-8">
    <h2 className="text-xl font-semibold mb-4">History:</h2>
    {history.map((entry, index) => (
      <div key={index} className="p-4 border rounded mb-4 bg-gray-50">
        <h3 className="font-semibold">Original Content:</h3>
        <p className="whitespace-pre-wrap">{entry.content}</p>
        <h3 className="font-semibold mt-2">Summary:</h3>
        <p className="whitespace-pre-wrap">{entry.summary}</p>
      </div>
    ))}
  </div>
);

export default HistorySection;
