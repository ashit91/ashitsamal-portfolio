Referred Youtube links:
https://www.youtube.com/watch?v=ctLFWAanxcI
https://www.youtube.com/watch?v=mdO18zv3oGQ
https://www.youtube.com/watch?v=PJeNReqyH88 - Debugging in VScode.

1: npm install -g create-react-app
2: create-react-app ashitsamal-portfolio
3: cd ashitsamal-portfolio
4: npm start - just to check if its running
5: Go to githum account -> create an account -> create a empty public repository probably with same name as ashitsamal-portfolio

In local /ashitsamal-portfolio/ :
6: git init
7: git remote add origin https://github.com/ashit91/ashitsamal-portfolio.git
8: git branch -M main
9: git push -u origin main

If faced error: refer - https://stackoverflow.com/questions/43863522/error-your-push-would-publish-a-private-email-address
Open your GitHub account, and go to Settings → Emails.
Select the "Keep my email addresses private" check box.
Unselect the "Block command line pushes that expose my email" check box.

Helpful docs for gh-pages deploy: https://create-react-app.dev/docs/deployment#github-pages

10: Open your package.json and add a homepage field for your project: "homepage": "https://myusername.github.io/my-app",
11: npm install --save gh-pages
12: Add the following scripts in your package.json:
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
13: npm run deploy
14: Now go to repository settings (https://github.com/ashit91/ashitsamal-portfolio/settings) -> GitHub Pages -> Source
-> Select branch as gh-pages.
15: Wait for few(3-5) minutes, refresh the page and click on the published link (https://ashit91.github.io/ashitsamal-portfolio/). Hooray...