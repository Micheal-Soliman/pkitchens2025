// --------- عد بيانات Cloudinary هنا ---------
const CLOUDINARY_CLOUD_NAME = 'YOUR_CLOUD_NAME';
const CLOUDINARY_API_KEY = 'YOUR_API_KEY';
const CLOUDINARY_API_SECRET = 'YOUR_API_SECRET';
//--------------------------------------------

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const FOLDERS = [
  'public/dressing-room',
  'public/furniture',
  'public/kitchens',
  'public/tv-unit',
];

const OUTPUT_FILE = 'cloudinary-urls.json';

async function uploadImage(filePath, folder) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folder,
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    });
    return result.secure_url;
  } catch (err) {
    console.error(`خطأ في رفع ${filePath}:`, err.message);
    return null;
  }
}

async function main() {
  const allResults = {};
  for (const folder of FOLDERS) {
    const absFolder = path.resolve(folder);
    if (!fs.existsSync(absFolder)) {
      console.warn(`المجلد غير موجود: ${folder}`);
      continue;
    }
    const files = fs.readdirSync(absFolder).filter(f => !fs.lstatSync(path.join(absFolder, f)).isDirectory());
    allResults[folder] = {};
    for (const file of files) {
      const filePath = path.join(absFolder, file);
      console.log(`يرفع: ${filePath}`);
      const url = await uploadImage(filePath, folder.replace('public/', ''));
      if (url) {
        allResults[folder][file] = url;
      }
    }
  }
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allResults, null, 2), 'utf-8');
  console.log(`تم حفظ الروابط في ${OUTPUT_FILE}`);
}

main(); 