"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { initialStat, readOnlyStatAtom, statAtom } from "./atom";
import { useSetAtom } from "jotai";

export default function Home() {
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
      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center shadow-2xl bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 relative animate-spin">
            <style jsx>{`
              .animate-spin {
                animation: spin 8s linear infinite;
              }
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `}</style>

            <div className="absolute top-2 md:top-4 left-6 md:left-12 w-4 md:w-8 h-4 md:h-8 bg-gradient-to-br from-yellow-200 to-transparent rounded-full opacity-60"></div>

            <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-full flex items-center justify-center border-2 border-gray-800 shadow-inner relative">
              <div className="absolute top-0.5 md:top-1 left-1 md:left-2 w-2 md:w-3 h-2 md:h-3 bg-gradient-to-br from-white to-transparent rounded-full opacity-80"></div>
              <span className="text-2xl md:text-4xl font-black text-gray-900 relative z-10">
                9
              </span>
            </div>

            <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-6 md:w-12 h-6 md:h-12 bg-gradient-to-tl from-yellow-600 to-transparent rounded-full opacity-40"></div>
          </div>
        </div>

        <h1 className="text-white text-2xl md:text-4xl font-bold tracking-wider">
          ACCU-STAT
        </h1>

        <div className="flex flex-col space-y-4 w-full max-w-xs md:max-w-sm px-4 mx-auto">
          <button
            onClick={handleRecordGame}
            className="w-full py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-semibold rounded-lg transition-colors duration-200 shadow-lg"
          >
            Record Game
          </button>

          <button
            onClick={handleHistoryRecords}
            className="w-full py-3 md:py-4 bg-gray-600 hover:bg-gray-700 text-white text-base md:text-lg font-semibold rounded-lg transition-colors duration-200 shadow-lg px-6"
          >
            History Records
          </button>

          <button
            onClick={handleSettings}
            className="w-full py-3 md:py-4 bg-gray-600 hover:bg-gray-700 text-white text-base md:text-lg font-semibold rounded-lg transition-colors duration-200 shadow-lg"
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}
