
    (function(){
    // instead of using a global template variable,
    // use jQuery.data() to store it on the .modal element itself
    // so it works with multiple modals

    $('.modal').on('show.bs.modal', function (event) {
        if (!$(this).data('template')) {
            $(this).data('template', $(this).html())
        } else {
            $(this).html($(this).data('template'))
        }
        // other initialization here, if you want to
    })

})()
