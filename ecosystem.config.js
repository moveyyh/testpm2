module.exports = {
    apps: [{
      name: "myServer",
      script: "server.js"
    }],
    deploy: {
      // "production" is the environment name
      production: {
        // SSH key path, default to $HOME/.ssh
        key: "C:\Users\YH\.ssh",
        // SSH user
        user: "yh",
        // SSH host
        host: ["118.184.218.191"],
        // SSH options with no command-line flag, see 'man ssh'
        // can be either a single string or an array of strings
        ssh_options: "StrictHostKeyChecking=no",
        // GIT remote/branch
        ref: "origin/master",
        // GIT remote
        repo: "git@github.com:moveyyh/testpm2.git",
        // path in the server
        path: "/var/www/my_test_delay",
        // Pre-setup command or path to a script on your local machine
        // 'pre-setup': "npm install",
        // Post-setup commands or path to a script on the host machine
        // eg: placing configurations in the shared dir etc
        // 'post-setup': "ls -la",
        // pre-deploy action
        'pre-deploy-local': "echo 'This is a local executed command'",
        // post-deploy action
        'post-deploy': "npm install",
      },
    }
  }