<template>
  <div>
    <a-button type="primary" @click="showModal">Write Your Capsule</a-button>
    <a-modal
      ref="modalRef"
      v-model:open="open"
      :wrap-style="{ overflow: 'hidden' }"
      @ok="handleOk"
      width="1000px"
    >
      <a-form
        :model="formState"
        v-bind="layout"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-form-item
          :name="['user', 'name']"
          label="Name"
          :rules="[{ required: true }]"
        >
          <a-input v-model:value="formState.user.name">
            <template #suffix>
              <a-tooltip title="Extra information">
                <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
              </a-tooltip>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          :name="['user', 'email']"
          label="Email"
          :rules="[{ type: 'email' }, { required: true }]"
        >
          <a-input v-model:value="formState.user.email" />
        </a-form-item>

        <a-form-item :name="['user', 'capsuleText']" label="CapsuleText">
          <a-textarea
            :auto-size="{ minRows: 5, maxRows: 8 }"
            v-model:value="formState.user.capsuleText"
            show-count
            :maxlength="100"
          />
        </a-form-item>
        <!-- Authorize to upload to timeline -->
        <a-form-item label="Submit to Timeline" name="authSubmit">
          <a-switch
            v-model:checked="formState.user.SubmitToTimeline"
            checked-children="Y"
            un-checked-children="N"
          />
        </a-form-item>
        <a-upload-dragger
          v-model:fileList="fileList"
          name="file"
          :multiple="true"
          :max-count="3"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :before-upload="beforeUpload"
          @change="handleChange"
          @drop="handleDrop"
        >
          <p class="ant-upload-drag-icon">
            <inbox-outlined />
          </p>
          <p class="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p class="ant-upload-hint">
            Support pictures and .Zip file, Maximum 3
          </p>
        </a-upload-dragger>
      </a-form>
      <!-- <a-form-item label="Unlock time" required name="dateUnlock">
      <a-date-picker
        v-model:value="formState.dateUnlock"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
    </a-form-item> -->

      <template #title>
        <div ref="modalTitleRef" style="width: 100%; cursor: move">
          Write Your Own Timecapsule
        </div>
      </template>
      <template #modalRender="{ originVNode }">
        <div :style="transformStyle">
          <component :is="originVNode" />
        </div>
      </template>
    </a-modal>
  </div>
</template>

<script setup>
import { ref, computed, watch, watchEffect, reactive } from "vue";
import { message } from "ant-design-vue";
import { InboxOutlined, InfoCircleOutlined } from "@ant-design/icons-vue";
import { useDraggable } from "@vueuse/core";
const open = ref(false);
const modalTitleRef = ref(null);
const showModal = () => {
  open.value = true;
};
const { x, y, isDragging } = useDraggable(modalTitleRef);
const handleOk = (e) => {
  console.log(e);
  open.value = false;
};
const startX = ref(0);
const startY = ref(0);
const startedDrag = ref(false);
const transformX = ref(0);
const transformY = ref(0);
const preTransformX = ref(0);
const preTransformY = ref(0);
const dragRect = ref({
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
});
watch([x, y], () => {
  if (!startedDrag.value) {
    startX.value = x.value;
    startY.value = y.value;
    const bodyRect = document.body.getBoundingClientRect();
    const titleRect = modalTitleRef.value.getBoundingClientRect();
    dragRect.value.right = bodyRect.width - titleRect.width;
    dragRect.value.bottom = bodyRect.height - titleRect.height;
    preTransformX.value = transformX.value;
    preTransformY.value = transformY.value;
  }
  startedDrag.value = true;
});
watch(isDragging, () => {
  if (!isDragging) {
    startedDrag.value = false;
  }
});
watchEffect(() => {
  if (startedDrag.value) {
    transformX.value =
      preTransformX.value +
      Math.min(Math.max(dragRect.value.left, x.value), dragRect.value.right) -
      startX.value;
    transformY.value =
      preTransformY.value +
      Math.min(Math.max(dragRect.value.top, y.value), dragRect.value.bottom) -
      startY.value;
  }
});
const transformStyle = computed(() => {
  return {
    transform: `translate(${transformX.value}px, ${transformY.value}px)`,
  };
});

//Form Component
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const formState = reactive({
  user: {
    name: "",
    email: "",
    dateUnlock: undefined,
    capsuleText: "",
    SubmitToTimeline: true,
  },
});
//Upload Module
const fileList = ref([]);
const handleChange = (info) => {
  const status = info.file.status;
  if (status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  if (status === "done") {
    message.success(`${info.file.name} file uploaded successfully.`);
  } else if (status === "error") {
    message.error(`${info.file.name} file upload failed.`);
  }
};
function handleDrop(e) {
  console.log(e);
}
const beforeUpload = (file) => {
  const acceptedFileType = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "application/x-bzip",
    "application/zip",
  ];
  const valideFileType = acceptedFileType.includes(file.type);
  if (!valideFileType) {
    message.error(`${file.name} is not a supported file type`);
    reject(file);
  }
  const sizeLimit = 5;
  const isSmallerThanLimit = file.size / 1024 / 1024 < sizeLimit;
  if (!isSmallerThanLimit) {
    message.error(`Image must smaller than ${sizeLimit} MB!`);
    reject(file);
  }
  return valideFileType || isSmallerThanLimit || Upload.LIST_IGNORE;
};
//
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>