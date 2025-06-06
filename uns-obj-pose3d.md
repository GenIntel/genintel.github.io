---
layout: project_uop3d # projects project_uop3d
title: Unsupervised Learning of Category-Level 3D Pose from Object-Centric Videos
arxiv_pdf: https://openaccess.thecvf.com/content/CVPR2024/papers/Sommer_Unsupervised_Learning_of_Category-Level_3D_Pose_from_Object-Centric_Videos_CVPR_2024_paper.pdf
supplementary_material: https://openaccess.thecvf.com/content/CVPR2024/supplemental/Sommer_Unsupervised_Learning_of_CVPR_2024_supplemental.pdf
github_link: https://github.com/GenIntel/uns-obj-pose3d.git
arxiv_link: https://openaccess.thecvf.com/content/CVPR2024/html/Sommer_Unsupervised_Learning_of_Category-Level_3D_Pose_from_Object-Centric_Videos_CVPR_2024_paper.html
teaser_video: assets/videos/uop3d/UOP3D_720p.mp4
teaser_video_description: ...
abstract: Category-level 3D pose estimation is a fundamentally important problem in computer vision and robotics e.g. for embodied agents or to train 3D generative models. However so far methods that estimate the category-level object pose require either large amounts of human annotations CAD models or input from RGB-D sensors. In contrast we tackle the problem of learning to estimate the category-level 3D pose only from casually taken object-centric videos without human supervision. We propose a two-step pipeline&#58; First we introduce a multi-view alignment procedure that determines canonical camera poses across videos with a novel and robust cyclic distance formulation for geometric and appearance matching using reconstructed coarse meshes and DINOv2 features. In a second step the canonical poses and reconstructed meshes enable us to train a model for 3D pose estimation from a single image. In particular our model learns to estimate dense correspondences between images and a prototypical 3D template by predicting for each pixel in a 2D image a feature vector of the corresponding vertex in the template mesh. We demonstrate that our method outperforms all baselines at the unsupervised alignment of object-centric videos by a large margin and provides faithful and robust predictions in-the-wild on the Pascal3D+ and ObjectNet3D datasets. # Category-level 3D pose estimation is a fundamentally important problem in computer vision and robotics, e.g. for embodied agents or to train 3D generative models. However, so far methods that estimate the category-level object pose require either large amounts of human annotations, CAD models or input from RGB-D sensors. In contrast, we tackle the problem of learning to estimate the category-level 3D pose only from casually taken object-centric videos without human supervision. We propose a two-step pipeline: First, we introduce a multi-view alignment procedure that determines canonical camera poses across videos with a novel and robust cyclic distance formulation for geometric and appearance matching using reconstructed coarse meshes and DINOv2 features. In a second step, the canonical poses and reconstructed meshes enable us to train a model for 3D pose estimation from a single image. In particular, our model learns to estimate dense correspondences between images and a prototypical 3D template by predicting, for each pixel in a 2D image, a feature vector of the corresponding vertex in the template mesh. We demonstrate that our method outperforms all baselines at the unsupervised alignment of object-centric videos by a large margin and provides faithful and robust predictions in-the-wild on the Pascal3D+ and ObjectNet3D datasets.
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

[Leonhard Sommer](https://github.com/limpbot)<sup>1</sup>, [Artur Jesslen](https://arturjssln.github.io)<sup>1</sup>, [Eddy Ilg](https://www.utn.de/departments/department-computer-science-artificial-intelligence/cvmp-lab)<sup>2</sup>, [Adam Kortylewski](https://genintel.mpi-inf.mpg.de)<sup>1,3</sup>

<div class="is-size-5 publication-authors">
<span class="author-block">
<sup>1</sup>University of Freibug &nbsp;
<sup>2</sup>Saarland University &nbsp;
<sup>3</sup>Max Planck Institut für Informatik
<br>
CVPR 2024</span>

<!-- <span class="eql-cntrb"><small><br><sup>*</sup>Indicates Equal Contribution</small></span> -->
</div>
