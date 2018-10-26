$('.title').each(function(){
  $(this).html($(this).text().replace(/([^.]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline()
.add({
  targets: '.title .letter',
  scale: [4,1],
  opacity: [0,1],
  translateZ: 0,
  easing: 'easeOutExpo',
  duration: 950,
  delay: function(el, i) {
    return 70*i;
  },
});
