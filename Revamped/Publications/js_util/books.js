$(document).ready(function(){
$('.books').on("click",function(){
  html_cont = `
  <ol><li>A.N. Rajagopalan and Rama Chellappa (Eds.), <i>Motion deblurring: Algorithms and systems</i>, Cambridge University Press, Cambridge, 2014.</li>
<li>Krishna Sivalingam, Srikrishna Bhashyam and A.N. Rajagopalan (Eds.), <i>Proceedings of the Sixteenth National Conference on Communication</i>, IEEE Xplore, 2010.</li>
<li>A.N. Rajagopalan, P.J. Narayanan and Phil Torr (Eds.), <i>Proceedings of the Seventh Indian Conference on Computer Vision, Graphics and Image Processing</i>, ACM Digital Library, 2010.</li>
<li>Sharat Chandran, P.J. Narayanan, and A.N. Rajagopalan, Guest Editors, <i>The Visual Computer</i>, Dec. 2011 (Special issue on best papers from ICVGIP 2010).</li>
<li>S. Chaudhuri and A.N. Rajagopalan, <i>Depth from defocus: A real aperture imaging approach</i>, Springer, New York, 1999.</li>
</ol><p>Book Chapters:</p>
<ol><li>C.S. Vijay, C. Paramanand, A.N. Rajagopalan, "HDR imaging in the presence of motion blur," <i>Motion deblurring: Algorithms and Systems</i>. Eds. A.N. Rajagopalan and Rama Chellappa, Cambridge University Press, UK. 2014.</li>
<li> A. Kale, N. Cuntoor, B. Yegnanarayana, A.N. Rajagopalan and Rama Chellappa, "Gait-based human identification using appearance matching," <i>Optical and Digital Techniques for Information Security</i>. Ed. Bahram Javidi. Springer-Verlag, New York. 2004.
</li></ol>
  `;
$("#view").html(html_cont);
});
});
