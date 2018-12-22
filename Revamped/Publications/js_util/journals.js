$(document).ready(function(){
$('.journals').on("click",function(){
  html_cont = `
  <ol reversed=""><li>T. M. Nimisha, A. N. Rajagopalan, and R. Aravind, “Generating High Quality Pan-Shots from Motion Blurred Videos,” Computer Vision and Image Understanding (CVIU), May 2018. </li>
<li>Subeesh Vasu, A. N. Rajagopalan, and Guna Seetharaman,“Camera Shutter-Independent Registration and Rectification,” IEEE Transactions on Image Processing., Vol. 27, No. 4, pp. 1901 - 1913, April 2018.</li>
<li>Abhijith Punnappurath, T. M. Nimisha, and A.N. Rajagopalan,“Multi-image blind super-resolution of 3D scenes,” IEEE Transactions on Image Processing., Vol. 26, No. 11, pp. 5337-5352, November 2017.</li>
<li>Vijay Rengarajan, A.N. Rajagopalan, R. Aravind, and Guna Seetharaman,“Image Registration and Change Detection under Rolling Shutter Motion Blur,” IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), November, 2016 doi: 10.1109/TPAMI.2016.2630687</li>
<li>Abhijith Punnappurath and A. N. Rajagopalan, "Recognizing blurred, nonfrontal, illumination, and expression variant partially occluded faces," Journal of the Optical Society of America A, 33, pp. 1887-1900, 2016</li>
<li>Karthik Seemakurthy and A.N. Rajagopalan, "Change Detection in Underwater Imagery",  Journal of the Optical Society of America A,33, pp. 301-313, 2016. </li>
<li> Abhijith Punnappurath, A. N. Rajagopalan, Sima Taheri, Rama Chellappa, and Guna Seetharaman, "Face Recognition across Non-Uniform Motion Blur, Illumination, and Pose", IEEE Transactions on Image Processing, Vol.24, No.7, pp.2067--2082, July 2015. </li>
<li>Karthik Seemakurthy and A.N. Rajagopalan, "Deskewing of underwater images",  IEEE Transactions on Image Processing, Vol. 24, Iss. 3, pp.1046--1059, March 2015. </li>
<li>M. Purnachandra Rao, A.N. Rajagopalan and Guna Seetharaman, "Harnessing Motion Blur to Unveil Splicing" IEEE Transactions on Information Forensics and Security, Vol. 9, Iss. 4, pp.583--595, April 2014.</li>
<li>C. Paramanand, and A.N. Rajagopalan, "Shape from Sharp and Motion-Blurred Image Pair", International Journal of Computer Vision, Vol. 107, Iss. 3, pp 272--292, May 2014.</li>
<li>Kulkarni, Mandar, and Ambasamudram N. Rajagopalan. "Depth inpainting by tensor voting."  Journal of the Optical Society of America A (JOSA A) 30.6 (2013): 1155-1165.</li>
<li>C. S. Vijay, C. Paramanand, A. N. Rajagopalan and R. Chellappa "Non-uniform deblurring in HDR image reconstruction," IEEE Transactions on Image Processing, Vol.22, No.10, pp.3739,3750, Oct. 2013</li>
<li>Sahana M. Prabhu and A.N. Rajagopalan, "Unified multi-frame super-resolution of matte, foreground and background,"  Journal of the Optical Society of America A (JOSA A)  30, 1524-1534 (2013)</li>
<li>Rajiv R. Sahay and A.N. Rajagopalan, "Shape extraction of low-textured objects in video microscopy", Journal of Microscopy, vol. 245, pages 252-264, March 2012. </li>
<li>A. V. Bhavsar and A. N. Rajagopalan. "Range map super-resolution inpainting and reconstruction from sparse data". Computer Vision and Image Understanding (CVIU) , Vol. 116, Issue 4, pp. 572 - 591, 2012.</li>
<li>A. V. Bhavsar and A. N. Rajagopalan. "Towards unrestrained depth inference with coherent occlusion filling", International Journal of Computer Vision (IJCV), Vol. 97, Issue 2, pp. 167 - 190, 2012.</li>
<li>Hariharan, R.; Rajagopalan, A.N.; , "Shape-From-Focus by Tensor Voting," Image Processing, IEEE Transactions on , vol.21, no.7, pp.3323-3328, July 2012</li>
<li>A.N. Rajagopalan, "Motion-blur: Some new insights", Annals of the Indian National Academy of Engineering, 2012. </li>
<li>C. Paramanand and A. N. Rajagopalan, "Depth from motion and optical blur with unscented Kalman filter," IEEE Transactions on Image Processing, vol. 21, no. 5, pp. 2798-2811, 2012.</li>
<li>Rajiv R. Sahay and A. N. Rajagopalan, "Dealing with parallax in shape-from-focus" IEEE Transactions on Image Processing , vol. 20, pp. 558-569, 2011. </li>
<li>Sahana M. Prabhu and A.N. Rajagopalan,"Natural Matting for Degraded Pictures," IEEE Trans. Image Proc., vol. 20, no. 12, pp. 3647--3653, Dec. 2011.</li>
<li>C. Paramanand and A.N. Rajagopalan, "Image matching with higher-order geometric features," Journal of the Optical Society of America A vol. 27, no. 4, pp. 739-748, 2010.</li>
<li>G. R. K. S. Subrahmanyam, A. N. Rajagopalan and R. Aravind, "A recursive framework for joint inpainting and de-noising of photographic films", Journal of the Optical Society of America A (JOSA A) vol. 27, no. 5, pp. 1091-1099, 2010.</li>
<li>A.V. Bhavsar and A.N.Rajagopalan, "Resolution enhancement in multi-image stereo," IEEE Transactions on Pattern Analysis and Machine Intelligence, Vol. 32, Issue 9, pp. 1721 - 1728, 2010.</li>
<li>Rajiv R. Sahay and A. N. Rajagopalan, "Joint image and depth completion in shape-from-focus: Taking a cue from parallax" Journal of the Optical Society of America A (JOSA A) , vol. 27, no. 5, pp. 1203-1213, 2010.</li>
<li>G.R.K.S. Subrahmanyam, A.N. Rajagopalan and R. Aravind, "A recursive filter for despeckling SAR images", IEEE Transactions on Image Processing, vol. 17, no. 10, pp. 1969-1974, 2008.</li>
<li>R.R. Sahay and A.N. Rajagopalan, "Harnessing defocus blur to recover high-resolution information in shape-from-focus technique", IET Computer Vision, vol. 2, no. 2, pp. 50-59, 2008.</li>
<li>G.R.K.S. Subrahmanyam, A. N. Rajagopalan and R. Aravind, "Importance sampling unscented Kalman filter for film-grain noise removal," IEEE Multimedia Magazine, vol. 15, no. 2, pp. 52-63, 2008.</li>
<li>Pradeep, K. and Rajagopalan, A.N., "Improving shape from focus using defocus cue". IEEE Transactions on Image Processing. 16,1920 - 1925.</li>
<li>Shanker, P.A. and Rajagopalan, A.N., "Off-line signature verification using DTW".  Pattern Recognition Letters. 28, 1407-1414.</li>
<li>Subrahmanyam, G.R.K.S., Rajagopalan, A.N., and Aravind, R., "Importance sampling Kalman filter for image estimation". IEEE Signal Processing Letters. 14, 453 - 456.</li>
<li>Suresh, K.V., Mahesh, G., and Rajagopalan, A.N., "Super-resolution of license plates in real traffic videos". IEEE Transactions on Intelligent Transportation Systems, 8, 321-331</li>
<li>Suresh, K.V. and Rajagopalan, A.N., "A robust and computationally efficient super-resolution algorithm". Journal of the Optical Society of America A (JOSA A), 24, 984-992.</li>
<li>Chakrabarti A., Rajagopalan, A.N., and Chellappa R., "Super-resolution of face images using kernel PCA-based prior." IEEE Transactions on Multimedia, 9, 888-892.</li>
<li>Rajagopalan, A.N., Rao, K.S. and Kumar, Y.A., "Face recognition using multiple facial features." Pattern Recognition Letters, 28, 335-341.</li>
<li>R.R. Sahay and A.N. Rajagopalan, "Extension of the shape from focus method for reconstruction of high resolution images",  Journal of the Optical Society of America A, Vol. 24, Issue 11, pp. 3649-3657, 2007.</li>
<li>Krishna, P.J. and Rajagopalan, A.N. (2006) "Image restoration using  the particle filter: Handling non-causality."  IEE-F Proceedings on Vision, Image and Signal Processing, 153, 650-656.</li>
<li>Ibrahim, S.S. and Rajagopalan, A.N. (2006) "Restoration of scanned photographic images. Signal Processing"  86, 1035-1048.</li>
<li>Ibrahim, S.S. and Rajagopalan, A.N. (2006) "Particle filter for identification of parametric space-variant blur." International Journal of Systemics, Cybernetics and Informatics.   013-019. </li>
<li>Rao, K.S. and Rajagopalan, A.N. (2005) "A probabilistic fusion methodology for face recognition." EURASIP Journal on Applied Signal Processing 2005, 2772-2787.</li>
<li>Rajagopalan, A.N., Chellappa, R. and Koterba, N. (2005) "Background learning for robust face recognition with PCA in the presence of clutter." IEEE Transactions on Image Processing,14, 832-843.</li>
<li>Ibrahim, S.S. and Rajagopalan, A.N. (2005) "Image recovery under nonlinear/non-Gaussian degradations." JOSA-A: Journal of the Optical Society of America - A, 22, 604-615.</li>
<li>Ibrahim, S.S. and Rajagopalan, A.N. (2005) "Image estimation in film-grain noise." IEEE Signal Processing Letters, 12, 238-241.</li>
<li>A.N. Rajagopalan, S. Chaudhuri, and M. Uma, "Depth estimation and image restoration using defocused stereo pairs," IEEE Transactions on Pattern Analysis and Machine Intelligence, 2004, 26, 1521-1525</li>
<li>Amit Kale, A.N. Rajagopalan, A. Sundaresan, N. Cuntoor, A. RoyChowdhury, V. Kruger, and Rama Chellappa, "Identification of Humans Using Gait", IEEE Transactions on Image Processing, 2004, 13, 1163-1173</li>
<li>A.N. Rajagopalan and V. Phani Kiran, "Motion-free superresolution and the role of relative blur", JOSA-A: Journal of the Optical Society of America - A, vol. 20, no. 11, pp. 2022-2032, Nov. 2003.</li>
<li>A.N. Rajagopalan, "Clustering using higher order statistics", Electronics Letters, vol. 18, pp. 122-124, 2002.</li>
<li>A.N. Rajagopalan and Rama Chellappa, "Higher order statistics-based detection of vehicles in still images", JOSA-A: Journal of the Optical Society of America - A, vol. 18, pp. 3037-3048, Dec. 2001.</li>
<li>A.N. Rajagopalan and Rama Chellappa, "Higher order statistics-based detection of people/vehicles in images", INSA-A Journal: Special Issue on Image Processing, Vision and Pattern Recognition (invited paper), 67, pp 157-166.</li>
<li>A.N. Rajagopalan, S. Chaudhuri and Rama Chellappa, "A quantitative analysis of error bounds in the recovery of depth from defocused images", JOSA-A: Journal of the Optical Society of America - A, vol. 17, no. 10, pp. 1722-1731, Oct. 2000.</li>
<li>A.N. Rajagopalan, K. Sunil Kumar, Jayashree Karlekar, R. Manivasakan, M. Milind Patil, U. B. Desai, P. G. Poonacha and S. Chaudhuri, "Locating human faces in a cluttered scene", CVGIP : Graphical Models and Image Processing vol. 62, no. 5, pp. 323-342, Sept. 2000.</li>
<li>A.N. Rajagopalan, Avinash Jain and U.B. Desai, "Data clustering using hierarchical deterministic annealing and higher order statistics", IEEE Transactions on Circuits and Systems-II, vol. 46, no. 8, pp. 1100-1104, August 1999.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "MRF model-based identification of shift-variant point spread function for a class of imaging systems", Signal Processing (North-Holland), vol. 76, no. 3, pp. 285-299, August 1999.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "An MRF model-based approach to simultaneous recovery of depth and restoration from defocused images", IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 21, no. 7, pp. 577-589, July 1999.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "Performance analysis of maximum likelihood estimator for recovery of depth from defocused images and optimal selection of camera parameters", International Journal of Computer Vision, vol. 30, no. 3, pp. 175-190, Dec. 1998.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "A recursive algorithm for maximum likelihood-based identification of blur from multiple observations", IEEE Transactions on Image Processing, vol. 7, no. 7, pp. 1075-1079, July 1998.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "Space-variant approaches for the recovery of depth from defocused images", Computer Vision and Image Understanding, vol. 68, no. 3, pp. 309-329, Dec. 97.</li>
<li>A.N. Rajagopalan and S. Chaudhuri, "A variational approach to depth from defocused images", IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 19, no. 10, pp. 1158-1165, Oct. 97. </li>
</ol>
  `;
$("#view").html(html_cont);
});
});
