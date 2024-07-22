$(document).ready(function () {
    // Show the cookie alert after 1 second
    setTimeout(function () {
        $('#cookieAlert').addClass('show_cookie');
    }, 1000);

    // Event listeners for the accept and reject buttons
    $('#acceptCookies, #rejectCookies').click(function () {
        $('#cookieAlert').removeClass('show_cookie');
    });
});


$(document).ready(function () {
    setTimeout(function () {
        $('#exampleModal').modal('show');
    }, 1000);
});
