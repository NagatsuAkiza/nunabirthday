"use client";

import { useState, useEffect, useRef } from "react";

const SceneSequence: React.FC = () => {
  const [scene, setScene] = useState(0); // Start from 0 to show the start button first
  const [background, setBackground] = useState("bg-black");
  const [backgroundImage, setBackgroundImage] = useState<string | undefined>(undefined);
  const [backgroundImageClass, setBackgroundImageClass] = useState(""); // New state for background image class
  const [opacity, setOpacity] = useState("opacity-100");
  const [content, setContent] = useState<string | JSX.Element>("Dimana ini?");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isAudioStarted, setIsAudioStarted] = useState(false);

  useEffect(() => {
    if (isAudioStarted) {
      const timer = setTimeout(() => {
        goToNextScene();
      }, 5000); // Transition to the next scene after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [scene, isAudioStarted]);

  useEffect(() => {
    setOpacity("opacity-0");
    const fadeInTimeout = setTimeout(() => {
      setOpacity("opacity-100");
    }, 100); // Short delay before starting fade-in

    return () => clearTimeout(fadeInTimeout);
  }, [scene]);

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
      setIsAudioStarted(true);
      setScene(1); // Start the scene sequence after audio starts
    }
  };

  const goToNextScene = () => {
    setOpacity("opacity-0");
    setTimeout(() => {
      switch (scene) {
        case 1:
          setContent("huh?");
          setScene(2);
          break;
        case 2:
          if (!isAudioStarted) {
            startAudio();
          }
          setContent("");
          setScene(3);
          break;
        case 3:
          setBackground("bg-white");
          setContent("Musik dari mana itu?");
          setScene(4);
          break;
        case 4:
          setBackground("bg-white");
          setBackgroundImage("/25552d345fb3f92e86722f3b579aca94.jpg");
          setBackgroundImageClass(""); // Reset class for background image
          setContent("");
          setScene(5);
          break;
        case 5:
          setBackground("bg-black");
          setBackgroundImage(undefined);
          setContent("Tempat apa ini?");
          setScene(6);
          break;
        case 6:
          setBackground("bg-black");
          setBackgroundImage("/25552d345fb3f92e86722f3b579aca94.jpg");
          setBackgroundImageClass(""); // Reset class for background image
          setContent(
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
              <p className="absolute top-[80%] z-20 text-4xl text-white stroke-black">Haloo!!</p>
              <img
                src="/Ivan_badut_2.png"
                alt="Character Image"
                className="max-w-[950px] top-[10%] h-auto"
              />
            </div>
          );
          setScene(7);
          break;
        case 7:
          setBackground("bg-black");
          setBackgroundImage("/25552d345fb3f92e86722f3b579aca94.jpg");
          setBackgroundImageClass(""); // Reset class for background image
          setContent(
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
              <p className="absolute top-[80%] z-20 text-4xl text-white stroke-black">
                Selamat ulang tahun NUNAAA
              </p>
              <img
                src="/Ivan_badut_2.png"
                alt="Character Image"
                className="max-w-[950px] top-[10%] h-auto"
              />
            </div>
          );
          setScene(8);
          break;
        case 8:
          setContent(
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
              <p className="absolute top-[80%] z-20 text-4xl text-white stroke-black">
                Maaf ya aku gk bisa ngasih apa2 selain buat ginian doang wkwkwk
              </p>
              <img
                src="/Ivan_badut_2.png"
                alt="Character Image"
                className="max-w-[950px] top-[10%] h-auto"
              />
            </div>
          );
          setScene(9);
          break;
        case 9:
          setContent(
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
              <p className="absolute top-[80%] z-20 text-4xl text-white stroke-black">
                Semoga panjang umur dan semoga apa yang kamu usahakan segera tercapai.
              </p>
              <img
                src="/Ivan_badut_2.png"
                alt="Character Image"
                className="max-w-[950px] top-[10%] h-auto"
              />
            </div>
          );
          setScene(10);
          break;
        case 10:
          setBackground("bg-black");
          setBackgroundImage("/25552d345fb3f92e86722f3b579aca94.jpg");
          // setBackgroundImageClass("blur-sm"); // Add blur class here
          setContent(
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/Ivan_badut_2.png"
                  alt="Character Image"
                  className="max-w-[950px] h-auto blur-sm"
                />
              </div>
              <div className="relative flex flex-col items-center">
                <img src="/nucana.png" alt="Thank You" className="w-[500px] h-auto" />
                <p className="mt-4 text-4xl text-white stroke-black">Terima kasih atas art-nya!</p>
              </div>
            </div>
          );
          setScene(11); // Move to the next scene
          break;
        case 11:
          setBackground("bg-black");
          setBackgroundImage(undefined);
          setBackgroundImageClass(""); // Reset class for background image
          setContent("Sehat selalu yaa <3");
          setScene(12);
          break;
        case 12:
          break;
        default:
          break;
      }
    }, 1000); // Allow fade-out effect before changing content
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full transition-opacity duration-1000 ${background} ${opacity} flex items-center justify-center text-white font-semibold`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              filter: backgroundImageClass ? "blur(10px)" : "none" // Apply blur effect if class is set
            }
          : {}
      }>
      <audio ref={audioRef} src="/music.mp3" />
      {scene === 0 ? (
        <button
          onClick={startAudio}
          className="p-4 bg-blue-500 py-4 px-7 text-white rounded-xl text-lg hover:bg-blue-600 transition-all hover:scale-105">
          Masuk
        </button>
      ) : (
        <div className="text-center">{content}</div>
      )}
    </div>
  );
};

export default SceneSequence;
