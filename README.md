# Haha who want tix quick??

![](https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/52612/fastestdatboiever-1494465706@4x.gif)

Just fill ur details and boom

```JS
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
```

![](https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/52612/drakeyes-1494554856@4x.jpg)

## Example

```JS
var firstNames = ["Hebe", "Kermit", "Max", "Doctor"]
var lastNames = ["Jebes", "Croaky", "Power", "Zoidberg"]
var dobDay = ["31", "03", "07", "23"] // Make sure its always 2 long, so 01, 02, 03
var dobMon = ["10", "11", "01", "03"] // Make sure its always 2 long, so 01, 02, 03
var dobYr = ["1990", "1992", "1999", "1995"]
$(".first-name").each(function (index) { $(this).val(firstNames[index]) })
$(".last-name").each(function (index) { $(this).val(lastNames[index]) })
$("select[name='dob-day']").each(function (index) { $(this).val(dobDay[index]) })
$("select[name='dob-month']").each(function (index) { $(this).val(dobMon[index]) })
$("select[name='dob-year']").each(function (index) { $(this).val(dobYr[index]) })
$("#DataCollectionForms1").val("NO")
$("#accept-terms-conditions").attr("checked", "checked")
```
