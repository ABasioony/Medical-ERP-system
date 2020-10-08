//---- mScroller plugin---------------------------------
$(window).on("load", function () {
    /* $(".sub-sidebar").mCustomScrollbar({
        axis: "y",
        theme: "minimal-dark"
    });
    $(".data-section").mCustomScrollbar({
        axis: "y",
        theme: "minimal-dark"
    }); */
    //$(".sub-sidebar .sub-item .item-body .body-div .div-body  .list").mCustomScrollbar({
    //    axis: "y",
    //    theme: "minimal-dark"
    //});
});

$(document).ready(function () {
   // debugger;
    //---- Tooltip Call ---------------------------------
    $('[data-toggle="tooltip"]').tooltip();

    //---- Handle Top Header DropDown [Select Medical Center]  ---------------------------------
    $(document).on('click', ".mc-item", function () {
        $("#MCDP a:first-child>h4").text($(this).children('div').children('p').text());
    });

    //---- Handle Collapse Of SubSidebar Filter ---------------------------------
    $(document).on('click', '.item-header', function () {
        if (!$(this).closest('.sub-item').hasClass('active')) {
            $('.item-body').collapse('hide');
            $('.sub-item').removeClass('active');
            $(this).closest('.sub-item').addClass('active');
            $(this).closest('.sub-item').children('.item-body').collapse('show');
        }
        else {
            $(this).closest('.sub-item').removeClass('active');
            $(this).closest('.sub-item').children('.item-body').collapse('hide');
        }
    });

    //---- Toggle Room Filter Item In SubSidebar From Table Icon ---------------------------------
    $(document).on('click', '.room-search-icon', function () {
        if (!$('.room-filter-item').hasClass('active')) {
            $('.item-body').collapse('hide');
            $('.sub-item').removeClass('active');
            $('.room-filter-item').addClass('active');
            $('.room-filter-item').children('.item-body').collapse('show');
        }
        else {
            $('.sub-item').removeClass('active');
            $('.sub-item').children('.item-body').collapse('hide');
        }
    });

    //---- Handle Collapse Of MainDataSection Filter ---------------------------------
    $(document).on('click', '.main-filter-icon', function () {
        $(this).closest('.section-Sub-header').children('.filter-div').children('.main-filter-form').collapse('toggle');
    });

    //---- Drag & Drop Function of Schedule Doctor ---------------------------------
    $('.list-item').on("dragstart", function (event) {
        var dt = event.originalEvent.dataTransfer;
        dt.setData('Text', $(this).attr('id'));
    });
    $('table td ul').on("dragenter dragover drop", function (event) {
        event.preventDefault();
        if (event.type === 'drop') {
            var data = event.originalEvent.dataTransfer.getData('Text', $(this).attr('id'));
            de = $('#' + data).detach();
            de.appendTo($(this));
            //viewModal('add-modal');
        };
    });
    //---- Edit Doctor Schedule
    $(document).on('click', 'table td .list-item a', function () {
        viewModal('edit-modal');
    });
    //---- Remove Doctor From Room
    $(document).on('click', '.item-remove-icon', function () {
        viewModal('inactive-modal');
        $(this).closest('td').children('.tooltip').remove();
        //$(this).closest('li').remove();      
    });

    //---- Modal Handlers---------------------------------
    
    $(document).on('click', '.add-modal-btn', function (event) {
        viewModal('add-modal');
    });
    $(document).on('click', '.edit-modal-btn', function (event) {
        viewModal('edit-modal');
    });

    //$(document).on('click', '.sw', function (event) {
    //    event.preventDefault();
    //    //alert($(this).is(":checked"));

    //    var id = $(this).closest('tr').children('td').children('input');
    //    alert(id.val());

       
    //});
   
 

    //---- Notification Handlers---------------------------------
    
    $(document).on('click', '.ntf-close', function () {
        $(this).closest('.g7-notification').removeClass('ntf-show');
    });

    $(document).on('click', '.ntf-btn', function () {
        viewNotification('success');
    });

    //---- sidebar Handlers---------------------------------
    $(document).on('click', '.sidebar-list li>a', function () {
        $('.list-item').removeClass('active-item');
        $(this).closest('.list-item').addClass('active-item');
    });

    //---- Subsidebar Handlers---------------------------------
    $(document).on('click', '.section-Sub-header-icon', function () {
        if ($(this).closest('.sub-sidebar').hasClass('sub-open')) {
            $(this).closest('.sub-sidebar').removeClass('sub-open');
            $(this).closest('.sub-sidebar').addClass('sub-closed');
        } else {
            $(this).closest('.sub-sidebar').removeClass('sub-closed');
            $(this).closest('.sub-sidebar').addClass('sub-open');
        }
    });

});

