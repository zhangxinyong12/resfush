// 当前环境是chrome插件

function refresh(msg) {
    setTimeout(() => {
        chrome.tabs.sendMessage(msg.id, {
            type: 'bg_refresh',
            msg
        });
        refresh(msg);
    }, Math.floor(Math.random() * (5 - 3 + 1) + 3) * 1000);
}

chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    const { type, msg } = request;
    console.log('bg addListener');
    if (type === 'content_refresh') {
        refresh(msg);
    }
})