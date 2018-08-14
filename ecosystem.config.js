module.exports = {
    apps: [{
      name: "myServer",
      script: "server.js",
      output: './logs/out.log',
      error: './logs/error.log',
	    log: './logs/combined.outerr.log'
    }],
    deploy: {
      // "production" is the environment name
      production: {
        // SSH key path, default to $HOME/.ssh
<<<<<<< HEAD
        key: "C:\\Users\\YH\\.ssh",
=======
        // key: "C:\\Users\\YH\\.ssh",
>>>>>>> bd5afc01e0a792999c7256238b9980ef8b13808d
        // SSH user
        user: "root",
        // SSH host
        host: ["118.184.218.191"],
        // SSH options with no command-line flag, see 'man ssh'
        // can be either a single string or an array of strings
        ssh_options: "StrictHostKeyChecking=no",
        // GIT remote/branch
        ref: "master",
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