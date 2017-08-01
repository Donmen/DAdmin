/**
 * Created by Administrator on 2017/8/1.
 */
    $("button").click(function () {
        // 获取用户名和登录密码
        var uid = $("#user").val();
        var pwd = $("#password").val();
        if(uid!=="" && pwd!==""){
            $.ajax({
                type: "POST",
                url: "/carrots-admin-ajax/a/login",
                data: {
                    "name": uid,
                    "password": pwd
                },
                success: function(data) {
                    var D = JSON.parse(data);
                    console.log('D',D);
                    if( D.code === 0 ) {
                        location.href = "https://www.baidu.com/"
                    }else {
                        $("#hint").text(D.message)
                    }
                }
            })
        }else{
            alert("123")
        }
    });


