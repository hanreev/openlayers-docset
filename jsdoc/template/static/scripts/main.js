$(function() {
  var currentVersion = document.getElementById('package-version').innerHTML;

  // create source code links to github
  var srcLinks = $('div.tag-source');
  srcLinks.each(function(i, el) {
    var textParts = el.innerHTML.trim().split(', ');
    var link = 'https://github.com/openlayers/openlayers/blob/v' + currentVersion + '/src/ol/' + textParts[0];
    el.innerHTML =
      '<a href="' +
      link +
      '">' +
      textParts[0] +
      '</a>, ' +
      '<a href="' +
      link +
      textParts[1].replace('line ', '#L') +
      '">' +
      textParts[1] +
      '</a>';
  });

  // Highlighting current anchor

  var anchors = $('.anchor');
  var _onHashChange = function() {
    var activeHash = window.document.location.hash
      .replace(/\./g, '\\.') // Escape dot in element id
      .replace(/\~/g, '\\~'); // Escape tilde in element id

    anchors.removeClass('highlighted');

    if (activeHash.length > 0) {
      anchors.filter(activeHash).addClass('highlighted');
    }
  };

  $(window).on('hashchange', _onHashChange);
  _onHashChange();
});
