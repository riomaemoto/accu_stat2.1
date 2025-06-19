"use client";

import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import {
  totalBreakLeftAtom,
  totalBreakRightAtom,
  toggleAtom,
} from "@/app/atom";

type Props = {
  boxTitle: string;
  left: PrimitiveAtom<number>;
  right: PrimitiveAtom<number>;
  readOnly: { left: number; right: number };
};

export const PercentageRowbox = ({ boxTitle, left, right }: Props) => {
  const [leftNumber, setLeftNumber] = useAtom(left);
  const [rightNumber, setRightNumber] = useAtom(right);
  const totalBreakLeftValue = useAtomValue(totalBreakLeftAtom);
  const totalBreakRightValue = useAtomValue(totalBreakRightAtom);
  const isEditing = useAtomValue(toggleAtom);

  const percentageLeftValue = () => {
    const leftOutPut = Math.round((leftNumber / totalBreakLeftValue) * 100);
    if (!totalBreakLeftValue || totalBreakLeftValue === 0) {
      return 0;
    }
    return leftOutPut;
  };

  const percentageRightValue = () => {
    const rightOutPut = Math.round((rightNumber / totalBreakRightValue) * 100);
    if (!totalBreakRightValue || totalBreakRightValue === 0) {
      return 0;
    }
    return rightOutPut;
  };

  const incrementLeft = () => {
    if (setLeftNumber === undefined) return;
    setLeftNumber(leftNumber + 1);
  };
  const incrementRight = () => {
    if (setRightNumber === undefined) return;
    setRightNumber(rightNumber + 1);
  };

  const decrementLeft = () => {
    if (leftNumber > 0 && setLeftNumber !== undefined) {
      setLeftNumber(leftNumber - 1);
    }
  };

  const decrementRight = () => {
    if (rightNumber > 0 && setRightNumber !== undefined) {
      setRightNumber(rightNumber - 1);
    }
  };

  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div>
          <button
            className={`border border-solid w-[35px] md:w-[50px] h-[35px] md:h-[40px] flex items-center justify-center my-1 md:my-2 text-sm md:text-base ${
              isEditing
                ? "bg-green-400 hover:bg-green-500"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={incrementLeft}
            disabled={!isEditing}
          >
            +
          </button>
          <button
            className={`border border-solid w-[35px] md:w-[50px] h-[35px] md:h-[40px] flex items-center justify-center my-1 md:my-2 text-sm md:text-base ${
              isEditing
                ? "bg-red-300 hover:bg-red-400"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={decrementLeft}
            disabled={!isEditing}
          >
            -
          </button>
        </div>

        <div>
          <div className="border border-white/20 w-[45px] md:w-[100px] h-[40px] md:h-[45px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold text-xs md:text-base">
            {leftNumber}
          </div>
          <div className="border border-white/20 w-[45px] md:w-[100px] h-[40px] md:h-[45px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold text-xs md:text-base">
            {percentageLeftValue() + "%"}
          </div>
        </div>

        {/* Pool Table Design for Title */}
        <div className="relative w-[160px] md:w-[250px] h-[80px] md:h-[90px] bg-gradient-to-br from-green-700 via-green-600 to-green-800 rounded-lg border-2 md:border-4 border-amber-600 shadow-lg">
          {/* Pool table felt texture */}
          <div className="absolute inset-1 md:inset-2 bg-gradient-to-br from-green-500 to-green-700 rounded opacity-40"></div>

          {/* Corner pocket decorations */}
          <div className="absolute -top-0.5 md:-top-1 -left-0.5 md:-left-1 w-2 md:w-3 h-2 md:h-3 bg-black rounded-full border border-amber-700"></div>
          <div className="absolute -top-0.5 md:-top-1 -right-0.5 md:-right-1 w-2 md:w-3 h-2 md:h-3 bg-black rounded-full border border-amber-700"></div>
          <div className="absolute -bottom-0.5 md:-bottom-1 -left-0.5 md:-left-1 w-2 md:w-3 h-2 md:h-3 bg-black rounded-full border border-amber-700"></div>
          <div className="absolute -bottom-0.5 md:-bottom-1 -right-0.5 md:-right-1 w-2 md:w-3 h-2 md:h-3 bg-black rounded-full border border-amber-700"></div>

          {/* Center title */}
          <div className="absolute inset-0 flex items-center justify-center px-1 md:px-2">
            <span
              className="text-yellow-300 font-bold text-sm md:text-lg text-center drop-shadow-lg"
              style={{
                textShadow:
                  "2px 2px 0px black, -2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black",
              }}
            >
              {boxTitle}
            </span>
          </div>
        </div>
        <div>
          <div className="border border-white/20 w-[45px] md:w-[100px] h-[40px] md:h-[45px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold text-xs md:text-base">
            {rightNumber}
          </div>
          <div className="border border-white/20 w-[45px] md:w-[100px] h-[40px] md:h-[45px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold text-xs md:text-base">
            {percentageRightValue() + "%"}
          </div>
        </div>

        <div>
          <button
            className={`border border-solid w-[35px] md:w-[50px] h-[35px] md:h-[40px] flex items-center justify-center my-1 md:my-2 text-sm md:text-base ${
              isEditing
                ? "bg-green-400 hover:bg-green-500"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={incrementRight}
            disabled={!isEditing}
          >
            +
          </button>
          <button
            className={`border border-solid w-[35px] md:w-[50px] h-[35px] md:h-[40px] flex items-center justify-center my-1 md:my-2 text-sm md:text-base ${
              isEditing
                ? "bg-red-300 hover:bg-red-400"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={decrementRight}
            disabled={!isEditing}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
