"use client";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
const Loading = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div className="h-full w-full flex justify-center items-center">
      <PulseLoader color="#F5748A" size={25} loading={loading} />
    </div>
  );
};

export default Loading;
