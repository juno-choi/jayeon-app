<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="/manage">
            <span class="sr-only">Workflow</span>
            <img class="h-8 w-auto sm:h-10" src="/images/apple.png" alt="" />
          </a>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <a href="/manage" class="text-base font-medium text-gray-500 hover:text-gray-900"> 메인 </a>
          <a href="/manage/order" class="text-base font-medium text-gray-500 hover:text-gray-900"> 주문관리 </a>
          <a href="/manage/item" class="text-base font-medium text-gray-500 hover:text-gray-900"> 상품관리 </a>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="/" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> 홈페이지 </a>
        </div>
      </div>
    </div>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { SpeakerphoneIcon, XIcon } from '@heroicons/vue/outline'

export default {
  name:'ManageHeader',

  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    SpeakerphoneIcon,
    XIcon,
  },
  setup() {
    return {
    }
  },
}
</script>