'use strict';(function(b,c,d,e,f,h,j){b.GoogleAnalyticsObject=f,b[f]=b[f]||function(){(b[f].q=b[f].q||[]).push(arguments)},b[f].l=1*new Date,h=c.createElement(d),j=c.getElementsByTagName(d)[0],h.async=1,h.src=e,j.parentNode.insertBefore(h,j)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');var analyticsPage=function analyticsPage(){ga('create','UA-87536814-1','auto'),ga('set','checkProtocolTask',function(){}),ga('require','displayfeatures'),ga('set','title','Options Page'),ga('send','pageview','options')},analyticsSave=function analyticsSave(){ga('create','UA-87536814-1','auto'),ga('set','checkProtocolTask',function(){}),ga('require','displayfeatures'),ga('send',{hitType:'event',eventCategory:'Save',eventAction:'Save',eventLabel:'Options Saved'})},optionsSave=function optionsSave(){ga('create','UA-87536814-1','auto'),ga('set','checkProtocolTask',function(){}),ga('require','displayfeatures');var c=document.getElementById('priority-low').checked,d=document.getElementById('priority-normal').checked,e=document.getElementById('priority-high').checked,f=document.getElementById('priority-urgent').checked,h=document.getElementById('status');chrome.storage.local.set({lowPriority:c,normalPriority:d,highPriority:e,urgentPriority:f},function(){h.textContent='Options saved.'}),!0==c&&ga('send',{hitType:'event',eventCategory:'Highlight',eventAction:'Highlight Low',eventLabel:'Highlight Low Priority after Save'}),!0==d&&ga('send',{hitType:'event',eventCategory:'Highlight',eventAction:'Highlight Normal',eventLabel:'Highlight Normal Priority after Save'}),!0==e&&ga('send',{hitType:'event',eventCategory:'Highlight',eventAction:'Highlight High',eventLabel:'Highlight High Priority after Save'}),!0==f&&ga('send',{hitType:'event',eventCategory:'Highlight',eventAction:'Highlight Urgent',eventLabel:'Highlight Urgent Priority after Save'})},getOptions=function getOptions(){chrome.storage.local.get(function(c){document.getElementById('priority-low').checked=c.lowPriority,document.getElementById('priority-normal').checked=c.normalPriority,document.getElementById('priority-high').checked=c.highPriority,document.getElementById('priority-urgent').checked=c.urgentPriority})},$save=document.getElementById('save-button');document.addEventListener('DOMContentLoaded',getOptions),document.addEventListener('DOMContentLoaded',analyticsPage),$save.addEventListener('click',optionsSave),$save.addEventListener('click',analyticsSave);