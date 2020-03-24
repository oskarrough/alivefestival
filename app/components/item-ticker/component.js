
import {inject as service} from '@ember/service'

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
    
    // function moveHeadLines() {
    //     left--;
    //             if (left <= -links[0].offsetWidth) {
    //             ticker.append(links[0])
    //             links[0].remove();
    //             links = $('.ticker')
    //             left += links[0].offsetWidth;
    //             }
    //         ticker.css("left", left + "px");
    
    //         animId = requestAnimationFrame(moveHeadLines);
    // }
        

    function moveHeadLines() {
        left--;
        console.log("function is called");
        if (left <= -links[0].offsetWidth) {
          left += links[0].offsetWidth;
          links[0].remove();
          ticker.append(links[0])
        
        //   ticker.append(links[0])
        //   ticker.appendChild(links[0]);
        }
        links = $('.ticker')
        ticker.css("left", left + "px");
        animId = requestAnimationFrame(moveHeadLines);
      }
   




    }

});
