const { Rettiwt } = require('rettiwt-api');
const { apiKey }  = require("./apiKey.js");

// Test Case 1: Getting user details using 'guest' authentication
const testGetUserDetails = () => {
    const rettiwt = new Rettiwt();  // Guest authentication
    const username = 'ManojTiwariMP';  // Example Twitter username

    rettiwt.user.details(username)
        .then(details => {
            console.log('User Details:', details);
        })
        .catch(error => {
            console.error('Error fetching user details:', error);
        });
};

// Test Case 2: Searching for tweets by a user using 'user' authentication
const testSearchTweets = (apiKey) => {
    const rettiwt = new Rettiwt({ apiKey });  // User authentication with API key

    rettiwt.tweet.search({
        hashtags: ["flood", "india"],
    }   
    , 5)
        .then(data => {
            console.log('Tweets Data:', data);
        })
        .catch(error => {
            console.error('Error searching tweets:', error);
        });
};

// Test Case 3: Fetching the next batch of tweets using a cursor
const testFetchNextBatch = (apiKey, cursor) => {
    const rettiwt = new Rettiwt({ apiKey });  // User authentication with API key

    rettiwt.tweet.search({
        // fromUsers: ['ABPNews'],  // Example Twitter username
        words: ['#floods']  // Example search words
    }, 10, cursor)  // Fetching the next 10 tweets using the cursor
        .then(data => {
            console.log('Next Batch of Tweets:', data);
        })
        .catch(error => {
            console.error('Error fetching next batch of tweets:', error);
        });
};



// Call the test functions
// testGetUserDetails();
testSearchTweets(apiKey);  // Replace with actual API key
// testFetchNextBatch('your-api-key-here', 'cursor-value');  // Replace with actual cursor value
