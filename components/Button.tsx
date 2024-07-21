import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { MinusCircleIcon } from "@heroicons/react/24/outline";

interface setCountGuard {
  setCount: (count: number) => void;
  count: number;
}

export default function Button({ setCount, count }: setCountGuard) {
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <section className="flex justify-center items-center gap-0.5 mt-0.5 sm:mx-80">
      <div className="bg-customDarkGray w-2/4 h-44 sm:h-32 sm:rounded-bl-xl flex justify-center items-center">
        <button onClick={handleIncrement} key="increment">
          <PlusCircleIcon className="size-12 text-customLightGray hover:text-customGreen" />
        </button>
      </div>
      <div className="bg-customDarkGray w-2/4 h-44 sm:h-32 sm:rounded-br-xl flex justify-center items-center">
        <button onClick={handleDecrement} key="decrement">
          <MinusCircleIcon className="size-12 text-customLightGray hover:text-customGreen" />
        </button>
      </div>
    </section>
  );
}
