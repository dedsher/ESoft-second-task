import { useState, useEffect } from "react";

const promoTitleOptions = {
  fullText: "who am i",
  typingSpeed: 100,
  repeatDelay: 10000,
}

const PromoTitle = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    const startTyping = () => {
      interval = setInterval(() => {
        if (currentIndex <= promoTitleOptions.fullText.length) {
          setText(promoTitleOptions.fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setText("");
            currentIndex = 0;
            startTyping();
          }, promoTitleOptions.repeatDelay);
        }
      }, promoTitleOptions.typingSpeed);
    };

    startTyping();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="portfolio__title">
      {text}
      <span className="portfolio__cursor" />
    </div>
  );
};

export default PromoTitle;
