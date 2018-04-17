var firstNames = ["", "", "", ""]
var lastNames = ["", "", "", ""]
var dobDay = ["", "", "", ""] // Make sure its always 2 long, so 01, 02, 03
var dobMon = ["", "", "", ""] // Make sure its always 2 long, so 01, 02, 03
var dobYr = ["", "", "", ""]
$(".first-name").each(function (index) { $(this).val(firstNames[index]) })
$(".last-name").each(function (index) { $(this).val(lastNames[index]) })
$("select[name='dob-day']").each(function (index) { $(this).val(dobDay[index]) })
$("select[name='dob-month']").each(function (index) { $(this).val(dobMon[index]) })
$("select[name='dob-year']").each(function (index) { $(this).val(dobYr[index]) })
$("#DataCollectionForms1").val("NO") // Potentially not that accurate year-to-year
$("#accept-terms-conditions").attr("checked", "checked") // Potentially not that accurate year-to-year
