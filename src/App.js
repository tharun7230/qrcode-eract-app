
import './App.css';
import QRCode from 'qrcode.react';



function App() {
  return (
    <div className="App">
      <h1> QR Code Generator</h1>
      <QRCode
        value={"token 1"}
        size={128}
        bgColor={"#f7f7f7"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
        renderAs={"svg"}
        imageSettings={{
          src: "https://static.zpao.com/favicon.png",
          x: null,
          y: null,
          height: 24,
          width: 24,
          excavate: true,
        }}
      />
    </div>
  );
}

export default App;
