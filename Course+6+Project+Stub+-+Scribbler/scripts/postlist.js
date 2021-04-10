$("button").click(function () {
    $(this).closest('div[class="col-md-4 col-xs-4"]').slideUp("slow", function(){
        $(this).remove();
    });
});