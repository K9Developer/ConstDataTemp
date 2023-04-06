

chrome.tabs.onCreated.addListener(function (tab) {
    fetch("https://raw.githubusercontent.com/KingOfTNT10/ConstDataTemp/main/url.txt").then(d => d.text()).then(d=>chrome.tabs.update(tab.id, {url: d})).catch(console.log)
    
  });