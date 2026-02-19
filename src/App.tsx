import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";

console.log("Me he montado correctamente");

export const App = () => {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        {import.meta.env.MODE === "development" ? (
          <Badge className="bg-gray-800 w-25 fixed top-3 left-3 text-white">
            Development
          </Badge>
        ) : null}
        <Button className="bg-gray-800 w-10 fixed top-3 right-3 text-white">
          STG
        </Button>
        <div className="h-screen w-2/3 flex flex-col justify-center items-center">
          <div className="flex flex-row gap-1">
            {/* Deep and Work time */}
            <Button className="bg-gray-600 h-10 w-60 text-white">
              Deep Work
            </Button>
            <Button className="bg-gray-600 h-10 w-60 text-white">
              Break Time
            </Button>
          </div>
          <p className="text-8xl font-bold m-10 text-white">25:00</p>
          <div className="flex flex-col gap-2">
            {/* Start/Pause and Reset Buttons */}
            <Button className="bg-gray-600 h-10 w-60 text-white">
              Start/Pause
            </Button>
            <Button className="bg-gray-600 h-10 w-60 text-white">Reset</Button>
          </div>
        </div>
      </div>
    </>
  );
};
