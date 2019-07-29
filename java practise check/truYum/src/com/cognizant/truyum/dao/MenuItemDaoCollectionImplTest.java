package com.cognizant.truyum.dao;

import com.cognizant.truyum.model.MenuItem;
import com.cognizant.truyum.util.DateUtil;



public class MenuItemDaoCollectionImplTest {


	static void testGetMenuItemListAdmin()
	{
		System.out.println("Inside getMenuItemAdmin");
		MenuItemDao menuItemDao=new MenuItemDaoCollectionImpl();
		
		for(MenuItem menuItem:menuItemDao.getMenuItemListAdmin())
		{
			System.out.println(menuItem);
		}
	}
	
	
	static void testGetMenuItemListCustomer()
	{
		System.out.println();
		System.out.println("Inside getMenuItemCustomer");
		MenuItemDao menuItemDao=new MenuItemDaoCollectionImpl();
		for(MenuItem menuItem:menuItemDao.getMenuItemListCustomer())
		{
			System.out.println(menuItem);
		}
	}
	
	
	static void testModifyMenuItem()
	{
		MenuItem menuItem1=new MenuItem(1001,"pasta",99.00f,true,DateUtil.convertToDate("15/03/2017"),"snacks",true);
		
		MenuItemDao menuItemDao=new MenuItemDaoCollectionImpl();
		menuItemDao.modifyMenuItem(menuItem1);
		
		System.out.println();
		System.out.println("Modified Product "+menuItemDao.getMenuItem(menuItem1.getId()));
		System.out.println();
		System.out.println("After Modification");
		for(MenuItem menuItem:menuItemDao.getMenuItemListAdmin())
		{
			System.out.println(menuItem);
		}
		
	}
	
	
	public static void main(String[] args)
	{
		testGetMenuItemListAdmin();
		testGetMenuItemListCustomer();
		testModifyMenuItem();
		
		
	}
}
