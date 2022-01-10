/**Code from: Materialize - mobile collapse*/
/** Side navigation*/
$(document).ready(function(){
    $('.sidenav').sidenav({edge: "right"});
  });

/** Collapsible tasks*/
$(document).ready(function(){
  $('.collapsible').collapsible();
});

/**Tooltips */
$(document).ready(function(){
  $('.tooltipped').tooltip();
});

/** Date Picker */
$(document).ready(function(){
  $('select').formSelect();
  $('.datepicker').datepicker({
    format: "dd, mmmm, yyyy",
    yearRange: 3,
    showClearBtn: true,
    i18n: {
      done: "Select"
    }
  });
});