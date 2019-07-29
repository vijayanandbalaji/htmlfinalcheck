package com.cognizant.truyum.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.cognizant.truyum.model.Cart;
import com.cognizant.truyum.model.MenuItem;

public class CartDaoCollectionImpl implements CartDao {
	
	
	
	private static HashMap<Long,Cart> userCarts;
	
	

	public CartDaoCollectionImpl() {
		super();
		// TODO Auto-generated constructor stub
		
		if(userCarts==null)
		{
			userCarts=new HashMap<>();
			
		}
	}

	
	@Override
	public void addCartItem(long userId, long menuItemId) {
		// TODO Auto-generated method stub
		MenuItemDao menuItemDao=new MenuItemDaoCollectionImpl();
		
		MenuItem menuItem=menuItemDao.getMenuItem(menuItemId);
		
		if(userCarts.containsKey(userId))
		{
			userCarts.get(userId).getMenuItemList().add(menuItem);
		}
		else
		{
			Cart newCart=new Cart();
			ArrayList<MenuItem> menuItemList=new ArrayList<>();
			menuItemList.add(menuItem);
			newCart.setMenuItemList(menuItemList);
			userCarts.put(userId,newCart);
		}
	}

	
	@Override
	public Cart getAllCartItem(long userId) throws CartEmptyException {
		// TODO Auto-generated method stub
		Cart cart=userCarts.get(userId);
		if(cart==null | cart.getMenuItemList().isEmpty())
		{
			//throw new CartEmptyException();
			return null;
		}
		List<MenuItem> menuItemList=cart.getMenuItemList();
		float totalPrice=0;
		for(MenuItem menuItem:menuItemList)
		{
			totalPrice += menuItem.getPrice();
		}
		
		cart.setTotal(totalPrice);
		
		return cart;
	}

	
	@Override
	public void removeCartItem(long userId, long menuItemId) {
		// TODO Auto-generated method stub
		
		List<MenuItem> menuItemList=userCarts.get(userId).getMenuItemList();
		for(int i=0;i<menuItemList.size();i++)
		{
			if(menuItemList.get(i).getId()==menuItemId)
			{
				menuItemList.remove(i);
			}
		}
	}
}
