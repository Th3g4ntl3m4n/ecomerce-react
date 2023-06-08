import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setProductDetailOpen] = useState(false)
  const openProductDetail = () => setProductDetailOpen(true)
  const closeProductDetail = () => setProductDetailOpen(false)



  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}