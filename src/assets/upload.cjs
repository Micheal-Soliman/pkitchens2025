
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: "dmt7nqvc0",
  api_key: "145155657714346",
  api_secret: "xkyLTnfM4YogCnh4Wf9N7mwBEnI",
});

const FOLDERS = [
  'public/dressing-room',
  'public/furniture',
  'public/kitchens',
  'public/tv-unit',
];

const OUTPUT_FILE = 'cloudinary-urls.json';

const ALLOWED_EXTENSIONS = [
  '.jpg', '.jpeg', '.png', '.webp', '.gif',
  '.mp4', '.mov', '.avi', '.webm', '.mkv'
];
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

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

function shouldUpload(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    console.warn(`تجاهل الملف (صيغة غير مدعومة): ${filePath}`);
    return false;
  }
  const size = fs.statSync(filePath).size;
  if (size > MAX_SIZE) {
    console.warn(`تجاهل الملف (كبير جدًا): ${filePath}`);
    return false;
  }
  return true;
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

async function main() {
  const allResults = {};
  for (const folder of FOLDERS) {
    const absFolder = path.resolve(folder);
    if (!fs.existsSync(absFolder)) {
      console.warn(`المجلد غير موجود: ${folder}`);
      continue;
    }
    const files = getAllFiles(absFolder);
    allResults[folder] = {};
    for (const filePath of files) {
      if (!shouldUpload(filePath)) continue;
      const file = path.relative(absFolder, filePath).replace(/\\/g, '/');
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
