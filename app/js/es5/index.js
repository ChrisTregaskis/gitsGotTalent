"use strict";

fetch('https://api.github.com/search/repositories?q=javascript+language:javascript&sort=stars&order=desc').then(function (receivedData) {
  return receivedData.json();
}).then(function (data) {
  var topThree = {
    items: []
  };
  topThree.items.push(data.items[0]);
  topThree.items.push(data.items[1]);
  topThree.items.push(data.items[2]);
  console.log(topThree);
  fetch('./hand.hbs').then(function (receivedData) {
    return receivedData.text();
  }).then(function (handlebarData) {
    var hbsTemplate = Handlebars.compile(handlebarData);
    var topThreeHandlebar = hbsTemplate(topThree);
    document.querySelector('.display-top-three').innerHTML = topThreeHandlebar;
  });
});
var test = 'test';