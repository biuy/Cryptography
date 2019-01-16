$(function() {
	$("#check").click (function() {
		//转化为十进制数字
		var i = 0;//数组下标
		var passint = new Array()
		var passbit = $('#inputPassword').val();

		if(passbit.length < 3) {//如果二进制密码不足三位
			alert('您输入的密码不足一位！')
			$('#inputEmail').val('');//清空输入框
	 		$('#inputPassword').val('');
			alert('登陆失败！');

	 		return false;
		}
	
		while(i < passbit.length) {//输入了不是0或1的数
			if(passbit[i] != '0' && passbit[i] != '1'){
				alert('您输入的密码不是二进制！')
				$('#inputEmail').val('');//清空输入框
	 			$('#inputPassword').val('');
				alert('登陆失败！');

	 			return false;
			}
			i = i+1;
		}


		i = 0;
		while(passbit.length >= i+3) {
			var tmp = 0;
			tmp = parseInt(passbit.substring(3+i,i), 2);
			passint.push(tmp);
			i = i + 3;
		}
		alert('您输入的密码是：'+passint.join(''))
		//passint是int的数组，保存十进制数




		if($('#inputEmail').val()=='root@test'&& $('#inputPassword').val()=='001'){
	 		alert('登陆成功！');

			return true;
	 	}else {
	 		$('#inputEmail').val('');//清空输入框
	 		$('#inputPassword').val('');
	 		alert('登陆失败！');

	 		return false;
	 	}
	 });
});
