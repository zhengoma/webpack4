import scss from "./css/common1.scss";
import html2canvas from "html2canvas";
import Canvas2Image from "./utils/canvas2image";
const s = () => {
    console.log("%c 前端开发 %c myz %c webpack", "color:red", "", "color:orange;font-weight:bold")
    console.log(...[1, 2, 3])
    const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
    const newItem = Array.from(items).map(i => i * i)
    console.log(newItem)
}
s()

setTimeout(() => {
    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas);
        var imgDom = Canvas2Image.convertToJPEG(canvas, canvas.offsetWidth, canvas.offsetHeight);
        console.log(imgDom);
        document.body.appendChild(imgDom);
    });
}, 3000);
