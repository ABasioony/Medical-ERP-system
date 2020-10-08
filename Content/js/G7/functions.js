

//---- Handel modal Appearance ---------------------------------
    /*------------------------viewModal-------------------------
        * Function Name: viewModal
        * Parameters : modalType [The type of Modal that will be display] 
        * Arguments  : 
            Data Type : String 
            Values : ["add-modal" - "edit-modal" - "delete-modal" - "details-modal"]
        * Usage : 
            Open Form Modal and Change Modal Header Color Depend on modalType:
                - "add-modal" : Green
                - "edit-modal" : Yellow
                - "delete-modal" : red
                - "details-modal" : turkuaz 
        */
        function viewModal(modalType,modalSize) {
            if (modalType == "add-modal") {
                $('#form-modal').removeClass("warning-modal");
                $('#form-modal').removeClass("danger-modal");
                $('#form-modal').addClass("success-modal");
            }
            else if (modalType == "edit-modal") {
                $('#form-modal').removeClass("success-modal");
                $('#form-modal').removeClass("danger-modal");
                $('#form-modal').addClass("warning-modal");
            }
            else if (modalType == "delete-modal") {
                $('#form-modal').removeClass("success-modal");
                $('#form-modal').removeClass("warning-modal");
                $('#form-modal').addClass("danger-modal");
            }
            else if (modalType == "details-modal") {
                $('#form-modal').removeClass("success-modal");
                $('#form-modal').removeClass("warning-modal");
                $('#form-modal').removeClass("danger-modal");
            }
            else {
                alert("modal Type Undefined !!");
            }

            if(modalSize =="xl"){
                $('#form-modal').children(".modal-dialog").removeClass("modal-lg");
                $('#form-modal').children(".modal-dialog").removeClass("modal-sm");
                $('#form-modal').children(".modal-dialog").addClass("modal-xl");
            }
            if(modalSize =="lg"){
                $('#form-modal').children(".modal-dialog").removeClass("modal-xl");
                $('#form-modal').children(".modal-dialog").removeClass("modal-sm");
                $('#form-modal').children(".modal-dialog").addClass("modal-lg");
            }
            if(modalSize =="md"){
                $('#form-modal').children(".modal-dialog").removeClass("modal-xl");
                $('#form-modal').children(".modal-dialog").removeClass("modal-lg");
                $('#form-modal').children(".modal-dialog").removeClass("modal-sm");
            }
            if(modalSize =="sm"){
                $('#form-modal').children(".modal-dialog").removeClass("modal-xl");
                $('#form-modal').children(".modal-dialog").removeClass("modal-lg");
                $('#form-modal').children(".modal-dialog").addClass("modal-sm");
            }

            $('#form-modal').modal({
                show: true,
                keyboard: false,
                backdrop: 'static'
            });
        }
    /*------------------------/viewModal------------------------*/
    
    /*----------------------viewMsgModal------------------------
        * Function Name: viewMsgModal
        * Parameters : 
            - modalType [The type of Modal that will be display] 
            - Msg [The Confirmarion message that will be in modal]
            - confirm [Determine if confirm Button will be display or not]
            - cancel [Determine if cancel Button will be display or not]
        * Arguments  :
            - modalType :
                Data Type : String 
                Values : ["add-modal" - "edit-modal" - "delete-modal" - "details-modal"]
            -Msg: 
                Data Type : String 
                Values : Any Message want to show in modal
            -confirm: 
                Data Type : String 
                Values : ["true" , "false"]
            -cancel: 
                Data Type : String 
                Values : ["true" , "false"]
        * Usage : 
            Open Message Modal and Change Modal Header Color Depend on modalType:
                - "add-modal" : Green
                - "edit-modal" : Yellow
                - "delete-modal" : red
                - "details-modal" : turkuaz 
            & Set  Message in modal depend on Msg passed to function
            & Display confirm Button and cancel button depend on confirm & cancel Arguments
        */
        function viewMsgModal(modalType,Msg,confirm,cancel,functionName) {

            if (modalType == "warning-modal") {
                $('#msg-modal').removeClass("success-modal");
                $('#msg-modal').removeClass("danger-modal");
                $('#msg-modal').addClass("warning-modal");

                $("#msg-modal .modal-icon span").removeAttr("class");
                $("#msg-modal .modal-icon span").addClass("fa fa-exclamation");

            }
            else if (modalType == "danger-modal") {
                $('#msg-modal').removeClass("success-modal");
                $('#msg-modal').removeClass("warning-modal");
                $('#msg-modal').addClass("danger-modal");

                $("#msg-modal .modal-icon span").removeAttr("class");
                $("#msg-modal .modal-icon span").addClass("fa fa-times");
            }
            else if (modalType == "success-modal") {
                $('#msg-modal').removeClass("danger-modal");
                $('#msg-modal').removeClass("warning-modal");
                $('#msg-modal').addClass("success-modal");

                $("#msg-modal .modal-icon span").removeAttr("class");
                $("#msg-modal .modal-icon span").addClass("fa fa-check");  
            }

            $("#msg-modal .msg h5").empty();
            $("#msg-modal .msg h5").html(Msg);

            if (confirm == 'true') {
                $("#ConfirmationBtn").css("display", "block");
            }
            if (cancel == 'true') {
                $("#CancelBtn").css("display", "block");
            }
            $("#msg-modal .closeBtn").attr("onclick", functionName);
            $('#msg-modal').modal({
                show: true,
                keyboard: false,
                backdrop: 'static'
            });
        }
    /*----------------------/viewMsgModal-----------------------*/

    /*----------------------viewAdvancedModal------------------------
            * Function Name: viewMsgModal
            * Parameters : 
                - modalType [The type of Modal that will be display] 
                - Msg [The Confirmarion message that will be in modal]
                - confirm [Determine if confirm Button will be display or not]
                - cancel [Determine if cancel Button will be display or not]
            * Arguments  :
                - modalType :
                    Data Type : String 
                    Values : ["add-modal" - "edit-modal" - "delete-modal" - "details-modal"]
                -Msg: 
                    Data Type : String 
                    Values : Any Message want to show in modal
                -confirm: 
                    Data Type : String 
                    Values : ["true" , "false"]
                -cancel: 
                    Data Type : String 
                    Values : ["true" , "false"]
            * Usage : 
                Open Message Modal and Change Modal Header Color Depend on modalType:
                    - "add-modal" : Green
                    - "edit-modal" : Yellow
                    - "delete-modal" : red
                    - "details-modal" : turkuaz 
                & Set  Message in modal depend on Msg passed to function
                & Display confirm Button and cancel button depend on confirm & cancel Arguments
            */
        function viewAdvancedModal(modalType) {
            if (modalType == "warning-modal") {
                $('#advanced-modal').removeClass("success-modal");
                $('#advanced-modal').removeClass("danger-modal");
                $('#advanced-modal').addClass("warning-modal");

                $("#advanced-modal .modal-icon span").removeAttr("class");
                $("#advanced-modal .modal-icon span").addClass("fa fa-exclamation");

            }
            else if (modalType == "danger-modal") {
                $('#advanced-modal').removeClass("success-modal");
                $('#advanced-modal').removeClass("warning-modal");
                $('#advanced-modal').addClass("danger-modal");

                $("#advanced-modal .modal-icon span").removeAttr("class");
                $("#advanced-modal .modal-icon span").addClass("fa fa-times");
            }
            else if (modalType == "success-modal") {
                $('#advanced-modal').removeClass("danger-modal");
                $('#advanced-modal').removeClass("warning-modal");
                $('#advanced-modal').addClass("success-modal");

                $("#advanced-modal .modal-icon span").removeAttr("class");
                $("#advanced-modal .modal-icon span").addClass("fa fa-check");  
            }

            $('#advanced-modal').modal({
                show: true,
                keyboard: false,
                backdrop: 'static'
            });
        }
    /*----------------------/viewAdvancedModal-----------------------*/

    /*------------------------closeModal------------------------
        * Function Name: closeModal
        * Parameters : -
        * Arguments  : -
        * Usage : 
            Close Msg Modal Or Form Modal 
        */
        function closeModal() {
            $('.g7-modal-n').modal('hide');
        }
    /*------------------------/closeModal-----------------------*/
    /*------------------------close and Open New Modal------------------------*/
    function closeAndOpenNewModal(modalType , modalSize) {
        //debugger;
        $.when($('.g7-modal-n').modal('hide')).then(function () {
            setTimeout(function () {
                viewModal(modalType, modalSize);
            }, 350);
        });
    }
    /*------------------------/close and Open New Modal------------------------*/

    /*------------------------getView---------------------------
        * Function Name: viewModal
        * Parameters : 
            - path [path to controller]
            - functionName [finction that will be call]
            - targetId [id of div that data will display in it] 
            - data [any kind of data that will be sent with the ajax request]
        * Arguments  : 
            - path : String 
                Values : path to controller
            - functionName : String 
                Values : name of function that will return the view
            - targetId : String 
                Values : name of id that data/view will display in it
            - data : Any data type but prefered JSON Data 
                Values : the data that function need to display the view  
        * Usage : 
            Call Function in Controller and Return result in dom container with Specific id value  
        */
        function getView(path, functionName, targetId, data) {
            $.ajax({
                url: path +"/"+ functionName,
                cache: false,
                type: "GET",
                data: { data: data },
                success: function (data) {
                    $("#" + targetId).empty();
                    $("#" + targetId).html(data);
                }
            });
        }
    /*------------------------/getView--------------------------*/
 
