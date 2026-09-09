// Floating "Page Contents" panel (built from the page's h2 headings) and smooth anchor scrolling.
document.addEventListener('DOMContentLoaded', function () {
    var panel = document.getElementById('page-contents');
    var headers = Array.prototype.slice.call(document.querySelectorAll('.content h2[id]'));

    if (panel && headers.length > 0) {
        headers.forEach(function (header) {
            var link = document.createElement('a');
            link.href = '#' + header.id;
            link.textContent = header.textContent.trim();
            panel.appendChild(link);
        });

        var links = panel.querySelectorAll('a');

        function updateActiveLink() {
            var index = headers.length;
            while (--index && window.scrollY + 300 < headers[index].offsetTop) { /* find current section */ }
            links.forEach(function (link) { link.classList.remove('active'); });
            if (links[index]) {
                links[index].classList.add('active');
            }
        }

        window.addEventListener('scroll', updateActiveLink, { passive: true });
        updateActiveLink();
    }

    // Smooth scroll for same-page anchor links.
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
