function AgGrid (AgOptions) {
    //debugger;
    this.EditableCol = null;
    this.FocustableCol = null;
    this.Options = AgOptions;
    (AgOptions.hasTools)?(this.Options.GridOptions.columnDefs.push({ headerName: 'الإجراءات', field: "tools", cellRenderer: this.Options.RenderTools, cellClass: 'tools', editable: false, width:150 })):("");
    this.GridDiv = document.querySelector(this.Options.Selector);
    this.Table = new agGrid.Grid(this.GridDiv, this.Options.GridOptions);
}
AgGrid.prototype.AddRow = function() {
    //debugger;
    var newItem = this.Options.RowStruct;
    this.Options.GridOptions.api.updateRowData({ add: [newItem] });
    (this.Options.InitPlugins != null)?(this.Options.InitPlugins()):("")
    this.Options.GridOptions.api.sizeColumnsToFit();

    let LastRowIndex = $(this.Options.Selector + " " + ".ag-body-container .ag-row").length;
    let colkey = this.Options.GridOptions.columnDefs[0].field;
    this.SetColFocus(LastRowIndex - 1, colkey);
    
    /* var that =this;
    var x = $(that.Options.Selector+" .ag-row:eq("+LastRowIndex+")").find(".ag-cell")[0];
    $(x).find("input").focus(); */
    
    
    /*let tableH = ($(".grid").css("height"));
    let newTableH = ((parseInt(tableH.slice(0, -2)) + 26) + "px").toString();
    $(".grid").css("height", newTableH); */
}
AgGrid.prototype.deleteRow = function (rowIndex,colKey) {
    //debugger;
    var model = this.Options.GridOptions.api.getModel();
    console.log(model.rowsToDisplay);
    if (this.Options.GridOptions.api.getModel().getRowCount() > 1) {
        let row =  model.rowsToDisplay[rowIndex] //this.Options.GridOptions.api.getRowNode(rowId) ;
        if(row.data == undefined){row.data = "x";}
        console.log(row);
        
        this.Options.GridOptions.api.updateRowData({ remove: [row.data] });
        if(row.rowIndex != 0){
            this.SetColFocus(row.rowIndex - 1, colKey);
        }
        /* var rows = [];
        this.Options.GridOptions.api.forEachNode(function(rowNode, index) {
            rows.push(rowNode);
        });
        console.log(rows);
        var selected = this.Options.GridOptions.api.getFocusedCell();
        rows.splice(selected.rowIndex, 1);
        
        this.Options.GridOptions.api.setRowData(rows); */
    }
}
AgGrid.prototype.SetColFocus = function (rowIndex, colKey) {
    //debugger;
    this.Options.GridOptions.api.setFocusedCell(rowIndex, colKey);
}
AgGrid.prototype.handelDataTableAddBtn = function () {
    //debugger;
    let Selector = this.Options.Selector + " " + ".ag-body-container .ag-row";
    let rowCount = $(Selector).length;
    var lastRow = $(Selector)[rowCount - 1];
    var rowId = lastRow.attributes[2].value;
    if (rowCount > 0) {
        let row = this.Options.GridOptions.api.getRowNode(parseInt(rowId));
        this.AddRow(lastRow.rowIndex, row.columnController.allDisplayedColumns[0].colId)
    } else {
        this.Options.GridOptions.api.updateRowData({ add: [this.RowStruct] });
    }
}
AgGrid.prototype.AgGridKeyActionListner = function (e,obj){
    //debugger;
    var SelectorRow = this.Options.Selector + " " + ".ag-body-container .ag-row";
    if (e.keyCode == 9 || e.keyCode == 13) {
        if ($(obj).find("input").hasClass("txt-date-input")) {
            $(obj).find("input").datepicker('hide');
        }
        let colBreak = FocustableCol.column.colDef.cellClass;//.cellClass;//EditableCol[EditableCol.length -1].colDef.cellClass;
        let rowCount = $(SelectorRow).length;
        var maxRowIndex = rowCount - 1;
        let SelectorLastRow = this.Options.Selector + " " + ".ag-body-container [row-Index='" + maxRowIndex + "']";
        var lastRow = $(SelectorLastRow);//$(".ag-body-container .ag-row")[rowCount-1];
        var thisRow = $(obj).closest(".ag-row")[0].attributes[1].value;
        var rowIndex = lastRow[0].attributes[1].value;
        var rowId = lastRow[0].attributes[2].value;
        let row = this.Options.GridOptions.api.getRowNode(rowId);
        let colKey = row.columnController.allDisplayedColumns[0].colId;
        if(colBreak.includes("table-break") && thisRow == rowCount - 1){
            this.AddRow(rowIndex, colKey);
        }else if(!colBreak.includes("tools")){
            //debugger;
            console.log("--------------------");
            console.log(e.target);
           var x = $(this.Options.Selector+" .ag-row .ag-cell").index($(e.target).closest(".ag-cell")) + 1;
            //alert(x);
            $(".ag-cell:eq( "+x+" )").find("input").focus();
        }
    }else if (e.keyCode == 35) {
        //debugger; 
        var rowCount = this.Options.GridOptions.api.getModel().getRowCount();
        var rowIndex = rowCount - 1;
        var row = this.Options.GridOptions.api.getRowNode(rowIndex);
        var colKey = row.columnController.allDisplayedColumns[row.columnController.allDisplayedColumns.length - 2].colId;
        if ($(obj).find("input").hasClass("txt-date-input")) {
            $(obj).find("input").datepicker('hide');
        }
        this.SetColFocus(rowIndex, colKey);
    }else if(e.keyCode == 46 && e.shiftKey){
        //debugger;
        if ($(obj).find("input").hasClass("txt-date-input")) {
            $(obj).find("input").datepicker('hide');
        }
        let fCell= this.Options.GridOptions.api.getFocusedCell();
        var row = this.Options.GridOptions.api.getDisplayedRowAtIndex(fCell.rowIndex);
        this.deleteRow(row.rowIndex,fCell.column.colId)
    }else if(e.keyCode == 45 && e.shiftKey){
        let Selector = this.Options.Selector + " " + ".ag-body-container .ag-row";
        let rowCount = $(Selector).length;
        var lastRow = $(Selector)[rowCount - 1];
        var rowId = lastRow.attributes[2].value;
        if (rowCount > 0) {
            let row = this.Options.GridOptions.api.getRowNode(parseInt(rowId));
            this.AddRow(lastRow.rowIndex, row.columnController.allDisplayedColumns[0].colId)
        } else {
            this.Options.GridOptions.api.updateRowData({ add: [this.RowStruct] });
        }
    }else if(e.keyCode == 32){
        //debugger;
        var colBreack = FocustableCol.column.colDef.cellClass;
        let fCell= this.Options.GridOptions.api.getFocusedCell();
        var row = this.Options.GridOptions.api.getDisplayedRowAtIndex(fCell.rowIndex);
        if(colBreack == "tools"){
            this.deleteRow(row.rowIndex,fCell.column.colId);
        }
    }else if(e.keyCode == 17){
        console.log(e.target);
        $(e.target).find("input").focus();
    }
}