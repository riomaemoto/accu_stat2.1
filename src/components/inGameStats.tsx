import {
  gameScoreLeftAtom,
  gameScoreRightAtom,
  ballsPocketedLeftAtom,
  ballsPocketedRightAtom,
} from "@/app/atom";
import { useAtomValue } from "jotai";

export const InGameStats = () => {
  const gameScoreLeftValue = useAtomValue(gameScoreLeftAtom);
  const gameScoreRightValue = useAtomValue(gameScoreRightAtom);
  const inGameStatsLeft = gameScoreLeftValue * 9;
  const inGameStatsRight = gameScoreRightValue * 9;
  const totalInGameStats = inGameStatsLeft + inGameStatsRight;
  const ballsPocketedLeftValue = useAtomValue(ballsPocketedLeftAtom);
  const ballsPocketedRightValue = useAtomValue(ballsPocketedRightAtom);
  const inGameStatsValue =
    totalInGameStats - ballsPocketedLeftValue - ballsPocketedRightValue;

  return (
    <div className="w-full space-y-4">
      {/* Title Section */}
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div className="w-full max-w-[1400px] flex justify-center items-center">
          <div className="relative w-full max-w-[550px] h-[70px] bg-gradient-to-r from-cyan-800 via-blue-800 to-cyan-900 rounded-2xl border-4 border-cyan-400 shadow-2xl overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
            
            {/* Circuit-like decorations */}
            <div className="absolute top-2 left-4 w-8 h-2 bg-cyan-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-2 right-4 w-8 h-2 bg-cyan-400 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 left-2 w-2 h-8 bg-cyan-400 rounded-full opacity-40"></div>
            <div className="absolute top-1/2 right-2 w-2 h-8 bg-cyan-400 rounded-full opacity-40"></div>
            
            {/* Center title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-cyan-200 font-bold text-xl tracking-wider" style={{ textShadow: '2px 2px 0px #1a1a1a, -1px -1px 0px #1a1a1a, 1px -1px 0px #1a1a1a, -1px 1px 0px #1a1a1a' }}>
                IN GAME STATS
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data Section */}
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div>
          <button className="border border-white/20 w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-white/10 backdrop-blur-md"></button>
          <button className="border border-white/20 w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-white/10 backdrop-blur-md"></button>
        </div>

        <div className="border border-white/20 w-[100px] h-[80px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold">
          {inGameStatsValue}
        </div>
        <div className="border border-white/20 w-[250px] h-[80px] text-center flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold">
          {totalInGameStats}
        </div>

        <div className="border border-white/20 w-[100px] h-[80px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold">
          {inGameStatsValue}
        </div>
        <div>
          <button className="border border-white/20 w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-white/10 backdrop-blur-md"></button>
          <button className="border border-white/20 w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-white/10 backdrop-blur-md"></button>
        </div>
      </div>
    </div>
  );
};
