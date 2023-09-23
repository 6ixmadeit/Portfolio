$("nav ul li").click(function() {
    let name = $(this).text().toLowerCase();
    console.log(name);
    let element = document.getElementById(name);
    console.log(element);

    $("#side").removeClass("open");
    element.scrollIntoView({behavior: "smooth", block: "center"});
});


$(".tab-links").click(function() {
    $(".tab-links").not(this).removeClass("active-link");
    $(this).addClass("active-link");

    let id = $(this).text()
    $(".tab-contents").not("#" + id).removeClass("active-tab");
    $("#" + id).addClass("active-tab");
});

$("#open").click(() => {
    $("#side").addClass("open");
});

$("#close").click(() => {
    $("#side").removeClass("open");
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbwjrNIcBpqPfb5fkifyP3O5GT9HiyNYgF3R94t0U4wphKvRwcrmBRBiAAs9is-qRyVIgQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = $("#msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        location
        msg.html("Message sent successfully!");
        setTimeout(function() {
            msg.html("");
        },5000)
        form.reset();

      })
      .catch(error => console.error('Error!', error.message))
  })