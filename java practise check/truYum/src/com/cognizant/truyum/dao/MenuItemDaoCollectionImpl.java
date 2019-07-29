package com.cognizant.truyum.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.cognizant.truyum.model.MenuItem;
import com.cognizant.truyum.util.DateUtil;

public class MenuItemDaoCollectionImpl implements MenuItemDao {

	private static List<MenuItem> menuItemList;

	public MenuItemDaoCollectionImpl() {
		super();
		// TODO Auto-generated constructor stub
		
		if(menuItemList==null)
		{
		
			menuItemList=new ArrayList<MenuItem>();
			
			MenuItem menuItem1=new MenuItem(1001,"Sanwich",99.00f,true,DateUtil.convertToDate("15/03/2017"),"main Course",true);
			menuItemList.add(menuItem1);
			
			MenuItem menuItem2=new MenuItem(1002,"Burger",129.00f,true,DateUtil.convertToDate("23/12/2017"),"main Course",false);
			menuItemList.add(menuItem2);
			
			MenuItem menuItem3=new MenuItem(1003,"Pizza",149.00f,true,DateUtil.convertToDate("21/08/2018"),"main Course",false);
			menuItemList.add(menuItem3);
			
			MenuItem menuItem4=new MenuItem(1004,"French Fries",57.00f,false,DateUtil.convertToDate("02/07/2017"),"main Course",true);
			menuItemList.add(menuItem4);
			
			MenuItem menuItem5=new MenuItem(1005,"Chocolat Browine",32.00f,true,DateUtil.convertToDate("02/11/2022"),"main Course",true);
			menuItemList.add(menuItem5);
		
		}
	}

	
	
	@Override
	public List<MenuItem> getMenuItemListAdmin() {
		// TODO Auto-generated method stub
		return menuItemList;
	}

	@Override
	public List<MenuItem> getMenuItemListCustomer() {
		// TODO Auto-generated method stub
		
		ArrayList<MenuItem> filteredMenuItem=new ArrayList<>();
		for(MenuItem menuItem:menuItemList)
		{
			if(menuItem.getDateOfLaunch().before(new Date()) | menuItem.getDateOfLaunch() == new Date() && menuItem.isActive())
			{
				filteredMenuItem.add(menuItem);
			}
		}
		
		return filteredMenuItem;
	}

	
	@Override
	public void modifyMenuItem(MenuItem menuItem) {
		// TODO Auto-generated method stub
		for(int i=0;i<menuItemList.size();i++)
		{
			if(menuItemList.get(i).getId()==menuItem.getId())
			{
				menuItemList.set(i, menuItem);
			}
		}
		
	}

	@Override
	public MenuItem getMenuItem(long menuItemId) {
		// TODO Auto-generated method stub
		
		for(MenuItem menuItem:menuItemList)
		{
			if(menuItem.getId()==menuItemId)
			{
				return menuItem;
			}
		}
		
		return null;
	}

}
