
const TextInputArea = ({ value, onChange }) => (
  <textarea
    className="w-full h-64 p-2 border rounded mt-4"
    placeholder="Type or paste long-form content here..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default TextInputArea;
