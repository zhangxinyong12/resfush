
const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', function (e) {
    let url = document.querySelector('#urlname');
    url = url.value;
    console.log(url);
    // var bg = chrome.extension.getBackgroundPage();
    // bg.refresh();
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            type: 'index_refresh',
            msg: { url, id: tabs[0].id }
        });
    });
});