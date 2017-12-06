$(document).ready(function(){
    $("#displayCommentSection").click(function(){
      $("#commentsSection").toggle();
    })
    $("#leaveComment").click(function() {
      $(".yourComment").toggle();
    });
})
