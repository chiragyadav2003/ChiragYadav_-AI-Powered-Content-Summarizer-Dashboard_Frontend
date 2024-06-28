
import { FaSpinner } from 'react-icons/fa';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center mt-4">
    <FaSpinner className="animate-spin text-4xl" />
  </div>
);

export default LoadingSpinner;