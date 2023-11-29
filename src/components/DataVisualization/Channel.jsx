// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from "react";
import getRandomInt from "../../utils/randomGenerator";
import { useChannel } from "../../context/ChannelContext";
import { useGenerator } from "../../context/GeneratorContext"

// eslint-disable-next-line react/prop-types
function Channel({ channelID }) {
    const { isCleared, updateChannelValues } = useChannel();
    const { isActive, timeInterval } = useGenerator();
    const [randomNumbers, setRandomNumbers] = useState([]);

    // Generate a random number within the spesified time interval
    // Control start - stop button activity
    useEffect(() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                const newRandomNumber = getRandomInt(0, 10);
                setRandomNumbers(prevNumbers => [...prevNumbers, newRandomNumber]);
            }, timeInterval);
        }

        return () => clearInterval(interval);
    }, [isActive]);

    // Update channel values
    useEffect(() => {
            updateChannelValues(channelID, randomNumbers);
    }, [randomNumbers]);

    // Clear random number
    useEffect(() => {
        if (isCleared) {
            setRandomNumbers([]);
        }
    }, [isCleared])

    return (
    <article>
      <div className="border" style={{ display: 'flex' }}>
        {console.log(channelID)}
        {randomNumbers.map((number, index) => (
          <div
            key={index}
            style={{
              height: `${number * 20}px`,
              width: '20px',
              backgroundColor: 'blue',
              marginRight: '5px',
            }}
          />
        ))}
      </div>
    </article>
    )
}

export default Channel;