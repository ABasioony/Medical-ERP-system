function Helper (Options) {
    this.HelperOptions = Options;
    this.initHelper();
    this.MainObject = $(this.HelperOptions.selector);
        /*  var r = document.getElementsByClassName("close-hint");
        console.log(r);
        r.addEventListener('click', this.removeHint.bind(this)); */
    $(this.HelperOptions.selector +" .helper-content-footer .close-hint").bind("click",this.handleCloseBtn);
}
Helper.prototype.initHelper = function() {
    //debugger;
    var object = $(this.HelperOptions.selector);
    console.log(this.HelperOptions);
    console.log(object);
    object.addClass("hint-item");
    //object.addClass("unfocused-item");
   /*  if(!object.hasClass("focused-item")){
        object.addClass("focused-item");
    } */
    let Header = (this.HelperOptions.hasHeader)?(""):("no-header ") ;
    let Footer = (this.HelperOptions.hasFooter)?(""):("no-footer ") ;
    object.append(
        '<div class="helper-content '+ Header + Footer + '">'+
            '<i class="fa fa-caret-up helper-content-anchor"></i>'+
            '<div class="helper-content-header col-12">'+
                '<h4>'+this.HelperOptions.HeaderMsg+'</h4>'+
            '</div>'+
            '<div class="helper-content-body row no-gutters col-12">'+
                '<h4>'+this.HelperOptions.HeaderMsg+'</h4>'+
                '<p>'+this.HelperOptions.DetailsMsg+'</p>'+
            '</div>'+
            '<div class="helper-content-footer">'+
                '<button class="gbtn gbtn-warning close-hint">Close</button>'+
            '</div>'+
        '</div>'
    );
}
Helper.prototype.showHint = function() {
   // debugger;
    var object = $(this.HelperOptions.selector);
     if(!$(".block-overlay").hasClass("blocked")){
        $(".block-overlay").addClass("blocked");
        $(".block-overlay").removeClass("un-blocked");
    } 
    $.each( $(".hint-item"), function( index, element ){
        if($(element).hasClass("focused-item")){
        $(element).addClass("unfocused-item");
        $(element).removeClass("focused-item");
        }
    });
    object.removeClass("unfocused-item");
    object.addClass("focused-item");
}
Helper.prototype.handleCloseBtn = function() {
    //debugger;
    var object = $(this).closest(".hint-item");
    $(".block-overlay").addClass("un-blocked");
    $(".block-overlay").removeClass("blocked");

    object.addClass("unfocused-item");
    object.removeClass("focused-item");
}
Helper.prototype.removeHint = function() {
    //debugger;
    $(this.HelperOptions.selector).addClass("unfocused-item");
    $(this.HelperOptions.selector).removeClass("focused-item");
    $(".block-overlay").addClass("un-blocked");
    $(".block-overlay").removeClass("blocked");
}
