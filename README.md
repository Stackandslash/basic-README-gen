# Basic README Gen

#### Description
A basic generator for READMEs using the terminal.

## Table of Contents
#### [Details](#details)
#### [Images](#images)
#### [Tests](#tests)

### Details
This is a basic README generator, made to create a templated README from terminal input. The results are nothing fancy, but should be functional, should one decide to create a README file by entering all the text content into a command line.
Most of the input the generator takes is placed in the corresponding places in the README. However, it also uses the GitHub API to look up the user's GitHub account, and provide appropriate avatar, email, and badge info. The badge info is presently dependent on the repo name, as well.
There's not currently any functionality that keeps the user from entering an entirely inaccurate name or repo. However, this will only serve to nullify the contact information auto-fill and badge details.

### Images
![image one](result1.PNG)
![image two](result2.PNG)
![image three](result3.PNG)


### Tests
First, try entering the information for your username and one of your repos. The badge and your contact details will be updated appropriately.

Second, try entering the information for someone else. This will also update appropriately. Don't forge READMEs with this. It won't make any sense.

Third, try entering your name, but not an existing repo. This makes the badge sad.

Fourth, try slamming the keyboard for each entry. Just to be sure.
