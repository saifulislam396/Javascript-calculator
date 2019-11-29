function insrt(num){
    $('.calcu-display').val($('.calcu-display').val()+ num);
}
function eql(){
    $('.calcu-display').val(eval($('.calcu-display').val()));
}
function c(){
    $('.calcu-display').val('');
}
function del(){
   value = $('.calcu-display').val();
    $('.calcu-display').val(value.substring(0, value.length -1));
}