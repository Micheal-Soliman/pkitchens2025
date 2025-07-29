<template>
  <section class="item-gallery-wrapper">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumb">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/categories">Categories</router-link></li>
          <li><router-link :to="`/category/${categorySlug}`">{{ categoryName }}</router-link></li>
          <li aria-current="page">{{ itemName }}</li>
        </ol>
      </nav>

      <h1 class="gallery-title" data-aos="fade-down">{{ itemName }} Gallery</h1>
      <div class="gallery-grid">
        <div v-for="(media, idx) in mediaList" :key="idx" class="gallery-media-wrapper" 
             :data-aos="'zoom-in'" :data-aos-delay="100 * idx">
          <img v-if="media.type === 'image'" :src="media.url" class="gallery-media" @click="openLightbox(idx)" />
          <video v-else-if="media.type === 'video'" class="gallery-media" @click="openLightbox(idx)" muted>
            <source :src="media.url" :type="'video/' + media.format">
          </video>
          <div v-if="media.type === 'video'" class="video-play-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Lightbox المخصص -->
      <div v-if="lightboxVisible" class="custom-lightbox" 
           @click.self="closeLightbox"
           @touchstart="handleTouchStart"
           @touchmove="handleTouchMove"
           @touchend="handleTouchEnd">
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
        <button class="lightbox-nav lightbox-prev" @click.stop="prevMedia">&#10094;</button>
        
        <div class="lightbox-content">
          <img v-if="currentMedia.type === 'image'" :src="currentMedia.url" class="lightbox-media" />
          <video v-else-if="currentMedia.type === 'video'" ref="lightboxVideo" class="lightbox-media" controls autoplay>
            <source :src="currentMedia.url" :type="'video/' + currentMedia.format">
          </video>
        </div>
        
        <button class="lightbox-nav lightbox-next" @click.stop="nextMedia">&#10095;</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';

const route = useRoute();
const itemId = route.params.id;

// تحديد الفئة بناءً على الـ itemId
const categoryInfo = computed(() => {
  if (itemId.includes('Kitchen') || itemId.includes('ARKOPA') || itemId.includes('Glossy') || 
      itemId.includes('LG MATT') || itemId.includes('Matt plus') || 
      itemId.includes('SoftTouch') || itemId.includes('UV-LAK')) {
    return { name: 'Kitchen', slug: 'kitchens' };
  } else if (itemId.includes('Dressing')) {
    return { name: 'Dressing Room', slug: 'dressing-room' };
  } else if (itemId.includes('furniture')) {
    return { name: 'Furniture', slug: 'furniture' };
  } else if (itemId.includes('Tv-Unit')) {
    return { name: 'TV Units', slug: 'tv-unit' };
  }
  return { name: 'Other', slug: 'other' };
});

const categoryName = computed(() => categoryInfo.value.name);
const categorySlug = computed(() => categoryInfo.value.slug);

const lightboxVisible = ref(false);
const currentIndex = ref(0);
const lightboxVideo = ref(null);

