$(document).ready( function() {
    "use strict";
    $('.clt-btn').click( function() {
        if($('.calculator').hasClass('d-none')){
            $('.calculator').removeClass('d-none');
            $('.home').addClass('d-none');
        }else{
            $('.calculator').addClass('d-none');
            $('.home').removeClass('d-none');
        }
    });
    //calclate those debts
    $('#debt, #salary').keyup( function(){ 
        //get input value
        var debt = $('#debt').val();
        var salary = $('#salary').val();
        //validate input
        if(!Number(debt) || debt ==""){
            $('#debt-err').removeClass('d-none'); 
        }else{
            $('#debt-err').addClass('d-none'); 
        }
        if(!Number(salary) || salary == ""){
            $('#salary-err').removeClass('d-none'); 
        }else{
            $('#salary-err').addClass('d-none'); 
        }
        //calculation start here
        var payment_to_heslb_per_month = salary * (15/100);
        var remained_salary_per_month = (salary - payment_to_heslb_per_month);
        var remained_debt_per_month = (debt - payment_to_heslb_per_month);
        
        var payment_to_heslb_per_year = payment_to_heslb_per_month * 12;
        var remained_salary_per_year = (salary * 12) - payment_to_heslb_per_year;
        var remained_debt_per_year = debt - payment_to_heslb_per_year;
        
        var incremental_debt_next_year = remained_debt_per_year + (6/100) * debt;
        
        //show calculated data
        //$('#py_heslb_mth').html(payment_to_heslib_per_month);
        $('#rem_slr_mth').html(remained_salary_per_month);
        $('#dbt_rem_mth').html(remained_debt_per_month);

        //$('#py_heslb_yr').html(payment_to_heslb_per_year);
        $('#rem_slr_yr').html(remained_salary_per_year);
        $('#dbt_rem_yr').html(remained_debt_per_year);

        $('#incr_dbt_nxt_yr').html(incremental_debt_next_year);
    });
});
document.getElementById("year").innerHTML = new Date().getFullYear();