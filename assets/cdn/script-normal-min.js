'use strict';var normal=function normal(){if(0<window.location.href.indexOf('agent/filters')){var b=$('.filter_tickets tbody tr');b.each(function(){var c=$(this),d=$('td.priority'),e=$('.leading'),f=$('.trailing'),g=c.find(d).text(),h=c.find(e),i=c.find(f);'Normaal'==g&&(c.addClass('normal-ticket-priority'),h.addClass('normal-ticket-priority'),i.addClass('normal-ticket-priority'))})}};$(document).ready(function(){setTimeout(normal,1700)}),$('*').click(function(){setTimeout(normal,1300)}),$(window).focus(function(){setTimeout(normal,1500)});
