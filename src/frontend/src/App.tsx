import { useState } from 'react';

import { StaticPhotoTile } from './components/StaticPhotoTile';

function App() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [showSuccess, setShowSuccess] = useState(false);

  const cuteMessages = [
    "Are you sure? 😼",
    "Really?? Think again! 🙀",
    "Nice try, but I know you better 😏",
    "You can't escape this cuteness 💕",
    "Come on… you know you want to say YES 💖",
    "My heart is waiting… 🥺",
    "Pretty please? 🥹✨"
  ];

  const [mainImageError, setMainImageError] = useState(false);

  const moveNo = () => {
    const x = Math.random() * 240 - 120;
    const y = Math.random() * 120 - 60;
    setNoPosition({ x, y });
    setNoClickCount((prev) => (prev + 1) % cuteMessages.length);
  };

  const handleYes = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-primary via-pink-secondary to-pink-accent p-4">
        <div className="bg-white rounded-3xl shadow-pink w-full max-w-[340px] p-8 text-center">
          <div className="text-[42px] mb-3">🥰💖💍</div>
          <h1 className="text-[22px] font-semibold text-pink-primary mb-4">
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-primary via-pink-secondary to-pink-accent p-4">
      <div className="bg-white rounded-3xl shadow-pink w-full max-w-[340px] p-6 text-center">
        <div className="grid grid-cols-2 gap-2 mb-4">
          {!mainImageError ? (
            <img
              src="/saesha.jpg"
              alt="Us moment"
              className="w-full h-40 object-cover rounded-2xl col-span-2"
              onError={() => setMainImageError(true)}
            />
          ) : (
            <div className="w-full h-40 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl col-span-2 flex items-center justify-center">
              <span className="text-4xl">💕</span>
            </div>
          )}
          
          <StaticPhotoTile src="/assets/IMG-20260208-WA0008-1.jpg" alt="Our memory" />
          <StaticPhotoTile src="/assets/IMG-20260208-WA0010-1.jpg" alt="Our memory" />
          <StaticPhotoTile src="/assets/IMG-20260208-WA0005-5.jpg" alt="Our memory" />
          <StaticPhotoTile src="/assets/IMG-20260208-WA0008-2.jpg" alt="Our memory" />
          <StaticPhotoTile src="/assets/IMG-20260208-WA0010-2.jpg" alt="Our memory" />
          <StaticPhotoTile src="/assets/IMG-20260208-WA0005-6.jpg" alt="Our memory" />
        </div>
        
        <div className="text-[42px] mb-2">🤗 🌸 💕</div>
        <h1 className="text-[22px] font-semibold text-pink-primary mb-3">
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
            <strong className="block mb-3 text-pink-primary text-lg">{cuteMessages[noClickCount - 1]}</strong>
            <p className="mb-2">My heart already chose you, Saesha 🥰</p>
            <p>Stop teasing and say YES already 😌💞</p>
          </div>
        )}

        <div className="relative h-[70px]">
          <button
            onClick={handleYes}
            className="absolute left-[35px] px-6 py-2.5 text-base font-medium bg-pink-primary text-white rounded-full hover:bg-pink-primary-hover transition-all duration-200 shadow-md hover:shadow-lg"
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
