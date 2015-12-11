// ==UserScript==
// @name        Feedly Fetch More
// @namespace   2gmon.t@gmail.com
// @description 一気にたくさんFetch
// @match       *://*.feedly.com/*
// @version     1
// @grant       none
// ==/UserScript==

var numOfFetch = 200;

devhd.pkg('pages').ListPage.prototype.entryIncrement = function() {
      var o = this.condensed ? numOfFetch : 20;
        if (this.isFeed() == true && this.feedInfo.subscribed == false) {
                o = this.condensed ? 20 : 10
                      }
          if (this.searchTerm != null) {
                  o = 10
                        }
            return o
};
