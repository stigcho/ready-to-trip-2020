function next(divId) {
  if (divId === 1) {
    $("#div1").hide();
    $("#div2").show();
  }
  if (divId === 2) {
    $("#div2").hide();
    $("#div3").show();
  }
  if (divId === 3) {
    $("#div3").hide();
    // $("#div4").show();

    $.ajax({
      type: "POST",
      url: "/save_user",
      data: {
        name: "123",
        city: "aaaaa",
        date: "2020-03-11"
      },
      success: function(res) {
        $("#div4").show();
      }
    });
  }
}
