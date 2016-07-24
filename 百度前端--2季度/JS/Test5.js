/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = '';
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

var cityList = document.getElementById('city-select');
for(var city in aqiSourceData){
  if (city !== "北京") {
    cityList.innerHTML += "<option vlaue='" + city + "'>" + city + "</option>";
  }
}

/**
 * 渲染图表
 */
function renderChart(data) {
  var list = document.getElementById('aqi-chart-wrap');
  list.innerHTML = "";
  for (var datStr in data) {
    list.innerHTML += "<span style = 'height:" + data[datStr] + "px;' title = '" + datStr + "'></span>";
  }
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(cityDate) {
  // 确定是否选项发生了变化 
  var data = [];
  for(var datStr in cityDate){
    data.push(cityDate[datStr]);
  }
  var date = document.getElementsByTagName('input');
  var valOld = "";
  var valNew = "";
  for (var i = 0; i < data.length; i++) {
    if (data[i].checked==true) {
      valOld = data[i].value;
    }
  }
  var fieldset = document.getElementById('form-gra-time');
  fieldset.addEventListener('click',function(event){
    if (event.target.nodeName.toLowerCase()==="input") {
      valNew = event.target.value;
      if (valOld === valNew) {
        return false;
      }
      else{
        chuli(valNew,cityDate);
      }
    }
  })
  // 设置对应数据

  // 调用图表渲染函数
}
function citySelectChange() {
  // 确定是否选项发生了变化 
  var select = document.getElementById('city-select');
  var index = select.selectedIndex;
  var cityOld = select.options[index].value;
  var cityNew = "";
  // 设置对应数据
  select.onchange=function(){
      cityNew = this.value;
      if (cityNew === cityOld) {
        return false;
      }
      else{
        graTimeChange(aqiSourceData[cityNew]);
      }
    }
  
  // 调用图表渲染函数
}
function chuli(valNew,cityDate){
  var data = [];
  for(var datStr in cityDate){
    data.push(cityDate[datStr]);
  }
  var weekDate = {};
  var monthDate = {};
        if (valNew === "day") {
          renderChart(cityDate);
        }
        else if (valNew === "week") {
          for (var i = 0; i < data.length; i+=7) {
            var a = "第" + (i+7)/7 + "周";
            var b = 0;
            if (data.length - i > 6) {
              for (var j = 0; j < 7; j++) {
                b += data[i+j];
              }
              b = Math.round(b/7);
            }
            else{
              for (var z = 0; z < (data.length - i); z++) {
                b += data[i+z];
              }
              b = Math.round(b/(data.length -i));
            }
            weekDate[a] = b;
          }
          renderChart(weekDate);
        }
        else if (valNew === "month") {
          for (var o = 0; o < data.length; o +=31) {
            var c = "第" + (o+31)/31 + "月";
            var d = 0;
            if (data.length - o > 30) {
              for (var p = 0; p < 31; p++) {
                d += data[o+p];
              }
              d = Math.round(d/31);
            }
            else{
              for (var q = 0; q < (data.length - o); q++) {
                d += data[o+q];
              }
              d = Math.round(d/(data.length - o));
            }
            monthDate[c] = d;
          }
          renderChart(monthDate);
        }
}
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
  var select = document.getElementById('city-select');
  var index = select.selectedIndex;
  var city = select.options[index].value;
  var dateVal;
  var date = document.getElementsByTagName('input');
  for (var i = 0; i < data.length; i++) {
    if (data[i].checked==true) {
      dateVal = data[i].value;
    }
  }
  chuli(city,dateVal);
}

//改变函数
citySelectChange();
initAqiChartData()