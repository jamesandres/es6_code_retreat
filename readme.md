If you haven't got latest stable node then jest won't work. This assumes that you're working inside the vm (if you have latest stable node installed outside the VM, that's also fine):

    cd conversocial/frontend2
    git clone git@github.com:c-oreills/es6_code_retreat
    cd es6_code_retreat
    
    npm install

In seperate tmux panes

    npm run watch
    npm run server
    npm run test-watch

Open your browser and go to

    http://localhost:8080/webpack-dev-server/index.html
    
Or simply

    http://localhost:8080

if you don't want automated reloading
