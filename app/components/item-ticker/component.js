
// import {inject as service} from '@ember/service'

import Component from '@ember/component'
// import {run} from '@ember/runloop'

export default Component.extend({

	didInsertElement() {
    var ticker = this.$('.moving-container')
    let links = this.$('.ticker')
    var left = ticker.offset().left;
    var animId;
    ticker.hover(function() {
        cancelAnimationFrame(animId);
     }, function(){
         moveHeadLines()});

    moveHeadLines();
    function moveHeadLines() {
        left--;
        if (left <= -links[0].offsetWidth) {
          left += links[0].offsetWidth;
          $('.moving-container')[0].appendChild(links[0])
          // links[0].remove();
        }
        links = $('.ticker')
        ticker.css("left", left + "px");
        if($('.moving-container')){
          animId = requestAnimationFrame(moveHeadLines);
        }
        
      }
  
    }
    // willDestroyElement() {
    //   ticker.destroy();
    // }

});
