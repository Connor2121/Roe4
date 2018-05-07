$(document).ready(() => {
    $('.modal').modal();
    $('input#input_text, textarea#textarea2').characterCounter();
    $("[data-menu-underline-from-center] a").addClass("underline-from-center");    
    $("[data-menu-underline-from-center] a").addClass("underline-from-center");

    let urlId = window.location.href.slice(-3);        
    
    displayVendor = () => {
        let base = location.origin;
        $.get(base + '/api/vendors/id/' + urlId , result => {
            $('#vendor-bio').text(result.Bio);
            $('#vendor-name').text(result.Vendor);
            $('#vendor-phone').text(result.Phone);
            $('#vendor-email').text(result.Email);
            $('#vendor-address').text(result.Address);
            $('#vendor-city').text(result.City);
            $('#vendor-state').text(result.State);
            $('#vendor-zip').text(result.Zip);
            $('#vendorPhoto').attr('src', result.Image);
            $('#vendor-contact').text(result.Contact);
            for (var i = 0; i < result.cropData.length; i++) {
                $('#vendor-crop').prepend(`<li> ${result.cropData[i].Name} </li>`);
            };
            for (var i = 0; i < result.Livestock.length; i++) {
                $('#vendor-livestock').prepend(`<li> ${result.Livestock[i].Name} </li>`);
            };
        });
    };

    displayVendor();

    // Sendgrid ajax post
    $('.submitBtn').on('click', e => {
        e.preventDefault();
        let toEmail = $('#vendor-email').text().trim();
        let fromEmail = $('#email2').val().trim();
        let subject = $('#subject').val().trim();
        let message = $('#message2').val().trim();
        $.post('/api/mail', {
            toEmail,
            fromEmail, 
            subject, 
            message
        }).then(cb => {
            $('#modal-contact').modal('close');
        });
    });
});