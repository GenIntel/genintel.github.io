---
layout: project_uop3d # projects project_uop3d
title: Common3D&#58; Self-Supervised Learning of 3D Morphable Models for Common Objects in Neural Feature Space
arxiv_pdf:
supplementary_material:
github_link: https://github.com/GenIntel/common3d.git
arxiv_link:
teaser_video:
teaser_video_description: ...
abstract: 3D morphable models (3DMMs) are a powerful tool to represent the possible shapes and appearances of an object category. Given a single test image, 3DMMs can be used to solve various tasks, such as predicting the 3D shape, pose, semantic correspondence, and instance segmentation of an object. Unfortunately, 3DMMs are only available for very few object categories that are of particular interest, like faces or human bodies, as they require a demanding 3D data acquisition and category-specific training process. In contrast, we introduce a new method, Common3D, that learns 3DMMs of common objects in a fully self-supervised manner from a collection of object-centric videos. For this purpose, our model represents objects as a learned 3D template mesh and a deformation field that is parameterized as an image-conditioned neural network. Different from prior works, Common3D represents the object appearance with neural features instead of RGB colors, which enables the learning of more generalizable representations through an abstraction from pixel intensities. Importantly, we train the appearance features using a contrastive objective by exploiting the correspondences defined through the deformable template mesh. This leads to higher quality correspondence features compared to related works and a significantly improved model performance at estimating 3D object pose and semantic correspondence. Common3D is the first completely self-supervised method that can solve various vision tasks in a zero-shot manner.
img_grid1: # assets/img/uop3d/bicycle_354_37645_70054.png
img_grid2: # assets/img/uop3d/bicycle_372_41153_81941.png
img_grid3: # assets/img/uop3d/bicycle_373_41715_83384.png
img_grid4: # assets/img/uop3d/teddybear_196_21096_41534.png
img_grid5: # assets/img/uop3d/teddybear_169_18386_34554.png
img_grid6: # assets/img/uop3d/teddybear_208_22018_45660.png
img_grid7: # assets/img/uop3d/car_185_19982_37678.png
img_grid8: # assets/img/uop3d/car_194_20939_43630.png
img_grid9: # assets/img/uop3d/car_194_20900_41097.png
img_grid10: # assets/img/uop3d/bicycle.png
img_grid11: # assets/img/uop3d/teddybear.png
img_grid12: # assets/img/uop3d/car.png
img_carousel1: # assets/img/uop3d/alignment_main.png
description_carousel1: Description carousel 1
img_carousel2: # assets/img/uop3d/alignment_suppl.png
description_carousel2: Description carousel 2
img_carousel3: # assets/img/uop3d/pose_in_the_wild_main.png
description_carousel3: Description carousel 3
img_carousel4: # assets/img/uop3d/pose_in_the_wild_suppl.png
description_carousel4: Description carousel 4
img_carousel5: # assets/img/uop3d/teaser.png
description_carousel5: Description carousel 5
img_carousel6: # assets/img/uop3d/align_ablation_pi6.svg
description_carousel6: Description carousel 6
img_carousel7: # assets/img/uop3d/align_ablation_pi18.svg
description_carousel7: Description carousel 7
img_carousel8: # assets/img/uop3d/nemo.png
description_carousel8: Description carousel 8
youtube_link: # https://www.youtube.com/embed/JkaxUblCGz0
poster: # assets/pdf/uop3d/UOP3D_Poster.pdf
bibtex: <br> &#64;InProceedings&#123; Sommer&#95;2024&#95;CVPR, <br>
    author    &#61; &#123;Sommer, Leonhard and Jesslen, Artur and Ilg, Eddy and Kortylewski, Adam&#125;, <br>
    title     &#61 &#123;Unsupervised Learning of Category-Level 3D Pose from Object-Centric Videos&#125;, <br>
    booktitle &#61 &#123;Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)&#125;, <br>
    month     &#61 &#123;June&#125;, <br>
    year      &#61 &#123;2024&#125;, <br>
    pages     &#61 &#123;22787-22796&#125; <br>
 &#125;
---

[Leonhard Sommer](https://github.com/limpbot)<sup>1</sup>, [Olaf Dünkel](https://odunkel.github.io)<sup>2</sup>, [Christian Theobalt](https://www.via-center.science)<sup>2</sup>, [Adam Kortylewski](https://genintel.mpi-inf.mpg.de)<sup>1</sup>

<title>Common3D</title>
<div class="is-size-5 publication-authors">
<span class="author-block">
<sup>1</sup>University of Freibug &nbsp;
<sup>2</sup>Max Planck Institut für Informatik
<br>
CVPR 2025</span>

<!-- <span class="eql-cntrb"><small><br><sup>*</sup>Indicates Equal Contribution</small></span> -->
</div>
