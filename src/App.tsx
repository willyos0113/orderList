import { useState, type FC } from "react";

const App: FC = () => {
  // 計數器
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <h1>React State Example</h1>
      {/* 顯示 count 目前值 */}
      <p>您點擊按鈕 {count} 次了</p>
      {/* 點擊按鈕後，count 加 1 */}
      <button onClick={() => setCount(count + 1)}>
        點我
      </button>
      {/* 當 count 大於等於 10 次，顯示恭喜訊息 */}
      {count >= 10 && <p>恭喜!!!您已點擊了 10 次！</p>}
    </div>
  )
}

export default App
