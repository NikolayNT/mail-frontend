import { defineStore } from 'pinia'

export const useBasketMailStore = defineStore('bascetMail', {
  state: () => {
    return {
      mailData: [
        {
          title: 'Я Отправил',
          message: 'ddddd draft',
          id: 100,
        },
        {
          title: 'Delite',
          message: 'ddddd draft',
          id: 200,
        },]
    }
  },
  actions: {
    add(mail) {
      this.mailData.push(mail);
    },
    delete(id) {
      this.mailData = this.mailData.filter((mail) => mail.id !== id)
    },
  },
})

