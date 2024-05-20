import React from "react";
import { useState } from "react";
import "./QuoteStyle.css";
function randomNumberGenerator() {
  const min = 0;
  const max = 18;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function QuoteGenerate() {
  const [ID, setID] = useState(0);

  const changeQuote = (event) => {
    setID((ID) => ID + 1);
    const colorID = randomNumberGenerator();
    const quoteElement = document.querySelector(".quote-area");
    quoteElement.innerHTML = Quotes[ID % Quotes.length].quote;
    quoteElement.style.color = colors[colorID];
    const authorElement = document.querySelector(".author-section");
    authorElement.innerHTML = Quotes[ID % Quotes.length].authorName;
    authorElement.style.color = colors[colorID % colors.length];
    const hifenElemnt = document.querySelector(".hifen");
    hifenElemnt.style.color = colors[colorID];
    const buttonElement = document.querySelector(".nextButton");
    buttonElement.style.backgroundColor = colors[colorID];
    const backElemnt = document.querySelector(".cont-all");
    backElemnt.style.backgroundColor = colors[colorID];
  };
  return (
    <div className="cont-all">
      <div className="container">
        <div className="quote-section">
          <p className="quote-area">
            If you do what you've always done, you'll get what you've always
            gotten.
          </p>
        </div>
        <div className="author">
          <span className="hifen">-</span>
          <span className="author-section">Tony Robbins</span>
        </div>
        <div className="share-section">
          <div className="share">
            <button type="button">
              <img id="inst" src="../inst.jpg" alt="inst" />
            </button>
            <button type="button">
              <img src="../twitter.png" alt="twitter" />
            </button>
          </div>
          <button className="nextButton" type="button" onClick={changeQuote}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default QuoteGenerate;

const colors = [
  "orange",
  "darkgray",
  "lightgray",
  "navy",
  "royalblue",
  "babyblue",
  "skyblue",
  "teal",
  "mintgreen",
  "forestgreen",
  "olive",
  "maroon",
  "burgundy",
  "hotpink",
  "lavender",
  "magenta",
  "salmon",
  "coral",
  "peach",
];
const Quotes = [
  {
    id: 1,
    quote:
      "It's not the face that makes someone a monster, it's the choices they make with their lives.",
    authorName: "Naruto Uzumaki, Naruto",
  },
  {
    id: 2,
    quote: "If you don't share someone's pain, you can never understand them.",
    authorName: "Nagato, Naruto Shippuden",
  },
  {
    id: 3,
    quote:
      "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.",
    authorName: "Gildarts Clive, Fairy Tail",
  },
  {
    id: 4,
    quote: "Even the strongest of opponents always has a weakness.",
    authorName: "Itachi Uchiha, Naruto Shippuden",
  },
  {
    id: 5,
    quote: "When you have to save someone you love, you can do anything.",
    authorName: "Allen Walker, D.Gray-man",
  },
  {
    id: 6,
    quote:
      "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
    authorName: "Kenshin Himura, Rurouni Kenshin",
  },
  {
    id: 7,
    quote:
      "Don't be so quick to throw away your life. No matter how disgraceful or embarrassing it may be, you need to keep struggling to find your way out until the very end.",
    authorName: "Clare, Claymore",
  },
  {
    id: 8,
    quote:
      "If you wanna make people dream, you've gotta start by believing in that dream yourself.",
    authorName: "Shoyo Hinata, Haikyuu!!",
  },
  {
    id: 9,
    quote: "The only thing a real hero needs is a heart full of grace.",
    authorName: "Tiger, Tiger & Bunny",
  },
  {
    id: 10,
    quote:
      "Whatever you do, enjoy it to the fullest. That is the secret of life.",
    authorName: "Rider, Fate/Zero",
  },
  {
    id: 11,
    quote:
      "Even if you die, as long as someone remembers you, you'll never really be gone.",
    authorName: "Inari, Inari Konkon Koi Iroha",
  },
  {
    id: 12,
    quote: "Life is not a game of luck. If you wanna win, work hard.",
    authorName: "Sora, No Game No Life",
  },
  {
    id: 13,
    quote:
      "The moment you find the courage to give up your life for someone would be the moment you understand love.",
    authorName: "Natsu Dragneel, Fairy Tail",
  },
  {
    id: 14,
    quote: "Being weak is nothing to be ashamed of... Staying weak is!",
    authorName: "Toshiro Hitsugaya, Bleach",
  },
  {
    id: 15,
    quote:
      "If you wanna climb a mountain, you obviously aim for the highest point.",
    authorName: "Yui Hirasawa, K-On!",
  },
  {
    id: 16,
    quote:
      "The world’s not perfect, but it’s there for us trying the best it can.",
    authorName: "Roy Mustang, Fullmetal Alchemist",
  },
  {
    id: 17,
    quote: "The best way to predict the future is to create it.",
    authorName: "Abraham Lincoln",
  },
  {
    id: 18,
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
    authorName: "Albert Schweitzer",
  },
  {
    id: 19,
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    authorName: "Martin Luther King Jr.",
  },
  {
    id: 20,
    quote: "It does not matter how slowly you go as long as you do not stop.",
    authorName: "Confucius",
  },
  {
    id: 21,
    quote: "The only way to do great work is to love what you do.",
    authorName: "Steve Jobs",
  },
  {
    id: 22,
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    authorName: "Nelson Mandela",
  },
  {
    id: 23,
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    authorName: "Franklin D. Roosevelt",
  },
  {
    id: 24,
    quote: "Life is what happens when you're busy making other plans.",
    authorName: "John Lennon",
  },
  {
    id: 25,
    quote: "Strive not to be a success, but rather to be of value.",
    authorName: "Albert Einstein",
  },
  {
    id: 26,
    quote: "You miss 100% of the shots you don't take.",
    authorName: "Wayne Gretzky",
  },
  {
    id: 27,
    quote:
      "Even if you die, as long as someone remembers you, you'll never really be gone.",
    authorName: "Inari, Inari Konkon Koi Iroha",
  },
  {
    id: 28,
    quote: "Life is not a game of luck. If you wanna win, work hard.",
    authorName: "Sora, No Game No Life",
  },
  {
    id: 29,
    quote:
      "The moment you find the courage to give up your life for someone would be the moment you understand love.",
    authorName: "Natsu Dragneel, Fairy Tail",
  },
  {
    id: 30,
    quote: "Being weak is nothing to be ashamed of... Staying weak is!",
    authorName: "Toshiro Hitsugaya, Bleach",
  },
  {
    id: 31,
    quote:
      "If you wanna climb a mountain, you obviously aim for the highest point.",
    authorName: "Yui Hirasawa, K-On!",
  },
  {
    id: 32,
    quote:
      "The world’s not perfect, but it’s there for us trying the best it can.",
    authorName: "Roy Mustang, Fullmetal Alchemist",
  },
  {
    id: 33,
    quote: "If you can't do something, then don't. Focus on what you can do.",
    authorName: "Shiroe, Log Horizon",
  },
  {
    id: 34,
    quote:
      "It's not the face that makes someone a monster, it's the choices they make with their lives.",
    authorName: "Naruto Uzumaki, Naruto",
  },
  {
    id: 35,
    quote:
      "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.",
    authorName: "Gildarts Clive, Fairy Tail",
  },
  {
    id: 36,
    quote: "If you don't share someone's pain, you can never understand them.",
    authorName: "Nagato, Naruto Shippuden",
  },
  {
    id: 37,
    quote: "Even the strongest of opponents always has a weakness.",
    authorName: "Itachi Uchiha, Naruto Shippuden",
  },
  {
    id: 38,
    quote: "When you have to save someone you love, you can do anything.",
    authorName: "Allen Walker, D.Gray-man",
  },
  {
    id: 39,
    quote:
      "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
    authorName: "Kenshin Himura, Rurouni Kenshin",
  },
  {
    id: 40,
    quote:
      "Don't be so quick to throw away your life. No matter how disgraceful or embarrassing it may be, you need to keep struggling to find your way out until the very end.",
    authorName: "Clare, Claymore",
  },
  {
    id: 41,
    quote:
      "If you wanna make people dream, you've gotta start by believing in that dream yourself.",
    authorName: "Shoyo Hinata, Haikyuu!!",
  },
  {
    id: 42,
    quote: "The only thing a real hero needs is a heart full of grace.",
    authorName: "Tiger, Tiger & Bunny",
  },
  {
    id: 43,
    quote:
      "Whatever you do, enjoy it to the fullest. That is the secret of life.",
    authorName: "Rider, Fate/Zero",
  },
  {
    id: 44,
    quote:
      "Even if you die, as long as someone remembers you, you'll never really be gone.",
    authorName: "Inari, Inari Konkon Koi Iroha",
  },
  {
    id: 45,
    quote: "Life is not a game of luck. If you wanna win, work hard.",
    authorName: "Sora, No Game No Life",
  },
  {
    id: 46,
    quote:
      "The moment you find the courage to give up your life for someone would be the moment you understand love.",
    authorName: "Natsu Dragneel, Fairy Tail",
  },
  {
    id: 47,
    quote: "Being weak is nothing to be ashamed of... Staying weak is!",
    authorName: "Toshiro Hitsugaya, Bleach",
  },
  {
    id: 48,
    quote:
      "If you wanna climb a mountain, you obviously aim for the highest point.",
    authorName: "Yui Hirasawa, K-On!",
  },
  {
    id: 49,
    quote:
      "The world’s not perfect, but it’s there for us trying the best it can.",
    authorName: "Roy Mustang, Fullmetal Alchemist",
  },
  {
    id: 50,
    quote:
      "The world’s not perfect, but it’s there for us trying the best it can.",
    authorName: "Roy Mustang, Fullmetal Alchemist",
  },
  {
    id: 51,
    quote:
      "It's not the face that makes someone a monster, it's the choices they make with their lives.",
    authorName: "Naruto Uzumaki, Naruto",
  },
  {
    id: 52,
    quote:
      "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.",
    authorName: "Gildarts Clive, Fairy Tail",
  },
  {
    id: 53,
    quote: "If you don't share someone's pain, you can never understand them.",
    authorName: "Nagato, Naruto Shippuden",
  },
  {
    id: 54,
    quote: "Even the strongest of opponents always has a weakness.",
    authorName: "Itachi Uchiha, Naruto Shippuden",
  },
  {
    id: 55,
    quote: "When you have to save someone you love, you can do anything.",
    authorName: "Allen Walker, D.Gray-man",
  },
  {
    id: 56,
    quote:
      "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
    authorName: "Kenshin Himura, Rurouni Kenshin",
  },
  {
    id: 57,
    quote:
      "Don't be so quick to throw away your life. No matter how disgraceful or embarrassing it may be, you need to keep struggling to find your way out until the very end.",
    authorName: "Clare, Claymore",
  },
  {
    id: 58,
    quote:
      "If you wanna make people dream, you've gotta start by believing in that dream yourself.",
    authorName: "Shoyo Hinata, Haikyuu!!",
  },
  {
    id: 59,
    quote: "The only thing a real hero needs is a heart full of grace.",
    authorName: "Tiger, Tiger & Bunny",
  },
  {
    id: 60,
    quote:
      "Whatever you do, enjoy it to the fullest. That is the secret of life.",
    authorName: "Rider, Fate/Zero",
  },
  {
    id: 61,
    quote:
      "Even if you die, as long as someone remembers you, you'll never really be gone.",
    authorName: "Inari, Inari Konkon Koi Iroha",
  },
  {
    id: 62,
    quote: "Life is not a game of luck. If you wanna win, work hard.",
    authorName: "Sora, No Game No Life",
  },
  {
    id: 63,
    quote:
      "The moment you find the courage to give up your life for someone would be the moment you understand love.",
    authorName: "Natsu Dragneel, Fairy Tail",
  },
  {
    id: 64,
    quote: "Being weak is nothing to be ashamed of... Staying weak is!",
    authorName: "Toshiro Hitsugaya, Bleach",
  },
];
