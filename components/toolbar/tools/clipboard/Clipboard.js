import { useEffect } from "react";

export default function useClipboardImage(onImageChange) {
  const handlePaste = async (event) => {
    let clipboardItems = event.clipboardData || window.clipboardData;
    for (let i = 0; i < clipboardItems.items.length; i++) {
      if (clipboardItems.items[i].type.indexOf("image") === 0) {
        let blob = clipboardItems.items[i].getAsFile();
        let reader = new FileReader();
        reader.onload = function(evt) {
          onImageChange({ target: { files: [new File([blob], "pasted-image.png")] } });
        };
        reader.readAsArrayBuffer(blob);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('paste', handlePaste);
    return () => {
      window.removeEventListener('paste', handlePaste);
    };
  }, [onImageChange]);
}