//---- /Handel modal Appearance ---------------------------------

/*------------------------viewNotification-----------------------
    * Function Name: viewNotification
    * Parameters : 
        - ntfType [type of the modal that will be display]
        - MsgHeader [title of the notification]
        - Msg [message that will be display in notification]
    * Arguments  : 
        - ntfType : String 
            Values : ["success" - "danger" - "warnning" - "default"]
        - MsgHeader : String 
            Values : the string that will be in the title of the notification
        - Msg : String 
            Values : message that will be in notification 
    * Usage : 
        Show notification with specefic background color and title and message depand on 
         - ntfType : 
            > success: Green
            > danger : Red
            > warnning : Yellow
            > default :  Turkuaz
        - MsgHeader
        - Msg
    */
    function viewNotification(ntfType,MsgHeader ,Msg) {
        if (ntfType == "success") {
            $('.g7-notification').removeClass("ntf-default");
            $('.g7-notification').removeClass("ntf-warnnig");
            $('.g7-notification').removeClass("ntf-danger");
            $('.g7-notification').addClass("ntf-success");

            $('.g7-notification .ntf-text h4').html(MsgHeader);
            $('.g7-notification .ntf-icon span').removeAttr('class');
            $('.g7-notification .ntf-icon span').addClass('fa fa-check');
        }
        else if (ntfType == "danger") {
            $('.g7-notification').removeClass("ntf-success");
            $('.g7-notification').removeClass("ntf-warnnig");
            $('.g7-notification').removeClass("ntf-default");
            $('.g7-notification').addClass("ntf-danger");

            $('.g7-notification .ntf-text h4').html(MsgHeader);
            $('.g7-notification .ntf-icon span').removeAttr('class');
            $('.g7-notification .ntf-icon span').addClass('fa fa-exclamation-triangle');

        }
        else if (ntfType == "warnning") {
            $('.g7-notification').removeClass("ntf-danger");
            $('.g7-notification').removeClass("ntf-success");
            $('.g7-notification').removeClass("ntf-default");
            $('.g7-notification').addClass("ntf-warnnig");

            $('.g7-notification .ntf-text h4').html(MsgHeader);
            $('.g7-notification .ntf-icon span').removeAttr('class');
            $('.g7-notification .ntf-icon span').addClass('fa fa-exclamation');
        }
        else if (ntfType == "default") {
            $('.g7-notification').removeClass("ntf-danger");
            $('.g7-notification').removeClass("ntf-success");
            $('.g7-notification').removeClass("ntf-warnnig");
            $('.g7-notification').addClass("ntf-default");

            $('.g7-notification .ntf-text h4').html(MsgHeader);
            $('.g7-notification .ntf-icon span').removeAttr('class');
            $('.g7-notification .ntf-icon span').addClass('fa fa-bell');
        }
        else {
            alert("Notification Type Undefined !!");
        }

        $('.g7-notification .ntf-text p').html(Msg);

        $('.g7-notification').addClass("ntf-show");

        setTimeout(function () { $('.g7-notification').removeClass('ntf-show') }, 4000);
    }
