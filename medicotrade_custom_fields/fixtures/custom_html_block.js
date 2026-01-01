// Frontend logging: console.log('[custom_html_block.js] method: function_name')

// JavaScript for Custom HTML Block
// Use root_element as parent selector (provided by Custom HTML Block)

(function() {
	console.log('[custom_html_block.js] method: init');

	// Wait for DOM to be ready
	setTimeout(function() {
		// Get all button links for event handling
		let buttonLinks = root_element.querySelectorAll('.btn-link');
		let buttonContainers = root_element.querySelectorAll('a[href]');

		// Add click event handlers for navigation tracking
		buttonContainers.forEach(function(link) {
			link.addEventListener('click', function(e) {
				let href = this.getAttribute('href');
				console.log('[custom_html_block.js] method: navigation_click', href);
			});
		});

		// Add enhanced hover effects for buttons
		buttonLinks.forEach(function(button) {
			button.addEventListener('mouseenter', function() {
				console.log('[custom_html_block.js] method: button_hover');
			});

			button.addEventListener('mouseleave', function() {
				console.log('[custom_html_block.js] method: button_leave');
			});
		});
	}, 100);
})();
