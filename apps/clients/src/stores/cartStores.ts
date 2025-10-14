import { CartStoreActionsType, CartStoreStateType } from '@/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
const useCartStore = create<CartStoreActionsType & CartStoreStateType>()(persist((set) => ({
    cart: [],
    hasHydrate: false,
    addToCart: (product) => set((state) => {
        //tìm xem trong mảng có trùng với sản phẩm mới thêm vào ko trả về 1
        const existingIndex = state.cart.findIndex(p =>
            p.id === product.id &&
            p.selectedSize === product.selectedSize &&
            p.selectedColor === product.selectedColor
        )
        if (existingIndex !== -1) {
            const updateCart = [...state.cart]
            updateCart[existingIndex]!.quantity += product.quantity || 1
            return { cart: updateCart };
        }
        return {
            cart: [
                ...state.cart, {
                    ...product,
                    quantity: product.quantity || 1,
                    selectedSize: product.selectedSize,
                    selectedColor: product.selectedColor
                }
            ]
        }
    }),
    //  đoạn này filter khi xác định đc trùng các điều kiện trên thì nó sẽ trả về true nhưng do ! kia nên thành false nên bị loại bỏ
    //  còn các ko trùng lẽ ra fale nhưng do có ! nên thành true
    removeFromCart: (product) => set((state) => ({
        cart: state.cart.filter(p => !(
            p.id === product.id &&
            p.selectedSize === product.selectedSize &&
            p.selectedColor == product.selectedColor))
    })),
    clearCart: () => set({ cart: [] })
}),
    {
        name: "cart",
        storage: createJSONStorage(() => localStorage),
        onRehydrateStorage: () => (state) => {
            if (state) {
                state.hasHydrate = true
            }
        }
    }
)
)

export default useCartStore