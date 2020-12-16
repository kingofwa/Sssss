//Xu ly hide show phan ngoai
$(document).ready(function(){
    $("#removestar").click(function(){
        Hidebutton() + OpacityNone();
        $("#evaluate").css("pointer-events","none");
        $("span#close").css("pointer-events","auto");
        $("#codeOder").css("pointer-events","auto");
        $("#searchCodeOder").css("pointer-events","auto");
        $("#evaluate_star").css("pointer-events", "auto");
        $("#close_modal_evaluate").css("pointer-events", "auto");
    })
    $(".btn.btn-success.btn-sm.QA_evaluate").click(function(){
        Showbutton() + OpacityBlock();
    })
})
// xu ly phan vote rate 
$("html").on("click", ".fa.fa-star-o", function () {
    var id=$(this).data('id');
    var data_dismiss = $(this).data('dismiss');
    if (parseInt(data_dismiss)==1) {
           var huy= $("#an_"+id).val();
           if (parseInt(huy) == 1) {
            $("#star_total_" + id).val(1);
            $("#star_"+id+1).attr('style','color:orange!important');
            $("#star_"+id+2).attr('style','color:rgb(99, 90, 78)!important');
            $("#star_"+id+3).attr('style','color:rgb(99, 90, 78)!important');
            $("#star_"+id+4).attr('style','color:rgb(99, 90, 78)!important');
            $("#star_"+id+5).attr('style','color:rgb(99, 90, 78)!important');
            $("#an_"+id).val(2);
           }
           else{
            $("#star_"+id+1).attr('style','color:rgb(99, 90, 78)!important');
            $("#star_"+id+2).attr('style','color:rgb(99, 90, 78)!important');
            $("#star_"+id+3).attr('style','color:rgb(99, 90, 78)!important');
            $("#star_"+id+4).attr('style','color:rgb(99, 90, 78)!important');
            $("#star_"+id+5).attr('style','color:rgb(99, 90, 78)!important');
            $("#an_" + id).val(1); $("#star_total_" + id).val(0);
           }
        }
     switch (parseInt(data_dismiss)) {    
         case 2:
            $("#star_total_" + id).val(2);
            $("#star_"+id+1).attr('style','color:orange!important');
            $("#star_"+id+2).attr('style','color:orange!important');
            $("#star_"+id+3).attr('style','color:rgb(99, 90, 78)!important');
            $("#star_"+id+4).attr('style','color:rgb(99, 90, 78)!important');
            $("#star_"+id+5).attr('style','color:rgb(99, 90, 78)!important');
        break;
         case 3:
            $("#star_total_" + id).val(3);
            $("#star_"+id+1).attr('style','color:orange!important');
            $("#star_"+id+2).attr('style','color:orange!important');
            $("#star_"+id+3).attr('style','color:orange!important');
            $("#star_"+id+4).attr('style','color:rgb(99, 90, 78)!important');
            $("#star_"+id+5).attr('style','color:rgb(99, 90, 78)!important');
        break;
         case 4:
            $("#star_total_" + id).val(4);
            $("#star_"+id+1).attr('style','color:orange!important');
            $("#star_"+id+2).attr('style','color:orange!important');
            $("#star_"+id+3).attr('style','color:orange!important');
            $("#star_"+id+4).attr('style','color:orange!important');
            $("#star_"+id+5).attr('style','color:rgb(99, 90, 78)!important');
        break;
         case 5:
            $("#star_total_" + id).val(5);
            $("#star_"+id+1).attr('style','color:orange!important');
            $("#star_"+id+2).attr('style','color:orange!important');
            $("#star_"+id+3).attr('style','color:orange!important');
            $("#star_"+id+4).attr('style','color:orange!important');
            $("#star_"+id+5).attr('style','color:orange!important');
        break;
        default:
            break;
    }
});