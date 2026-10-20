/* ===== EDIT THIS FILE TO ADD YOUR PICTURES AND VIDEOS =====
   PICTURES: put image files in the "photos" folder, then list them here.
   VIDEOS:   put .mp4 files in the "videos" folder, or use a YouTube video ID.
   Each item sits between { }, and items are separated by commas. */

var PHOTOS = [
  { src: 'photos/photo1.jpg', caption: '', alt: 'Abigail smiling, in a cream dress', pos: '50% 8%' },
  { src: 'photos/photo2.jpg', caption: '', alt: 'Abigail smiling, in a green dress', pos: '50% 8%' },
  { src: 'photos/photo3.jpg', caption: '', alt: 'Abigail smiling, in a white top and pink fringed skirt', pos: '50% 0%' }
];

var VIDEOS = [
  /* Remove the /* and the closing * / around an example to use it:
  { type: 'file', src: 'videos/intro.mp4', title: 'My introduction' },
  { type: 'youtube', id: 'YOUR_YOUTUBE_VIDEO_ID', title: 'My presentation' }
  */
];

/* ===== Code below: no need to edit ===== */
(function () {
  function tile(p, cls) {
    var d = document.createElement('div');
    d.className = cls;
    var img = new Image();
    img.alt = p.alt || p.caption || '';
    if (p.pos) img.style.objectPosition = p.pos;
    img.loading = 'lazy';
    img.onerror = function () { d.classList.add('missing'); img.remove(); };
    img.src = p.src;
    d.appendChild(img);
    return d;
  }

  // Scrolling strip at the top of every page
  var strip = document.querySelector('[data-strip]');
  if (strip && PHOTOS.length) {
    var track = document.createElement('div');
    track.className = 'strip-track';
    var reps = Math.ceil(window.innerWidth / (PHOTOS.length * 250)) + 1;
    for (var r = 0; r < reps * 2; r++) {
      PHOTOS.forEach(function (p) { track.appendChild(tile(p, 'strip-item')); });
    }
    strip.appendChild(track);
  } else if (strip) { strip.hidden = true; }

  // Pictures page
  var g = document.getElementById('gallery');
  if (g) {
    var box = document.getElementById('lightbox');
    PHOTOS.forEach(function (p) {
      var b = document.createElement('button');
      b.className = 'grid-item';
      b.appendChild(tile(p, 'thumb'));
      var c = document.createElement('span');
      c.textContent = p.caption || '';
      b.appendChild(c);
      b.onclick = function () {
        if (b.querySelector('.missing')) return;
        box.querySelector('img').src = p.src;
        box.querySelector('img').alt = p.alt || p.caption || '';
        box.querySelector('p').textContent = p.caption || '';
        box.showModal();
      };
      g.appendChild(b);
    });
    box.querySelector('.close').onclick = function () { box.close(); };
    box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
  }

  // Videos page
  var v = document.getElementById('videos');
  if (v) {
    if (!VIDEOS.length) { v.innerHTML = '<p class="empty">No videos yet. Add them in media.js.</p>'; }
    VIDEOS.forEach(function (x) {
      var f = document.createElement('figure');
      var media;
      if (x.type === 'youtube') {
        media = document.createElement('iframe');
        media.src = 'https://www.youtube-nocookie.com/embed/' + x.id;
        media.title = x.title || 'Video';
        media.allowFullscreen = true;
        media.loading = 'lazy';
      } else {
        media = document.createElement('video');
        media.src = x.src; media.controls = true; media.preload = 'metadata';
        media.setAttribute('playsinline', '');
      }
      f.appendChild(media);
      var c = document.createElement('figcaption');
      c.textContent = x.title || '';
      f.appendChild(c);
      v.appendChild(f);
    });
  }
})();
