var obj = {
    "childList": [
        {
            "id": 2,
            "name": "行政部门",
            "parentId": 1,
            "parentIds": "0,1,",
            "childList": [
                {
                    "childList": [],
                    "id": 4,
                    "name": "校长室",
                    "parentId": 2,
                    "parentIds": "0,1,2,",
                    "userList": [
                    	{
                    		"id": 111,
		                    "realName": "杨武1",
		                    "userName": "admin",
		                    "uuid": "uuidtest1"
		                }
                    ]
                },
                {
                    "childList": [],
                    "id": 5,
                    "name": "德育处",
                    "parentId": 2,
                    "parentIds": "0,1,2,",
                    "userList": [
                    	{	
                    		"id": 111,
		                    "realName": "杨武(test)2",
		                    "userName": "yang",
		                    "uuid": "uuidtest2"
		                },
		                {
		                	"id": 222,
		                    "realName": "杨武(test)3",
		                    "userName": "yang",
		                    "uuid": "uuidtest2"
		                }
                    ]
                }
            ],
            "userList": [
                {
                	"id": 333,
                    "realName": "杨武s",
                    "userName": "admin",
                    "uuid": "uuidtest1"
                },
                {
                	"id": 444,
                    "realName": "杨武(test)s",
                    "userName": "yang",
                    "uuid": "uuidtest2"
                }
            ]
        },
	    {
            "id": 3,
            "name": "学科组",
            "parentId": 1,
            "parentIds": "0,1,",
            "childList": [
                {
                    "id": 6,
                    "name": "文科组",
                    "parentId": 3,
                    "parentIds": "0,1,3,",
                    "childList": [
                    	{
		                    "id": 6,
		                    "name": "语文组",
		                    "parentId": 3,
		                    "parentIds": "0,1,3,",
		                    "childList": [
		                    	
		                    ],
		                    "userList": [
		                    	{
		                    		"id": 555,
				                    "realName": "杨武语文",
				                    "userName": "admin",
				                    "uuid": "uuidtest1"
				                }
		                    ]
		                },
		                {
		                    "id": 6,
		                    "name": "英语组",
		                    "parentId": 3,
		                    "parentIds": "0,1,3,",
		                    "childList": [],
		                    "userList": [
		                    	{
		                    		"id": 444,
				                    "realName": "杨武英语",
				                    "userName": "admin",
				                    "uuid": "uuidtest1"
				                },
				                {
				                	"id": 777,
				                    "realName": "杨武(test)",
				                    "userName": "yang",
				                    "uuid": "uuidtest2"
				                }
		                    ]
		                }
                    ],
                    "userList": [
                    	{
                    		"id": 888,
		                    "realName": "杨武",
		                    "userName": "admin",
		                    "uuid": "uuidtest1"
		                },
		                {
		                	"id": 999,
		                    "realName": "杨武(test)",
		                    "userName": "yang",
		                    "uuid": "uuidtest2"
		                }
                    ]
                },
                {
                    "id": 6,
                    "name": "理科组",
                    "parentId": 3,
                    "parentIds": "0,1,3,",
                    "childList": [],
                    "userList": [
                    	{
                    		"id": 1010,
		                    "realName": "杨武",
		                    "userName": "admin",
		                    "uuid": "uuidtest1"
		                },
		                {
		                	"id": 1111,
		                    "realName": "杨武(test)",
		                    "userName": "yang",
		                    "uuid": "uuidtest2"
		                }
                    ]
                }
	        ],
            "userList": [
            	{
            		"id": 1212,
                    "realName": "杨武(test)",
                    "userName": "yang",
                    "uuid": "uuidtest2"
                }
            ]
        }
    ],
    "id": 1,
    "name": "天心岛小学部门",
    "parentId": 0,
    "parentIds": "0,",
    "userList": [
        {
        	"id": 1313,
            "realName": "杨武",
            "userName": "admin",
            "uuid": "uuidtest1"
        }
    ]
}
var list_tpl = $('#list_tpl').html();
var content = doT.template(list_tpl);
$('.list-item1').html(content(obj));

// 全选 全选取消 
$(document).on('click', '#indexPage .all-input input[type=checkbox]', function(event) {
	if($(this).prop("checked")) {
		// 勾选全部checkbox
		$(".items-input,.item-input").find('input[type=checkbox]').iCheck('check');
		// 人物列表显示
		$(".list-con").removeClass('none');
		// 按钮旋转
		$(".items-input").find('.icons-btn').removeClass('rotate');
	} else {
		$(".items-input,.item-input").find('input[type=checkbox]').iCheck('uncheck');
		$(".list-con").addClass('none');
		$(".items-input").find('.icons-btn').addClass('rotate');
	}
});

