package com.cognizant.truyum.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {
	
	public static Date convertToDate(String date) {
		
		
		SimpleDateFormat sd=new SimpleDateFormat("dd/MM/yyy");
		sd.setLenient(false);
		
		try {
			Date d1=sd.parse(date);
			return d1;
		} 
		catch (ParseException e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
	} 
}
