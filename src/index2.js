import scss from "./css/common2.scss";
const s = () => {
    console.log("%c 前端开发2 %c myz %c webpack", "color:red", "", "color:orange;font-weight:bold")
    console.log(...[1, 2, 3])
    const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
    const newItem = Array.from(items).map(i => i * i)
    console.log(newItem)
}
s()