// 点击组织架构部门， 部门底下所有展开
$(document).on('click', '#indexPage .items-input input[type=checkbox]', function(event) {
	// jsonData($(this).parents(".items-input"));
	var thisZIndex =$(this).parents(".items-input").attr("z-indexs");
	// console.log(thisZIndex);
	// console.log($(this).parents(".items-input").siblings('.list-con'));
	if($(this).prop("checked")) {

		// 设置当前点击底下层级所有的选择个数
		var checkboxLen = $(this).parents(".items-input").parent(".list-item1-box").siblings().length;
		// 显示出部门底下的人
		$(this).parents(".items-input").siblings('.list-con').removeClass('none').find('.list-con').removeClass('none');
		// 勾选部门底下的人
		$(this).parents(".items-input").siblings('.list-con').find('input[type=checkbox]').iCheck('check');
		// 按钮旋转
		$(this).parents(".items-input").find('.icons-btn').removeClass('rotate');
		$(this).parents(".items-input").siblings('.list-con').find('.icons-btn').removeClass('rotate');

		// 需要判断当前元素是否全选，如果选项，则需要勾选部门。否则取消

		// console.log(checkboxLen);
		var trueCheck = 0;	
		// 判断当前元素的同级元素是否勾选，如果全部勾选则上一级勾选
		$(this).parents(".items-input").parent(".list-item1-box").siblings().each(function(index, el) {
			if($(this).hasClass('list-item1-box')) {
				if($(this).children('.items-input').find('input[type=checkbox]').prop("checked")) {
					trueCheck++
				} 
			} else {
				if($(this).find('input[type=checkbox]').prop("checked")) {
					trueCheck++
				}
			}
		});

		// 当元素兄弟级确定勾选的数量等于兄弟级个数
		if(trueCheck == checkboxLen) {
			$(this).parents(".items-input").parent(".list-item1-box").parent(".list-con").siblings('.items-input').iCheck('check');
		} else {
			$(this).parents(".items-input").parent(".list-item1-box").parent(".list-con").siblings('.items-input').iCheck('uncheck');
		}
		// 判断父级的父级元素是否勾选，如果勾选，则判断父级的父级兄弟元素是否全部被勾选，
		// 如果全部被勾选，则父级的父级的父级将被勾选
		var paretsElemLabel = $(this).parents(".items-input").parent(".list-item1-box").parent(".list-con").siblings('.items-input');
		var paretsElemSibling = $(this).parents(".items-input").parent(".list-item1-box").parent(".list-con");
			// console.log(paretsElemLabel.find('input[type=checkbox]').prop("checked"));
		var allTrueCheck = 0;
		var allCheckLen = paretsElemLabel.parent(".list-item1-box").siblings().length;
		if(paretsElemLabel.find('input[type=checkbox]').prop("checked")) {
			paretsElemLabel.parent(".list-item1-box").siblings().each(function(index, el) {
				
				if($(this).hasClass('list-item1-box')) {
					if($(this).children('.items-input').find('input[type=checkbox]').prop("checked")) {
						allTrueCheck++
					} 
				} else {
					if($(this).find('input[type=checkbox]').prop("checked")) {
						allTrueCheck++
					}
				}
			});	
			console.log(allTrueCheck);
			console.log(allCheckLen);
			if(allTrueCheck == allCheckLen) {
				console.log(paretsElemLabel.parent(".list-item1-box").parent(".list-con").siblings('.items-input'));
				paretsElemLabel.parent(".list-item1-box").parent(".list-con").siblings('.items-input').iCheck('check');
			} else {
				paretsElemLabel.parent(".list-item1-box").parent(".list-con").siblings('.items-input').iCheck('uncheck');
			}
		}
	} else {
		$(this).parents(".items-input").siblings('.list-con').addClass('none').find('.list-con').addClass('none');
		$(this).parents(".items-input").siblings('.list-con').find('input[type=checkbox]').iCheck('uncheck');
		$(this).parents(".items-input").find('.icons-btn').addClass('rotate');
		$(this).parent().parent(".items-input").siblings('.list-con').find('.icons-btn').addClass('rotate');
		// 当勾选取消时，更当前元素关联的上级部门都取消掉
		if(thisZIndex == 2) {
		// console.log($(this).parents(".list-con").siblings('label'));
			$(this).parents(".list-con").siblings('label').find('input[type=checkbox]').iCheck('uncheck');
		}
		if(thisZIndex == 3) {
			$(this).parents(".list-item1-box").parents(".list-con").siblings('label').find('input[type=checkbox]').iCheck('uncheck');
		}
	}
	allSelctCheck();
	allSelectPeoInfo()
});

