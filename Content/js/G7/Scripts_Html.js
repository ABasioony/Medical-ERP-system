/*------------------------viewStaticModal-------------------------
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
    function viewStaticModal(modalType,modalSize,modalSource){
    if (modalType == "add-modal") {
        $('[data-source="'+modalSource+'"]').removeClass("warning-modal");
        $('[data-source="'+modalSource+'"]').removeClass("danger-modal");
        $('[data-source="'+modalSource+'"]').addClass("success-modal");
    }
    else if (modalType == "edit-modal") {
        $('[data-source="'+modalSource+'"]').removeClass("success-modal");
        $('[data-source="'+modalSource+'"]').removeClass("danger-modal");
        $('[data-source="'+modalSource+'"]').addClass("warning-modal");
    }
    else if (modalType == "delete-modal") {
        $('[data-source="'+modalSource+'"]').removeClass("success-modal");
        $('[data-source="'+modalSource+'"]').removeClass("warning-modal");
        $('[data-source="'+modalSource+'"]').addClass("danger-modal");
    }
    else if (modalType == "details-modal") {
        $('[data-source="'+modalSource+'"]').removeClass("success-modal");
        $('[data-source="'+modalSource+'"]').removeClass("warning-modal");
        $('[data-source="'+modalSource+'"]').removeClass("danger-modal");
    }
    else {
        alert("modal Type Undefined !!");
    }

    if(modalSize =="xl"){
        $('[data-source="'+modalSource+'"]').children(".modal-dialog").removeClass("modal-lg");
        $('[data-source="'+modalSource+'"]').children(".modal-dialog").removeClass("modal-sm");
        $('[data-source="'+modalSource+'"]').children(".modal-dialog").addClass("modal-xl");
    }
    if(modalSize =="lg"){
        $('[data-source="'+modalSource+'"]').children(".modal-dialog").removeClass("modal-xl");
        $('[data-source="'+modalSource+'"]').children(".modal-dialog").removeClass("modal-sm");
        $('[data-source="'+modalSource+'"]').children(".modal-dialog").addClass("modal-lg");
    }
    if(modalSize =="md"){
        $('[data-source="'+modalSource+'"]').children(".modal-dialog").removeClass("modal-xl");
        $('[data-source="'+modalSource+'"]').children(".modal-dialog").removeClass("modal-lg");
        $('[data-source="'+modalSource+'"]').children(".modal-dialog").removeClass("modal-sm");
    }
    if(modalSize =="sm"){
        $('[data-source="'+modalSource+'"]').children(".modal-dialog").removeClass("modal-xl");
        $('[data-source="'+modalSource+'"]').children(".modal-dialog").removeClass("modal-lg");
        $('[data-source="'+modalSource+'"]').children(".modal-dialog").addClass("modal-sm");
    }

    $('[data-source="'+modalSource+'"]').modal({
        show: true,
        keyboard: false,
        backdrop: 'static'
    });
}
/*------------------------/viewStaticModal------------------------*/

/*------------------------close and Open New Modal------------------------*/
function closeAndOpenStaticModal(modalSource, modalType, modalSize, modalNewSource) {
    //debugger;
    $.when($('[data-source="'+modalSource+'"]').modal('hide')).then(function () {
        setTimeout(function () {
            viewStaticModal(modalType, modalSize,modalNewSource);
        }, 350);
    });
}
/*------------------------/close and Open New Modal------------------------*/

/*------------------------getViewhtml-----------------------
    * Function Name: getViewhtml
    * Parameters : 
        - path [path to the folder that conatin html that i want to display in side the Pages Folder]
        - pageName [name of page that i want to view]
        - targetId [id of container that i want to load page in it]
    * Arguments  : 
        - path : String 
            Values : path to folder that contain html file that will be display
        - pageName : String 
            Values : name of page that we need to display
        - targetId : String 
            Values : name of id that data/view will display in it
    * Usage : 
        Load html page in another in dom component with specific id 
    */
       function getViewhtml(path, PageName, targetId) {
        $("#" + targetId).empty();
        var link = "Pages/" + path + "/" + PageName + ".html";
        $("#" + targetId).load(link);
    }
/*------------------------/getViewhtml----------------------*/