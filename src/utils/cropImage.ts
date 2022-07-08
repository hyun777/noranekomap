export async function getCroppedImg(image: any, pixelCrop: any) {
  const canvas = document.createElement('canvas');
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext('2d');

  const img = new Image();
  img.src = image;
  await img.decode();

  if (ctx !== null) {
    ctx.drawImage(
      img,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    let image = canvas.toDataURL('image/jpeg', 1);
    let thumbnail = canvas.toDataURL('image/jpeg', 0.1);

    return { image, thumbnail };
  }
}
