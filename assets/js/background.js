(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

chrome.runtime.onInstalled.addListener(function () {
    ga('create', 'UA-87536814-1', 'auto');
    ga('set', 'checkProtocolTask', function (){});
    ga('require', 'displayfeatures');
    ga('send', {
      hitType: 'event',
      eventCategory: 'Installation',
      eventAction: 'Install',
      eventLabel: 'App Installed'
    });
    chrome.storage.local.set({
      lowPriority: false,
      normalPriority: false,
      highPriority: true,
      urgentPriority: true
    });
    ga('send', {
      hitType: 'event',
      eventCategory: 'Installation',
      eventAction: 'Highlight High',
      eventLabel: 'Highlight High Priority on Install'
    });
    ga('send', {
      hitType: 'event',
      eventCategory: 'Installation',
      eventAction: 'Highlight Urgent',
      eventLabel: 'Highlight Urgent Priority on Install'
    });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: '*.zendesk.com/agent/*', schemes: ['https'] },
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

