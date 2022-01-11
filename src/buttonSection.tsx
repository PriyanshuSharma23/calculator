import { FC } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiDivideLine } from "react-icons/ri";
import { FiDelete } from "react-icons/fi";

interface IProps {
  inputAdd: (num: string) => void;
  clear: () => void;
  del: () => void;
  plus: () => void;
  minus: () => void;
  divide: () => void;
  multiply: () => void;
  equals: () => void;
  sqrt: () => void;
  power: () => void;
  factorial: () => void;

}

const ButtonSection: FC<IProps> = ({
  inputAdd,
  clear,
  del,
  plus,
  minus,
  divide,
  multiply,
  equals,
  sqrt,
  power,
  factorial
}) => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-2 w-full">
      <button
        className=" text-3xl w-full bg-blue-400 rounded-xl hover:bg-blue-200"
        onClick={() => {
          inputAdd("3.141592")
        }}
      >
        π 
      </button>
      <button
        className=" text-3xl w-full bg-blue-400 rounded-xl hover:bg-blue-200"
        onClick={() => {
          sqrt()
        }}
      >
        √
      </button>

      <button
        className=" text-3xl w-full bg-blue-400 rounded-xl hover:bg-blue-200"
        onClick={() => {
          power()
        }}
      >
        ^
      </button>

      <button
        className=" text-3xl w-full bg-blue-400 rounded-xl hover:bg-blue-200"
        onClick={() => {
          factorial()
        }}
      >
        !
      </button>

      <button
        className=" text-3xl w-full bg-green-400 col-span-2 rounded-xl hover:bg-green-200"
        onClick={() => {
          clear();
        }}
      >
        AC
      </button>
      <button
        className="text-3xl grid place-items-center w-full bg-blue-400 rounded-xl hover:bg-blue-300"
        onClick={() => {
          del();
        }}
      >
        <FiDelete />
      </button>
      <button
        className=" py-3 text-3xl w-full grid place-items-center bg-blue-400 rounded-xl hover:bg-blue-300"
        onClick={() => {
          divide();
        }}
      >
        <RiDivideLine />
      </button>
      <button
        className="py-3 text-3xl bg-gray-300 hover:bg-gray-200 rounded-xl"
        onClick={() => {
          inputAdd("7");
        }}
      >
        7
      </button>
      <button
        className="py-3 text-3xl bg-gray-300 hover:bg-gray-200 rounded-xl"
        onClick={() => {
          inputAdd("8");
        }}
      >
        8
      </button>
      <button
        className="py-3 text-3xl bg-gray-300 hover:bg-gray-200 rounded-xl"
        onClick={() => {
          inputAdd("9");
        }}
      >
        9
      </button>
      <button
        className=" py-3 text-3xl w-full bg-blue-400 rounded-xl hover:bg-blue-300"
        onClick={() => {
          multiply();
        }}
      >
        X
      </button>
      <button
        className="py-3 text-3xl bg-gray-300 hover:bg-gray-200 rounded-xl"
        onClick={() => {
          inputAdd("4");
        }}
      >
        4
      </button>
      <button
        className="py-3 text-3xl bg-gray-300 hover:bg-gray-200 rounded-xl"
        onClick={() => {
          inputAdd("5");
        }}
      >
        5
      </button>
      <button
        className="py-3 text-3xl bg-gray-300 hover:bg-gray-200 rounded-xl"
        onClick={() => {
          inputAdd("6");
        }}
      >
        6
      </button>
      <button
        className=" py-3 text-3xl w-full bg-blue-400 grid place-items-center rounded-xl hover:bg-blue-300"
        onClick={minus}
      >
        <AiOutlineMinus />
      </button>
      <button
        className="py-3 text-3xl bg-gray-300 hover:bg-gray-200 rounded-xl"
        onClick={() => {
          inputAdd("1");
        }}
      >
        1
      </button>
      <button
        className="py-3 text-3xl bg-gray-300 hover:bg-gray-200 rounded-xl"
        onClick={() => {
          inputAdd("2");
        }}
      >
        2
      </button>
      <button
        className="py-3 text-3xl bg-gray-300 hover:bg-gray-200 rounded-xl"
        onClick={() => {
          inputAdd("3");
        }}
      >
        3
      </button>
      <button
        className=" py-3 grid place-items-center text-3xl w-full bg-blue-400 rounded-xl hover:bg-blue-300"
        onClick={() => {
          plus();
        }}
      >
        <AiOutlinePlus />
      </button>
      <button
        className="py-3 text-3xl bg-gray-300 hover:bg-gray-200 rounded-xl"
        onClick={() => {
          inputAdd("0");
        }}
      >
        0
      </button>
      <button
        className="py-3 text-3xl bg-gray-300 hover:bg-gray-200 rounded-xl"
        onClick={() => {
          inputAdd(".");
        }}
      >
        .
      </button>
      <button
        className="py-3 col-span-2 text-3xl bg-blue-300 hover:bg-blue-200 rounded-xl"
        onClick={() => {equals()}}
      >
        =
      </button>
    </div>
  );
};

export default ButtonSection;
