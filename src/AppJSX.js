import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "엘리";
  const list = ["우유", "딸기", "바나나", "요거트"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://www.cartier.jp/content/dam/rcq/car/20/88/37/6/2088376.png.scale.600.high.%E3%82%AB%E3%83%AB%E3%83%86%E3%82%A3%E3%82%A8-%E3%83%80%E3%83%A0%E3%83%BC%E3%83%AB-%E3%83%96%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%83%88%E3%80%81%E3%82%B9%E3%83%A2%E3%83%BC%E3%83%AB%E3%83%A2%E3%83%87%E3%83%AB-%E3%83%94%E3%83%B3%E3%82%AF%E3%82%B4%E3%83%BC%E3%83%AB%E3%83%89.png"
        alt="nature"
      />
    </>
  );
}

export default AppJSX;