// 点击部门里的联系人和ABCD分类的联系人
$(document).on('click', '#indexPage .item-input input[type=checkbox]', function(event) {
	if($(this).prop("checked")) {

		// 递进上一级排查是否全选
		var trueCheckNum = $(this).parent().parent(".item-input").siblings();
		var trueSibLen =  $(this).parent().parent(".item-input").siblings().length;
		var trueCheck = 0;	
		trueCheckNum.each(function(index, el) {
			if($(this).hasClass('list-item1-box')) {
				if($(this).children('.items-input').find('input[type=checkbox]').prop("checked")) {
					trueCheck++
				} 
			} else {
				if($(this).find('input[type=checkbox]').prop("checked")) {
					trueCheck++
				}
			}
		});
		if(trueSibLen == trueCheck) {
			$(this).parent().parent(".item-input").parent(".list-con").siblings('label').find('input[type=checkbox]').iCheck('check');
			var allCheckNum = $(this).parent().parent(".item-input").parent(".list-con").parent(".list-item1-box").siblings();
			var allSibLen =  $(this).parent().parent(".item-input").parent(".list-con").parent(".list-item1-box").siblings().length;
			var allTrueCheck = 0;
			allCheckNum.each(function(index, el) {
				if($(this).hasClass('list-item1-box')) {
					if($(this).children('.items-input').find('input[type=checkbox]').prop("checked")) {
						allTrueCheck++
					} 
				} else {
					if($(this).find('input[type=checkbox]').prop("checked")) {
						allTrueCheck++
					}
				}
			});
			if(allTrueCheck == allSibLen) {
				$(this).parent().parent(".item-input").parent(".list-con").parent(".list-item1-box").parent(".list-con").siblings('label').find('input[type=checkbox]').iCheck('check');
				var allParentCheckNum = $(this).parent().parent(".item-input").parent(".list-con").parent(".list-item1-box").parent(".list-con").parent(".list-item1-box").siblings();
				var allParentSibLen =  $(this).parent().parent(".item-input").parent(".list-con").parent(".list-item1-box").parent(".list-con").parent(".list-item1-box").siblings().length;
				var allParentTrueCheck = 0;
				allParentCheckNum.each(function(index, el) {
					if($(this).hasClass('list-item1-box')) {
						if($(this).children('.items-input').find('input[type=checkbox]').prop("checked")) {
							allParentTrueCheck++
						} 
					} else {
						if($(this).find('input[type=checkbox]').prop("checked")) {
							allParentTrueCheck++
						}
					}
				});
				if(allParentSibLen == allParentTrueCheck) {
					$(this).parent().parent(".item-input").parent(".list-con").parent(".list-item1-box").parent(".list-con").parent(".list-item1-box").parent(".list-con").siblings('label').find('input[type=checkbox]').iCheck('check');
				}
			}
		}
		allSelctCheck();
		
	} else {
		$(".all-input input[type=checkbox]").iCheck('uncheck');
		if($(this).parents(".list-con").length != 0 ) {
			$(this).parents(".list-con").siblings('label').find('input[type=checkbox]').iCheck('uncheck');
		} 
	}
	allSelectPeoInfo()
});
// 是否勾选全选的方法
function allSelctCheck() {
	var allNum = $(".list-item1 .weui-check,.list-item2 .weui-check").length;
	var num = $(".list-item1 input:checked,.list-item2 input:checked").length;
	// console.log(num);
	if(allNum == num ) {
		$(".all-input input[type=checkbox]").iCheck('check');
	} else {
		$(".all-input input[type=checkbox]").iCheck('uncheck');
	}

}
// 获取数据
// 选择人的逻辑代码
function allSelectPeoInfo() {
	// 清空默认值
	var allPeoId = [];
	var allSelctPeo = []; 
	var noRepeatId = [];
	// 遍历input里的属性值
	$("#indexPage .item-input").find('input[type=checkbox]').each(function(index, el) {
		if($(this).prop("checked")) {
			var thisPeoId = $(this).attr("peoId");
			// 判断当前的peoId是否重复
			var repeatBoolen = jQuery.inArray($(this).attr("peoId"), allPeoId);
			allPeoId.push(thisPeoId);
			// 如果重复则返回正数，如果不重复则返回-1则添加入数组	
			if(repeatBoolen == -1) {				
				var peoInfo = {
					surname:  $(this).parent("div").siblings('.touxiang').html(),
					fullname: $(this).parent("div").siblings("div:nth-child(3)").html(),
					department: $(this).parent("div").siblings("div.weui-cell__ft").html(),
					id: $(this).attr("peoId")
				}
				allSelctPeo.push(peoInfo);
				noRepeatId.push($(this).attr("peoId"));
			} 
		}
	});
	console.log(allSelctPeo);
	var list_tpl = $('#list_tpl1').html();
	var content = doT.template(list_tpl);
	$('#selectPage .content').html(content(allSelctPeo));
	$(".sel-btn strong,.show-peo-num strong").html($(".yxzr label").length);
}

// 点击已选的人，删除当前的人

$(document).on('click', '#selectPage label', function(event) {
	var thisPeoId = $(this).attr("peoid");
	$("#indexPage .item-input").find('input').each(function(index, el) {
		console.log($(this).attr("peoId"));
		if($(this).attr("peoId") == thisPeoId) {
			$(this).iCheck('uncheck');
			if($(this).parents(".list-con").length != 0 ) {
				$(this).parents(".list-con").siblings('label').find('input[type=checkbox]').iCheck('uncheck');
			} 
		}
	});
	// 删除当前的联系人
	$(this).remove();
	// 设置显示选择几人
	$(".sel-btn strong,.show-peo-num strong").html($(".yxzr label").length);
	
	// 当已选联系人为0，则直接下拉联系人页面
	if($(".yxzr label").length == 0) {
		$.closePopup()
	}
})