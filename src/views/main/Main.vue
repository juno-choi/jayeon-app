<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <MainHeader></MainHeader>

  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">상품</h2>

      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group">
          <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">
            {{ product.name }}
          </h3>
          <p class="mt-1 text-lg font-medium text-gray-900">
            {{ product.price }}
          </p>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import MainHeader from '/src/components/main/Header.vue'

const products = [
  {
    id: 1,
    name: '맛있는 사과',
    href: '/detail/'+1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '3500원',
    color: 'Black',
  },{
    id: 1,
    name: '맛있는 사과',
    href: '/detail/'+2,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '3500원',
    color: 'Black',
  },{
    id: 1,
    name: '맛있는 사과',
    href: '/detail/'+3,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '3500원',
    color: 'Black',
  },{
    id: 1,
    name: '맛있는 사과',
    href: '/detail/'+4,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '3500원',
    color: 'Black',
  },
  // More products...
]

export default {
  name:'Main',

  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MainHeader,
  },
  setup() {
    return {
      products,
    }
  },
}
</script>