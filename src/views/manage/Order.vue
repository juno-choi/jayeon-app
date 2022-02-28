<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <ManageHeader></ManageHeader>

  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">상품</h2>
      <div>주문페이지 입니다.</div>
    </div>
  </div>

</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import ManageHeader from '/src/components/manage/Header.vue'

export default {
  name:'Order',

  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ManageHeader,
  },
  setup() {
    return {
    }
  },
}
</script>