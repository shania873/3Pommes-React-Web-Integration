$(document).ready(function(){
    var date_input=$('.date'); 
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'dd/mm/yyyy',
        container: container,
        orientation: "right",      
        todayHighlight: true,
        autoclose: true,
    });

});
