(function() {
	window.Caniemail = window.Caniemail || {};

	Caniemail.feature = {
		init: function() {
			Caniemail.feature.summary.init();
		},
		summary: {
			init: function() {
				var summaryElements = document.querySelectorAll('.data-summary-family');
				for(var i = 0; i < summaryElements.length; i++) {
					summaryElements[i].addEventListener('click', function(e) {
						Caniemail.feature.summary.unselect();
						this.classList.add('selected');
					});
				}
			},
			unselect: function() {
				var selected = document.querySelector('.data-summary-family.selected');
				if(selected) {
					selected.classList.remove('selected');
				}
			}
		}
	};

	Caniemail.search = {
		init: function() {
			Caniemail.search.initSimpleJekyllSearchPlugin();
			Caniemail.search.bindFeatureLoadOnKeyUp();
		},
		initSimpleJekyllSearchPlugin: function() {
			var sjs = SimpleJekyllSearch({
				searchInput: document.getElementById('caniemail-search'),
				resultsContainer: document.getElementById('caniemail-search-results'),
				json: '/assets/js/search.json',
				noResultsText: '<p class="caniemail-search-empty">No results found.</p>',
				searchResultTemplate: `<section class="feature feature--placeholder" data-url="{url}">
					<header class="feature-header">
						<h1 class="feature-title"><a href="{url}">{title}<span class="feature-permalink" aria-hidden="true">#</span></a></h1>
					</header>
					<div class="data"></div>
					<div class="data-details"></div>
					<footer class="feature-footer"></footer>
				</section>`,
				success: Caniemail.search.onJsonLoad
			});
			//sjs.search('attribute');
		},
		bindFeatureLoadOnKeyUp: function() {
			var input = document.getElementById('caniemail-search');
			input.addEventListener('keyup', function(e) {
				Caniemail.search.onKeyUp(e);
			});
		},
		onJsonLoad: function(json) {
			console.log('onJsonLoad', json);
		},
		onKeyUp: function(e) {
		}
	};

	document.addEventListener('DOMContentLoaded', function() {
		Caniemail.feature.init();
		Caniemail.search.init();
	});
})();