import {
  ballsMissedLeftAtom,
  ballsMissedRightAtom,
  ballsPocketedLeftAtom,
  ballsPocketedRightAtom,
  kickingErrorsLeftAtom,
  kickingErrorsRightAtom,
  safetyErrorsLeftAtom,
  safetyErrorsRightAtom,
  unforcedErrorsLeftAtom,
  unforcedErrorsRightAtom,
} from "@/app/atom";
import { useAtomValue } from "jotai";

export const AccuStats = () => {
  const ballsMissedLeft = useAtomValue(ballsMissedLeftAtom);
  const ballsMissedRight = useAtomValue(ballsMissedRightAtom);
  const unforcedErrorsLeft = useAtomValue(unforcedErrorsLeftAtom);
  const unforcedErrorsRight = useAtomValue(unforcedErrorsRightAtom);
  const safetyErrorsLeft = useAtomValue(safetyErrorsLeftAtom);
  const safetyErrorsRight = useAtomValue(safetyErrorsRightAtom);
  const ballsPocketedLeft = useAtomValue(ballsPocketedLeftAtom);
  const ballsPocketedRight = useAtomValue(ballsPocketedRightAtom);
  const kickingErrorsLeft = useAtomValue(kickingErrorsLeftAtom);
  const kickingErrorsRight = useAtomValue(kickingErrorsRightAtom);

  const accuStatLeft =
    ballsPocketedLeft /
    (ballsPocketedLeft +
      ballsMissedLeft +
      unforcedErrorsLeft +
      safetyErrorsLeft +
      kickingErrorsLeft);

  const accuStatRight =
    ballsPocketedRight /
    (ballsPocketedRight +
      ballsMissedRight +
      unforcedErrorsRight +
      safetyErrorsRight +
      kickingErrorsRight);

  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div className="border border-white/20 w-[100px] h-[80px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold">
          {isNaN(accuStatLeft) ? 0 : accuStatLeft.toFixed(3)}
        </div>
        
        {/* Luxury ACCU STAT Design */}
        <div className="relative w-[250px] h-[80px] bg-gradient-to-br from-red-800 via-rose-800 to-red-900 rounded-xl border-4 border-red-400 shadow-2xl overflow-hidden">
          {/* Diamond pattern background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-transparent to-rose-900/30"></div>
          <div className="absolute inset-2 border border-red-300/30 rounded-lg"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-300 rounded-full opacity-70"></div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-300 rounded-full opacity-70"></div>
          <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-red-300 rounded-full opacity-70"></div>
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-red-300 rounded-full opacity-70"></div>
          
          {/* Center title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-red-200 font-bold text-lg tracking-wider" style={{ textShadow: '2px 2px 0px #1a1a1a, -1px -1px 0px #1a1a1a, 1px -1px 0px #1a1a1a, -1px 1px 0px #1a1a1a' }}>
              ACCU STAT
            </span>
          </div>
        </div>

        <div className="border border-white/20 w-[100px] h-[80px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold">
          {isNaN(accuStatRight) ? 0 : accuStatRight.toFixed(3)}
        </div>
      </div>
    </div>
  );
};
