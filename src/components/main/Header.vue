<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="/">
            <span class="sr-only">Workflow</span>
            <img class="h-8 w-auto sm:h-10" src="/images/apple.png" alt="" />
          </a>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <a href="/" class="text-base font-medium text-gray-500 hover:text-gray-900"> 평창 자연햇살 </a>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <!-- <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> 준비중 </a>
          <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> 준비중 </a> -->
        </div>
      </div>
    </div>
  </Popover>

  <!-- banner -->

  <div style="background-color: rgb(248 113 113);">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg" style="background-color: rgb(253 224 71);">
            <SpeakerphoneIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <p class="ml-3 font-medium text-white truncate">
            <span class="md:hidden">농협/최학래/352-1117-5671-23</span>
            <span class="hidden md:inline"> 결제는 주문서 작성 후 계좌이체 해주시면 확인 후 배송을 시작합니다! 농협 (최학래) 352-1117-5671-23 </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { SpeakerphoneIcon, XIcon } from '@heroicons/vue/outline'

export default {
  name:'MainHeader',

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