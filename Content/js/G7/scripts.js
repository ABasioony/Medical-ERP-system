//------------------------------ Scrolling Tools : Begin -----------------------------------//
$(document).ready(function(){
    //-------- Scrolling Tools --------------------------
    var previousScroll = 0;
    $(".data-container").scroll(function () {
        //debugger;
        var y = $(this).scrollTop();
        if (y > previousScroll) {
            if ($(".section-header-tools").length > 0) {
                if (y > 65) {
                    //debugger;
                    //console.log("--------------------------------");
                    //console.log("Open");
                    //console.log(y);
                    //console.log("--------------------------------");
                    $(".section-header-tools:not(.section-header-tools.no-flow)").addClass("flow-tools");
                    var yPosition = ($(".data-container").height() / 2) - ($(".section-header-tools").height() / 2) + 65;
                    $(".section-header-tools:not(.section-header-tools.no-flow)").css("top", yPosition + "px");
                    $(".section-header-tools:not(.section-header-tools.no-flow)").removeClass("tools-out");
                    $(".section-header-tools:not(.section-header-tools.no-flow)").addClass("tools-in");
                    $(".section-header-tools:not(.section-header-tools.no-flow)").removeClass("tools-show");
                    $(".section-header-tools:not(.section-header-tools.no-flow)").addClass("tools-hide");
                }
            }
        } else {
            if (y <= 65) {
                //console.log("--------------------------------");
                //console.log("Close");
                //console.log(y);
                //console.log("--------------------------------");
                $(".section-header-tools:not(.section-header-tools.no-flow)").removeClass("tools-in");
                $(".section-header-tools:not(.section-header-tools.no-flow)").addClass("tools-out");
                setTimeout(function () {
                    $(".section-header-tools:not(.section-header-tools.no-flow)").css("top", "auto");
                    $(".section-header-tools:not(.section-header-tools.no-flow)").removeClass("tools-out");
                    $(".section-header-tools:not(.section-header-tools.no-flow)").removeClass("flow-tools");
                    $(".section-header-tools:not(.section-header-tools.no-flow)").removeClass("tools-hide");
                    $(".section-header-tools:not(.section-header-tools.no-flow)").addClass("tools-show");
                }, 250);
            }
        }
        previousScroll = y;
    });
});
$(".section-header-tools .data-container-body-header-controls a").mouseenter(function(){
    $(this).children(".title").addClass("tools-show");
    $(this).children(".title").removeClass("tools-hide");
});
$(".section-header-tools .data-container-body-header-controls a").mouseleave(function(){
    $(this).children(".title").addClass("tools-hide");
    $(this).children(".title").removeClass("tools-show");
});
//------------------------------ Scrolling Tools : End ---------------------------------------//

//---- mScroller plugin---------------------------------
$(window).on("load", function () {
    if ($("html").attr("dir") == "ltr") {
        $("body").addClass("en");
        $("[title='Arabic']").removeClass("hidden");
        $("[title='English']").addClass("hidden");
    } else {
        $("body").addClass("ar");
        $("[title='English']").removeClass("hidden");
        $("[title='Arabic']").addClass("hidden");
    }
    /* $(".sidebar-list").mCustomScrollbar({
        theme: "minimal-dark",
        alwaysShowScrollbar: 0
    }); */
});

$(document).ready(function () {
    //---- Tooltip Call ---------------------------------
    $('[data-toggle="tooltip"]').tooltip();

    //---- Top Header Patient Search---------------------------------
   /*  $("#patientSearch").devbridgeAutocomplete({
        "lookup": [
            { "value": "0114000 / Mohamed Khalifa", "data": "AE" },
            { "value": "012555 / Ahmed Tamer",       "data": "UK" },
            { "value": "United States",        "data": "US" }
        ],
        onSelect: function (suggestion) {
            console.log('You selected: ' + suggestion.value + ', ' + suggestion.data);
        }
    }); */
});