// بيانات المعرض
const allGalleryMedia = {
  // Kitchens subcategories
  'ARKOPA_Olive green': [
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700387/kitchens/DSC05847.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700399/kitchens/DSC05848.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700408/kitchens/DSC05849.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700419/kitchens/DSC05850.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700431/kitchens/DSC05853.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700443/kitchens/DSC05854.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700458/kitchens/DSC05855.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700473/kitchens/DSC05862.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700484/kitchens/DSC05863.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700494/kitchens/DSC05864.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700505/kitchens/DSC05867.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700515/kitchens/DSC05869.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700527/kitchens/DSC05871.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700536/kitchens/DSC05872.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700550/kitchens/DSC05875.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700566/kitchens/DSC05876.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700577/kitchens/DSC05877.jpg" },
    { type: 'video', url: "https://res.cloudinary.com/dmt7nqvc0/video/upload/v1753787483/P_Kitchen_Green_2_vbpxlr.mp4", format: 'mp4' },
    { type: 'video', url: "https://res.cloudinary.com/dmt7nqvc0/video/upload/v1753787505/P_Kitchen_Green_1_wmlxk7.mp4", format: 'mp4' }
  ],
  'Glossy Kitchen': [
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700585/kitchens/1.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700593/kitchens/TFQ06967.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700601/kitchens/TFQ06969.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700609/kitchens/TFQ06970.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700616/kitchens/TFQ06971.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700626/kitchens/TFQ06972.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700634/kitchens/TFQ06974.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700642/kitchens/TFQ06976.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700649/kitchens/TFQ06977.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700657/kitchens/TFQ06979.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700665/kitchens/TFQ06980.jpg" },
    { type: 'video', url: "https://res.cloudinary.com/dmt7nqvc0/video/upload/v1753788231/2025-05-02-153422555_jzdisu.mp4", format: 'mp4' }
  ],
  'LG MATT FROM _COUNTER GOODWOOD': [
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700678/kitchens/DSC05594.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700687/kitchens/DSC05599.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700698/kitchens/DSC05600.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700709/kitchens/DSC05602.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700718/kitchens/DSC05604.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700729/kitchens/DSC05605.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700738/kitchens/DSC05607.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700746/kitchens/DSC05614.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700756/kitchens/DSC05615.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700757/kitchens/IMG_20250101_144414_188.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700757/kitchens/IMG_20250101_144414_240.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700758/kitchens/IMG_20250101_144414_292.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700759/kitchens/IMG_20250101_144414_350.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700760/kitchens/IMG_20250101_144414_393.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700761/kitchens/IMG_20250101_144414_431.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700762/kitchens/Screenshot_b_be_a_a_adb_ba_Gallery.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700763/kitchens/Screenshot_b_be_a_a_adbbch_Gallery.jpg" },
    { type: 'video', url: "https://res.cloudinary.com/dmt7nqvc0/video/upload/v1753788538/P_2_vst48k.mp4", format: 'mp4' }
  ],
  'Matt plus _': [
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700781/kitchens/IMG_6671.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700795/kitchens/IMG_6672.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700811/kitchens/IMG_6673-1.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700827/kitchens/IMG_6673.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700842/kitchens/IMG_6674.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700854/kitchens/IMG_6678.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700866/kitchens/IMG_6681.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700878/kitchens/IMG_6683.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700892/kitchens/IMG_6684.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700910/kitchens/IMG_6699.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700927/kitchens/IMG_6701.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700941/kitchens/IMG_6715.jpg" },
    { type: 'video', url: "https://res.cloudinary.com/dmt7nqvc0/video/upload/v1753788724/1_syl8k5.mp4", format: 'mp4' }
  ],
  'SoftTouch Material_Gray': [
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700969/kitchens/Copy_of_A29I5740-Edit.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753701045/kitchens/Copy_of_A29I5741.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753701312/kitchens/Copy_of_A29I5778-Edit.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753788913/Copy_of_A29I5831_paczgv.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753788952/Copy_of_A29I5798_betg1i.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753788957/Copy_of_A29I5794_fqkdis.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753788968/Copy_of_A29I5833_or7rqn.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789019/Copy_of_A29I5855-Edit_uiasfh.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789034/Copy_of_A29I5823-Edit_bzmbzp.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789039/Copy_of_A29I5858_pplruv.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789046/Copy_of_A29I5825_sulbnn.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789054/Copy_of_A29I5799-Edit_ri9mnr.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789069/Copy_of_A29I5838_ycgpkr.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789086/Copy_of_A29I5835_mgzeye.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789095/Copy_of_A29I5864-Edit_u6xdta.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789069/Copy_of_A29I5838_ycgpkr.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789086/Copy_of_A29I5835_mgzeye.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789095/Copy_of_A29I5864-Edit_u6xdta.jpg" },
    { type: 'video', url: "https://res.cloudinary.com/dmt7nqvc0/video/upload/v1753800378/0020_z011lh.mp4", format: 'mp4' }
  ],
  'UV-LAK _Material_showroom': [
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789478/Copy_of_DSC06030_o8r8l6.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789484/Copy_of_DSC06030_1_a2ekem.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789486/Copy_of_DSC06031_fn57wf.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789494/Copy_of_DSC06032_xbrlpk.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789519/Copy_of_DSC06033_e7kpln.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789534/Copy_of_DSC06034_g8ajar.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789534/Copy_of_DSC06037_ug0twc.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789544/Copy_of_DSC06036_xmlobs.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789581/Copy_of_DSC06038_gs3t2u.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789586/Copy_of_DSC06044_vec2w1.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789591/Copy_of_DSC06045_lcdisy.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789599/Copy_of_DSC06040_htoiim.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789630/Copy_of_DSC06051_df7tzn.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789642/Copy_of_DSC06056_imvnc6.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789647/Copy_of_DSC06050_mqzvdd.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789652/Copy_of_DSC06052_h6ibmu.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789689/DSC06034_bqqzqw.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789701/DSC06073_xdj0rt.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789701/Copy_of_DSC06053_aa15ev.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789710/DSC06070_nnnxom.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789718/DSC06083_v5gwak.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789719/DSC06054_t6jayk.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789722/DSC06088_vukyjf.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753789725/DSC06090_uj2ztm.jpg" },
    { type: 'video', url: "https://res.cloudinary.com/dmt7nqvc0/video/upload/v1753793260/P_Kitchen_SR_2_m1rvid.mp4", format: 'mp4' }

  ],
  'UV-LAK Material _': [
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753791783/Copy_of_Copy_of_CANO9657_z4jabs.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753791781/Copy_of_Copy_of_CANO9662_h3hmpl.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753791775/Copy_of_Copy_of_CANO9658_hqynhu.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753791763/Copy_of_Copy_of_CANO9660_avjoyj.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753791756/Copy_of_Copy_of_CANO9655_tsypvj.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753791752/Copy_of_Copy_of_CANO9656_kmljt3.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753791750/Copy_of_Copy_of_CANO9648_fikwaz.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753791740/Copy_of_Copy_of_CANO9654_vpvfar.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753791739/Copy_of_Copy_of_CANO9650_k3jzrz.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753791737/Copy_of_Copy_of_CANO9652_fqj8ol.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753791732/Copy_of_Copy_of_CANO9653_yfn3yt.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753791727/Copy_of_Copy_of_CANO9649_egcbat.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753791713/Copy_of_Copy_of_CANO9644_p7if69.jpg" },
    { type: 'video', url: "https://res.cloudinary.com/dmt7nqvc0/video/upload/v1753792370/Aref_Kitchen_biged4.mp4", format: 'mp4' }

  ],
  // Dressing room subcategories
  'Dressing_Kronospan': [
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753697931/dressing-room/A67I6969-Edit.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753697966/dressing-room/A67I6979.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753697999/dressing-room/A67I6989.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698064/dressing-room/A67I6992.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698091/dressing-room/A67I6995.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698111/dressing-room/A67I6996.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698142/dressing-room/A67I6998.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698144/dressing-room/IMG-20241121-WA0005.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698145/dressing-room/IMG_20241121_153409_102.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698146/dressing-room/IMG_20241121_153409_140.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698148/dressing-room/IMG_20241121_153409_177.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698150/dressing-room/IMG_20241121_153456_239.webp" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698157/dressing-room/HF_9FH_F_3.png" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698167/dressing-room/HF_9FH_F_4.png" },
    { type: 'video', url: "https://res.cloudinary.com/dmt7nqvc0/video/upload/v1753800793/2024-11-23-165633332_jqryku.mp4", format: 'mp4' }

  ],
  'Dressing_Starwood': [
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698180/dressing-room/DSC05213.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698192/dressing-room/DSC05218.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698208/dressing-room/DSC05225.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698221/dressing-room/DSC05227.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698238/dressing-room/DSC05229.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698252/dressing-room/DSC05230.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698264/dressing-room/DSC05235.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698275/dressing-room/DSC05236.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698288/dressing-room/DSC05240.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698301/dressing-room/DSC05244-1.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698313/dressing-room/DSC05244.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698326/dressing-room/DSC05246-1.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698340/dressing-room/DSC05246.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698353/dressing-room/DSC05249.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753698371/dressing-room/DSC05252.jpg" },
    { type: 'video', url: "https://res.cloudinary.com/dmt7nqvc0/video/upload/v1753793211/PK_1_ztsmjm.mp4", format: 'mp4' }

  ],
  // Furniture
  'furniture-collection': [
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699870/furniture/30bc4637-8d5a-4d7f-96cb-cc45ed93b5bc.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699872/furniture/40cc26e4-21c5-4421-949b-5be0d5bc02e8.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699873/furniture/678e3c81-204c-4c80-8dfe-4590600f95c5.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699874/furniture/c75d7bbf-da1f-490b-852f-92608f21098a.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699875/furniture/c981d5d6-9a41-4432-928b-78be1d1b133b.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699878/furniture/cdf5fdc6-3406-457b-9ab8-ceb8ebfa3c27.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699880/furniture/d32c6e01-4b62-4c54-825a-e1afb6eb6d02.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699881/furniture/d406e32b-7437-4139-a414-7d9e666a6bcc.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699883/furniture/d8ef4b37-2a61-419c-a8e5-d4f3c3195e2a.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699884/furniture/f4176b6d-bb0d-4d84-894e-54fbf1894c31.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699896/furniture/IMG_4960.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699919/furniture/IMG_4961.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699942/furniture/IMG_4962.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699956/furniture/IMG_4963.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699973/furniture/IMG_4966.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699982/furniture/IMG_6269.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753699994/furniture/IMG_6275.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700006/furniture/IMG_6278.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700016/furniture/IMG_6287.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700027/furniture/IMG_6288.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700037/furniture/IMG_6291.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700046/furniture/IMG_6292.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700077/furniture/IMG_6297.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700128/furniture/IMG_6300.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700174/furniture/IMG_6301.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700207/furniture/IMG_6302.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700247/furniture/IMG_6304.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700287/furniture/IMG_6306.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700328/furniture/IMG_6307.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753700369/furniture/IMG_6309.jpg" }
  ],
  'Tv-Unit': [
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753792110/Copy_of_A29I5918_lqqbyk.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753792111/Copy_of_A29I5892-Edit_st93vm.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753792113/Copy_of_A29I5921_crqouz.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753792161/Copy_of_A29I5908-Edit_hzyfds.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753792167/Copy_of_A29I5912-Edit_zzji48.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753792170/Copy_of_A29I5919_oidnvz.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753792172/Copy_of_A29I5921-Edit_qzrqz5.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753792225/Copy_of_A29I5944_bqmv1o.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753792246/Copy_of_A29I5888_wjjz3z.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753792287/Copy_of_A29I5922_nviebe.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753792292/Copy_of_A29I5892_lijfat.jpg" },
    { type: 'image', url: "https://res.cloudinary.com/dmt7nqvc0/image/upload/v1753792297/Copy_of_A29I5888-Edit_cbw3yw.jpg" },
    { type: 'video', url: "https://res.cloudinary.com/dmt7nqvc0/video/upload/v1753793323/Copy_of_tv_unit_l7jsq5.mp4", format: 'mp4' }
  ]
};

