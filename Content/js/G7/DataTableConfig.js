//-------- Handle Table Rows Selections ------------
function handleTableSelectionChanges(gridOptions){
    let Selected = gridOptions.api.getSelectedRows();
    if(!Selected.length == 0){
        $(".controls-section-table").removeClass("hidden");
    }else{
        if(!$(".controls-section-table").hasClass("hidden")){
            $(".controls-section-table").addClass("hidden");
        }
    }
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