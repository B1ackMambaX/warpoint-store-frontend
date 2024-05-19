interface Inventory {
    id: number;
    item: {
        id: number,
        name: string,
        description: string,
        type: 'certificate' | 'discount_order',
        value: number
      },
      used: boolean
}

export default Inventory;