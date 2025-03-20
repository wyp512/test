document.addEventListener('copy', async (event) => {

//监听网页中的 copy 事件。当用户执行复制操作（例如按下 Ctrl+C 或右键选择“复制”）时，事件会触发。
//事件处理函数被声明为 async，表示可以在其中使用 await 进行异步操作。  

  const selectedText = window.getSelection().toString().trim();

//window.getSelection()：获取用户当前选中的文本。
//.toString()：将选中的文本转换为字符串。
//.trim()：去除文本前后的空白字符（例如空格、换行符等）。
//selectedText：存储处理后的复制文本。

  chrome.runtime.sendMessage({
  //通过 Chrome 扩展的 runtime API 发送消息。
    type: 'COPIED_TEXT',
    //消息类型，用于标识消息的用途。
    text: selectedText
    //复制的文本内容。
  });

  console.log('Copied text:', selectedText);
  //将复制的文本打印到控制台，方便调试和验证。
}