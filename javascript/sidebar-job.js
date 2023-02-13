// // Input range two slider
// let min = 10;
// let max = 100;

// const calcLeftPosition = (value) => (100 / (100 - 10)) * (value - 10);

// $("#rangeMin").on("input", function (e) {
//   const newValue = parseInt(e.target.value);
//   if (newValue > max) return;
//   min = newValue;
//   $("#thumbMin").css("left", calcLeftPosition(newValue) + "%");
//   $("#min").html(newValue);
//   $("#line").css({
//     left: calcLeftPosition(newValue) + "%",
//     right: 100 - calcLeftPosition(max) + "%",
//   });
// });

// $("#rangeMax").on("input", function (e) {
//   const newValue = parseInt(e.target.value);
//   if (newValue < min) return;
//   max = newValue;
//   $("#thumbMax").css("left", calcLeftPosition(newValue) + "%");
//   $("#max").html(newValue);
//   $("#line").css({
//     left: calcLeftPosition(min) + "%",
//     right: 100 - calcLeftPosition(newValue) + "%",
//   });
// });

// //one range
// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// // Hiển thị giá trị thanh trượt mặc định
// output.innerHTML = slider.value;
// //Cập nhật giá trị thanh trượt hiện tại (mỗi khi bạn kéo tay cầm thanh trượt)
// slider.oninput = function () {
//   output.innerHTML = this.value;
// };
//Price Range Slider
if ($(".price-range-slider").length) {
  $(".price-range-slider").slider({
    range: true,
    min: 0,
    max: 90,
    values: [0, 84],
    slide: function (event, ui) {
      $("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
    },
  });

  $("input.property-amount").val(
    $(".price-range-slider").slider("values", 0) +
      " - $" +
      $(".price-range-slider").slider("values", 1)
  );
}

//Price Range Slider
if ($(".range-slider-one").length) {
  $(".range-slider-one .range-slider").slider({
    range: true,
    min: 1900,
    max: 2030,
    values: [1923, 2023],
    slide: function (event, ui) {
      $(".range-slider-one .count").text(ui.values[0] + " - " + ui.values[1]);
    },
  });

  $(".range-slider-one .count").text(
    $(".range-slider").slider("values", 0) +
      " - " +
      $(".range-slider").slider("values", 1)
  );
}

//Area Range Slider
if ($(".area-range-slider").length) {
  $(".area-range-slider").slider({
    range: true,
    min: 0,
    max: 100,
    values: [0, 50],
    slide: function (event, ui) {
      $(".area-amount").text(ui.values[1]);
    },
  });

  $(".area-amount").text($(".area-range-slider").slider("values", 1));
}

//Salary Range Slider
if ($(".salary-range-slider").length) {
  $(".salary-range-slider").slider({
    range: true,
    min: 0,
    max: 20000,
    values: [0, 15000],
    slide: function (event, ui) {
      $(".salary-amount .min").text(ui.values[0]);
      $(".salary-amount .max").text(ui.values[1]);
    },
  });

  $(".salary-amount .min").text($(".salary-range-slider").slider("values", 0));
  $(".salary-amount .max").text($(".salary-range-slider").slider("values", 1));
}
