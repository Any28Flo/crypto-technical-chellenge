# ATD | Crypto challenge

Is a  client application written in JavaScript (ES6) and React.
***


![Node](https://img.shields.io/badge/node-%3E%3D%2012.4-brightgreen.svg)
### Prepare environment variables

For sensitive information, which we don't want them checked into git, we inject these configurations to the application as environment variables (even for local environment). Note: we'll likely improve this process in the future.

There's a script that will help you set up the correct environment variables.

1. Copy `.env-example` file and rename into `.env` file. The file `.env` is included in `.gitignore` so the sensitive will not be checked in.

   ```bash
   $ cp .env-example .env
   ```

2. Get the actual values and paste them in `.env`.
   (ask for this file if it's your first time setting this up)

   The `env` file is not a shell execution script, but a shell configuration file. Running the command `source` loads into your **current shell session** with the appropriate environment variables instead of forking another shell session. Once you have this set, launch your IDE or text editor from the shell where the environment variables are set.

### Run the Application for Development

1. Install the dependencies


   ```bash
   $ npm install
   ```

2. Run the app in the development mode.

   ```bash
   $ npm start
   ```


3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### Front-End

* [REACT](https://reactjs.org/)
* [STYLED-COMPONENTS](https://styled-components.com/)
