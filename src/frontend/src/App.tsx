import { useState } from 'react';

function App() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [showSuccess, setShowSuccess] = useState(false);

  const funnyLines = [
    "Are you sure? 😼",
    "Really?? 🙀",
    "Nice try 😏",
    "You can't escape 💕",
    "Come on… say YES 💖"
  ];

  const [imageError, setImageError] = useState(false);

  const moveNo = () => {
    const x = Math.random() * 240 - 120;
    const y = Math.random() * 120 - 60;
    setNoPosition({ x, y });
    setNoClickCount((prev) => (prev + 1) % funnyLines.length);
  };

  const handleYes = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-valentine-primary via-valentine-secondary to-valentine-accent p-4">
        <div className="bg-white rounded-[20px] shadow-valentine w-full max-w-[340px] p-8 text-center">
          <div className="text-[42px] mb-3">🥰💖💍</div>
          <h1 className="text-[22px] font-semibold text-valentine-primary mb-4">
            Yay! She said YES 💕
          </h1>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            This moment just became one of my favorites ✨<br /><br />
            Saesha, you are my smile, my calm, my chaos 💫<br />
            My today, my tomorrow, my always 💗<br /><br />
            Thank you for choosing me 🥹<br /><br />
            Forever yours,<br />
            <strong>Varun ❤️</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-valentine-primary via-valentine-secondary to-valentine-accent p-4">
      <div className="bg-white rounded-[20px] shadow-valentine w-full max-w-[340px] p-6 text-center">
        {!imageError ? (
          <img
            src="/saesha.jpg"
            alt="Us moment"
            className="w-full rounded-2xl mb-4"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-red-100 rounded-2xl mb-4 flex items-center justify-center">
            <span className="text-4xl">💕</span>
          </div>
        )}
        
        <div className="text-[42px] mb-2">🤗 🌸 💕</div>
        <h1 className="text-[22px] font-semibold text-valentine-primary mb-3">
          Hey Saesha 💖
        </h1>
        
        {noClickCount === 0 ? (
          <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
            I've been meaning to ask you something special ✨<br /><br />
            You make my days brighter and my smiles real 💫<br />
            So tell me honestly…<br /><br />
            <strong>Will you be my Valentine? 💘</strong>
          </p>
        ) : (
          <div className="text-[15px] text-gray-600 leading-relaxed mb-6">
            <strong className="block mb-3">{funnyLines[noClickCount - 1]}</strong>
            My heart already chose you, Saesha 🥰<br />
            Stop teasing and say YES already 😌💞<br /><br />
            <img 
              src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" 
              alt="Please say yes"
              className="inline-block w-[120px] rounded-lg"
            />
          </div>
        )}

        <div className="relative h-[70px]">
          <button
            onClick={handleYes}
            className="absolute left-[35px] px-6 py-2.5 text-base font-medium bg-valentine-primary text-white rounded-full hover:bg-valentine-primary-hover transition-all duration-200 shadow-md hover:shadow-lg"
          >
            YES 💕
          </button>
          <button
            onClick={moveNo}
            onMouseEnter={moveNo}
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)`
            }}
            className="absolute right-[35px] px-6 py-2.5 text-base font-medium bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition-all duration-200"
          >
            NO 🙈
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
