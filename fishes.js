// 页脚鱼
fish();
function fish() {
    return (
      $("#footer-wrap").css({
        position: "absolute",
        "text-align": "center",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        "z-index": auto,
      }),
      $("footer").append(
        '<div class="container" id="jsi-flying-fish-container"></div>'
      ),
      $("body").append(
        '<script src="https://cdn.jsdelivr.net/gh/fudalijunyi/cdn/lovelijunyi/js/fish.js"></script>'
      ),
      this
    );
  }
