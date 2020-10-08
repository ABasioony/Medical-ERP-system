function editSelectedTableData(gridOptions){
    var selectedRows = gridOptions.api.getSelectedRows();
    console.log("----------editSelectedTableData:Begin------------");
    console.log(selectedRows);
    console.log("----------editSelectedTableData:End------------");
    /* 
        Import Edit Code Here
        selectedRows : Variable Contains All Selected Rows with Their Data
    */
}


// (columns,Rows,options[sorting : boolean , filter : boolean ])
function InitiatDataTable(columnDefs,rowData,options){
    var lang;
    if(options.lang == "ar"){lang ="ar"}else{null};
    var gridOptions = {
        columnDefs: columnDefs,                     //Define Columns
        rowData: rowData,                           //Define Rows
        enableSorting: options.sorting,             //Enable Sorting
        enableFilter: options.filter,               //Enable Filter
        rowDragManaged: options.DragEnable,         //Enable Drag
        animateRows: true,                          //Enable Animation
        localeText: setLocalization(lang),          //Set Table Language 
        enableRangeSelection: options.rangeSelect,  //Enable Range Select
        rowSelection: 'multiple',       
        sideBar: options.showSideBar,               //Show SideBar             
        pagination:options.pagination,
        enableRtl: true,
        rowSelection: 'multiple'
    }
    return gridOptions;
}
//------------------ Get Selected Row Data ----------------------------
function getSelectedRowsData() {
    let selectedNodes = gridOptions.api.getSelectedNodes()  
    let selectedData = selectedNodes.map( function(node) { return node.data })
    if(selectedData.length == 0){
        console.warn("No Row Selected");
        return 0;
    }
    else{
        console.log(selectedData);
        return selectedData;
    }   
}
//------------------ Auto Size All Cols ----------------------------
function autoSizeAll(gridOptions) {
    var allColumnIds = [];
    gridOptions.columnApi.getAllColumns().forEach(function(column) {
        allColumnIds.push(column.colId);
    });
    gridOptions.columnApi.autoSizeColumns(allColumnIds);
}
//------------------ Size All Cols to Fit tabel width ----------------------------
function sizeToFit(gridOptions) {
    gridOptions.api.sizeColumnsToFit();
} 
//------------------ Update Rows ----------------------------
function updateRows(data,options) { 
    var counter = 0;
    var rows = [] ;
    $.each(data, function (index, value) {
        let keys = Object.keys(data[0]);
        let row= {};
        $.each(keys, function (index, KeyValue) {
            row = value;
            counter ++;     
        });
        rows.push(row);
    }); 
    return rows;
}
//------------------ Define Columns ----------------------------
function defineColumns(data,headers){
    var counter = 0;
    var columns = [] ;
    var keys = Object.keys(data[0]);
    $.each(keys, function (index, value) {
        let header = value;
        columns.push({headerName: headers[counter], field: header ,enableRowGroup: true, enableValue: true, allowedAggFuncs: ['sum'] });
        counter ++;
    });
    return columns;
}






