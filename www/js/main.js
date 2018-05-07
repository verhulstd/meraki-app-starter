import ons from "onsenui/esm";

import "onsenui/esm/elements/ons-page";
import "onsenui/esm/elements/ons-toolbar";
//import "onsenui/esm/elements/ons-button";
import "onsenui/esm/elements/ons-template";
import "onsenui/esm/elements/ons-navigator";
import "onsenui/esm/elements/ons-tabbar";
import "onsenui/esm/elements/ons-tab";
//import "onsenui/esm/elements/ons-list";
//import "onsenui/esm/elements/ons-list-item";

ons.ready(function() {
  console.log("DOM IS READY");
});

document.addEventListener("show", function(e) {
  var page = e.target;
  var titleElement = document.querySelector("#toolbar-title");

  if (page.matches("#first-page")) {
    titleElement.innerHTML = "My app - Page 1";
  } else if (page.matches("#second-page")) {
    titleElement.innerHTML = "My app - Page 2";
  } else if (page.matches("#third-page")) {
    titleElement.innerHTML = "Search VTM articles";
  }
});
