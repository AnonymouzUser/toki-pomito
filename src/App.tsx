import { useEffect, useRef, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Button } from "./components/ui/button";

console.log("Me he montado correctamente");

const POMODORO_TIME = 25 * 60;

export const App = () => {
  // Variables
  const [timeLeft, setTimeLeft] = useState<number>(POMODORO_TIME);
  const [isRuning, setIsRunning] = useState<boolean>(false);

  const intervalRef = useRef<number | null>(null);

  // Counter logic
  useEffect(() => {
    if (!isRuning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [isRuning]);

  // Handlers

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(POMODORO_TIME);
  };

  // Format to mm:ss

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Navbar />
        <div className="h-screen w-2/3 flex flex-col justify-center items-center">
          <div className="flex flex-row gap-1">
            {/* Deep and Work time */}
            <Button className="h-10 w-60 text-black bg-white">Deep Work</Button>
            <Button className="h-10 w-60 text-black bg-white">
              Break Time
            </Button>
          </div>
          <p className="text-9xl font-bold m-10 text-white">
            {formatTime(timeLeft)}
          </p>
          <div className="flex flex-col gap-2">
            {/* Start/Pause and Reset Buttons */}

            <div className="flex flex-row gap-2">
              <Button
                className="bg-white h-10 w-60 text-black"
                onClick={handleStart}
              >
                Start
              </Button>
              <Button
                className="bg-white h-10 w-60 text-black"
                onClick={handlePause}
              >
                Pause
              </Button>
            </div>
            <Button
              className="bg-white h-10 w-120 text-black"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