const itemName = computed(() => {
  return itemId.replace(/_/g, ' ').replace(/-/g, ' ');
});

const mediaList = ref(allGalleryMedia[itemId] || []);

const currentMedia = computed(() => {
  return mediaList.value[currentIndex.value] || {};
});

// دوال التنقل بين الوسائط
const openLightbox = (index) => {
  currentIndex.value = index;
  lightboxVisible.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightboxVisible.value = false;
  document.body.style.overflow = '';
  
  if (lightboxVideo.value) {
    lightboxVideo.value.pause();
    lightboxVideo.value.currentTime = 0;
  }
};

const prevMedia = () => {
  currentIndex.value = (currentIndex.value - 1 + mediaList.value.length) % mediaList.value.length;
  resetVideo();
};

const nextMedia = () => {
  currentIndex.value = (currentIndex.value + 1) % mediaList.value.length;
  resetVideo();
};

const resetVideo = () => {
  if (lightboxVideo.value) {
    lightboxVideo.value.pause();
    lightboxVideo.value.currentTime = 0;
    if (currentMedia.value.type === 'video') {
      lightboxVideo.value.play();
    }
  }
};

// دوال للتعامل مع السحب على الهاتف
const touchStartX = ref(0);
const touchEndX = ref(0);

const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (touchStartX.value - touchEndX.value > 50) {
    // Swipe left - الانتقال للصورة التالية
    nextMedia();
  } else if (touchEndX.value - touchStartX.value > 50) {
    // Swipe right - العودة للصورة السابقة
    prevMedia();
  }
};

