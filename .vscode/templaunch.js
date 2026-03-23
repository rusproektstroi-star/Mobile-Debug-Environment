{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Run Flask Server",
            "type": "debugpy",
            "request": "launch",
            "program": "${workspaceFolder}/run.py",
            "console": "integratedTerminal",
            "cwd": "${workspaceFolder}",
            "justMyCode": true
        },
        {
            "name": "Launch Chrome (Mobile)",
            "type": "chrome",
            "request": "launch",
            "url": "http://127.0.0.1:5000",
            "webRoot": "${workspaceFolder}",
            "runtimeExecutable": "C:/Users/Valiel/AppData/Local/Google/Chrome/Application/chrome.exe",
            "userDataDir": "${workspaceFolder}/.vscode/chrome-mobile-profile",
            "runtimeArgs": [
                "--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1",
                "--auto-open-devtools-for-tabs"
            ]
        },
        {
            "name": "Launch Chrome (Tablet)",
            "type": "chrome",
            "request": "launch",
            "url": "http://127.0.0.1:5000",
            "webRoot": "${workspaceFolder}",
            "runtimeExecutable": "C:/Users/Valiel/AppData/Local/Google/Chrome/Application/chrome.exe",
            "userDataDir": "${workspaceFolder}/.vscode/chrome-tablet-profile",
            "runtimeArgs": [
                "--user-agent=Mozilla/5.0 (iPad; CPU OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1",
                "--auto-open-devtools-for-tabs"
            ],
            "presentation": {
                "group": "responsive"
            }
        }
    ],
    "compounds": [
        {
            "name": "Run Flask + Chrome (Mobile)",
            "configurations": [
                "Run Flask Server",
                "Launch Chrome (Mobile)"
            ]
        },
        {
            "name": "Run Flask + Chrome (Tablet)",
            "configurations": [
                "Run Flask Server",
                "Launch Chrome (Tablet)"
            ]
        }
    ]
}