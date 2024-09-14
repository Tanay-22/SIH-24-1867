import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import axios from 'axios';
import * as cheerio from 'cheerio';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { apiKey } from './apiKey.js';
import { Rettiwt } from 'rettiwt-api';


dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB is connected!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());



const FinalSchema = new mongoose.Schema({
  location: String,
  date: String,
  disaster_type: String,
  short_description: String,
});
const Final_News = mongoose.model('Final_News', FinalSchema, 'final_news');

// Twitter integration (Rettiwt API)
const tweetSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  createdAt: { type: Date, required: true },
  fullText: { type: String, required: true },
  lang: { type: String, required: true },
  url: { type: String, required: true },
});


const Tweet = mongoose.model('Tweet', tweetSchema, 'tweets');

// Function to filter tweets and build the tweet URL
const filterTweetsForIndiaDisasters = (tweets) => {
  return tweets.map(({ id, createdAt, fullText, lang }) => ({
    id,
    createdAt,
    fullText,
    lang,
    url: `https://x.com/user/status/${id}`,
  }));
};

// Function to save tweets to MongoDB
const storeTweetsInMongo = async (tweets) => {
  try {
    const result = await Tweet.insertMany(tweets, { ordered: false });
    console.log(`${result.length} tweets stored in MongoDB.`);
  } catch (error) {
    if (error.code === 11000) {
      console.error('Duplicate tweet found, skipping it.');
    } else {
      console.error('Error storing tweets in MongoDB:', error);
    }
  }
};

// Function to search for tweets using Rettiwt API
const testSearchTweets = async (apiKey) => {
  const rettiwt = new Rettiwt({ apiKey });

  try {
    const data = await rettiwt.tweet.search({
      hashtags: [
        "earthquake", "flood", "hurricane", "tornado", "tsunami",
        "volcano", "cyclone", "wildfire", "landslide", "avalanche",
        "drought", "heatwave", "blizzard", "storm", "typhoon",
        "hailstorm", "mudslide", "sandstorm", "tremor", "aftershock",
        "lightningstrike", "icestorm",
      ],
    });

    const filteredTweets = filterTweetsForIndiaDisasters(data.list);
    await storeTweetsInMongo(filteredTweets);
    console.log(filteredTweets);
  } catch (error) {
    console.error('Error searching tweets or storing them:', error);
  }
};

// Call the Twitter API function from here in index.js
testSearchTweets(apiKey);


app.get('/api/final_news', async (req, res) => {
  try {
    const data = await Final_News.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data: ' + err.message });
  }
});



app.get('/api/disasters/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Final_News.find();
    const disaster = data.find(d => d._id.toString() === id); 

    if (disaster) {
      res.json(disaster);
    } else {
      res.status(404).json({ message: 'Disaster not found' });
    }
  } catch (error) {
    console.error("Error fetching disaster data:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



const FinalSchemaN = new mongoose.Schema({
    location: String,
    date: String,
    disaster_type: String,
    short_description: String,
  });
  const Final_Tweet = mongoose.model('Final_Tweet', FinalSchemaN, 'final_tweet');
  
  
  
  app.get('/api/final_tweet', async (req, res) => {
    try {
      const data = await Final_Tweet.find();
      console.log(data)
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch data: ' + err.message });
    }
  });
  
  
  
  app.get('/api/disasters/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const data = await Final_Tweet.find();
      const disaster = data.find(d => d._id.toString() === id); 
  
      if (disaster) {
        res.json(disaster);
      } else {
        res.status(404).json({ message: 'Disaster not found' });
      }
    } catch (error) {
      console.error("Error fetching disaster data:", error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

// Reference existing collection (news collection) without schema enforcement
const newsLinks = mongoose.model('newsLinks', new mongoose.Schema({}, { strict: false }), 'news1');

const dataSchema = new mongoose.Schema({
  link: String,
  content: String
});

const NewsContent = mongoose.model('NewsContent', dataSchema);

app.get('/newsWithContent', async (req, res) => {
  try {
    // Step 1: Fetch the news links from MongoDB
    const data = await newsLinks.find();
    const AllNewsLinks = [];

    // Extract all links from the fetched data
    data.map((d) => {
      AllNewsLinks.push(d.Links);
    });

    // Step 2: Initialize a variable to store all the fetched content
    // Variable to store the combined content from all links

    // Step 3: Iterate over the news links and fetch content from each
    for (const l of AllNewsLinks) {
      const url = l;
      let content = '';

      try {
        // Fetch the content from the URL
        const response = await axios.get(url);
        let $ = cheerio.load(response.data);

        // Extract all paragraphs' text
        $('div ._1884').each(function () {
          let c = $(this).text();
          content += String(c);  // Append text to content variable
        });

        const newsContent = new NewsContent({ link: l, content: content });
        await newsContent.save();

      } catch (error) {
        // Log the error and skip to the next link
        console.error(`Error fetching data from ${url}:`, error.message);
        continue;  // Skip this iteration and continue with the next link
      }
    }

    // Step 4: Send the collected content as the response
    res.send(AllNewsLinks);

  } catch (error) {
    // Handle errors in fetching data from MongoDB or during content extraction
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Error processing request' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
