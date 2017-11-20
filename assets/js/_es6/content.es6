chrome.storage.local.get('lowPriority', function (data) {
  if (data.lowPriority == true) {
    const low = document.createElement('script');
    low.type = 'text/javascript';
    low.src = 'https://richardvd91.github.io/Dutch_Zendesk_Priority_Highlights/assets/cdn/script-low-min.js';
    document.head.appendChild(low);
  }
});

chrome.storage.local.get('normalPriority', function (data) {
  if (data.normalPriority == true) {
    const normal = document.createElement('script');
    normal.type = 'text/javascript';
    normal.src = 'https://richardvd91.github.io/Dutch_Zendesk_Priority_Highlights/assets/cdn/script-normal-min.js';
    document.head.appendChild(normal);
  }
});

chrome.storage.local.get('highPriority', function (data) {
  if (data.highPriority == true) {
    const high = document.createElement('script');
    high.type = 'text/javascript';
    high.src = 'https://richardvd91.github.io/Dutch_Zendesk_Priority_Highlights/assets/cdn/script-high-min.js';
    document.head.appendChild(high);
  }
});

chrome.storage.local.get('urgentPriority', function (data) {
  if (data.urgentPriority == true) {
    const urgent = document.createElement('script');
    urgent.type = 'text/javascript';
    urgent.src = 'https://richardvd91.github.io/Dutch_Zendesk_Priority_Highlights/assets/cdn/script-urgent-min.js';
    document.head.appendChild(urgent);
  }
});

$('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', 'https://richardvd91.github.io/Dutch_Zendesk_Priority_Highlights/assets/cdn/style-min.css'));
