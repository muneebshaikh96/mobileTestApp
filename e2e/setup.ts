import { startServer, stopServer } from "nativescript-dev-appium";


var jasmineTrxConfig = {
    reportName: 'mytestresult',
    folder: 'testResults',
    outputFile: '',
};

before("start server", async () => {
    await startServer();
    
});

after("stop server", async () => {
    await stopServer();
   
});
