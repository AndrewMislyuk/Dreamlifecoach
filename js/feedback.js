$(document).ready(function () {
  $(".form__feedback").submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize(),
    }).done(function () {
      $("#gridSystemModal").modal("toggle");
      Swal.fire({
        icon: "success",
        title: "Спасибо:)",
        width: 500,
        padding: "3em",
        text: "Мы раcсмотрим вашу заявку в ближайшее время",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(function () {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});