/*------------------------/viewNotification----------------------*/

//---- Handel Loading Appearance ---------------------------------
    /*------------------------beginLoading-----------------------
        * Function Name: beginLoading
        * Parameters : -
        * Arguments  : -
        * Usage :
            Show the loading Overlay
        * Note : this function called when you want to hold screen untill request done
    */
    function beginLoading() {
        $("body").LoadingOverlay("show", {
            fade: true,
            color: "rgba(255, 255, 255, 0.5)"
        });
    }
    /*------------------------/beginLoading----------------------*/

    /*------------------------finishLoading-----------------------
        * Function Name: finishLoading
        * Parameters : -
        * Arguments  : -
        * Usage : 
            Hide the loading Overlay
        * Note : this function called when request is done to remove the loading overlay
    */
    function finishLoading() {
        $("body").LoadingOverlay("hide", {
            fade: true
        });
    }
    /*------------------------/finishLoading----------------------*/
//---- /Handel Loading Appearance ---------------------------------

//---- Handel Datatable Plugin  -----------------------------------
    /*------------------------InitdataTable-----------------------
        * Function Name: InitdataTable
        * Parameters :
            - ContainerId [id of the contianer that has the table]
            - vars [array of vars which need to intiate the dataTable plugin]
        * Arguments  :
            - ContainerId : String
                Values : the id of container that has the table
            - vars : Array
                Values :
                    > vars[0] : text will show if there are no records in table
                    > vars[1] : text the will be in number of displayed rows select input
                    > vars[2] : text that will be in the last option in number of displayed rows select input
                    > vars[3] : the text that will be in the search lable
                    > vars[4],vars[5],vars[6],vars[7] : text the will be display in table conclusion
            - options : Array
                Values :
                    > options[0] : Boolean - Responsive Show Option Value - Default Value : true
                    > options[1] : Boolean - Searching Show Option Value - Default Value : false
                    > options[2] : Boolean - Page Information Show Option Value - Default Value : true
                    > options[3] : Boolean - Page Length Select Show Option Value - Default Value : true
                    > options[4] : Boolean - Page Length Select Default Value - Default Value : 10  - To Show All Records Set Value With -1
                    > options[5] : Boolean - Pagination Show Option Value - Default Value : true
        * Usage :
            Used to initiate the datatable Plugin
        */
        function InitdataTable(ContainerId, vars , options) { 
            if(options[0]=="null"){options[0] == true}
            if(options[1]=="null"){options[1] == false}
            if(options[2]=="null"){options[2] == true}
            if(options[3]=="null"){options[3] == true}
            if(options[4]=="null"){options[4] == 10}
            if(options[5]=="null"){options[5] == true}

            var sF ="<span class='fa fa-angle-double-left'></span>";
            var sL ="<span class='fa fa-angle-double-right'></span>";
            var sN ="<span class='fa fa-angle-right'></span>";
            var sP ="<span class='fa fa-angle-left'></span>";

             if(document.dir == "rtl"){
                sF ="<span class='fa fa-angle-double-right'></span>";
                sL ="<span class='fa fa-angle-double-left'></span>";
                sN ="<span class='fa fa-angle-left'></span>";
                sP ="<span class='fa fa-angle-right'></span>";
            } 
            $('#'+ContainerId+' table').DataTable({
                responsive: options[0],
                searching: options[1],
                bInfo: options[2],
                lengthChange: options[3],
                "pageLength": options[4],
                "bPaginate": options[5],
                "pagingType": "full_numbers",
                "dom": "<'datatable-header'f><'datatable-table't><'datatable-footer'pil>",
                "oLanguage": {
                    "sEmptyTable": vars[0],
                    "sZeroRecords":vars[0],
                    "sLengthMenu": '<select>' +
                        '<option value="10">10 ' + vars[1] + '</option>' +
                        '<option value="20">20 ' + vars[1] + '</option>' +
                        '<option value="30">30 ' + vars[1] + '</option>' +
                        '<option value="40">40 ' + vars[1] + '</option>' +
                        '<option value="50">50 ' + vars[1] + '</option>' +
                        '<option value="-1">' + vars[2] + '</option>' +
                        '</select>',
                    "sInfo": vars[4] + " _START_ " + vars[5] + " _END_ " + vars[6] + " _TOTAL_ " + vars[7],
                    "sInfoEmpty":    vars[4] + "0 " + vars[5] + " 0 " + vars[6] + " 0 " + vars[7] ,
                    "oPaginate": {
                        "sFirst": sF,
                        "sLast": sL,
                        "sNext": sN,
                        "sPrevious": sP,
                    },
                    "sSearch": vars[3]+ "_INPUT_ ",
                },
            });
        }
    /*------------------------/InitdataTable----------------------*/

    /*------------------------redrawTable-----------------------
        * Function Name: redrawTable
        * Parameters : -
        * Arguments  : -
        * Usage : 
            Used to redraw the dataTable after any Updat in View
        */
        function redrawTable(){
            var datatable = $('.data-table table');  
            datatable.DataTable().columns.adjust().draw();
        }
    /*------------------------/redrawTable----------------------*/

    /*------------------------checkTableSize-----------------------
        * Function Name: checkTableSize
        * Parameters : id [ id of the container of the DataTable]
        * Arguments  : 
        -   ContainerId : String 
                Values : the id of container that has the table
        * Usage : 
            run when the size of the container that has table Changed to redraw the Table
        */
        function checkTableSize(id){
            var element = document.getElementById(id);
            new ResizeSensor(element, function() {
                redrawTable();
            }); 
        }
    /*------------------------/checkTableSize----------------------*/
//---- /Handel Datatable Plugin  -----------------------------------