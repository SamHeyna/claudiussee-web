/**
 * Lightbox for gallery images.
 * Click any image in #galerie to enlarge it.
 * Close by clicking the backdrop, the × button, or pressing Escape.
 */
(function () {
	// Build lightbox DOM
	var lightbox  = document.createElement('div');
	lightbox.id   = 'lightbox';

	var closeBtn       = document.createElement('span');
	closeBtn.id        = 'lightbox-close';
	closeBtn.innerHTML = '&times;';
	closeBtn.setAttribute('aria-label', 'Schließen');

	var img  = document.createElement('img');
	img.alt  = '';

	lightbox.appendChild(closeBtn);
	lightbox.appendChild(img);
	document.body.appendChild(lightbox);

	// Open lightbox
	function open(src, alt) {
		img.src = src;
		img.alt = alt || '';
		lightbox.classList.add('active');
		document.body.style.overflow = 'hidden';
	}

	// Close lightbox
	function close() {
		lightbox.classList.remove('active');
		document.body.style.overflow = '';
		// Clear src after transition so browser releases memory
		setTimeout(function () { img.src = ''; }, 200);
	}

	// Attach click handlers to all gallery images
	document.querySelectorAll('#galerie .image.fit img').forEach(function (el) {
		el.style.cursor = 'zoom-in';
		el.addEventListener('click', function () {
			open(el.src, el.alt);
		});
	});

	// Close on backdrop click (not on the image itself)
	lightbox.addEventListener('click', function (e) {
		if (e.target !== img) close();
	});

	// Close button
	closeBtn.addEventListener('click', close);

	// Close on Escape key
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') close();
	});
})();

