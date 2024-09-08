import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import axios from 'axios';
import * as cheerio from 'cheerio';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDB is connected!');
}).catch((err) => {
    console.log(err);
})

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000 , () => {
    console.log('Server is running on port 3000!');
})





// Reference existing collection (news collection) without schema enforcement
const newsLinks = mongoose.model('newsLinks', new mongoose.Schema({}, { strict: false }), 'news1');


const dataSchema = new mongoose.Schema({
    link : String ,
    content : String
})

const NewsContent = mongoose.model('NewsContent',dataSchema);

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
  
          const newsContent = new NewsContent({ link : l,content : content });
          await newsContent.save();
  
        } catch (error) {
          // Log the error and skip to the next link
          console.error(`Error fetching data from ${url}:`, error.message);
          continue;  // Skip this iteration and continue with the next link
        }
      }
  
      // Step 4: Send the collected content as the response
    //   res.send(contentData);

        res.send(AllNewsLinks)
  
    } catch (error) {
      // Handle errors in fetching data from MongoDB or during content extraction
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Error processing request' });
    }
  });