/**
 * contentjs 操作的是浏览器页面 不是chrome插件
 */

const refresh = (url) => {
    setInterval(() => {
        console.log(6666666);
        window.location.href = url;

    }, 3000);
};
chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    const { type, msg } = request;
    console.log('content addListener');

    if (type === 'index_refresh') {
        chrome.runtime.sendMessage({
            type: 'content_refresh',
            msg
        });
    }
    if (type === 'bg_refresh') {
        refresh(msg.url);
    }
})
