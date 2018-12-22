$(document).ready(function(){
$('.yearSort_all').on("click",function(){
  html_cont = `
  <!-- --------------------------------------------- 2018 --------------------------------------------- --><p><a name="2018" id="2018"></a></p>
<table><tr><td bgcolor="#E0E0E0">2018</td>
</tr></table><p><br /><strong>Journals</strong><br /></p>
<ol><li>T. M. Nimisha, A. N. Rajagopalan, and R. Aravind, “Generating High Quality Pan-Shots from Motion Blurred Videos,” Computer Vision and Image Understanding (CVIU), May 2018. </li>
<li>Subeesh Vasu, A. N. Rajagopalan, and Guna Seetharaman,“Camera Shutter-Independent Registration and Rectification,” IEEE Transactions on Image Processing., Vol. 27, No. 4, pp. 1901 - 1913, April 2018.</li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li> Subeesh Vasu, Venkatesh Maligireddy, and A.N. Rajagopalan, "Non-blind Deblurring: Handling Kernel Uncertainty with CNNs," IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Salt Lake City, USA, June 2018.</li>
<li> Subeesh Vasu, Mahesh Mohan M R, and A.N. Rajagopalan, "Occlusion-Aware Rolling Shutter Rectification of 3D Scenes," IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Salt Lake City, USA, June 2018.</li>
<li> Mahesh Mohan M R and A.N. Rajagopalan, "Divide and Conquer for Full-Resolution Light Field Deblurring," IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Salt Lake City, USA, June 2018.</li>
<li> T. M. Nimisha, Sunil Kumar, and A N Rajagopalan, "Unsupervised Class-Specific Deblurring," European Conference on Computer Vision (ECCV), Munich, Germany, September 2018.</li>
<li> Subeesh Vasu, Nimisha T. M., and A. N. Rajagopalan, "Analyzing Perception-Distortion Tradeoff using Enhanced Perceptual Super-resolution Network," European Conference on Computer Vision Workshops (ECCVW), Munich, Germany, September 2018.</li>
<li> Kuldeep Purohit, Anshul Shah, and A. N. Rajagopalan, "Learning based Single Image Blur Detection and Segmentation," IEEE International Conference on Image Processing (ICIP), Athens, Greece, October 2018.</li>
<li> Subeesh Vasu, Abhijeet Shenoi, and A. N. Rajagopalan, "Joint HDR and Super-resolution Imaging in Motion Blur," IEEE International Conference on Image Processing (ICIP), Athens, Greece, October 2018.</li>
<li> T. M. Nimisha, Vijay Rengarajan, and A. N. Rajagopalan, "Semi-supervised Learning of Camera Motion from a Blurred Image," IEEE International Conference on Image Processing (ICIP), Athens, Greece, October 2018.</li>
<li> Srimanta Mandal, Kuldeep Purohit, and A. N. Rajagopalan, "Color Image Super Resolution in Real Noise," Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP), December 2018.</li>
</ol><!-- --------------------------------------------- 2017 --------------------------------------------- --><p><a name="2017" id="2017"></a></p>
<table><tr><td bgcolor="#E0E0E0">2017</td>
</tr></table><p><br /><strong>Journals</strong><br /></p>
<ol><li>Abhijith Punnappurath, T. M. Nimisha, and A.N. Rajagopalan,“Multi-image blind super-resolution of 3D scenes,” IEEE Transactions on Image Processing., Vol. 26, No. 11, pp. 5337-5352, November 2017.</li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li> Subeesh Vasu and A.N. Rajagopalan, "From local to global: Edge profiles to camera motion in blurred images," IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Hawaii, Honolulu, USA, July 2017.</li>
<li> Vijay Rengarajan, Yogesh Balaji, and A.N. Rajagopalan, "Unrolling the Shutter: CNN to Correct Motion Distortions," IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Hawaii, Honolulu, USA, July 2017.</li>
<li> Mahesh Mohan M R, A.N. Rajagopalan, and Guna Seetharaman, "Going Unconstrained with Rolling Shutter Deblurring," IEEE International Conference on Computer Vision (ICCV), Venice, Italy, October 2017.</li>
<li> T.M Nimisha, Akash Kumar Singh, and A.N.Rajagopalan, "Blur-Invariant Deep Learning for Blind Deblurring," IEEE International Conference on Computer Vision (ICCV), Venice, Italy, October 2017.</li>
<li> S. Mandal, and A. N. Rajagopalan, "Single Noisy Image Super Resolution by Minimizing Nuclear Norm in Virtual Sparse Domain," National Conference on Computer Vision, Pattern Recognition, Image Processing and Graphics (NCVPRIPG), Mandi, India, Dec. 2017.</li>
</ol><!-- --------------------------------------------- 2016 --------------------------------------------- --><p><a name="2016" id="2016"></a></p>
<table><tr><td bgcolor="#E0E0E0">2016</td>
</tr></table><p><br /><strong>Journals</strong><br /></p>
<ol><li>Vijay Rengarajan, A.N. Rajagopalan, R. Aravind, and Guna Seetharaman,“Image Registration and Change Detection under Rolling Shutter Motion Blur,” IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), November, 2016 doi: 10.1109/TPAMI.2016.2630687</li>
<li>Abhijith Punnappurath and A. N. Rajagopalan, "Recognizing blurred, nonfrontal, illumination, and expression variant partially occluded faces," Journal of the Optical Society of America A, 33, pp. 1887-1900, 2016</li>
<li>Karthik Seemakurthy and A.N. Rajagopalan, "Change Detection in Underwater Imagery",  Journal of the Optical Society of America A,33, pp. 301-313, 2016. </li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>Vijay Rengarajan, A.N. Rajagopalan, and R. Aravind, "From Bows to Arrows: Rolling Shutter Rectification of Urban Scenes",  IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Las Vegas, USA, June 2016, pp. 2773-2781. </li>
<li>Karthik, S., Subeesh Vasu, and A.N. Rajagopalan. “Deskewing by space-variant deblurring,” in British Machine Vision Conference (BMVC), York, UK, September 2016.</li>
<li>T.M Nimisha, M. Arun, and A.N. Rajagopalan, “Dictionary Replacement for Single Image Restoration of 3D Scenes,”  in British Machine Vision Conference (BMVC), York, UK. September 2016. </li>
<li>M. Arun, A.N. Rajagopalan, "Hand-held Low-light Photography with Exposure Bracketing," in International Conference on Image Processing (ICIP), Pheonix, USA. September 2016.</li>
<li>Vijay Rengarajan, Abhijith Punnappurath, Rajagopalan A. N., and Gunasekaran Seetharaman, "Rolling Shutter Super-resolution in Burst Mode," in International Conference on Image Processing (ICIP), Pheonix, USA, September 2016.</li>
<li>Kuldeep Purohit, and A.N. Rajagopalan, "Splicing Localization in Motion Blurred 3D Scenes," in International Conference on Image Processing (ICIP), Pheonix, USA, September 2016.</li>
<li>Abhijith Punnappurath, Yogesh Balaji, Mahesh Mohan, and Rajagopalan A. N., "Deep Decoupling of Defocus and Motion Blur for Dynamic Segmentation", in the European Conference on Computer Vision (ECCV), Amsterdam, the Netherlands, October 2016.</li>
<li>Kuldeep Purohit, Subeesh Vasu, A. N. Rajagopalan, V Bala Naga Jyothi, and Ramesh Raju, "Mosaicing Deep Underwater Imagery" In Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP) 2016. </li>
<li>T M Nimisha, Karthik Seemakurthy, A N Rajagopalan, Narayanaswamy Vedachalam and Ramesh Raju, "Color Restoration in Turbid Medium", In Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP) 2016.</li>
</ol><!-- --------------------------------------------- 2015 --------------------------------------------- --><p><a name="2015" id="2015"></a></p>
<table><tr><td bgcolor="#E0E0E0">2015</td>
</tr></table><p></p>
<!--
<strong><p>Books</strong><br></p>
<ol>
<li></li>
</ol>
<p>--><br /><strong>Journals</strong><br /><ol><li>Karthik Seemakurthy and A.N. Rajagopalan, "Deskewing of underwater images",  IEEE Transactions on Image Processing, Vol. 24, Iss. 3, pp.1046--1059, March 2015. </li>
<li> Abhijith Punnappurath, A. N. Rajagopalan, Sima Taheri, Rama Chellappa, and Guna Seetharaman, "Face Recognition across Non-Uniform Motion Blur, Illumination, and Pose", IEEE Transactions on Image Processing, Vol.24, No.7, pp.2067--2082, July 2015. </li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>Vijay Rengarajan, Sheetal B. Gupta, A.N. Rajagopalan, and Guna Seetharaman. "Illumination robust change detection with CMOS imaging sensors." In SPIE Defense + Security, pp. 947303-947303, International Society for Optics and Photonics, 2015.</li>
<li>Arun Asokan Nair, M. Purnachandra Rao, A.N. Rajagopalan, and Guna Seetharaman. "Cueing motion blur for registration of inclined planar scenes." In SPIE Defense + Security, pp. 947304-947304, International Society for Optics and Photonics, 2015</li>
<li>Nimisha T.M., A.N. Rajagopalan, and R. Aravind. "Seamless Change Detection and Mosaicing for Aerial Imagery." In CVPR workshop on The Computer Vision in Vehicle Technology (CVVT) 2015</li>
<li>Pratyush Sahay and A.N. Rajagopalan. "Geometric inpainting of 3D structures." In CVPR Workshop on Multi-Sensor Fusion for Dynamic Scene Understanding (MSF) 2015.</li>
<li>Subeesh Vasu, A.N. Rajagopalan and Gunasekaran Seetharaman. "Tapping Motion Blur for Robust Normal Estimation of Planar Scenes." In International Conference on Image Processing (ICIP) 2015.</li>
<li>Abhijith Punnappurath, Vijay Rengarajan, and A.N. Rajagopalan. "Rolling Shutter Super-resolution." In International Conference on Computer Vision (ICCV), Santiago, Chile 2015.</li>
<li>Arun M, A.N. Rajagopalan and Gunasekaran Seetharaman. "Multi-Shot Deblurring for 3D Scenes."  In ICCV workshop on Inverse Rendering (IR), Santiago, Chile 2015.</li>
<li>Sheetal B. Gupta, A.N. Rajagopalan, and Gunasekaran Seetharaman. "HDR Recovery under Rolling Shutter Distortions," International Workshop on Color and Photometry in Computer Vision (in conjunction with ICCV), Santiago, Chile 2015.</li>
</ol><!-- --------------------------------------------- 2014 --------------------------------------------- --><p><a name="2014" id="2014"></a></p>
<table><tr><td bgcolor="#E0E0E0">2014</td>
</tr></table><p><br /><strong>Books</strong><br /></p>
<ol><li>A.N. Rajagopalan and Rama Chellappa, "Motion Deblurring: Algorithms and Systems", Cambridge University Press, 2014. ISBN-13: 9781107044364, ISBN-10: 1107044367. <br /><a href="http://www.cambridge.org/us/academic/subjects/engineering/image-processing-and-machine-vision/motion-deblurring-algorithms-and-systems?format=HB">Cambridge University Press</a>, <a href="http://www.flipkart.com/motion-deblurring-algorithms-systems/p/itmdw9ywsbje79r2?pid=9781107044364&amp;otracker=from-search&amp;srno=t_1&amp;query=Motion+Deblurring+Algorithms+and+Systems&amp;ref=c4cff8e4-225c-428c-aca9-93b9e33fed58">Flipkart</a>, <a href="http://www.amazon.in/Motion-Deblurring-Algorithms-A-Rajagopalan/dp/1107044367/ref=sr_1_1?ie=UTF8&amp;qid=1400747418&amp;sr=8-1&amp;keywords=Motion+Deblurring+Algorithms+and+Systems">Amazon</a>, <a href="http://books.google.co.in/books?id=_tFkAwAAQBAJ&amp;printsec=frontcover&amp;dq=isbn:1107044367&amp;hl=en&amp;sa=X&amp;ei=MLl9U5vGEMKeugS8pYKoDA&amp;ved=0CC4Q6AEwAA#v=onepage&amp;q&amp;f=false">Google Books</a>.</li>
</ol><p><strong>Journals</strong><br /></p>
<ol><li>M. Purnachandra Rao, A.N. Rajagopalan and Guna Seetharaman, "Harnessing Motion Blur to Unveil Splicing" IEEE Transactions on Information Forensics and Security, Vol. 9, Iss. 4, pp.583--595, April 2014.</li>
<li>C. Paramanand, and A.N. Rajagopalan, "Shape from Sharp and Motion-Blurred Image Pair", International Journal of Computer Vision, Vol. 107, Iss. 3, pp 272--292, May 2014.</li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>Punnappurath, Abhijith, Rajagopalan Ambasamudram, and Guna Seetharaman. "Blind restoration of aerial imagery degraded by spatially varying motion blur." In SPIE Defense + Security, pp. 90890H-90890H. International Society for Optics and Photonics, 2014.</li>
<li>Vijay Rengarajan, Abhijith Punnappurath, A. N. Rajagopalan, and Guna Seetharaman. "Efficient Change Detection for Very Large Motion Blurred Images." In Computer Vision and Pattern Recognition Workshops (CVPRW), 2014 IEEE Conference on, pp. 315-322. IEEE, 2014.. </li>
<li>Karthik, S., and A. N. Rajagopalan. "Underwater Microscopic Shape from Focus." In Pattern Recognition (ICPR), 2014 22nd International Conference on, pp. 2107-2112. IEEE, 2014.</li>
<li>Rao, M. Purnachandra, A. N. Rajagopalan, and Guna Seetharaman. "Inferring Plane Orientation from a Single Motion Blurred Image." In Pattern Recognition (ICPR), 2014 22nd International Conference on, pp. 2089-2094. IEEE, 2014.</li>
<li>Vijay Rengarajan, A. N. Rajagopalan, and R. Aravind. "Motion Estimation and Classification in Compressive Sensing from Dynamic Measurements." In Pattern Recognition (ICPR), 2014 22nd International Conference on, pp. 3475-3480. IEEE, 2014..</li>
<li>Vijay Rengarajan, Rajagopalan A. N., and Aravind Rangarajan. "Change Detection in the Presence of Motion Blur and Rolling Shutter Effect." In Computer Vision–ECCV 2014, pp. 123-137. Springer International Publishing, 2014.</li>
<li>Karthik, S., and A. N. Rajagopalan. "Layered Depth Inference from Flow in Underwater Imagery." In Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP) 2014.</li>
<li>M. Purnachandra Rao, Sahana M. Prabhu, A. N. Rajagopalan, and Guna Seetharaman. "Camouflaging Motion Blur: Art or Science?." In Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP) 2014.</li>
</ol><!-- --------------------------------------------- 2013 --------------------------------------------- --><p><a name="2013" id="2013"></a></p>
<table><tr><td bgcolor="#E0E0E0">2013</td>
</tr></table><p><br /><strong>Journals</strong><br /></p>
<ol><li>Kulkarni, Mandar, and Ambasamudram N. Rajagopalan. "Depth inpainting by tensor voting."  Journal of the Optical Society of America A (JOSA A) 30.6 (2013): 1155-1165.</li>
<li>C. S. Vijay, C. Paramanand, A. N. Rajagopalan and R. Chellappa "Non-uniform deblurring in HDR image reconstruction," IEEE Transactions on Image Processing, Vol.22, No.10, pp.3739,3750, Oct. 2013</li>
<li>Sahana M. Prabhu and A.N. Rajagopalan, "Unified multi-frame super-resolution of matte, foreground and background,"  Journal of the Optical Society of America A (JOSA A)  30, 1524-1534 (2013)</li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>Pratyush Sahay and A. N. Rajagopalan, "Lost but Found? Harnessing the internet for photometric completion," in CVPR Workshop on Big Data Computer Vision, 2013.</li>
<li>C. Paramanand and A. N. Rajagopalan, "Non-uniform motion deblurring for bi-layer scenes," IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2013.</li>
<li>C. Paramanand and A. N. Rajagopalan, "Motion blur for motion segmentation," IEEE International Conference on Image Processing (ICIP), 2013. </li>
<li>M. Purnachandrarao and A.N. Rajagopalan, "Harnessing motion blur to uncover splicing", in Proc. IEEE Intl. Conf. on Image Processing (ICIP) Melbourne, Sep. 2013.</li>
<li>P. Abhijith, A.N. Rajagopalan and G. Seetharaman, "Registration and occlusion detection in motion blur", in Proc.  IEEE Intl. Conf. on Image Processing (ICIP) Melbourne, Sep. 2013.</li>
<li>T. Veeramani, A. N. Rajagopalan, G. Seetharaman, "Restoration of foggy and motion-blurred road scenes", 2013 IEEE International Conference on Image Processing.</li>
</ol><!-- --------------------------------------------- 2012 --------------------------------------------- --><p><a name="2012" id="2012"></a></p>
<table><tr><td bgcolor="#E0E0E0">2012</td>
</tr></table><p><br /><strong>Journals</strong><br /></p>
<ol><li>Rajiv R. Sahay and A.N. Rajagopalan, "Shape extraction of low-textured objects in video microscopy", Journal of Microscopy, vol. 245, pages 252-264, March 2012. </li>
<li>A. V. Bhavsar and A. N. Rajagopalan. "Range map super-resolution inpainting and reconstruction from sparse data". Computer Vision and Image Understanding (CVIU) , Vol. 116, Issue 4, pp. 572 - 591, 2012.</li>
<li>A. V. Bhavsar and A. N. Rajagopalan. "Towards unrestrained depth inference with coherent occlusion filling", International Journal of Computer Vision (IJCV), Vol. 97, Issue 2, pp. 167 - 190, 2012.</li>
<li>Hariharan, R.; Rajagopalan, A.N.; , "Shape-From-Focus by Tensor Voting," Image Processing, IEEE Transactions on , vol.21, no.7, pp.3323-3328, July 2012</li>
<li>A.N. Rajagopalan, "Motion-blur: Some new insights", Annals of the Indian National Academy of Engineering, 2012. </li>
<li>C. Paramanand and A. N. Rajagopalan, "Depth from motion and optical blur with unscented Kalman filter," IEEE Transactions on Image Processing, vol. 21, no. 5, pp. 2798-2811, 2012.</li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>Pratyush Sahay and A. N. Rajagopalan, "Harnessing self-similarity for reconstruction of large missing regions in 3D models," in Proc. Intl. Conf. on Pattern Recognition, pages 101-104, 2012.</li>
<li>Sahana M. Prabhu and A.N. Rajagopalan, "Joint multi-frame super-resolution and matting ," Proc. IEEE Intl. Conf. on Pattern Recognition (ICPR) Japan, Nov. 2012.</li>
<li>M. Kulkarni, A.N. Rajagopalan,  and G. Rigoll,   "Depth Inpainting with Tensor Voting using Local Geometry", International Conference on Computer Vision Theory and Applications (VISAPP), 2012, pp.22-30. </li>
<li>C. S. Vijay, C. Paramanand and A. N. Rajagopalan, "HDR imaging under non-uniform blurring," International Workshop on Color and Photometry in Computer Vision (in conjunction with ECCV), Florence, Italy, 2012.</li>
</ol><!-- --------------------------------------------- 2011 --------------------------------------------- --><p><a name="2011" id="2011"></a></p>
<table><tr><td bgcolor="#E0E0E0">2011</td>
</tr></table><p><br /><strong>Journals</strong><br /></p>
<ol><li>Rajiv R. Sahay and A. N. Rajagopalan, "Dealing with parallax in shape-from-focus" IEEE Transactions on Image Processing , vol. 20, pp. 558-569, 2011. </li>
<li>Sahana M. Prabhu and A.N. Rajagopalan,"Natural Matting for Degraded Pictures," IEEE Trans. Image Proc., vol. 20, no. 12, pp. 3647--3653, Dec. 2011.</li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>A. V. Bhavsar and A. N. Rajagopalan. "Dis-occlusion via motion-parallax and color-segmentation". International Conference on Signals, Systems and Automation (ICSSA 2011), 2011.</li>
<li>Mandar Kulkarni and A.N. Rajagopalan "Computer vision for Heritage Resurrection" Proceedings of Geo-summit 2011, Chennai, India.</li>
<li>Kulkarni, Mandar, and A. N. Rajagopalan. "Tensor Voting Based Foreground Object Extraction." In Computer Vision, Pattern Recognition, Image Processing and Graphics (NCVPRIPG), 2011 Third National Conference on, pp. 86-89. IEEE, 2011.</li>
</ol><!-- --------------------------------------------- 2010 --------------------------------------------- --><p><a name="2010" id="2010"></a></p>
<table><tbody><tr><td bgcolor="#E0E0E0">2010</td>
</tr></tbody></table><p><br /><strong>Journals</strong><br /></p>
<ol><li>C. Paramanand and A.N. Rajagopalan, "Image matching with higher-order geometric features," Journal of the Optical Society of America A vol. 27, no. 4, pp. 739-748, 2010.</li>
<li>G. R. K. S. Subrahmanyam, A. N. Rajagopalan and R. Aravind, "A recursive framework for joint inpainting and de-noising of photographic films", Journal of the Optical Society of America A (JOSA A) vol. 27, no. 5, pp. 1091-1099, 2010.</li>
<li>A.V. Bhavsar and A.N.Rajagopalan, "Resolution enhancement in multi-image stereo," IEEE Transactions on Pattern Analysis and Machine Intelligence, Vol. 32, Issue 9, pp. 1721 - 1728, 2010.</li>
<li>Rajiv R. Sahay and A. N. Rajagopalan, "Joint image and depth completion in shape-from-focus: Taking a cue from parallax" Journal of the Optical Society of America A (JOSA A) , vol. 27, no. 5, pp. 1203-1213, 2010.</li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>C.Paramanand and A.N.Rajagopalan, "Unscented transformation for depth from motion-blur in videos," IEEE Workshop on Three Dimensional Information Extraction for Video Analysis and Mining in conjunction with CVPR, San Francisco, USA, 2010.</li>
<li>A.V. Bhavsar and A.N.Rajagopalan, "Inpainting large missing regions in range images," Intl. Conf. on Pattern Recognition (ICPR), Istanbul, Turkey, August 2010.</li>
<li>Sahana M. Prabhu and A.N. Rajagopalan, "Recursive video matting and denoising," Intl. Conf. on Pattern Recognition (ICPR), Istanbul, Turkey, August 2010.</li>
<li>A.V. Bhavsar and A.N.Rajagopalan, "Depth estimation and inpainting with an unconstrained camera," British Machine Vision Conference (BMVC), Aberystwyth, United Kingdom, 2010.</li>
<li>C.Paramanand and A.N.Rajagopalan, "Inferring image transformation and structure from motion-blurred Images," British Machine Vision Conference (BMVC), Aberystwyth, United Kingdom, 2010.</li>
<li>A.V. Bhavsar and A.N.Rajagopalan, "Inpainting in multi-image stereo" accepted in 32nd Annual Symposium of the German Association for Pattern Recognition (DAGM), Darmstadt, Germany, September 2010.</li>
<li>Sahana M. Prabhu and A.N. Rajagopalan, "Matte super-resolution for compositing," accepted in 32nd Annual Symposium of the German Association for Pattern Recognition (DAGM), Darmstadt, Germany, September 2010. </li>
<li>Mandar Kulkarni "Histogram-based foreground object extraction for indoor and outdoor scenes" Proceedings of the Seventh Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP), pages 148–154, 2010.</li>
</ol><!-- --------------------------------------------- 2009 --------------------------------------------- --><p><a name="2009" id="2009"></a></p>
<table><tbody><tr><td bgcolor="#E0E0E0">2009</td>
</tr></tbody></table><p></p>
<!-- <strong><p>Journals</strong><br></p>
<ol>
</ol>
<p> --><br /><strong>Conferences</strong><br /><ol><li>R.R. Sahay and A.N. Rajagopalan, "Real aperture axial stereo: Solving for correspondences in blur," 31st DAGM Symposium, Jena, Germany, pp. 362-371, 2009.</li>
<li>K. Ramnath and A. N. Rajagopalan, "Discontinuity adaptive shape from focus," Proc. 31st DAGM Symposium on Pattern Recognition DAGM2009, pp. 181–190, Sep. 2009.</li>
<li>R.R. Sahay and A.N. Rajagopalan, "Inpainting in shape-from-focus: Taking a cue from motion parallax," British Machine Vision Conference (BMVC), London, 2009.</li>
<li>A.V. Bhavsar and A.N.Rajagopalan, "Depth estimation with a practical camera," British Machine Vision Conference (BMVC), London, 2009.</li>
</ol><!-- --------------------------------------------- 2008 --------------------------------------------- --><p><a name="2008" id="2008"></a></p>
<table><tbody><tr><td bgcolor="#E0E0E0">2008</td>
</tr></tbody></table><p><br /><strong>Journals</strong><br /></p>
<ol><li>G.R.K.S. Subrahmanyam, A.N. Rajagopalan and R. Aravind, "A recursive filter for despeckling SAR images", IEEE Transactions on Image Processing, vol. 17, no. 10, pp. 1969-1974, 2008.</li>
<li>R.R. Sahay and A.N. Rajagopalan, "Harnessing defocus blur to recover high-resolution information in shape-from-focus technique", IET Computer Vision, vol. 2, no. 2, pp. 50-59, 2008.</li>
<li>G.R.K.S. Subrahmanyam, A. N. Rajagopalan and R. Aravind, "Importance sampling unscented Kalman filter for film-grain noise removal," IEEE Multimedia Magazine, vol. 15, no. 2, pp. 52-63, 2008.</li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>C. Paramanand and A.N. Rajagopalan, "Efficient geometric matching with higher-order features", Proceedings of the IEEE Intl. Conf. on Pattern Recognition (ICPR 2008)}, Tampa, Florida, Dec. 2008.</li>
<li>G.R.K.S. Subrahmanyam, A. N. Rajagopalan, R. Aravind and G. Rigoll,"Edge-preserving unscented Kalman filter for speckle reduction", Proceedings of the IEEE Intl. Conf. on Pattern Recognition (ICPR 2008)}, Tampa, Florida, Dec. 2008.</li>
<li>A. Bhavsar and A.N. Rajagopalan, "Resolution enhancement for binocular stereo", Proceedings of the IEEE Intl. Conf. on Pattern Recognition (ICPR 2008)}, Tampa, Florida, Dec. 2008.</li>
<li>A.N. Rajagopalan, A. Bhavsar, Frank Wallhoff and Gerhard Rigoll,"Resolution enhancement of PMD range maps", Annual Symposium of the German Association for Pattern Recognition (DAGM 2008)}, Munich, Germany, pp. 304-313, June 2008.</li>
<li>R.R. Sahay and A.N. Rajagopalan, "A model-based approach to shape from focus", Intnl. Conf. on Computer Vision Theory and Applications (VISAPP 2008)}, Funchal, Portugal, pp. 243-250 (I), Jan. 2008.</li>
<li>A. V. Bhavsar and A. N. Rajagopalan, "Joint estimation in stereo super-resolution,"National Conference on Computer Vision, Pattern Recognition,Image Processing and Graphics (NCVPRIPG 2008), pp. 178-183, 2008.</li>
<li>A. V. Bhavsar and A. N. Rajagopalan. "Range Map with missing data - Joint resolution enhancement and inpainting,"Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP 2008), 2008.</li>
</ol><!-- --------------------------------------------- 2007 --------------------------------------------- --><p><a name="2007" id="2007"></a></p>
<table><tbody><tr><td bgcolor="#E0E0E0">2007</td>
</tr></tbody></table><p><br /><strong>Journals</strong><br /></p>
<ol><li>Pradeep, K. and Rajagopalan, A.N., "Improving shape from focus using defocus cue". IEEE Transactions on Image Processing. 16,1920 - 1925.</li>
<li>Shanker, P.A. and Rajagopalan, A.N., "Off-line signature verification using DTW".  Pattern Recognition Letters. 28, 1407-1414.</li>
<li>Subrahmanyam, G.R.K.S., Rajagopalan, A.N., and Aravind, R., "Importance sampling Kalman filter for image estimation". IEEE Signal Processing Letters. 14, 453 - 456.</li>
<li>Suresh, K.V., Mahesh, G., and Rajagopalan, A.N., "Super-resolution of license plates in real traffic videos". IEEE Transactions on Intelligent Transportation Systems, 8, 321-331</li>
<li>Suresh, K.V. and Rajagopalan, A.N., "A robust and computationally efficient super-resolution algorithm". Journal of the Optical Society of America A (JOSA A), 24, 984-992.</li>
<li>Chakrabarti A., Rajagopalan, A.N., and Chellappa R., "Super-resolution of face images using kernel PCA-based prior." IEEE Transactions on Multimedia, 9, 888-892.</li>
<li>Rajagopalan, A.N., Rao, K.S. and Kumar, Y.A., "Face recognition using multiple facial features." Pattern Recognition Letters, 28, 335-341.</li>
<li>R.R. Sahay and A.N. Rajagopalan, "Extension of the shape from focus method for reconstruction of high resolution images",  Journal of the Optical Society of America A, Vol. 24, Issue 11, pp. 3649-3657, 2007.</li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>R.S. Rajiv and A.N. Rajagopalan,  "Shape from focus: Optimal reconstruction of high-resolution images of 3D objects", IET International Conference on Visual Information Engineering (VIE 2007), London, UK, July 2007 </li>
<li>R.S. Rajiv and A.N. Rajagopalan, "High resolution image reconstruction in shape from focus", International Conference on Image Processing (ICIP 2007), San Antonio, Texas, USA </li>
<li>G. R. K. S. Subrahmanyam, A. N. Rajagopalan and R. Aravind, "Unscented Kalman filter for image estimation in film-grain noise", International Conference in Image Processing (ICIP 2007), San Antonio, USA, September 2007 </li>
<li>K. V. Suresh and A. N. Rajagopalan, "Super-resolution for real-aperture cameras," IET International Conference on Visual Information Engineering (VIE 2007), London, UK, July 2007 </li>
<li>K. V. Suresh and A. N. Rajagopalan, "Super-resolution using both motion and defocus cues," IEEE International conference on Image Processing (ICIP 2007), San Antonio, USA, September 2007 </li>
<li>K. V. Suresh and A. N. Rajagopalan, "A computationally efficient MAP-MRF framework for super-resolution," Proc. National Conference on VLSI design, Signal Processing and Communications (NC-VSPCom 2007), Tumkur, India, pp. 80-86, February 2007.</li>
<li>C. Paramanand and A.N. Rajagopalan, "Representation and transformation of geometric patterns", International Conference on Systemics, Cybernetics and Informatics, ICSCI-2007, Hyderabad </li>
</ol><!-- --------------------------------------------- 2006 --------------------------------------------- --><p><a name="2006" id="2006"></a></p>
<table><tbody><tr><td bgcolor="#E0E0E0">2006</td>
</tr></tbody></table><p><br /><strong>Journals</strong><br /></p>
<ol><li>Krishna, P.J. and Rajagopalan, A.N. (2006) "Image restoration using  the particle filter: Handling non-causality."  IEE-F Proceedings on Vision, Image and Signal Processing, 153, 650-656.</li>
<li>Ibrahim, S.S. and Rajagopalan, A.N. (2006) "Restoration of scanned photographic images. Signal Processing"  86, 1035-1048.</li>
<li>Ibrahim, S.S. and Rajagopalan, A.N. (2006) "Particle filter for identification of parametric space-variant blur." International Journal of Systemics, Cybernetics and Informatics.   013-019. </li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>K. V. Suresh and A. N. Rajagopalan, "Robust super-resolution imaging," IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP 2006), Toulouse, France, May 2006.</li>
<li>Subrahmanyam, G.R.K.S., Rajagopalan, A.N. (2006) "A new extension of Kalman filter to non-Gaussian priors." Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP2006), Madurai, India, December 2006, pp. 162-171.</li>
<li>Suresh, K.V., Rajagopalan, A.N. (2006) "Robust space-variant Super-resolution." IET International Conference on Visual Information Engineering (VIE2006), Bangalore, India, September 2006, 600-605.</li>
<li>K. V. Suresh and A. N. Rajagopalan, "A discontinuity adaptive method for super-resolution of license plates," Proc. Indian Conference on Vision, Graphics and Image Processing (ICVGIP 2006), Madurai, India, LNCS 4338, pp. 25-34, December 2006.</li>
<li>Paramanand, C., Rajagopalan, A.N. (2006) "An efficient representation of digital curves with line Segments and elliptical Arcs." IET International Conference on Visual Information Engineering (VIE2006), Bangalore, India, September 2006, 470-475.</li>
<li>Pradeep, K.S., Rajagopalan, A.N. (2006) "Improving shape from focus using defocus information." IEEE International Conference on Pattern Recognition (ICPR 2006), Hongkong, August 2006, 731-734.</li>
<li>Suresh K.V., Rajagopalan, A.N. (2006) "Super-resolution in the presence of space-variant blur." IEEE International Conference on Pattern Recognition (ICPR 2006), Hongkong, August 2006, 770-773.</li>
<li>Pradeep, K.S., Rajagopalan, A.N. (2006) "A novel method to estimate 3-D shape of microscopic objects." International Conference on Image Processing, Computer Vision, and Pattern Recognition (IPCV 2006), Las Vegas, Nevada, USA, June 2006.</li>
<li>Suresh, K.V., Rajagopalan, A.N. (2006) "Robust Super-Resolution: A Bayesian Approach." Workshop on Computer Vision, Graphics, and Image Processing (WCVGIP2006), Hyderabad, India, pp. 77-82, January 2006.</li>
<li>Ayan Chakrabarti, Rajagopalan, A.N. (2006) "A kernel PCA-based method for Super-resolution of face images." Workshop on Computer Vision, Graphics, and Image Processing (WCVGIP2006), Hyderabad, India, January 2006.</li>
<li>Pradeep, K.S., Rajagopalan, A.N. (2006) "Shape estimation of microscopic objects." Proceedings International Conference on Systemics, Cybernetics and Informatics (ICSCI 2006), Hyderabad, India, January 2006, 886-890.</li>
</ol><!-- --------------------------------------------- 2005 --------------------------------------------- --><p><a name="2005" id="2005"></a></p>
<table><tbody><tr><td bgcolor="#E0E0E0">2005</td>
</tr></tbody></table><p><br /><strong>Journals</strong><br /></p>
<ol><li>Rao, K.S. and Rajagopalan, A.N. (2005) "A probabilistic fusion methodology for face recognition." EURASIP Journal on Applied Signal Processing 2005, 2772-2787.</li>
<li>Rajagopalan, A.N., Chellappa, R. and Koterba, N. (2005) "Background learning for robust face recognition with PCA in the presence of clutter." IEEE Transactions on Image Processing,14, 832-843.</li>
<li>Ibrahim, S.S. and Rajagopalan, A.N. (2005) "Image recovery under nonlinear/non-Gaussian degradations." JOSA-A: Journal of the Optical Society of America - A, 22, 604-615.</li>
<li>Ibrahim, S.S. and Rajagopalan, A.N. (2005) "Image estimation in film-grain noise." IEEE Signal Processing Letters, 12, 238-241.</li>
</ol><!-- <strong><p>Conferences</strong><br></p>
<ol>
</ol>
<p> --><!-- --------------------------------------------- 2004 --------------------------------------------- --><p><a name="2004" id="2004"></a></p>
<table><tbody><tr><td bgcolor="#E0E0E0">2004</td>
</tr></tbody></table><p><br /><strong>Book Chapter</strong><br /></p>
<ol><li>A. Kale, N. Cuntoor, B. Yegnanarayana, A.N. Rajagopalan, and Rama Chellappa, "Gait-based human identification using appearance matching", in Optical and Digital Techniques for Information Security, Ed. Bahram Javidi, Springer-Verlag, 2004.</li>
</ol><p><strong>Journals</strong><br /></p>
<ol><li>A.N. Rajagopalan, S. Chaudhuri, and M. Uma, "Depth estimation and image restoration using defocused stereo pairs," IEEE Transactions on Pattern Analysis and Machine Intelligence, 2004, 26, 1521-1525</li>
<li>Amit Kale, A.N. Rajagopalan, A. Sundaresan, N. Cuntoor, A. RoyChowdhury, V. Kruger, and Rama Chellappa, "Identification of Humans Using Gait", IEEE Transactions on Image Processing, 2004, 13, 1163-1173</li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>S. Ibrahim Sadhar and A.N. Rajagopalan, "Recovery of Nonlinearly Degraded Images.", IEEE International Conference on Image Processing (ICIP - 2004) Singapore, October 2004.</li>
<li>K. Srinivasa Rao and A.N. Rajagopalan, "A probabilistic fusion technique for face recognition", European Signal Processing Conference (EUSIPCO2004), Austria, 2004.</li>
<li>S. Ibrahim Sadhar and A.N. Rajagopalan, "Restoration of images degraded by sensor non-linearity", European Signal Processing Conference (EUSIPCO 04), Austria, 2004.</li>
<li>S. Ibrahim Sadhar and A.N. Rajagopalan, "Partcile filter for space-variant blur identification", International Conf. on Systems, Control and Informatics (ICSCI 04), Hyderabad, 2004. </li>
<li>K. Srinivasa Rao and A.N. Rajagopalan, "Probabilistic fusion of facial features", Workshop on Computer Vision, Graphics, and Image Processing (WCVGIP' 04), Gwalior, pp. 45-48, Feb. 2004.</li>
<li>S. Ibrahim Sadhar, P.Y. Praveen Kumar, and A.N. Rajagopalan, "Particle filters for image restoration", National Conference on Communications (NCC 04), Bangalore, 2004.</li>
<li>P.Y. Praveen Kumar, S. Ibrahim Sadhar, and A.N. Rajagopalan, "A general recursive framework for image restoration using particle filters", Asian Conference on Computer Vision (ACCV 2004), Korea, 2004.</li>
<li>Srinivasa Rao, K., Ghadi, L.S., Anoop Kumar, Y. and Rajagopalan, A.N. (2004) "Robust face recognition by fusion." Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP2004), Kolkata, India, December 2004, 669-674.</li>
</ol><!-- --------------------------------------------- 2003 --------------------------------------------- --><p><a name="2003" id="2003"></a></p>
<table><tbody><tr><td bgcolor="#E0E0E0">2003</td>
</tr></tbody></table><p><br /><strong>Journals</strong><br /></p>
<ol><li>A.N. Rajagopalan and V. Phani Kiran, "Motion-free superresolution and the role of relative blur", JOSA-A: Journal of the Optical Society of America - A, vol. 20, no. 11, pp. 2022-2032, Nov. 2003.</li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>Amit Kale, Naresh Cuntoor, B. Yegnanarayana, A.N Rajagopalan, and Rama Chellappa, "Gait Analysis for Human Identification", IEEE Intl. Conference on Audio and Video-based biometric person authentication (AVBPA 2003), Surrey, UK, 2003.</li>
<li>A.N. Rajagopalan, Rama Chellappa and Nathan Kotherba, "Robust face recognition in the presence of clutter", IEEE Intl. Conference on Audio and Video-based biometric person authentication (AVBPA 2003), Surrey, UK, 2003.</li>
<li>D.V. Karthik and A.N. Rajagopalan, "Face detection in cluttered background using support vector machines", Proceedings of the National Conference on Communications (NCC2003), (IIT, Madras), 2003.</li>
<li>V. Phani Kiran and A.N. Rajagopalan, "Role of relative blur in motion-free superresolution", IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP2003), (Hongkong), 2003</li>
</ol><!-- --------------------------------------------- 2002 --------------------------------------------- --><p><a name="2002" id="2002"></a></p>
<table><tbody><tr><td bgcolor="#E0E0E0">2002</td>
</tr></tbody></table><p><br /><strong>Journals</strong><br /></p>
<ol><li>A.N. Rajagopalan, "Clustering using higher order statistics", Electronics Letters, vol. 18, pp. 122-124, 2002.</li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>S. Kannumuri and A.N. Rajagopalan, "Human face detection in cluttered color images using skin color and edge information", Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP2002), (Ahmedabad, India), Dec. 2002.</li>
<li>P.K. Vajapayezula and A.N. Rajagopalan, "Motion-free superresolution", Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP2002), (Ahmedabad, India), Dec. 2002.</li>
<li>A. Kale, A.N. Rajagopalan, N. Cuntoor and V. Kruger, "Human identification usng gait", Proceedings of the IEEE International Conference on Face and Gesture Recognition, (Washington, D.C), May 2002.</li>
<li>R.K. Singh and A.N. Rajagopalan, "Robust face recognition using background learning", Proceedings of the IEEE International Conference on Pattern Recognition, (Quebec, Canada), Aug. 2002. </li>
</ol><!-- --------------------------------------------- 2001 --------------------------------------------- --><p><a name="2001" id="2001"></a></p>
<table><tbody><tr><td bgcolor="#E0E0E0">2001</td>
</tr></tbody></table><p><br /><strong>Journals</strong><br /></p>
<ol><li>A.N. Rajagopalan and Rama Chellappa, "Higher order statistics-based detection of vehicles in still images", JOSA-A: Journal of the Optical Society of America - A, vol. 18, pp. 3037-3048, Dec. 2001.</li>
<li>A.N. Rajagopalan and Rama Chellappa, "Higher order statistics-based detection of people/vehicles in images", INSA-A Journal: Special Issue on Image Processing, Vision and Pattern Recognition (invited paper), 67, pp 157-166.</li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>A. Kale, A.N. Rajagopalan and Rama Chellappa, "Recognition of humans using gait", Proceedings of the Federal Labs Symposium, (College Park, MD), March 2001. </li>
</ol><!-- --------------------------------------------- 1995-2000 --------------------------------------------- --><p><a name="1995-2000" id="1995-2000"></a></p>
<table><tbody><tr><td bgcolor="#E0E0E0">1995-2000</td>
</tr></tbody></table><p><br /><strong>Book</strong><br /></p>
<ol><li>S. Chaudhuri and A.N. Rajagopalan, "Depth from defocus: A real aperture imaging approach", Springer-Verlag, New York, March 1999.</li>
</ol><p><strong>Journals</strong><br /></p>
<ol><li>A.N. Rajagopalan, S. Chaudhuri and Rama Chellappa, "A quantitative analysis of error bounds in the recovery of depth from defocused images", JOSA-A: Journal of the Optical Society of America - A, vol. 17, no. 10, pp. 1722-1731, Oct. 2000.</li>
<li>A.N. Rajagopalan, K. Sunil Kumar, Jayashree Karlekar, R. Manivasakan, M. Milind Patil, U. B. Desai, P. G. Poonacha and S. Chaudhuri, "Locating human faces in a cluttered scene", CVGIP : Graphical Models and Image Processing vol. 62, no. 5, pp. 323-342, Sept. 2000.</li>
<li>A.N. Rajagopalan, Avinash Jain and U.B. Desai, "Data clustering using hierarchical deterministic annealing and higher order statistics", IEEE Transactions on Circuits and Systems-II, vol. 46, no. 8, pp. 1100-1104, August 1999.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "MRF model-based identification of shift-variant point spread function for a class of imaging systems", Signal Processing (North-Holland), vol. 76, no. 3, pp. 285-299, August 1999.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "An MRF model-based approach to simultaneous recovery of depth and restoration from defocused images", IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 21, no. 7, pp. 577-589, July 1999.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "Performance analysis of maximum likelihood estimator for recovery of depth from defocused images and optimal selection of camera parameters", International Journal of Computer Vision, vol. 30, no. 3, pp. 175-190, Dec. 1998.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "A recursive algorithm for maximum likelihood-based identification of blur from multiple observations", IEEE Transactions on Image Processing, vol. 7, no. 7, pp. 1075-1079, July 1998.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "Space-variant approaches for the recovery of depth from defocused images", Computer Vision and Image Understanding, vol. 68, no. 3, pp. 309-329, Dec. 97.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "A variational approach to depth from defocused images", IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 19, no. 10, pp. 1158-1165, Oct. 97. </li>
</ol><p><strong>Conferences</strong><br /></p>
<ol><li>A.N. Rajagopalan, S. Chaudhuri and Rama Chellappa, "Error bounds in depth from defocus", Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP2000), (Bangalore, India), Dec. 2000.</li>
<li>A.N. Rajagopalan and Rama Chellappa, "Higher-order spectral analysis of human motion", Proceedings of the IEEE International Conference on Image Processing (ICIP2000), (Vancouver, Canada), Sept. 2000.</li>
<li>A.N. Rajagopalan and Rama Chellappa, "Vehicle detection and tracking in video", Proceedings of the IEEE International Conference on Image Processing (ICIP2000), (Vancouver, Canada), Sept. 2000.</li>
<li>Rama Chellappa and A.N. Rajagopalan, "Tracking humans in video", International Conference on Multimedia Processing and Systems (ICMPS2000), (Chennai, India), August 2000.</li>
<li>A.N. Rajagopalan and Rama Chellappa, "Human motion analysis using higher-order spectra", Proceedings of the Advanced Sensors Federated Laboratory Symposium (ASFL 00), (College Park, Maryland), March 2000, pp. 77-81.</li>
<li>A.N. Rajagopalan, Philippe Burlina and Rama Chellappa, "Higher order statistical learning for vehicle detection in images", Proceedings of the IEEE International Conference on Computer Vision (ICCV1999), (Kerkyra, Greece), Sept. 1999, pp. 1204-1209.</li>
<li>A.N. Rajagopalan, Philippe Burlina and Rama Chellappa, "Detection of people in images", Proceedings of the IEEE International Joint Conference on Neural Networks (IJCNN1999), (Washington, DC), July 1999.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "Simultaneous depth recovery and image restoration from defocused images", Proceedings of the IEEE International Conference on Computer Vision and Pattern Recognition (CVPR1999), (Fort Collins, Colorado), June 1999, pp. 348-353.</li>
<li>Avinash Jain, A.N. Rajagopalan and U.B. Desai, "Data clustering using hierarchical deterministic annealing and higher order statistics", National Conference on Communications (NCC1998), (IISc, Bangalore), Feb. 1998, pp. 79-84.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "Optimal recovery of depth from defocused images using an MRF model", Proceedings of the IEEE International Conference on Computer Vision (ICCV1998), (Bombay, India), Jan. 1998, pp. 1047-1052.</li>
<li>A.N. Rajagopalan, K. Sunil Kumar, Jayashree Karlekar, R. Manivasakan, M. Milind Patil, U. B. Desai, P. G. Poonacha and S. Chaudhuri, "Finding faces in photographs", Proceedings of the IEEE International Conference on Computer Vision (ICCV1998), (Bombay, India), Jan. 1998, pp. 640-645.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "Identification of shift-variant point spread function for a class of imaging systems", IEEE TENCON 1997, (Brisbane, Australia), Dec. 1997, pp. 275-278.</li>
<li>A.N. Rajagopalan, M. Yeasin and S. Chaudhuri, "Data clustering using higher order statistics", IEEE TENCON 1997, (Brisbane, Australia), Dec. 1997, pp. 803-806.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "Optimum camera parameter settings for recovery of depth from defocused images", Proceedings of the IEEE International Conference on Computer Vision and Pattern Recognition (CVPR1997), (Puerto Rico), June 1997, pp. 219-224.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "Maximum likelihood estimation of blur from multiple observations", Proceedings of the IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP1997), (Munich, Germany), April 1997, pp. 2577-2580.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "Recovery of depth from defocused images using AR spectral estimator", Proceedings of the National Conference on Communications (NCC1996), (IIT, Bombay), Feb. 1996, pp. 221-224.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "Recovery of depth from defocused images using space-frequency representation", Proceedings of the Indian Conference on Pattern recognition, Image processing and Computer vision (ICPIC1995), (IIT, Kharagpur), Dec. 1995, pp. 95-100.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "A variational approach to depth from defocus", Proceedings of the International Symposium on Intelligent Robotic Systems (ISIRS1995), (Bangalore, India), Nov. 1995, pp. 45-48.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "A block-shift variant blur model for recovery of depth from defocused images", Proceedings of the IEEE International Conference on Image Processing (ICIP1995), (Washington, D.C.), Oct. 1995, pp. 636-639.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "Recovery of depth from defocused images", Proceedings of the National Conference on Communications (NCC1995), (IIT, Kanpur), March 1995, pp. 155-159.</li>
<li>Rajagopalan, A.N. and Murukutla, N.L.M. (1992): Mode S SSR. Proc. Workshop on Satellite Aided Communication, Navigation and Surveillance, Hyderabad, India, February 1992.</li>
</ol>
  `;
$("#view").html(html_cont);
});
});
