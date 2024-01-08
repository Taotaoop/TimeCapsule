<template>
    <section class="toll">
      <section class="time-axis container">
        <div
          class="time-axis-container"
          :style="{ width: timeArr1.length * (180 + 20) + 'px',
          transform: 'translateX('+positionX+'px)'}"
        >
          <div
            class="item"
            v-for="(item, index) in timeArr1"
            :key="index + 'time'"
          >
            {{ item }}
          </div>
        </div>
      </section>
  
      <section class="time-z container" style="height: 111px">
        <div style="height: 80px">
          <div class="time-z-container">
            <VueDragResizeRotate
              :key="1"
              :id="1"
              :w="( timeArr.length -1) * (175 + 40)"
              :h="80"
              :resizable="false"
              axis="x"
              @dragging="onDragf"
              @dragstop="onDragStopf"
            >
              <div
                class="relative"
                :style="{ width:( timeArr.length -1) * (180 + 40) + 'px' }"
              >
                <div
                  class="item"
                  v-for="(item, index) in timeArr"
                  :key="index + 'time'"
                >
                  {{ item }}
                </div>
              </div>
            </VueDragResizeRotate>
          </div>
        </div>
        <VueDragResizeRotate
          :key="2"
          :id="2"
          :parent="true"
          :w="180"
          :h="111"
          style="top: 0;opacity: 0.5;"
          :drag-handle="'.drag-text'"
          :resizable="false"
          axis="x"
          @dragging="onDrag"
          @dragstop="onDragStop"
        >
          <div class="drag">
            <div class="bg"></div>
            <div class="text drag-text">DRAG</div>
          </div>
        </VueDragResizeRotate>
      </section>
    </section>
  </template>
  <script setup>
  import { ref, onMounted, defineEmits } from "vue";
  import VueDragResizeRotate from "@gausszhou/vue3-drag-resize-rotate";
  import "@gausszhou/vue3-drag-resize-rotate/lib/bundle.esm.css";
  const emit = defineEmits(["changePosition"]);
  const minTime = ref(1970);
  const maxTime = ref(2024);
  const timeArr1 = ref([]);
  const timeArr = ref([]);
  const positionX = ref(0);
  const position = ref({
      x:0,
      y:0,
      x1:0
  })
  const positionf = ref({
      x:0,
      y:0
  })
  onMounted(() => {
    for (let i = minTime.value; i <= maxTime.value; i += 10) {
      timeArr.value.push(i);
    }
    for (let i = minTime.value; i <= maxTime.value; i += 2) {
      timeArr1.value.push(i);
    }
    timeArr.value.push(maxTime.value);
    console.log(timeArr.value);
  });
  const onDrag = (x, y) => {
    console.log(x);
    console.log(positionf.value.x)
    position.value.x = positionf.value.x + x;
    position.value.x1 = x;
    console.log(position.value.x)
    const thumbnailToLargeRatio = 930 / 170;
    // 根据拖动的方向调整大图的位置
    positionX.value = -(position.value.x * thumbnailToLargeRatio);
    emit("changePosition", position.value);
  };
  const onDragStop = (x, y) => {
    console.log(x, y);
  };
  const onDragf = (x, y) => {
    
  //   emit("changePosition", positionf.value);
  };
  const onDragStopf = (x, y) => {
    positionf.value.x = -(x);
    console.log(position.value.x)
    const thumbnailToLargeRatio = 1100 / 180;
    // 根据拖动的方向调整大图的位置
    positionX.value = -((-(x) + position.value.x1) * thumbnailToLargeRatio);
    emit("changePosition", {x:(-(x) + position.value.x1),y:position.value});
  };
  
  
  </script>
  <style scoped>
  .time-axis {
    background-color: #595959;
    padding: 10px 0;
    overflow-x: hidden;
    cursor: pointer;
  }
  .time-axis .time-axis-container {
    display: flex;
    padding: 0 10px;
  }
  .time-axis .time-axis-container .item {
    /* width: 180px; Edit elements width in mid-timeline*/
    min-width: 220px;
    background-color: #fff;
    padding: 10px 0;
    text-align: center;
    font-size: 16px;
    border: 2px solid #70888f;
    position: relative;
  }
  .time-axis .time-axis-container .item:not(:first-child)::before {
    content: "";
    position: absolute;
    top: 0;
    left: -11px;
    display: block;
    width: 2px;
    height: 100%;
    background-color: #70888f;
  }
  .time-axis .time-axis-container .item:not(:last-child) {
    margin-right: 15px;
  }
  .time-z {
    position: relative;
  }
  .time-z > div {
    background-color: #a3a1a1;
  }
  .time-z .time-z-container {
    /* display: flex; */
    width: 100%;
      height: 80px;
    position: relative;
    /* overflow: hidden; */
  }
  .time-z .drag {
    position: absolute;
    z-index: 0;
    top: 0;
  }
  .time-z .drag .bg {
    width: 180px;
    height: 80px;
    background-color: #8bb4b9c2;
  }
  .time-z .drag .text {
    width: 180px;
    padding: 5px 0;
    background-color: #595959;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
  }
  .time-z .time-z-container .relative {
    display: flex;
    position: relative;
    z-index: 99;
  }
  .time-z .time-z-container .item {
    width: 180px;
    /* min-width: 220px; edit elements width in timeline*/
    height: 80px;
    text-align: center;
    padding-top: 10px;
  }
  .time-z .time-z-container .item:not(:last-child) {
    border-right: 1px dotted #ddd;
  }
  .VueDragResizeRotate{
  
  }
  </style>
  