export default function normalizeChannelHeight(randomNumber, randomMin, randomMax, channelHeight) {
    // This function normalizes height of the channels with respect to lower-upper boundry.
    // height: represents random number value
    // randomMin: represents lower boundry
    // randomMax: represents upper boundry
    // [randomMin randomMax] normalizes to [0 1].
    return ((randomNumber - randomMin) / (randomMax - randomMin)) * channelHeight;
  }