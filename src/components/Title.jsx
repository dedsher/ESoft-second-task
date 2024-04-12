import { useState, useEffect } from 'react';

const Title = () => {
    const [text, setText] = useState('');
    const fullText = "who am i";
    const typingSpeed = 100;
    const repeatDelay = 10000;

    useEffect(() => {
        let currentIndex = 0;
        let interval;
    
        const startTyping = () => {
            interval = setInterval(() => {
                if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
                } else {
                clearInterval(interval);
                setTimeout(() => {
                    setText('');
                    currentIndex = 0;
                    startTyping();
                }, repeatDelay);
                }
            }, typingSpeed);
        };
    
        startTyping();
    
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='portfolio__title'>
            {text}<span className="portfolio__cursor" />
        </div>
    )
}

export default Title