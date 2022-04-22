function menu() {
    debugger
    if ($('.btn-menu span').attr('class') == 'fa fa-bars') {

        $('.btn-menu span').removeClass('fa fa-bars').addClass('fa fa-times').css({ 'color': '#fff' });
        $('.full-menu').css({ 'left': '0' });

    } else {
        $('.btn-menu span').removeClass('fa fa-times').addClass('fa fa-bars').css({ 'color': '#fff' });
        $('.full-menu').css({ 'left': '-100%' });
    }
}