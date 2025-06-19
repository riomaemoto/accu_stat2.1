"use client";
import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import { toggleAtom } from "@/app/atom";

type Props = {
  boxTitle: string;
  left: PrimitiveAtom<number>;
  right: PrimitiveAtom<number>;
  readOnly: { left: number; right: number };
};

export const Rowbox = ({ boxTitle, left, right, readOnly }: Props) => {
  const [leftNumber, setLeftNumber] = useAtom(left);
  const [rightNumber, setRightNumber] = useAtom(right);
  const isEditing = useAtomValue(toggleAtom);

  const incrementLeft = () => {
    if (setLeftNumber === undefined) return;
    setLeftNumber(leftNumber + 1);
  };

  const decreaseLeft = () => {
    if (leftNumber > 0 && setLeftNumber !== undefined) {
      setLeftNumber(leftNumber - 1);
    }
  };

  const incrementRight = () => {
    if (!setRightNumber) return;
    setRightNumber(rightNumber + 1);
  };
  const decreaseRight = () => {
    if (rightNumber > 0 && setRightNumber) {
      setRightNumber(rightNumber - 1);
    }
  };

  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div>
          <button
            className={`border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center my-2 ${
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
            className={`border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center my-2 ${
              isEditing
                ? "bg-red-300 hover:bg-red-400"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={decreaseLeft}
            disabled={!isEditing}
          >
            -
          </button>
        </div>

        <div className="border border-white/20 w-[100px] h-[90px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold">
          {isEditing ? leftNumber : readOnly.left}
        </div>

        {/* Pool Table Design for Title */}
        <div className="relative w-[250px] h-[90px] bg-gradient-to-br from-green-700 via-green-600 to-green-800 rounded-lg border-4 border-amber-600 shadow-lg">
          {/* Pool table felt texture */}
          <div className="absolute inset-2 bg-gradient-to-br from-green-500 to-green-700 rounded opacity-40"></div>

          {/* Corner pocket decorations */}
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-black rounded-full border border-amber-700"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-black rounded-full border border-amber-700"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-black rounded-full border border-amber-700"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-black rounded-full border border-amber-700"></div>

          {/* Center title */}
          <div className="absolute inset-0 flex items-center justify-center px-2">
            <span
              className="text-yellow-300 font-bold text-lg text-center drop-shadow-lg"
              style={{
                textShadow:
                  "2px 2px 0px black, -2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black",
              }}
            >
              {boxTitle}
            </span>
          </div>
        </div>

        <div className="border border-white/20 w-[100px] h-[90px] flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-semibold">
          {isEditing ? rightNumber : readOnly.right}
        </div>
        <div>
          <button
            className={`border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center my-2 ${
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
            className={`border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center my-2 ${
              isEditing
                ? "bg-red-300 hover:bg-red-400"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={decreaseRight}
            disabled={!isEditing}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
