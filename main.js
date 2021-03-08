// 當前輪播圖的編號，從零開始
var index = 0;
// 下一張按鈕
var nextBtn = document.querySelector("#slider-next");

// 下一張按鈕的功能
function next() {
    index++;
    console.log("編號：" + index);
}

//下一張按鈕.點擊 = 下一張按鈕的功能
nextBtn.onclick = next;