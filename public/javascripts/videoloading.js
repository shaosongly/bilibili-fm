$(function() {
    $.get('/videoloading', function(data) {
        var videos = JSON.parse(data);   
        showVideo(videos);
        setInterval(function() {
            $('.cover').fadeOut(600);
            setTimeout(function() {
                showVideo(videos);
            },600);
            $('.cover').fadeIn(600);
        },3000);
    });
});

function showVideo(videos) {
    var index = Math.floor(Math.random()*videos.length);
    $('.cover').css('background-image', 'url(' + videos[index].img + ')');
    $('#title').text(videos[index].title);
    $('#des').text(videos[index].des);
    $('#up').text(videos[index].up);
    $('#len').text(videos[index].len);
};
