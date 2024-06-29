# AI-Powered Content Summarizer Dashboard

This project is an AI-powered content summarizer dashboard that allows users to input long-form text content or scrape content from web pages and receive AI-generated summaries. The application is built using React with Vite for the frontend and styled with Tailwind CSS.

## Features

- A clean, responsive interface with:
  - A text input area for users to paste or type long-form content
  - A URL input field for web scraping
- Web scraping feature to fetch content from URLs and display it for user review before summarization
- Integration with an AI summarization API
- Display of original text and AI-generated summary side by side
- Options for users to adjust summary length
- Basic error handling for API failures, invalid inputs, or web scraping issues
- A simple user authentication system (mocked) to personalize the experience and save user-specific history
- Export summaries in different formats (e.g., plain text, PDF)
- Loading states/animations during AI summarization or web scraping
- A history section that saves previous summarization requests
- Basic accessibility features to ensure usability by people with disabilities

## Requirements

- Node.js (>= 14.x)
- Yarn package manager

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/chiragyadav2003/ChiragYadav_AI-Powered-Content-Summarizer-Dashboard_Frontend.git
   cd ChiragYadav_AI-Powered-Content-Summarizer-Dashboard_Frontend
   ```

2. **Install dependencies::**

   ```bash
   yarn install
   ```

3. **Set up environment variables:**

   ```bash
   VITE_AI_BEARER_TOKEN='YOUR_BEARER_TOKEN'
   ```

4. **Start the development server::**

   ```bash
   yarn dev
   ```

   The application should now be running on http://localhost:5173.

## Project Structure

1. Scrape content from a URL:

- Enter a URL in the URL input field and click the "Fetch Content" button.

- The content will be fetched and displayed in the text input area.

  <br/>

2. Summarize content:

- Enter or paste content in the text input area, or use the scraped content.

- Select the desired number of output sentences.

- Click the "Summarize" button to generate the AI summary.

- The original content and the AI-generated summary will be displayed side by side.

    <br/>

3. View history:

- Previous summarization requests will be saved in the history section.

- Click on any history item to view the original and summarized content.

  <br/>

4. Export summaries:

- Use the export buttons to download the summary in plain text or PDF format.

## Additional Information

- The project uses Axios for HTTP requests and Tailwind CSS for styling.
- The AI summarization API requires an API key, which should be stored in the .env file.
- This project includes basic error handling for API failures and invalid inputs.
- Loading states and animations are used to improve user experience during web scraping and AI summarization.
- For developement, we can get bearer token from [EdenAI](https://app.edenai.run/bricks/text/summarization)

## License

This project is licensed under the MIT License.

##

Thank you for checking out the AI-Powered Content Summarizer Dashboard! I hope you find it useful and easy to use.

Developed with ❤️ by [Chirag Yadav)](https://github.com/chiragyadav2003)
