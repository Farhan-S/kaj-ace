
$(".register-link").click(()=>{
    $(".wraper").addClass("active");
});

$(".login-link").click(()=>{
    $(".wraper").removeClass("active");
});
$(".popup-btn").click(()=>{
    $(".wraper").addClass("active-popup");
    $(".kaj-kormi-btn").css("display","none");
});

$(".icon-close").click(()=>{
    $(".wraper").removeClass("active-popup");
    $(".kaj-kormi-btn").css("display","block");
});

