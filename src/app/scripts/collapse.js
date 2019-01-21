var $ideas-colapsables = $('#ideas-colapsables');
$ideas-colapsables.on('show','.collapse', function() {
    $ideas-colapsables.find('.collapse.in').collapse('hide');
});
