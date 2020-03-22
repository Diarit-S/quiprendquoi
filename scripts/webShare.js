if (navigator.share) {
  document.querySelectorAll('[data-share-url]').forEach(($shareEl) => {
    const $button = document.createElement('button');
    $button.innerHTML = 'Partager';
    $clipboardEl.parentNode.append($button);
    $button.addEventListener(
      'click',
      shareLink.bind(this, $shareEl)
    );
  });
} else {
  console.warn("Pas de support webShare")
}

function shareLink($shareEl) {
  console.log('share');
  navigator.share({
    title: $shareEl.getAttribute('data-share-title'),
    text: $shareEl.getAttribute('data-share-text'),
    url: $shareEl.getAttribute('data-share-url'),
  })
}