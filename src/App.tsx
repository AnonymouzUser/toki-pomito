import { Navbar } from "./components/Navbar";
import { Button } from "./components/ui/button";

console.log("Me he montado correctamente");

export const App = () => {
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
          <p className="text-8xl font-bold m-10 text-white">25:00</p>
          <div className="flex flex-col gap-2">
            {/* Start/Pause and Reset Buttons */}
            <Button className="bg-white h-10 w-120 text-black">
              Start/Pause
            </Button>
            <Button className="bg-white h-10 w-120 text-black">Reset</Button>
          </div>
        </div>
      </div>
    </>
  );
};
