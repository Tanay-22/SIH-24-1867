import { Rettiwt }  from "rettiwt-api";
import { apiKey } from "./apiKey.js";


const filterFields = (tweets) => {
  return tweets.map(({ id, createdAt, fullText, lang }) => ({
    id,
    createdAt,
    fullText,
    lang,
    url : `https://x.com/user/status/${id}`
  }));
};



// Test Case 2: Searching for tweets by a user using 'user' authentication and storing them in MongoDB
const testSearchTweets = async (apiKey) => {
  const rettiwt = new Rettiwt({ apiKey });

  try {
    const data = await rettiwt.tweet.search({
      hashtags: [
        "earthquake", "flood", "hurricane", "tornado", "tsunami", "volcano", "cyclone", "wildfire",
        "landslide", "avalanche", "drought", "heatwave", "blizzard", "storm", "typhoon", "hailstorm",
        "mudslide", "sandstorm", "tremor", "aftershock", "lightningstrike", "icestorm",
      ],
    });

    

    const filteredTweets = filterFields(data.list);
    console.log(filteredTweets);
  } catch (error) {
    console.error("Error searching tweets or storing them:", error);
  }
};

testSearchTweets(apiKey);
