package com.cognizant.truyum.dao;

public class CartDaoCollectionImplTest {
	static void testAddCartItem()
	{
		CartDao cartDao=new CartDaoCollectionImpl();
		cartDao.addCartItem(1, 1001);
		/*CartDao cartDao1=new CartDaoCollectionImpl();
		cartDao1.addCartItem(1, 1002);
		*/
		
		try {
			System.out.println(cartDao.getAllCartItem(1));
//			System.out.println(cartDao1.getAllCartItem(1));
		}
		catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	
	static void testRemoveCartItem()
	{
		CartDao cartDao=new CartDaoCollectionImpl();
		cartDao.removeCartItem(1, 1001);
//		CartDao cartDao1=new CartDaoCollectionImpl();
		
		try {
			System.out.println(cartDao.getAllCartItem(1));
			
		} catch (CartEmptyException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		try {
			System.out.println(cartDao.getAllCartItem(1));
		} catch (CartEmptyException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		/*try {
			
			if(cartDao.getAllCartItem(1)==null)
			{
				System.out.println("cart is empty");
			}
			else
			{
				cartDao.removeCartItem(1, 1001);
			}
		} catch (CartEmptyException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
		
	}
	
	public static void main(String[] args)
	{
		testAddCartItem();
		testRemoveCartItem();
		
	}
}
