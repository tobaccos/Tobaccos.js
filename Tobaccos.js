(function(window, undefined) {
	var $ = Tobaccos = function() {
		return new Tobaccos.fn.init()
	};
	Tobaccos.fn = Tobaccos.prototype = {
		init: function() {
			return this
		},
		//添加事件
		bind: function(elem, type, handler) {
			if(elem.addEventListener) {
				elem.addEventListener(type, handler, false);
			} else if(elem.attachEvent) {
				//IE
				elem.attachEvent("on" + type, handler);
			} else {
				elem["on" + type] = handler;
			};
		},
		//删除事件
		unbind: function(elem, type, handler) {
			if(elem.removeEventListener) {
				elem.removeEventListener(type, handler, false);
			} else if(elem.detachEvent) {
				//IE
				elem.detachEvent("on" + type, handler)
			} else {
				elem["on" + type] = handler;
			};
		},
		//获取事件
		getEvent: function(event) {
			return event ? event : window.event;
		},
		//获取事件目标
		getTarget: function(event) {
			return event.target || event.srcElement;
		},
		//相关元素
		relatedTarget: function(event) {
			if(event.relatedTarget) {
				return event.relatedTarget;
			} else if(event.toElement) {
				return event.toElement;
			} else if(event.formElement) {
				return event.formElement;
			} else {
				return null;
			};
		},
		//阻止默认行为
		preventDefault: function(event) {
			if(event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
		},
		//取消捕获/冒泡
		cancelBubble: function(event) {
			if(event.stopPropagation) {
				event.stopPropagation();
			} else {
				event.cancelBubble = true;
			};
		},
		//获取鼠标按钮
		getMouseButton: function(event) {
			if(document.implementation.hasFeature("MouseEvents", "2.0")) {
				return event.button;
			} else {
				switch(event.button) {
					case 0:
					case 1:
					case 3:
					case 5:
					case 7:
						return 0;
					case 2:
					case 6:
						return 2;
					case 4:
						return 1;
				}
			};
		},
		//获取键盘code
		getKeyCode: function(event) {
			return event.keyCode
		},
		//获取键盘区域
		getDirection: function(event) {
			var keyCode = event.keyCode || event.which;
			switch(keyCode) {
				case 1:
				case 38:
				case 269: //up
					return 'up';
					break;
				case 2:
				case 40:
				case 270:
					return 'down';
					break;
				case 3:
				case 37:
				case 271:
					return 'left';
					break;
				case 4:
				case 39:
				case 272:
					return 'right';
					break;
				case 339: //exit
				case 240: //back
					return 'back';
					break;
			}
		},
		//		数组去重
		deRepeat: function(arr) {
			var i, num = arr.length;
			var arr1 = {};
			for(i = 0; i < num; i++) {
				arr1[arr[i]] = i;

			};
			return Object.keys(arr1);
		},
//				字母所在的位置
				placeAt: {
					"0": function(str, word) {
						var length;
						var arr1 = str.split("");
						var arr2 = [];
						for(var i = 0; length = arr1.length, i < length; i++) {
							if(arr1[i] == word) {
								arr2.push(i);
		
							}
						}
						return arr2
					},
					"1": function(str, word) {
						var length;
						var arr = [];
						var num = 0;
						for(var i=0;length=str.length,i<length;){
							if(str.indexOf(word,num)>-1){
								arr.push(str.indexOf(word,nm));
								num=str.indexOf(word,num)+1;
							}else{
								i++
							}
						}
					}
		
				},
		//	排序
		sort: { //快速排序
			quick: function(arr) {

				if(arr.length <= 1) {
					return arr
				}
				var index = Math.floor(arr.length / 2);
				var value = arr.splice(index, 1);
				var left = [];
				var right = [];
				for(var i = 0; i < arr.length; i++) {
					arr[i] < value ? left.push(arr[i]) : right.push(arr[i])
				}
				return Tobaccos.fn.sort.quick(left).concat(value, Tobaccos.fn.sort.quick(right))
			},
			bubble: function(arr) {
				for(var i = 0; i < arr.length; i++) {
					for(var j = 0; j < arr.length - i; j++) {
						if(arr[j] > arr[j + 1]) {
							var temp = arr[j];
							arr[j] = arr[j + 1];
							arr[j + 1] = temp;
						}
					}
				}

				return arr;
			}
		},

		//		判断一个数字是不是质数
		isPrimeNum: function(num) {
			for(var i = 2; i < num; i++) {
				if(num % i == 0) {
					return false;
				}
			};
			return true;
		},
		//	阶乘
		factorial: function(num) {
			if(num < 0) {
				return -1
			} else if(num === 0 || num === 1) {
				return 1
			} else {
				for(var i = 0; i < num; i++) {

					num *= (num - 1)
				}
			}
			return num
		},
		//		累加
		sum: function(arr) {
			if(arr.length = 1) {
				return arr
			} else {
				arr.reduce(function(x, y) {
					return x + y
				})
			}
		},
		//斐波拉契数列
		fibonacci: function(count) {
			var count = count * 1,
				tailFactorical = function(curr, next, count) {
					if(count === 0) {
						return curr;
					} else {
						return tailFactorical(next, curr + next, count - 1)
					}
				}
			return tailFactorical(1, 1, count)

		},
		//		是否排序
		isSorted: function(arr) {
				var arr1 = Tobaccos.prototype.sort["quick"](arr);
				return arr == arr1 ? true : false
			}

			,

		//		字符串翻转
		reverse: function(str) {
			//			return str.split('').reverse().join('')
			var arr = str.split('');
			var arr1 = [];
			for(var i = 0; i < arr.length; i++) {
				var key = arr.length - 1 - i;
				arr1[i] = arr[key]
			}
			return arr1.join("")
		},
		indexOf: function(arr, str) {
				for(var i = 0; i < arr.length; i++) {
					if(arr[i] == str) {
						return i
					}
				}
			}

			,
		//		是否对称
		isPalindrome: function(str) {
			return str == str.split('').reverse().join('') ? true : false
		},

		//		是否平衡(有问题)
		isBalanced: function(str) {
			var arr = str.split('');
			var arr1 = [];

			for(var i = 0; i < arr.length; i++) {
				if(arr[i] == "{" || arr[i] == "}") {
					arr1.push(arr[i])
				}
			};
			console.log(arr1);
			if(arr1.length % 2 == 1) {
				return false
			} else {
				var index = arr1.length / 2;
				var arrL = arr1.splice(0, index);

				if(arrL.indexOf("}") > -1 || arr1.indexOf("{") > -1) {
					return false
				} else {
					return true
				}
			}
		},

		//		深度复制

		assignDeep: function(obj, obj1) {
			function interof(obj, obj1) {

				for(var i in obj) {
					for(var j in obj1) {
						if(i == j) {
							if((typeof obj[i] == "object") && (typeof obj1[j] == "object")) {
								interof(obj[i], obj1[j])
							} else {
								obj[j] = obj1[j]
							}
						}else{
							if(typeof obj1[j]!="object")
							obj[j]=obj1[j]
						}
						
					}
				}

			}
			interof(obj, obj1)
			return obj
		}

	}

	Tobaccos.fn.init.prototype = Tobaccos.prototype

	return Tobaccos
})(window)