const { Rettiwt } = require("rettiwt-api");
const mongoose = require("mongoose");
const { apiKey } = require("./apiKey.js");

const uri =
  "mongodb+srv://Priyanshu23u:24681012@cluster0.fyvfy.mongodb.net/sih1?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB Atlas connection string

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Define a Mongoose Schema and Model for Tweets
// Use tweet 'id' as the '_id' field in MongoDB
const tweetSchema = new mongoose.Schema({
  id: String,
  createdAt: Date,
  fullText: String,
  lang: String,
});

// Model: The collection will use the Tweet schema
const Tweet = mongoose.model("Tweet", tweetSchema, "tweets");

const filterTweetsForIndiaDisasters = (tweets) => {
  return tweets.map(({ id, createdAt, fullText, lang }) => ({
    id,
    createdAt,
    fullText,
    lang,
  }));
};

// Function to save tweets into MongoDB using the Tweet model
const storeTweetsInMongo = async (tweets) => {
  try {
    const result = await Tweet.insertMany(tweets, { ordered: false }); // 'ordered: false' allows inserting valid documents even if duplicates exist
    console.log(`${result.length} tweets stored in MongoDB.`);
  } catch (error) {
    if (error.code === 11000) {
      console.error("Duplicate tweet found, skipping it.");
    } else {
      console.error("Error storing tweets in MongoDB:", error);
    }
  }
};

// Test Case 2: Searching for tweets by a user using 'user' authentication and storing them in MongoDB
const testSearchTweets = async (apiKey) => {
  const rettiwt = new Rettiwt({ apiKey });

  try {
    const data = await rettiwt.tweet.search({
      hashtags: [
        "earthquake",
        "flood",
        "hurricane",
        "tornado",
        "tsunami",
        "volcano",
        "cyclone",
        "wildfire",
        "landslide",
        "avalanche",
        "drought",
        "heatwave",
        "blizzard",
        "storm",
        "typhoon",
        "hailstorm",
        "mudslide",
        "sandstorm",
        "tremor",
        "aftershock",
        "lightningstrike",
        "icestorm",
      ],
    });

    const filteredTweets = filterTweetsForIndiaDisasters(data.list);
    await storeTweetsInMongo(filteredTweets);
    // console.log(filteredTweets);
  } catch (error) {
    console.error("Error searching tweets or storing them:", error);
  }
};

testSearchTweets(apiKey);
