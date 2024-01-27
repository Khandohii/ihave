$( document ).ready(function() {
    // Отправка форм
    $('body').on('submit', '.form.ajax_submit', function(e) {
        e.preventDefault()

        var thisForm = $(this)

        let fieldTel = $(this).find('input[name="phone"]').val()

        let unformattedDate = Inputmask.unmask(fieldTel, { alias: "+799 (999) 999-99-99'"});

        let lenghtVal = unformattedDate.length

        if (lenghtVal < 10) {
            $(this).find('input[name="phone"]').addClass('error')
        } else{
            sendAjaxForm('result_form', thisForm, 'action_ajax_form.php');

            $("form").trigger('reset');
        }
    })

    $('input[name="phone"]').keyup(function(){
        checkInput(this)
    });
});

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: ajax_form.serialize(),  // Сериализуем объект
        success: function(response) { //Данные отправлены успешно
            $.fancybox.close()

            $('body').addClass('lock');

            $('.success_wrap').addClass('visible');

            $('.overlay').fadeIn(300);

            console.log('Success form' + response)
    	},
    	error: function(response) { // Данные не отправлены
            console.log('Failed form' + response)
    	}
 	});
}

function checkInput(el){
    let fieldTel = $(el).val()

    let unformattedDate = Inputmask.unmask(fieldTel, { alias: "+799 (999) 999-99-99'"});

    let lenghtVal = unformattedDate.length

    if (lenghtVal < 10) {
        $(el).addClass('error')
    } else{
        $(el).removeClass('error')
    }
}