# Web_HC_ZL_Javascript_Slider
網頁 赫綵中壢 JS 應用 輪播套件

# 範例展示
https://kid421.github.io/Web_HC_ZL_Javascript_Slider/

# CDN 連結

CSS CDN，放在 Head

```
<link rel="stylesheet" href="https://kid421.github.io/Web_HC_ZL_Javascript_Slider/style.css">
```

JS CDN，放在 body 結束標籤上方

```
<script src="https://kid421.github.io/Web_HC_ZL_Javascript_Slider/main.js"></script>
```

# 屬性說明

屬性名稱 | 屬性說明
--------|--------
data-s-interval | 自動播放間隔時間，單位為毫秒
data-s-showdots | 是否要顯示點點，false 為否，true 為是

# HTML 架構

```
<!-- 輪播圖大盒子 -->
<div id="slider-box" data-s-interval="3000" data-s-showdots="true">
    <!-- 輪播圖內的項目，圖片與內容 -->
    <div class="slider-item slider-active">
        <h1>衣服 1</h1>
    </div>
    <div class="slider-item">
        <h1>衣服 2</h1>
    </div>
    <div class="slider-item">
        <h1>衣服 3</h1>
    </div>

    <!-- 上一張與下一張按鈕 -->
    <div id="slider-prev"></div>
    <div id="slider-next"></div>

    <!-- 點點 -->
    <div id="slider-dots">
        <span class="slider-dot slider-dot-active"></span>
        <span class="slider-dot"></span>
        <span class="slider-dot"></span>
    </div>
</div>
```