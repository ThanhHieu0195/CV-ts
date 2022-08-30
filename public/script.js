const SetPageSize = async () => {
  const boxHeight = document.getElementsByTagName("body")[0].offsetHeight;
  const boxWidth = document.getElementsByTagName("body")[0].offsetWidth;
  if (boxHeight === 0) return;
  if (boxWidth === 0) return;

  var cssPagedMedia = (function () {
    var style = document.createElement("style");
    document.head.appendChild(style);
    return function (rule) {
      style.innerHTML = rule;
    };
  })();
  cssPagedMedia.size = function (size) {
    cssPagedMedia(`@page {size: ${size} }`);
  };
  const InUnitHeight = boxHeight * 0.0104166667;
  console.info("InUnit", InUnitHeight);
  cssPagedMedia.size(`20in ${InUnitHeight}in`);
  clearInterval(action);
};

const action = setInterval(SetPageSize, 500);
