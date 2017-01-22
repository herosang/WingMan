
#!/bin/bash
npm run build
cd public
mv *.js index.js
cd ..
cd ..
mv FrontEnd/public/index.js wingman/assets/js/
cd wingman
./node_modules/.bin/webpack --config webpack.config.js
cd .. 
docker-compose up --build
