/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

    });

}(jQuery));

/**
 * Getting Gravatar image
 */
$(document).ready(function() {
  var mail = $('#gravatarImage').attr('data-email');
  var url = '//www.gravatar.com/avatar/' + $.md5(mail);
  $('#gravatarImage').attr('src', url);
});