//---- Modal Handlers---------------------------------
$(document).on('click', '.add-modal-btn', function (event) {
    viewModal('add-modal','xl');
});
$(document).on('click', '.edit-modal-btn', function (event) {
    viewModal('edit-modal','xl');
});
$(document).on('click', '.details-modal-btn', function (event) {
    viewModal('details-modal','xl');
});
$(document).on('click', '.delete-modal-btn', function (event) {
    viewModal('delete-modal','xl');
});
//---- Notification Handlers---------------------------------
$(document).on('click', '.ntf-close', function () {
    $(this).closest('.g7-notification').removeClass('ntf-show');
});
$(document).on('click', '.ntf-btn', function () {
    viewNotification('success');
});

//---- sidebar Handlers---------------------------------
$(document).on('click', '.sub-list-l li>a', function () {
    if ($(this).closest('.sub-list-l').closest('.list-item').hasClass("node-item")) {
        $('.list-item').removeClass('active-item');
        $(this).closest('.sub-list-l').closest('.list-item').addClass('active-item');
    }
    switch ($(this).children("h4").text()) {
        case "Rooms Settings": getViewhtml("SettingsArea//Rooms", "Index", "pageContainer", null); break;
        case "Clinics Settings": getViewhtml("SettingsArea//Clincs", "Index", "pageContainer", null); break; 
        case "Sub Clinics Settings": getViewhtml("SettingsArea//SubClinic", "Index", "pageContainer", null); break;
        case "Doctor Settings": getViewhtml("SettingsArea//Doctors", "Index", "pageContainer", null); break;
        case "Schedule Doctor": getViewhtml("SettingsArea//DoctorSchedule", "Index", "pageContainer", null); break; 
        case "Services Settings": getViewhtml("SettingsArea//Services", "Index", "pageContainer", null); break; 
        case "Offer Settings": getViewhtml("SettingsArea//Offers", "Index", "pageContainer", null); break; 
        case "Suppliers Settings": getViewhtml("SettingsArea//Suppliers", "Index", "pageContainer", null); break; 
        case "Items Settings": getViewhtml("SettingsArea//Items", "Index", "pageContainer", null); break; 
        case "Employee Settings": getViewhtml("SettingsArea//Employees", "Index", "pageContainer", null); break; 

        case "Today Invoices": getViewhtml("AccountantArea//TodayInvoices", "Index", "pageContainer", null); break; 
        case "Pending Invoices": getViewhtml("AccountantArea//PendingInvoices", "Index", "pageContainer", null); break; 
        case "Posted Invoices": getViewhtml("AccountantArea//PostedInvoices", "Index", "pageContainer", null); break; 
        case "Suppliers": getViewhtml("AccountantArea//Suppliers", "Index", "pageContainer", null); break; 
        case "Daily Expenses": getViewhtml("AccountantArea//DailyExpenses", "Index", "pageContainer", null); break; 
        case "Employees": getViewhtml("AccountantArea//Employees", "Index", "pageContainer", null); break; 
        default:
            break;
    }
});

//Inputs validation (charachters only)
$(document).on('keydown', '.textInput', function (key) {
        //alert(key.which);
    if (key.ctrlKey || key.altKey) { key.preventDefault() }
    else {
        if (key.which >= 48 && key.which <= 57 || key.which >= 96 && key.which <= 111 || key.which == 187 || key.which == 189 || key.which == 16) {
            key.preventDefault();
        }
    }
});

//---- handle tabs Design After Selected [ Patient List Tabs]---------------------------------
$(document).on("click", ".dashb-section-tabs .nav-pills .nav-item", function () {
    $(".dashb-section-tabs .nav-pills .nav-item").removeClass("active-item");
    $(this).addClass("active-item");
});



