/**
 * Created by Administrator on 2018/4/19.
 */
'user strict';

(function(angular){
	var http =angular.module('movie.service.http',[]);
	http.service('HttpService',['$document','$window',function($document,$window){
		this.jsonp = function(url, data, callback){
			var cbFuncName = 'my_json_cb_'+Math.random().toString().replace('.','');


			var querryString = url;
			querryString += url.indexOf('?')==-1?'?':'&';
			//console.log("whar?");
			//console.log(querryString);
			//console.log(url);
			//console.log(url.indexOf('?') == -1 ? '?':'&');
            //
			//console.log( "sss" + url.indexOf('?')==-1?'?':'&');
            //
			//console.log(url + '?');

			querryString += 'callback='+cbFuncName;
			for(item in data){
				querryString += '&'+item + '=' + data[item];
			}
			var scriptElement = $document[0].createElement("script");
			scriptElement.src = querryString;
			$window[cbFuncName] = function(data){
				callback(data);
				$document[0].body.removeChild(scriptElement);
			};
			$document[0].body.appendChild(scriptElement);
		}


	}])

})(angular)
