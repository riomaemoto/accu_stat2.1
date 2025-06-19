"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { initialStat, readOnlyStatAtom, statAtom } from "../atom";
import { useSetAtom } from "jotai";

export default function Landing() {
  const router = useRouter();
  const setShowStat = useSetAtom(statAtom);
  const setReadOnlyStat = useSetAtom(readOnlyStatAtom);

  const handleRecordGame = () => {
    router.push("/scoreSheet");
    setShowStat(initialStat);
    setReadOnlyStat(initialStat);
  };

  const handleHistoryRecords = () => {
    router.push("/history");
  };

  const handleSettings = () => {
    router.push("/settings");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-blue-900 to-gray-900 flex flex-col items-center justify-center p-4">
      <div className="text-gray-400 text-sm absolute top-6 left-6">
        Register
      </div>
      
      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          <div className="w-48 h-48 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-black">
              <span className="text-4xl font-bold text-black">9</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-white text-4xl font-bold tracking-wider">
          ACCU-STAT
        </h1>
        
        <div className="flex flex-col space-y-4 w-full max-w-sm">
          <button
            onClick={handleRecordGame}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-colors duration-200 shadow-lg"
          >
            Record Game
          </button>
          
          <button
            onClick={handleHistoryRecords}
            className="w-full py-4 bg-gray-600 hover:bg-gray-700 text-white text-lg font-semibold rounded-lg transition-colors duration-200 shadow-lg"
          >
            History Records
          </button>
          
          <button
            onClick={handleSettings}
            className="w-full py-4 bg-gray-600 hover:bg-gray-700 text-white text-lg font-semibold rounded-lg transition-colors duration-200 shadow-lg"
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}