//---- handle tabs Status in patients List [ Patient List Items]---------------------------------
$(document).on("click", ".patient-list-item", function () {
    $(".patient-list-item").removeClass("active-item");
    $(this).addClass("active-item");
});
$(document).on("click", ".section-header", function () {
    if ($(this).closest("div").hasClass("show")) {
        $(this).closest("div").removeClass("show");
    }
    else {
        $(this).closest("div").addClass("show");
    }
});
$(document).on("click", ".timeline-collapse-icon", function () {
    if ($(this).closest(".timeline-item").hasClass("open")) {
        $(this).closest(".timeline-item").children(".timeline-item-body").collapse("hide");
        $(this).closest(".timeline-item").removeClass("open");
    }
    else {
        $(this).closest(".timeline-item").children(".timeline-item-body").collapse("show");
        $(this).closest(".timeline-item").addClass("open");
    }
});



//handel icons of data-container-body-header
$(document).on("click",".data-container-body-header a",function(){
    $(".data-container-body-header a").removeClass("active");
    $(this).addClass("active");
});

//Handle Side Menu Actions 
$(document).on("click",".sub-list-inner li a:not(.leaf-node)",function(){
   // debugger;
    if($(this).closest('li').data('parent') == 0){
        $('.sub-list-inner [data-parent="0"] a:first-child').not($(this).closest("[data-parent='0']")).removeClass('active');  
    }
    var x= $(this).closest("li").children("ul");
        $('li[data-parent="0"]').not($(this).closest("li[data-parent='0']")).children("ul").collapse('hide');
        x.collapse('toggle');
});
$(document).on("click",".sub-list-inner li .leaf-node",function(){
    $(this).closest(".sub-list-l").removeClass("menu-in");
    $(this).closest(".sub-list-l").addClass("menu-out");
});
$(document).on('click',".sidebar-list li:not(.sub-list-inner li)", function () {
    let nodeId = $(this).data("nodeid");
    if(!$(this).hasClass('sub-list-l')){

        $(".sidebar-list li").removeClass("focused");
        $(this).addClass("focused");

        if($(this).closest(".sidebar-list").children(".sub-list-l").not($(this).closest(".sidebar-list").children("[data-parent='"+nodeId+"']")).hasClass("menu-in")){
            $(this).closest(".sidebar-list").children(".sub-list-l").removeClass("menu-in");
            $(this).closest(".sidebar-list").children(".sub-list-l").addClass("menu-out");
        }

        if($(this).closest(".sidebar-list").children("[data-parent='"+nodeId+"']").hasClass("menu-in")){
            $(this).closest(".sidebar-list").children("[data-parent='"+nodeId+"']").removeClass("menu-in");
            $(this).closest(".sidebar-list").children("[data-parent='"+nodeId+"']").addClass("menu-out");
        }
        else{
            $(this).closest(".sidebar-list").children("[data-parent='"+nodeId+"']").removeClass("menu-out");
            $(this).closest(".sidebar-list").children("[data-parent='"+nodeId+"']").addClass("menu-in");
        }
    }
});
$(document).on('mouseleave', ".sidebar-list .sub-list-l", function () {
    //debugger;
    let nodeId = $(this).data("nodeid");
    $(this).removeClass("menu-in");
    $(this).addClass("menu-out");
    $(".sidebar-list li").removeClass("focused");
});


//------------------------------ Clear Form :BEGIN -----------------------------------//
$(document).on("click",".form-clear-btn",function(){
    //debugger;
    $(this).closest("form").trigger("reset");
    //Add To Fix Server Side Select Problem 
    $(this).closest("form").find(".multiple-select:not(.disabled .multiple-select)").val(null).trigger('change');
    $(this).closest("form").find(".select-single select:not(.disabled .select-single select)").val(null).trigger('change');
    $(this).closest("form").find("select option:not(.disabled select option)").attr('selected', null);
});
//------------------------------ Clear Form :END -----------------------------------//

//------------------------------ Switch Prevent Default :START -----------------------------------//
$(document).on('click','td .switch-btn .switch .sw',function(event){
    event.preventDefault();
});
//------------------------------ Switch Prevent Default :END -----------------------------------//

$(document).on('click', '.data-container-body-header-controls .fa-print', function () {
   // debugger;
    window.print();
});

