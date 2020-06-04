function mailservice() {
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: !0,
        submitError: function($form, event, errors) {},
        submitSuccess: function($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name;
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ')
            }
            $this = $("#sendMessageButton");
            $this.prop("disabled", !0);

            Email.send({
                Host : "smtp.gmail.com",
                Username : "sergeoingcons@gmail.com",
                Password : "zoxfumiqclgrdmlw",
                To : 'sergeoingcons@gmail.com', // to = a (va el correo de la empresa)
                From : email, // from = desde
                Subject : "Has recibido un nuevo mensaje desde el formulario "+
                    "de contacto de tu página web.", // titulo del correo
                Body : `Has recibido un nuevo mensaje desde el formulario de contacto de tu página web.<br/><br/>
                    <strong>Nombre:</strong> ${name}<br/><strong>Correo:</strong> ${email}<br/>
                    <strong>Teléfono:</strong> ${phone}<br/><strong>Mensaje:</strong> ${message}`
            }).then(
              message => {
                    if (message==='OK') {
                        // mdtoast('Exito', {
                        //     type: 'success',
                        //     interaction: true,
                        //     interactionTimeout: 4000,
                        //     actionText: 'Mensaje enviado.',
                        // });
                
                        $('#success').html("<div class='alert alert-success'>");
                        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                        $('#success > .alert-success').append("<strong>Tu mensaje ha sido enviado. </strong>");
                        $('#success > .alert-success').append('</div>');
                        $this.prop("disabled", false);
                        $('#contactForm').trigger("reset")
                    } else {
                        // mdtoast('Error', {
                        //     type: 'warning',
                        //     interaction: true,
                        //     interactionTimeout: 4000,
                        //     actionText: 'No se ha enviado el mensaje.',
                        // });
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                        $('#success > .alert-danger').append($("<strong>").text(`Lo siento, parece que mi servidor de correo no responde. 
                            ¡Por favor, inténtelo de nuevo más tarde!<br/>Error: ${message}`));
                        $('#success > .alert-danger').append('</div>');
                        $this.prop("disabled", false);
                        $('#contactForm').trigger("reset")
                    }
              }
            );
        },
        filter: function() {
            return $(this).is(":visible")
        },
    });
    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show")
    })
    $('#name').focus(function() {
        $('#success').html('')
    })
}