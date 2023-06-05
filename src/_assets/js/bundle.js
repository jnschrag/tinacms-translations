function notificationBar() {
	let notificationBarEl = document.querySelector('.notification-bar')
	let hideBtn = document.querySelector('.btn-hide')
	hideBtn.addEventListener('click', function() {
		sessionStorage.setItem('gdpr_accept', 'true')
		notificationBarEl.classList.remove('is-visible')
	})

	if(sessionStorage.getItem('gdpr_accept') === 'true') {
      notificationBarEl.classList.remove('is-visible');
   	} else {
      notificationBarEl.classList.add('is-visible')
   	}
}

function htmlTableOfContents() {
	const toc = document.getElementById("table-of-contents");
	
	if (!toc) {
		return;
	}

	const headings = Array.from(document.body.querySelectorAll('.post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content h5, .post-content h6'));
	let currentLevel = 0
	let tocHTML = '<ul>'
    headings.forEach(function (heading, index) {
    	let headingLevel = heading.tagName.slice(-1)
    	if ( index == 0 ) {
    		currentLevel = headingLevel
    	}

    	let itemHTMLPrefix = ''
    	let itemHTMLSuffix = ''
    	if (headingLevel < currentLevel) {
    		itemHTMLPrefix = '</ul></li>'
    		itemHTMLSuffix = ''
    	} else if (headingLevel > currentLevel ) {
    		itemHTMLPrefix = '<ul>'
    		itemHTMLSuffix = ''
    	}
    	currentLevel = heading.tagName.slice(-1)

        let ref = "toc" + index;
        if ( heading.hasAttribute( "id" ) ) 
            ref = heading.getAttribute( "id" );
        else
            heading.setAttribute( "id", ref );

        tocHTML += itemHTMLPrefix + '<li data-level="' + headingLevel + '"><a href="#' + ref + '">' + heading.textContent + '</a>' + itemHTMLSuffix

    });
    tocHTML += '</li></ul>'
    toc.innerHTML = tocHTML
}

window.addEventListener('DOMContentLoaded', function() {
	notificationBar()
	htmlTableOfContents()
})