const { Rettiwt } = require("rettiwt-api");
const { apiKey } = require("./apiKey.js");

const filterTweetsForIndiaDisasters = (tweets) => {
  const disasterKeywords = [
    "#earthquake",
    "#flood",
    "#hurricane",
    "#tornado",
    "#tsunami",
    "#volcano",
    "#cyclone",
    "#wildfire",
    "#landslide",
    "#avalanche",
    "#drought",
    "#heatwave",
    "#blizzard",
    "#storm",
    "#typhoon",
    "#hailstorm",
    "#mudslide",
    "#sandstorm",
    "#tremor",
    "#aftershock",
    "#flashflood",
    "#severeweather",
  ];

  return tweets
    .filter(
      (tweet) =>
        tweet.fullText.includes("#india") &&
        disasterKeywords.some((keyword) => tweet.fullText.includes(keyword))
    )
    .map(({ id, createdAt, fullText, lang }) => ({
      id,
      createdAt,
      fullText,
      lang,
    }));
};

// Test Case 1: Getting user details using 'guest' authentication
const testGetUserDetails = () => {
  const rettiwt = new Rettiwt(); // Guest authentication
  const username = "ManojTiwariMP"; // Example Twitter username

  rettiwt.user
    .details(username)
    .then((details) => {
      console.log("User Details:", details);
    })
    .catch((error) => {
      console.error("Error fetching user details:", error);
    });
};

// Test Case 2: Searching for tweets by a user using 'user' authentication
const testSearchTweets = (apiKey) => {
  const rettiwt = new Rettiwt({ apiKey }); // User authentication with API key

  rettiwt.tweet
    .search({
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
    })
    .then((data) => {
	// 	console.log(data);
	// 	console.log("-----------------------------------------------------");
		
		
    //   const tweets = filterTweetsForIndiaDisasters(data.list);
	// 	console.log(tweets);
	// 	console.log("-----------------------------------------------------");


      const filteredTweets = data.list.map(
        ({ id, createdAt, fullText, lang }) => ({
          id,
          createdAt,
          fullText,
          lang,
        })
      );

      console.log("Tweets Data:", filteredTweets);
    })
    .catch((error) => {
      console.error("Error searching tweets:", error);
    });
};

// Test Case 3: Fetching the next batch of tweets using a cursor
const testFetchNextBatch = (apiKey, cursor) => {
  const rettiwt = new Rettiwt({ apiKey }); // User authentication with API key

  rettiwt.tweet
    .search(
      {
        // fromUsers: ['ABPNews'],  // Example Twitter username
        words: ["#floods"], // Example search words
      },
      1,
      cursor
    ) // Fetching the next 10 tweets using the cursor
    .then((data) => {
      console.log("Next Batch of Tweets:", data);
    })
    .catch((error) => {
      console.error("Error fetching next batch of tweets:", error);
    });
};

// Call the test functions
// testGetUserDetails();
testSearchTweets(apiKey); // Replace with actual API key
// testFetchNextBatch('your-api-key-here', 'cursor-value');  // Replace with actual cursor value
