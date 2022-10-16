import React from 'react'
import './Product.css'

const ProductListItems = [
  {
    id: 1,
    img: 'https://gamesncomps.com/wp-content/uploads/2022/09/7-2022-09-02T171923.998-500x500.jpg'
  },
  {
    id: 2,
    img: 'https://gamesncomps.com/wp-content/uploads/2022/08/2-2022-08-18T142731.117-500x500.jpg'
  },
  {
    id: 3,
    img: 'https://gamesncomps.com/wp-content/uploads/2022/08/8-2022-08-22T161933.305-500x500.jpg'
  },
  {
    id: 4,
    img: 'https://gamesncomps.com/wp-content/uploads/2022/08/5-2022-08-31T124150.203-500x500.jpg'
  },
  {
    id: 5,
    img: 'https://gamesncomps.com/wp-content/uploads/2022/05/54564-500x500.jpg'
  },
  {
    id: 6,
    img: 'https://gamesncomps.com/wp-content/uploads/2022/06/5-2022-06-10T114247.441-500x500.jpg'
  },


]

function Product() {
  return (
    <div className='product-container'>
      <div className='product-header'> Hot Deals</div>
      <div className='product-inner-container'>
        <div className='product-product-list'>
          {
            ProductListItems.map(ProductListItems => {
              return (
                <div className='product-product-item'>
                  <img src={ProductListItems.img} width={200} height={200} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Product