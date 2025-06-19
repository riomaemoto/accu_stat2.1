"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchStatsData } from "../supabase";
import { readOnlyStatAtom, statAtom, StatType } from "../atom";
import { useSetAtom } from "jotai";

export default function History() {
  const router = useRouter();

  useEffect(() => {
    getHistoryStat();
  }, []);

  const getHistoryStat = async () => {
    const aaa = await fetchStatsData();
    setHistoryStat(aaa);
  };

  const handleViewStat = (id: number) => {
    router.push("/scoreSheet");
    const stat = historyStat.find((record) => record.id === id);
    setShowStat(stat!);
    setReadOnlyStat(stat!);
  };

  const handleBack = () => {
    router.push("/");
  };

  const setShowStat = useSetAtom(statAtom);
  const setReadOnlyStat = useSetAtom(readOnlyStatAtom);

  const [historyStat, setHistoryStat] = useState<StatType[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-blue-900 to-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-start mb-8">
          <button
            onClick={handleBack}
            className="group relative px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/25 hover:scale-105 transition-all duration-300 border border-yellow-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></span>
            <span className="relative">← Back</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-4">
            Game History
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {historyStat.map((record, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-6 shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 hover:scale-[1.02] hover:border-yellow-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-yellow-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex justify-between items-center">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse"></div>
                    <h3 className="text-2xl font-bold text-white">
                      <span className="text-yellow-400">{record.player1}</span>
                      <span className="text-gray-400 mx-3">VS</span>
                      <span className="text-yellow-400">{record.player2}</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">Created:</span>
                      <span className="text-blue-400 font-medium">
                        {record.created_at}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">Updated:</span>
                      <span className="text-gray-400 font-medium">
                        {record.updated_at}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  className="group/btn relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 border border-blue-500"
                  onClick={() => handleViewStat(record.id!)}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-75 group-hover/btn:opacity-100 transition duration-300"></span>
                  <span className="relative flex items-center space-x-2">
                    <span>View Stats</span>
                    <svg
                      className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {historyStat.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              No Game Records Yet
            </h3>
            <p className="text-gray-500">
              Start playing to see your game history here!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
