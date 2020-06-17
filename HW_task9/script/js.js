 /* TASK1 */

 $("a[href^='http']").attr('target','_blank');


 /* TASK2 */

 $('h2.head').css("background","lime");
 $('h2.head').find('.inner').css("fontSize", "35px");


 /* TASK3 */

 $( "div:first" ).insertBefore("h3:first");
$( "div:eq(1)" ).insertBefore("h3:eq(1)");


/* TASK4 */

$("#ChkForm input:checkbox").click(function() {
  if($("#ChkForm input:checked").length==3){
  	 $("#ChkForm input[type=checkbox]").attr("disabled", true);
 }});