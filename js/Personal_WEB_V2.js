AOS.init({
    anchorplacement: "bottom-bottom",
    once: true, //是否重複執行
    duration: 1000, //動畫持續時間
    delay: 600, //延遲時間在進行動畫
    easing: 'ease', //動畫曲線 linear,ease-in-sine,ease-in-back,ease-out-cubic
    // offset: 1000, //?????

});

$(document).ready(function() {
    if ($(window).width() < 769) {
        $("#section_me .container .col-sm-8").css("margin-left", "0px");
        $("#section_me .container .col-sm-8 .title").css("margin-top", "50px");
        $("#section_me .container .col-sm-4.img").css("height", "400px");

        $("#section_skill .container .col-sm-6.img").removeClass("img");
        $("#section_skill .container .col-sm-6.txt .title").css("margin-top", "0px");

        $("#section_future p").css("padding", "80px 10px")
        $("#section_future .NEXT p").html("然而，我心中依然惦記著遊戲相關的產業，網頁資訊相關的技術，與辦活動創造回憶的感動。<br>命運引領我看見了我的下一步，它的要求之高。令我畏懼也令我熱血，我知道，這職位是我的，它...就是我的下一站！")
        $("#section_future .jackwell p").html("憑著一顆愛喝咖啡的心，我加入了 咖啡學人 的這個大家庭，真切地認識到我從大學以來就一直想做的工作倒底長什麼樣子，來來去去不同的人心中各自所擁抱的夢想，這些都是對我來說無比珍貴的體驗。")
        $("#section_future .gap p").html("意識到自己只是活著而不是在生活，我決定暫時脫離預設的軌道，然後實現一直想嘗試的生活。<br>這半年來，我辭職、旅行、體驗、學習，有了許多的對話，認識了很多不同的行業，也更加了解自我的特質。")
        $("#section_future .usun p").html("在 陽程科技 擔任 機械設計工程師 一職，期間承蒙經理、前輩們與現場經驗豐富的師傅們的栽培照顧與賞識，使我明白在扎實的技術能力的背後，更多的需求是充分且清楚地傳達彼此的訊息，彼此配合且圓融處事，事情才能順利且快速地排除。")
        $("#section_future .niu p").html("在國立宜蘭大學 生物機電工程學系 期間，將原有的機械知識結合大學所學的機電與程式控制邏輯，在各項機器人競賽中榮獲優異的成績表現，相信這可貴的經驗在未來會再次幫助到我，在關鍵時刻發光與發熱。")

        $("#section_works .container .col-sm-4.img").removeClass("img");
        $("#section_works .container .content").css("text-align", "right");

        AOS.init({
            anchorplacement: "bottom-bottom",
            duration: 800, //動畫持續時間
            delay: 0, //延遲時間在進行動畫
            easing: 'linear', //動畫曲線 linear,ease-in-sine,ease-in-back,ease-out-cubic

        });
    }
});

$(".pg3_child").click(function() {
    if ($(this).height() < 100) {
        $(this).css("height", "300px")
            .siblings().css("height", "60px");
    } else if ($(this).height() > 100) {
        $(this).css("height", "60px")
            .siblings().css("height", "60px");
    }
});

// $(function() {
//     $(window).scroll(function() {
//         var scrollVal = $(this).scrollTop();
//         $(".window").text(scrollVal);
//     });
// });