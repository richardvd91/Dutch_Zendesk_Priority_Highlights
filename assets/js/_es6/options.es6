(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

const analyticsPage = function googleAnalyticsPage() {
  ga('create', 'UA-87536814-1', 'auto');
  ga('set', 'checkProtocolTask', function (){});
  ga('require', 'displayfeatures');
  ga('set', 'title', 'Options Page');
  ga('send', 'pageview', 'options');
}

const analyticsSave = function googleAnalyticsSave() {
  ga('create', 'UA-87536814-1', 'auto');
  ga('set', 'checkProtocolTask', function (){});
  ga('require', 'displayfeatures');
  ga('send', {
    hitType: 'event',
    eventCategory: 'Save',
    eventAction: 'Save',
    eventLabel: 'Options Saved'
  });
}

const optionsSave = function saveOptions() {
  ga('create', 'UA-87536814-1', 'auto');
  ga('set', 'checkProtocolTask', function (){});
  ga('require', 'displayfeatures');
  let $low = document.getElementById('priority-low').checked;
  let $normal = document.getElementById('priority-normal').checked;
  let $high = document.getElementById('priority-high').checked;
  let $urgent = document.getElementById('priority-urgent').checked;
  const $status = document.getElementById('status');
  chrome.storage.local.set({
    lowPriority: $low,
    normalPriority: $normal,
    highPriority: $high,
    urgentPriority: $urgent
  }, function () {
    $status.textContent = 'Options saved.';
  });
  if ($low == true) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Highlight',
      eventAction: 'Highlight Low',
      eventLabel: 'Highlight Low Priority after Save'
    });
  }
  if ($normal == true) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Highlight',
      eventAction: 'Highlight Normal',
      eventLabel: 'Highlight Normal Priority after Save'
    });
  }
  if ($high == true) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Highlight',
      eventAction: 'Highlight High',
      eventLabel: 'Highlight High Priority after Save'
    });
  }
  if ($urgent == true) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Highlight',
      eventAction: 'Highlight Urgent',
      eventLabel: 'Highlight Urgent Priority after Save'
    });
  }
}

const getOptions = function restoreOptions() {
  chrome.storage.local.get(function (items) {
    document.getElementById('priority-low').checked = items.lowPriority;
    document.getElementById('priority-normal').checked = items.normalPriority;
    document.getElementById('priority-high').checked = items.highPriority;
    document.getElementById('priority-urgent').checked = items.urgentPriority;
  });
}

const $save = document.getElementById('save-button');

document.addEventListener('DOMContentLoaded', getOptions);
document.addEventListener('DOMContentLoaded', analyticsPage);
$save.addEventListener('click', optionsSave);
$save.addEventListener('click', analyticsSave);
