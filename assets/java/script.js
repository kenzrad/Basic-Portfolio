function submit() {
    $('#bt1').click(function() {
        $('#fm1').attr('action',
                       'mailto:kenzrad@gmail.com?subject=' +
                       $('#subject').val() + '&body=' + $('#comment').val()); $('#name').val());
        $('#fm1').submit();
    });
});