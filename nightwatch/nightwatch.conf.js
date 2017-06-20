module.exports = {
    src_folders: ['tests'],
    "selenium": {
        "start_process": false,
        "server_path": "./node_modules/selenium-standalone/.selenium/selenium-server/3.4.0-server.jar",
        "log_path": "",
        "port": 4444
            //"cli_args": {
            //    "webdriver.chrome.driver":"node_modules/selenium-standalone/.selenium/chromedriver/2.30-x65-chromedriver"
            // }
    },

    "test_settings": {
        "default": {
            "launch_url": "http://localhost",
            //"selenium_port": 4444,
            //"selenium_host": "localhost",
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                "chromeOptions": {
                    "args": ["window-size=1280,800", "disable-web-security", "test-type"]
                },
            }
        }
    }

};