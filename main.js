const { app, BrowerWindow, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile('index.html');
};

// electron에서 브라우저 창은 app 모듈의 ready 이벤트가 발생한 후에 만들 수 있다.
app.whenReady()
.then(() => {
  createWindow();
});