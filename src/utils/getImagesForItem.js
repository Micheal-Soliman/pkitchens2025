import urls from '@/assets/cloudinary-urls.json';

function isImage(file) {
  return /\.(jpg|jpeg|png|webp|gif)$/i.test(file);
}

// جلب كل صور item معين (قديم)
export function getImagesForItem(itemName) {
  const images = [];
  for (const folder in urls) {
    for (const file in urls[folder]) {
      if (isImage(file) && file.startsWith(itemName + '/')) {
        images.push(urls[folder][file]);
      }
    }
  }
  return images;
}

// جلب كل الأنواع (items) داخل قسم معين
export function getItemsInSection(section) {
  // section مثال: 'public/kitchens'
  const itemsSet = new Set();
  if (urls[section]) {
    for (const file in urls[section]) {
      const item = file.split('/')[0];
      itemsSet.add(item);
    }
  }
  return Array.from(itemsSet);
}

// جلب صور نوع معين داخل قسم معين
export function getImagesForItemInSection(section, itemName) {
  const images = [];
  if (urls[section]) {
    for (const file in urls[section]) {
      if (file.startsWith(itemName + '/') && isImage(file)) {
        images.push(urls[section][file]);
      }
    }
  }
  return images;
} 