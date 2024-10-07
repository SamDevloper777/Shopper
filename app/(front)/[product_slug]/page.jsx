import React from 'react'
import { ProductViewTop } from './_components/productviewtop'
import Product from '@/models/Product';
import DbConnect from '@/utils/dbConnect';
import Category from '@/models/Category';
import ProductSection from '../components/product-section';
import User from '@/models/User';
import { auth } from '@/auth';

const page = async ({ params }) => {
  const { product_slug } = params;
  const session = await auth();
  DbConnect();
  const singleProduct = await Product.findOne({ slug: product_slug, status: true });
  const realtedProduct = await Product.find({})

 //get User logic
let user=null
 if(session){
   user =await User.findOne({email:session.user.email})
 }

  return (
    <>
      <div className=' flex flex-1 px-[5%] mt-5'>
        <ProductViewTop data={singleProduct} user={user} />
      </div>
      <div className='flex flex-1 flex-col gap-2 px-[5%] mt-5'>
        <h2 className='text-2xl'>Related Product</h2>
        <ProductSection data={realtedProduct} />
      </div>
    </>
  )
}

export default page
