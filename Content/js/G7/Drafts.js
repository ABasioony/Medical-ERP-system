//------------------------------------------------------------
//--------------------- Scripts ----------------------------
//------------------------------------------------------------


//---- sidebar Handlers---------------------------------
$(document).on('click', '.sub-list li>a', function () {
    if ($(this).closest('.sub-list').closest('.list-item').hasClass("node-item")) {
        $('.list-item').removeClass('active-item');
        $(this).closest('.sub-list').closest('.list-item').addClass('active-item');
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
$(document).on('click', '.sidebar-list li>a', function () {
    if (!$(this).closest('.list-item').hasClass("node-item")) {
        $('.list-item').removeClass('active-item');
        $(this).closest('.list-item').addClass('active-item');
    }
    switch ($(this).children("h4").text()) {
        case "Layout": getViewhtml("StanderedPage", "Index", "pageContainer", null); break;
        case "Home": getViewhtml("Home", "Index", "pageContainer", null); break;
        case "Reception": getViewhtml("ReceptionDashboard", "Index", "pageContainer", null); break;
        case "Dashboard": getViewhtml("DoctorDashboard", "Index", "pageContainer", null); break;
        case "Patients": getViewhtml("Patients", "Index", "pageContainer", null); break;
        case "Users": getViewhtml("Users", "Index", "pageContainer", null); break;
        default:
            break;
    }
});
$(document).on('mouseenter', ".sidebar-list .node-item", function () {
    //debugger;
    var documentHeight = document.body.clientHeight;  
    var top = $(this).offset().top;
    var left = $(this).offset().left + $(this).width();
    var listPosition = top - 9;
    var listHeight = $(this).children(".sub-list").height();

    console.log("documentHeight = " + documentHeight);
    console.log("eTop = " + top);
    console.log("lHeight = " + listHeight);
    if (documentHeight - top <= listHeight && $("html").attr("dir") == "rtl") {
        left = $(this).offset().left - 225;
        listPosition = documentHeight - top -80;
        $(this).children(".sub-list").css("left", left);
        $(this).children(".sub-list").css("bottom", listPosition);
        $(this).children(".sub-list").css("top", "auto");
        $(this).children(".sub-list").css("visibility", "visible");
        $(this).children(".sub-list").children(".sub-list-item").children("a").children("span").attr("class", "fa fa-chevron-left");
    }
    else if (documentHeight - top <= listHeight && $("html").attr("dir") == "ltr") {
        listPosition = documentHeight - top - 80;
        $(this).children(".sub-list").css("left", left);
        $(this).children(".sub-list").css("bottom", listPosition);
        $(this).children(".sub-list").css("top", "auto");
        $(this).children(".sub-list").css("visibility", "visible");
        $(this).children(".sub-list").children(".sub-list-item").children("a").children("span").attr("class", "fa fa-chevron-right");
    }
    else if (documentHeight - top > listHeight && $("html").attr("dir") == "ltr") {
        $(this).children(".sub-list").css("left", left);
        $(this).children(".sub-list").css("top", listPosition);
        $(this).children(".sub-list").css("bottom", "auto");
        $(this).children(".sub-list").css("visibility", "visible");
        $(this).children(".sub-list").children(".sub-list-item").children("a").children("span").attr("class", "fa fa-chevron-right");
    }
    else if (documentHeight - top > listHeight && $("html").attr("dir") == "rtl") {
        left = $(this).offset().left - 225;
        $(this).children(".sub-list").css("left", left);
        $(this).children(".sub-list").css("top", listPosition);
        $(this).children(".sub-list").css("bottom", "auto");
        $(this).children(".sub-list").css("visibility", "visible");
        $(this).children(".sub-list").children(".sub-list-item").children("a").children("span").attr("class", "fa fa-chevron-left");
    }
    //if ($(this).children(".sub-list") != null) {
    //    if ($("html").attr("dir") == "rtl") {
    //        left = $(this).offset().left - 225;
    //        $(this).children(".sub-list").css("left", left);
    //        $(this).children(".sub-list").css("top", listPosition);
    //        $(this).children(".sub-list").css("display", "block");

    //        $(this).children(".sub-list").children(".sub-list-item").children("a").children("span").attr("class", "fa fa-chevron-left");
    //    }
    //    else {
    //        $(this).children(".sub-list").css("left", left);
    //        $(this).children(".sub-list").css("top", listPosition);
    //        $(this).children(".sub-list").css("display", "block");
    //        $(this).children(".sub-list").children(".sub-list-item").children("a").children("span").attr("class", "fa fa-chevron-right");
    //}

    //}
});
$(document).on('mouseleave', ".sidebar-list li", function () {
    if ($(this).children(".sub-list") != null) {
        $(this).children(".sub-list").css("visibility", "hidden");
    }
});
//---- Handle Top Header DropDown [Select Medical Center]  ---------------------------------
$(document).on('click', "#MCDP .dropdown-item", function () {
    $("#MCDP .dropdown-toggle h4").text($(this).children('div').children('p').text());
});

//---- Handle Collapse Of SubSidebar Filter ---------------------------------
$(document).on('click', '.item-header', function () {
    if (!$(this).closest('.sub-item').hasClass('active')) {
        $('.item-body').collapse('hide');
        $('.sub-item').removeClass('active');
        $(this).closest('.sub-item').addClass('active');
        $(this).closest('.sub-item').children('.item-body').collapse('show');
    } else {
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
    } else {
        $('.sub-item').removeClass('active');
        $('.sub-item').children('.item-body').collapse('hide');
    }
});

//---- Handle Collapse Of MainDataSection Filter ---------------------------------
$(document).on('click', '.main-filter-icon', function () {
    $(this).closest('.mCSB_container').children('.filter-div').collapse('toggle');
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

//---- Handle Switch between single Service & package Service ---------------------------------
$(document).on('change', '[name="selectservicetype"]', function () {
    if ($(this).val() == 'SingleService') {
        getView("Services", "AddService", "service-form-container", null);
    } else if ($(this).val() == 'ServicePackage') {
        getView("Services", "AddMultiService", "service-form-container", null);
    }
});

//---- Handle Final Price Calculation [Offers Form] ---------------------------------
$(document).on('keyup', '.multi-form [name="selectdiscounttype"], .multi-form [name="totalprice"], .multi-form [name="DiscountValue"]', function () {
    var totalPrice = parseFloat($('.multi-form [name="totalprice"]').val());
    var discount = parseFloat($('.multi-form [name="DiscountValue"]').val());
    var discounttype = $('.multi-form [name="selectdiscounttype"]:checked').val();

    if (totalPrice <= discount && discounttype == "Amount") {
        let result = calculateFinalResult(totalPrice, discounttype, totalPrice);
        $('.multi-form [name="DiscountValue"]').val(totalPrice);
        $('#finalprice').val(result);
    }
    else if (totalPrice > discount && discounttype == "Amount") {
        let result = calculateFinalResult(totalPrice, discounttype, discount);
        $('#finalprice').val(result);
    }
    else if (discount >= 0 && discount <= 100 && discounttype == "Percentage") {
        let result = calculateFinalResult(totalPrice, discounttype, discount);
        $('#finalprice').val(result);
    }
    else if (discount >= 100 && discounttype == "Percentage") {
        let result = calculateFinalResult(totalPrice, discounttype, 100);
        $('.multi-form [name="DiscountValue"]').val(100);
        $('#finalprice').val(result);
    }
});
$(document).on('change', '.multi-form [name="selectdiscounttype"],.multi-form [name="totalprice"], .multi-form [name="DiscountValue"]', function () {

    var totalPrice = parseFloat($('.multi-form [name="totalprice"]').val());
    var discount = $('.multi-form [name="DiscountValue"]').val();
    var discounttype = $('.multi-form [name="selectdiscounttype"]:checked').val();

    if (discount == '') { $('.multi-form [name="DiscountValue"]').val(0); discount = 0; }
    else { discount = parseFloat($('.multi-form [name="DiscountValue"]').val()) }


    if (totalPrice <= discount && discounttype == "Amount") {
        let result = calculateFinalResult(totalPrice, discounttype, totalPrice);
        $('.multi-form [name="DiscountValue"]').val(totalPrice);
        $('#finalprice').val(result);
    }
    else if (totalPrice > discount && discounttype == "Amount") {
        let result = calculateFinalResult(totalPrice, discounttype, discount);
        $('#finalprice').val(result);
    }
    else if (discount >= 0 && discount <= 100 && discounttype == "Percentage") {
        let result = calculateFinalResult(totalPrice, discounttype, discount);
        $('#finalprice').val(result);
    }
    else if (discount > 100 && discounttype == "Percentage") {
        let result = calculateFinalResult(totalPrice, discounttype, 100);
        $('.multi-form [name="DiscountValue"]').val(100);
        $('#finalprice').val(result);
    }
    else if (discount == null && discounttype == "Amount") {

        $('#finalprice').val(totalPrice);
    }
});

 //---- Get Sublinic From Clinic [Multi Services Form] ---------------------------------
 $(document).on('change', '.ddlClinicList', function () {
    var ddlSubClinic = $(".ddlSubClinicList");
    ddlSubClinic.empty();
    $(document.createElement('option'))
        .attr('value', "")
        .text(" ")
        .appendTo(ddlSubClinic);
    //get selected item
    var clinicId = $(this).children(":selected").val();

    $.getJSON('/Services/GetSubClinicList', { clinicId: clinicId }, function (result) {
        $.each(result.data, function () {
            $(".ddlSubClinicList").append('<option subClinicId="' + this.Value + '" value="' + this.Value + '">' + this.Text + '</option>');
        });

    });
});
//---- Get Services From SubClinic [Multi Services Form] ---------------------------------
$(document).on('change', '.ddlSubClinicList', function () {
    var ddlServiceList = $(".ddlServiceList");
    ddlServiceList.empty();
    $(document.createElement('option'))
        .attr('value', "")
        .appendTo(ddlServiceList);
    //get selected item
    var subId = $(this).children(":selected").val();
    $.getJSON('/Services/GetServicesList', { subId: subId }, function (result) {
        //console.log(result.data)
        for (var i = 0; i < result.data.length; i++) {
            $(".ddlServiceList").append('<option data-price="' + result.data[i].ServicePrice + '" value="' + result.data[i].ServiceId + '">' + result.data[i].ServiceName + '</option>');
        }
    });
    //debugger;
    //$.getJSON('/OfferDetails/AddOffer', { subId: subId });

});
//---- Get clinic code 
$(document).on('change', '.ClinicDropDowen', function () {
    //debugger;
    var codeInput = $(".ClinicCode");
    codeInput.empty();
    //$(document.createElement('input'))
    //    .attr('value', "")
    //    .appendTo(codeInput);
    //get selected item
    var clinicId = $(this).children(":selected").val();

    $.getJSON('/SubClinic/GetSClinicCode', { clinicId: clinicId }, function (result) {
        $(".ClinicCode").val(result.data[0]);
        $(".SubClinicCode").val(result.data[1]);
    });

});
//---- Get Total Price From Selected Services [Multi Services Form] ---------------------------------
$(document).on('change', ".ddlServiceList", function () {
    var price = 0;
    var title = null;
    var SelectChoices = $(".select2-selection__rendered").children(".select2-selection__choice");
    var options = $(this).children("option");
    // console.log("SelectChoices = " + SelectChoices);
    //  console.log("options = " + options);

    for (j = 0; j < SelectChoices.length; j++) {
        title = SelectChoices[j].title;
        // console.log("title = " + title);
        for (i = 0; i < options.length; i++) {
            if (options[i].innerText == title) {
                // console.log(" Option Text = " + options[i].innerText + " / Option Price = " + options[i].dataset.price);
                price = price + Number(options[i].dataset.price);
            }
        }
    }
    //console.log("Total Price = " + price);
    $("#TotalPrice").val(price);
    $("#TotalPrice").trigger("keyup");

    let result = calculateFinalResult($('.multi-form [name="totalprice"]').val(), $('.multi-form [name="selectdiscounttype"]:checked').val(), $('.multi-form [name="DiscountValue"]').val());
    $('#finalprice').val(result);
});

// ckech service code exist before or not
$(document).on('change','#ServiceCode', function () {
    //debugger;
    var ServiceCode = $("#ServiceCode").val();
    $.ajax({
        url: "CkeckSrvCodeExistOrNot",
        cache: false,
        type: "GET",
        data: { "ServiceCode": ServiceCode },
        success: function (data) {
            console.log(data);
            if (data == "True") {
                //console.log("true condition");
                //var submitBtn = $("#addSrvBtn");
                // submitBtn.attr("disabled", "true");
                $("#addSrvBtn").removeClass("disabled-btn");
                $("#errorSpan").css("display","none");
            }
            else {
                //console.log("false condition");
               // var x = $("Form .modal-footer").children('button[type="submit"]');
                // x.attr("disabled", "false");
                $("#addSrvBtn").addClass("disabled-btn");
                $("#errorSpan").css("display", "block");
            }
        }
    });
});

// ckech room number exist before or not
$(document).on('change', '#roomNum', function () {
    debugger;
    var ServiceCode = $("#roomNum").val();
    $.ajax({
        url: "CkeckRoomNumExistOrNot",
        cache: false,
        type: "GET",
        data: { "roomNum": ServiceCode },
        success: function (data) {
            console.log(data);
            if (data == "True") {
                //console.log("true condition");
                //var submitBtn = $("#addSrvBtn");
                // submitBtn.attr("disabled", "true");
                $("#AddRoomBtn").removeClass("disabled-btn");
                $("#errorSpan").css("display", "none");
            }
            else {
                //console.log("false condition");
                // var x = $("Form .modal-footer").children('button[type="submit"]');
                // x.attr("disabled", "false");
                $("#AddRoomBtn").addClass("disabled-btn");
                $("#errorSpan").css("display", "block");
            }
        }
    });
});




//------------------------------------------------------------
//--------------------- Functions ----------------------------
//------------------------------------------------------------


/*------------------------calculateFinalResult-----------------------
    * Function Name: calculateFinalResult
    * Parameters : 
        - totalPrice [the total price of selected services]
        - discountType [type of discount]
        -disountValue [value of th discount]
    * Arguments  : 
        - totalPrice : Numeric 
            Values : the cost of total price as numerical value
        - discountType : String 
            Values : ["Amount" - "Percentage"]
        - disountValue : Numeric 
            Values : the value of required discount
    * Usage : 
        Calculate the cost after discount depend on 
         - discountType : 
            > Amount:  subtract the discountValue from the total price and return the result
            > Percentage : get the percentage from the totalPrice depend on the discountValue
    */
   function calculateFinalResult(totalPrice, discountType, disountValue) {
    //console.log('totalPrice = ' + totalPrice + ' // ' + 'discountType = ' + discountType + ' // ' + 'disountValue = ' + disountValue);
    if (discountType == "Amount") {
        return totalPrice - disountValue;
    }
    else if (discountType == "Percentage") {
        return totalPrice - (totalPrice * disountValue) / 100;
    }
}
/*------------------------/calculateFinalResult----------------------*/