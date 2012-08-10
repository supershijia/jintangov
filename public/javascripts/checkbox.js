//复选框单选按钮实现
function chooseOne(cb){   

         //先取得同name的chekcBox的集合物件   
         var obj = document.getElementsByName("c1"); 

         for (i=0; i<obj.length; i++){   
			
			
			//判斷obj集合中的i元素是否為cb，若否則表示未被點選   

             if (obj[i]!=cb) obj[i].checked = false;  
			 
			 
			 //若是 但原先未被勾選 則變成勾選；反之 則變為未勾選   

             //else  obj[i].checked = cb.checked; 
			 
			 
			 //若要至少勾選一個的話，則把上面那行else拿掉，換用下面那行   

             else obj[i].checked = true;   

         }   
		
}

function chooseOne2(cb){   

         //先取得同name的chekcBox的集合物件   
		 var obj2 = document.getElementsByName("c2");

		 for (i=0; i<obj2.length; i++){   
			
			
			//判斷obj集合中的i元素是否為cb，若否則表示未被點選   

             if (obj2[i]!=cb) obj2[i].checked = false;  
			 
			 
			 //若是 但原先未被勾選 則變成勾選；反之 則變為未勾選   

             //else  obj2[i].checked = cb.checked; 
			 
			 
			 //若要至少勾選一個的話，則把上面那行else拿掉，換用下面那行   

             else obj2[i].checked = true;   

         }   

}