// إعداد مستمعات لوحة المفاتيح
onMounted(() => {
  const handleKeyDown = (e) => {
    if (!lightboxVisible.value) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      prevMedia();
    } else if (e.key === 'ArrowRight') {
      nextMedia();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  // تنظيف المستمع عند إلغاء التثبيت
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
  });
});

useHead({
  title: `${itemName.value} Gallery | P Kitchen`,
  meta: [
    { name: 'description', content: `View high-quality images and videos of ${itemName.value} in our gallery.` }
  ]
});
</script>

<style scoped>
.item-gallery-wrapper {
  padding-top: 90px;
  min-height: calc(100vh - 0px);
  background: #fff;
  padding-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  padding: 2.5rem 1.5rem;
  position: relative;
  margin-top: 50px;
}

.gallery-title {
  font-size: 2.2rem;
  font-family: 'Helvetica-Bold', sans-serif;
  color: var(--color-title);
  text-align: center;
  margin-bottom: 2.5rem;
  letter-spacing: 1px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  justify-content: center;
}

.gallery-media-wrapper {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 16px #00000014, 0 0 0 2px #d4b25433;
  background: var(--color-inactive);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  position: relative;
}

.gallery-media-wrapper:hover {
  transform: scale(1.04) translateY(-6px);
  box-shadow: 0 8px 32px #d4b25466, 0 0 0 2px #d4b254;
}

