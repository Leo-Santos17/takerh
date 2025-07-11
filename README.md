# TakeRH

This project is a web application for generating and managing resumes, built with Node.js and Express, integrated with Google's Gemini API for content generation, and using Puppeteer for PDF generation. The application uses EJS for templating and Express Session for user session management.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features
- Generate dynamic resumes using Google's Gemini API.
- Render HTML templates with EJS.
- Manage user sessions with Express Session.
- Generate PDF versions of resumes using Puppeteer.
- Environment variable configuration with dotenv.

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)
- A valid [Google Gemini API key](https://ai.google.dev/)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Leo-Santos17/takerh.git
   cd takerh
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure it (see [Environment Variables](#environment-variables)).

4. Start the application:
   ```bash
   node index.js
   ```

## Environment Variables
Create a `.env` file in the root directory with the following variables:

```
GEMINI_API_KEY=your_google_gemini_api_key
SESSION_SECRET=your_session_secret
PROMPT=your_gemini_prompt
```

- `GEMINI_API_KEY`: API key for Google's Gemini API.
- `SESSION_SECRET`: Secret key for Express Session.
- `PROMPT`: Custom prompt for Gemini API to interpret and generate content.

## Usage
1. Ensure the `.env` file is properly configured.
2. Run the application:
   ```bash
   node index.js
   ```
3. Access the application at `http://localhost:3000` (or the port specified in your configuration).
4. Follow the application flow to create, view, or download resumes.

## Dependencies
- [express](https://www.npmjs.com/package/express): Web framework for Node.js.
- [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai): Google Gemini API for content generation.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.
- [ejs](https://www.npmjs.com/package/ejs): Embedded JavaScript templating engine.
- [express-session](https://www.npmjs.com/package/express-session): Session management for Express.
- [puppeteer](https://www.npmjs.com/package/puppeteer): Headless Chrome browser for PDF generation.

Install dependencies using:
```bash
npm install express @google/generative-ai dotenv ejs express-session puppeteer
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
