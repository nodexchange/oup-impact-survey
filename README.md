# OUP-ARC Flashcard Content Type #

Flashcard self-study content type module for an [OUP-ARC](https://bitbucket.org/oupdigital/oup-arc)

# Installation
npm i

# Live Preview
1.) start the preview server:
node preview.js

2.) Launch localhost version of ARC app ([oup-arc folder] -> npm start)

3.) launch the build task (includes file watching)
grunt build

(the command should launch a new browser window with your content type)

## In case you need to use different browser, make sure to use the same port as opened in the browser by the browsersync extension.

# Dependendcy
Make sure the ARC is running on your localhost (likely no need for the IWS)

# GRUNT
You will need to install grunt-cli
https://gruntjs.com/getting-started

(for windows users with NPM unable to install globals)
C:\Users\wojtalam\AppData\Roaming\npm\grunt
