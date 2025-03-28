import { defineStore } from 'pinia'
import type { IShopState } from '@/modules/shop/types/IShopState.ts'

export const useShopStore = defineStore('shopStore', {
  state: ():IShopState => ({
    products: [
      {
        id: 1,
        title: 'Banh Mi',
        price: 25000,
        description: 'Вьетнамский багет с начинкой...',
        specs: [
          { key: 'Сытость', value: '+10' },
          { key: 'Количество крошек на клавиатуре', value: 'максимальное' },
          { key: 'Можно заказать', value: 'да' }
        ],
        images: [
          '@/assets/images/banhmi1.webp',
          '@/assets/images/banhmi2.webp',
          '@/assets/images/banhmi3.webp'
        ]
      },
      {
        id: 2,
        title: 'Cafe Den',
        price: 15000,
        description: 'Крепкий вьетнамский чёрный кофе.',
        specs: [
          { key: 'Желание жить по утрам', value: '+5' },
          { key: 'Крепость', value: 'максимальная' },
          { key: 'Можно заказать', value: 'да' }
        ],
        images: [
          '@/assets/images/cafeden1.webp',
          '@/assets/images/cafeden2.webp',
          '@/assets/images/cafeden3.webp'
        ]
      },
      {
        id: 3,
        title: 'Cafe Sua',
        price: 15000,
        description: 'Сладкий вьетнамский кофе с сгущёнкой.',
        specs: [
          { key: 'Жить по утрам', value: '+5' },
          { key: 'Делает жизнь слаще', value: '100%' },
          { key: 'Холодный', value: 'как сердце бывшей' },
          { key: 'Можно заказать', value: 'да' }
        ],
        images: [
          '@/assets/images/cafesua1.webp',
          '@/assets/images/cafesua2.webp',
          '@/assets/images/cafesua3.webp'
        ]
      }
    ],
    name: '',
    phone: '',
  }),
  getters: {},
  actions: {
    setUserData (name: string, phone: string) {
      this.name = name
      this.phone = phone
    }
  },
})
