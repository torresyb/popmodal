;(function($){
    $(function(){
        // 弹框
        $('#btn_login').modal({
            trigger: '#btn_login',
            olay:'div.overlay',
            modals:'div.modal',
            animationSpeed: 100,
            moveModalSpeed: "fast",
            background: '000000',
            maskOpacity: 0.4,
            openOnLoad: false,
            docClose: true,
            closeByEscape: true,
            moveOnScroll: true,
            resizeWindow: true,
            close:'.closeBtn',
            callback_show: function(){
                $("#username").val('');
                $("#password").val('');
                $('label.error').remove();
                $("#username")[0].focus();
            }
        });
        // 表单验证
        $("#myForm").validate({
            submitHandler: function(form) {
                form.submit();
            },
            rules:{
                username: {
                    required: true,
                    minlength: 2
                },
                password: {
                    required: true,
                    minlength: 6
                }
            },
            messages:{
                username: {
                required: "请输入用户名",
                minlength: "用户名至少两位"
              },
              password: {
                required: "请输入密码",
                minlength: "密码长度至少5位"
              }
            },
            errorPlacement: function(error,element){
                error.appendTo(element.prev());
            }
        });
    });
})(jQuery)