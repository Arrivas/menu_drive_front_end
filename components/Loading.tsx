import { useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

interface LoadingProps {
  loading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  const [color, setColor] = useState('#000');
  // 00ddc6
  return (
    <>
      <div className="z-50">
        <div className="flex items-center justify-center h-screen w-screen fixed inset-0 bg-white ">
          <PulseLoader color={color} loading={loading} size={15} />
        </div>
      </div>
    </>
  );
};

export default Loading;
