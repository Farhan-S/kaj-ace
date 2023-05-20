//register method----------------
$(".register-link").click(()=>{
    $(".wraper1").addClass("active");
    $(".wraper1").removeClass("active-popup");
    setTimeout(() => {
        $(".wraper2").addClass("active-popup");
    }, 400);
});

$(".login-link").click(()=>{
    $(".wraper3").removeClass("active-popup");
    $(".wraper4").removeClass("active-popup");
    setTimeout(() => {
        $(".wraper1").addClass("active-popup");
    }, 400);

});

//Login button press method---------------
$(".popup-btn").click(()=>{
    $(".wraper1").addClass("active-popup");
    $(".kaj-kormi-btn").css("display","none");
    $(".wraper2").removeClass("active-popup");
    $(".wraper3").removeClass("active-popup");
    $(".wraper4").removeClass("active-popup");
});

//close method----------------------
$(".icon-close").click(()=>{
    $(".wraper1").removeClass("active-popup");
    $(".wraper2").removeClass("active-popup");
    $(".kaj-kormi-btn").css("display","block");
    $(".wraper3").removeClass("active-popup");
    $(".wraper4").removeClass("active-popup");
});
//worker register-page ---------

$(".worker").click(()=>{
    $(".wraper3").addClass("active-popup");
    $(".wraper2").removeClass("active-popup");
});

//consumer register-page-------------
$(".consumer").click(()=>{
    $(".wraper4").addClass("active-popup");
    $(".wraper2").removeClass("active-popup");
});
//All Submiting btn----------

$(".w-reg-btn").click(()=>{
    
     $("#w-reg-f1").submit();
     $("#w-reg-f2").submit();
     $("#w-reg-f3").submit();
     alert("hey this is a correct thing");
});