.gallery-media {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: filter 0.3s;
  filter: brightness(0.95) contrast(1.08);
}

.video-play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.video-play-icon svg {
  width: 24px;
  height: 24px;
  fill: white;
  margin-left: 4px;
}

/* أنماط الـ Lightbox المخصص */
.custom-lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.lightbox-content {
  max-width: 90%;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-media {
  max-height: 90vh;
  max-width: 100%;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 1001;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
  z-index: 1001;
}

.lightbox-prev {
  left: 20px;
}

.lightbox-next {
  right: 20px;
}

@media (max-width: 991px) {
  .container {
    padding: 1.5rem 0.5rem;
  }

  .gallery-grid {
    gap: 1.2rem;
  }
}

@media (max-width: 576px) {
  .gallery-title {
    font-size: 1.3rem;
  }

  .gallery-media {
    height: 150px;
  }

  .video-play-icon {
    width: 40px;
    height: 40px;
  }

  .video-play-icon svg {
    width: 20px;
    height: 20px;
  }

  .lightbox-nav {
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  .lightbox-close {
    font-size: 2rem;
  }
}

.breadcrumb {
  padding: 0.75rem 0;
  margin-bottom: 1.5rem;
}

.breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
}

.breadcrumb li {
  display: flex;
  align-items: center;
}

.breadcrumb li:not(:last-child)::after {
  content: '›';
  margin: 0 0.5rem;
  color: #888;
  font-size: 1.1rem;
}

.breadcrumb a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s;
  font-weight: 500;
}

.breadcrumb a:hover {
  color: var(--color-accent);
  text-decoration: underline;
}

.breadcrumb [aria-current="page"] {
  color: #444;
  font-weight: 600;
}

@media (max-width: 768px) {
  .breadcrumb {
    padding: 0.5rem 0;
  }

  .breadcrumb ol {
    font-size: 0.85rem;
  }

  .breadcrumb li:not(:last-child)::after {
    margin: 0 0.3rem;
  }
}
</style>