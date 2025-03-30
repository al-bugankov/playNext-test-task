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
          { key: 'Количество крошек на клавиатуре', value: 'Максимальное' },
          { key: 'Можно заказать', value: 'Да' }
        ],
        images: [
          '/src/assets/images/BanhMi/banhmi1.webp',
          '/src/assets/images/BanhMi/banhmi2.webp',
          '/src/assets/images/BanhMi/banhmi3.webp'
        ]
      },
      {
        id: 2,
        title: 'Cafe Den',
        price: 15000,
        description: 'Крепкий вьетнамский чёрный кофе.',
        specs: [
          { key: 'Желание жить по утрам', value: '+5' },
          { key: 'Крепость', value: 'Максимальная' },
          { key: 'Можно заказать', value: 'Да' }
        ],
        images: [
          '/src/assets/images/CafeDen/cafeden1.webp',
          '/src/assets/images/CafeDen/cafeden2.webp',
          '/src/assets/images/CafeDen/cafeden3.webp'
        ]
      },
      {
        id: 3,
        title: 'Cafe Sua',
        price: 15000,
        description: 'Сладкий вьетнамский кофе с сгущёнкой.',
        specs: [
          { key: 'Желание жить по утрам', value: '+5' },
          { key: 'Делает жизнь слаще', value: '100%' },
          { key: 'Холодный', value: 'Как сердце бывшей' },
          { key: 'Можно заказать', value: 'Да' }
        ],
        images: [
          '/src/assets/images/CafeSua/cafesua1.webp',
          '/src/assets/images/CafeSua/cafesua2.webp',
          '/src/assets/images/CafeSua/cafesua3.webp'
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
