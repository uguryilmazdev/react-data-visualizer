// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from "react";
import getRandomInt from "../../utils/randomGenerator";
import { useChannel } from "../../context/ChannelContext";

// eslint-disable-next-line react/prop-types
function Channel({ channelID }) {
    const { updateChannelValues } = useChannel();
    const [randomNumbers, setRandomNumbers] = useState([]);

    // Generate a random number within the spesified time interval
    useEffect(() => {
        const interval = setInterval(() => {
            const newRandomNumber = getRandomInt(0, 10);
            setRandomNumbers(prevNumbers => [...prevNumbers, newRandomNumber]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Update channel values
    useEffect(() => {
            updateChannelValues(channelID, randomNumbers);
    }, [randomNumbers]);

    return (
    <div>
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
    </div>
    )
}

export default Channel;