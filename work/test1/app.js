function Controller($scope, $element, $compile) {
	console.log('init controller');
	var count = 0;
	$scope.age = 21;
	$scope.setName = function() {
		$scope.name = "angular " + ++count;
	}
	$scope.addInterpolation = function() {
		var p = document.createElement('p');
		p.setAttribute('id', 'p2');
		var t = document.createTextNode('a new node "{{name}}" inserted');
		p.appendChild(t);
		$element[0].appendChild(p);
	}
	$scope.changeNode = function() {
		var p = document.getElementById('p');
		var t = document.createTextNode('node changed "{{name}}"');
		p.appendChild(t);
	}
	$scope.compile = function() {
		//$compile(document.getElementById('p'))($scope);
		//$compile(document.getElementById('p2'))($scope);
		$compile($element[0])($scope);
	}
}
