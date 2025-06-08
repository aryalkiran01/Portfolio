import { useEffect, useState } from "react";
import './GreetingSlider.css';

const greetings = [
  'Hello', 'Hola', 'Bonjour', 'Hallo',
  'नमस्ते', '你好', 'こんにちは',
];

export default function GreetingSlider({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onFinish, 600); // match fade duration
          return prev;
        }
      });
    }, 200);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50 transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <h1 className="text-white text-6xl font-bold fade-in font-poppins">
        {greetings[index]}
      </h1>
    </div>
  );
}
