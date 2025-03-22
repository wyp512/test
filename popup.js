document.addEventListener('DOMContentLoaded', () => {
    // 为DOMContentLoaded事件添加监听器，当 popup.html 加载完毕后执行
    const entryDiv = document.querySelector('.dictionary-entry');
    // 查找页面中的 .dictionary-entry 元素
    // 从 storage 中读取保存的 LLM 回复结果
    console.log("hi");
    // 控制台输出 hi
    chrome.storage.local.get(['llmResponse'], (result) => {
    // 从Chrome本地存储中获取llmResponse数据
        if (result.llmResponse) {
            entryDiv.innerHTML = result.llmResponse;
            // 将llmResponse的内容设置为.dictionary-entry元素的HTML内容
            console.log(result.llmResponse);
            // 控制台输出llmResponse的内容
        } else {
            entryDiv.innerHTML = "<p>No LLM response available.</p>";
            // 如果没有llmResponse数据，将.dictionary-entry元素的HTML内容设置为No LLM response available.
        }
    });
});
//用于监听 Chrome 扩展存储变化
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local' && changes.llmResponse) {
    //确保变化发生在 local 存储空间中
    //确保 llmResponse 这个键发生了变化
        const entryDiv = document.querySelector('.dictionary-entry');
        entryDiv.innerHTML = changes.llmResponse.newValue;
        //当 llmResponse 发生变化时，页面上的 dictionary-entry 元素的内容会自动更新为新的值
    }
});
