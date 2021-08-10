## 1- A description of how your implementtion would work, e.g. a docker file or a deployment config

I usually deploy my ReactJS apps on heroku. Heroku allows you to set front end environment varialbles.
In our case the only to variables we need are the ENV (production or staging) and the API_BASE_URL.
This lets us modify each environment’s configuration in isolation, and prevents secure credentials from being stored in version control.
Config var values are persistent–they remain in place across deploys and app restarts. Unless you need to change a value, you only need to set it once.

To deploy a ReactJS app created with create-react-app we can follow the steps below:

npm install -g create-react-app
create-react-app my-app
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open

## 2- A list of steps you need to take to change the FQDN of the API (API_BASE_URL) for production or staging:

To set a config var:

heroku config:set API_BASE_URL=https://some_url.com

## 3- How would you handle new versions of the API?

Every time we have a new version of the API we can simply reset the environment variables either from the CLI or using Heroky website.
