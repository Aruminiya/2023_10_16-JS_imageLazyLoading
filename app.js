// 抓取文檔中所有的圖片元素
const imgs = document.querySelectorAll("img");

// 定義懶加載的業務邏輯函式
const lazyLoadImages = (entries) => {
  // 遍歷每個進入視圖的元素
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 獲取目標圖片元素
      const image = entry.target;

      // 從 data-src 屬性中獲取圖片的實際來源
      const dataSrc = image.getAttribute("data-src");

      // 將 data-src 設定為圖片的 src 屬性，觸發圖片加載
      image.setAttribute("src", dataSrc);

      // 在控制台輸出消息，表示觸發了圖片的懶加載
      console.log("觸發圖片懶加載");

      // 停止觀察這個圖片，避免重複觸發
      observer.unobserve(image);
    }
  });
};

// 創建 IntersectionObserver 實例，並傳入懶加載的業務邏輯函式
const observer = new IntersectionObserver(lazyLoadImages);

// 對所有圖片元素掛載懶加載的觀察者
imgs.forEach((img) => {
  observer.observe(img);
});
