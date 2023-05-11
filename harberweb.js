$(document).ready(function () {
    $("#btnsearch").click(function(e) {
        var txtInput = $("#srchInv").val();
        $("#infoinvaccr").html("ISI NAMA : " + txtInput);
        $.ajax({
                type: "POST",
                url: "assets/script/ajax/getcurl.php",
                data: "",
                success: function (response) {
                    $("#infoinvaccr").html("<br/>Response<br/> " + response);

                }
            });
    });
});
