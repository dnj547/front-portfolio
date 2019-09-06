# Portfolio
* **Description:** My portfolio website, including a game about my life/coding journey
* **Created:** July 2019 (Flatiron School Final Project)
* **Languages:** Ruby on Rails, React
* **Planning Document:** [Google Doc](https://docs.google.com/document/d/13h2ila9i0FbKlCbwZ9gls8Ew9TDCw_zVXPkI_BEVWGQ/edit?usp=sharing)

[![Portfolio Demo Video](https://user-images.githubusercontent.com/35350822/62050501-5564bf00-b1df-11e9-8a43-93c5366b3390.png)](https://s3.us-east-2.amazonaws.com/video.9/Portfolio.mp4)

## What can I do with this portfolio?
* view information about me, view my projects, and contact me
* play a game about my life

## How do I use it?
open terminal
```
git clone https://github.com/dnj547/portfolio.git
cd portfolio
cd back-end
bundle
rails db:create && rails db:migrate && rails db:seed && rails s
```
open second terminal window
```
cd client
yarn install
yarn start
yes
```
