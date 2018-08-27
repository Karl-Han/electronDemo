const {BrowserWindow,app} = require("electron");

function createWindow(){
    //create a new window
    win = new BrowserWindow({width:800,height:600})

    //load index.html
    win.loadFile("index.html");

    //open the developer tools
    win.webContents.openDevTools();

    //
    win.on("closed",() =>{
        //when you closed the window it needs to delete
        //the element
        win = null
    })
}

app.on("ready",createWindow);

app.on("window-all-closed",()=>{
    //it depends on the platform
    //if it runs on macOS,user needs to terminate it by CMD+Q
    if(process.platform != "darwin"){
        app.quit();
    }
    else alert("Please terminate it with CMD + Q");
})

app.on("active",()=>{
    if(win == null){
        createWindow();
    }
})
