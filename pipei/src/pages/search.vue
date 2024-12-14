<script setup lang="ts">
import {ref, computed} from 'vue';
import {showToast} from 'vant';
import Tags from '../config/tag.ts'
import * as VueRouter from "vue-router";

// 搜索栏
const searchText = ref('');
const router = VueRouter.useRouter();
const onSearch = (val) => showToast(val);
const onCancel = () => router.back();

// 选择标签部分
const activeIds = ref([]);
const activeIndex = ref(0);

// 根据搜索文本过滤标签
const filteredTags = computed(() => {
  if (!searchText.value) {
    return Tags;
  }

  return Tags.map(parent => {
    const newParent = {...parent};
    if (newParent.children) {
      newParent.children = newParent.children.filter(child =>
          child.text.toLowerCase().includes(searchText.value.toLowerCase())
      );
    }
    return newParent.text.toLowerCase().includes(searchText.value.toLowerCase()) ||
    (newParent.children && newParent.children.length > 0) ? newParent : null;
  }).filter(Boolean);
});

// 计算已选择的标签
const selectedTags = computed(() => {
  const selected = [];
  Tags.forEach(parent => {
    parent.children?.forEach(child => {
      if (activeIds.value.includes(child.id)) {
        selected.push({
          id: child.id,
          text: child.text
        });
      }
    });
  });
  return selected;
});

// 移除标签
const removeTag = (tagId) => {
  activeIds.value = activeIds.value.filter(id => id !== tagId);
};

// 执行搜索
const doSearchResult = () => {
  router.push({path: '/search/result', query: {tags: activeIds.value}});
}

</script>

<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入要搜索标签"
        input-align="center"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>

  <van-divider content-position="left">已选择标签</van-divider>
  <van-cell-group inset>
    <van-space wrap :size="[10, 10]">
      <!--使用自定义空状态文本 -->
      <template v-if="selectedTags.length">
        <van-tag
            v-for="tag in selectedTags"
            :key="tag.id"
            closeable
            size="medium"
            type="primary"
            @close="removeTag(tag.id)"
        >
          {{ tag.text }}
        </van-tag>
      </template>
      <template v-else>
        <span class="empty-text">暂无标签</span>
      </template>
    </van-space>
  </van-cell-group>

  <van-divider content-position="left">请选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="filteredTags"
      height="500"
  />

  <!--搜索按钮-->
  <van-button 
    block 
    type="primary" 
    @click="doSearchResult"
    class="search-button"
  >搜索</van-button>

</template>

<style scoped>
:deep(.van-tree-select__content) {
  overflow-y: auto !important;
}

.empty-text {
  color: #999;
  font-size: 14px;
}

.search-button {
  margin: 16px;
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  width: calc(100% - 32px);
}
</style>