const languages = {ar:{
        // for filter panel
        page: 'الصفحه',
        more: 'المزيد',
        to: 'إلى',
        of: 'من',
        next: 'التالى',
        last: 'الأخير',
        first: 'الاول',
        previous: 'السابق',
        loadingOoo: 'جارى التحميل .....',

        // for set filter
        selectAll: 'إختر الكل',
        searchOoo: 'daSearch...',
        blanks: 'daBlanc',

        // for number filter and text filter
        filterOoo: 'بحث ....',
        applyFilter: 'daApplyFilter...',
        equals: 'تساوى',
        notEquals:'لا تساوى',

        // for number filter
        lessThan: 'أقل من',
        greaterThan: 'أكبر من',
        lessThanOrEqual: 'أقل من أو تساوى',
        greaterThanOrEqual: 'أكبر من أو تساوى',
        inRange: 'فى نطاق',

        // for text filter
        contains: 'تحتوى على',
        notContains: 'لا تحتوى على',
        startsWith: 'تبدأ ب',
        endsWith: 'تنتهى ب',

        // the header of the default group column
        group: 'laGroup',

        // tool panel
        columns: 'الأعمدة',
        filters: 'البحث',
        rowGroupColumns: 'laPivot Cols',
        rowGroupColumnsEmptyMessage: 'la drag cols to group',
        valueColumns: 'laValue Cols',
        pivotMode: 'laPivot-Mode',
        groups: 'المجموعات',
        values: 'القيم',
        pivots: 'laPivots',
        valueColumnsEmptyMessage: 'la drag cols to aggregate',
        pivotColumnsEmptyMessage: 'la drag here to pivot',
        toolPanelButton: 'la tool panel',

        // other
        noRowsToShow: 'لا يوجد صفوف متاحه للعرض',

        // enterprise menu
        pinColumn: 'تثبيت العمود',
        valueAggregation: 'laValue Agg',
        autosizeThiscolumn: 'laAutosize Diz',
        autosizeAllColumns: 'laAutsoie em All',
        groupBy: 'laGroup by',
        ungroupBy: 'laUnGroup by',
        resetColumns: 'laReset Those Cols',
        expandAll: 'laOpen-em-up',
        collapseAll: 'laClose-em-up',
        toolPanel: 'laTool Panelo',
        export: 'إستخراج',
        csvExport: 'CSV إستخراج ملف',
        excelExport: 'Excel إستخراج ملف',

        // enterprise menu pinning
        pinLeft: 'تثبيت شمال <<',
        pinRight: 'تثبيت يمين >>',
        noPin: 'غير مثبت <>',

        // enterprise menu aggregation and status bar
        sum: 'المجموع',
        min: 'الحد الأدنى',
        max: 'الحد الأقصى',
        none: 'لا شيء',
        count: 'العدد',
        average: 'المتوسط',

        // standard menu
        copy: 'نسخ البيانات',
        copyWithHeaders: 'نسخ البيانات و العناوين',
        ctrlC: 'ctrl n C',
        paste: 'لصق',
        ctrlV: 'ctrl n V'
},en:{
    
}}

function setLocalization(lang){
    if(lang == "ar"){
        return languages.ar;
    }
    else{
        return null;
    }
}






  
  /*   var columnDefs = [
    {headerName: "Make", field: "make",rowDrag: true,suppressSizeToFit: true, checkboxSelection: true, rowGroupIndex: 0  },
    {headerName: "Price", field: "price", aggFunc: 'sum', enableValue: true, allowedAggFuncs: ['sum','min','max']},
        
        {headerName: "Model", field: "model",enableRowGroup: true },
        
        {headerName: "User Details", children: [
            {field: 'firstName'},
            {field: 'lastName'},
            {field: 'phoneNumber'}
        ]},
        {headerName: "Tools", field: "Tools"},
        {
            headerName: "Button", field: "id",
            
        } 
    ];
    
    
    var rowData = [
        {make: "Toyota", model: "Celica", price: 35000,firstName:"Mohamed",Tools:{cellRenderer: function(params){
            return "<a href='http://example.com/edit/" 
                + params.value 
                + "'>link "+params.value+"</a>";
            }}
            },
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
        
    ];
    var autoGroupColumnDef = {
        headerName: "Make", 
        field: "make", 
        cellRenderer:'agGroupCellRenderer',
        cellRendererParams: {
            checkbox: true
        }
    }

    var gridOptions = {
        //enableRtl:true,
        columnDefs: columnDefs,
        defaultColDef: {
            width: 100,
            
            editable: true,
            filter: 'agTextColumnFilter'
        },
        rowData: rowData,
        enableSorting: true,
        enableFilter: true,
        rowSelection: 'multiple',
        enableColResize: true,
        rowDragManaged: true,
        animateRows: true,
        marryChildren:true,
        pagination:true,
        suppressSizeToFit:true,
        showToolPanel:true,
        localeText: setLocalization("ar"),
        groupIncludeFooter: true,
        sideBar: true,
        toolPanelSuppressPivots: true,
        toolPanelSuppressPivotMode: true,
        rowGroup:true,
        rowSelection: 'multiple',

        autoGroupColumnDef: autoGroupColumnDef,
        groupSelectsChildren: true,
        
    };
    


var eGridDiv = document.querySelector('#myGrid');



var table= new agGrid.Grid(eGridDiv, gridOptions); */


