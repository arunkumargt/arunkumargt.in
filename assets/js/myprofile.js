/*!
=========================================================
* Mr.AK
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// Download Resume
function downloadCV() {
    var url = './assets/resume/MyResume.pdf';
    var link = document.createElement('a');
    link.target = '_blank';
    link.href = url;
    link.download = 'file.pdf';
    link.dispatchEvent(new MouseEvent('click'));
}

