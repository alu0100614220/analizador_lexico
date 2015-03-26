var assert = chai.assert;

suite('Aanalizador_Lexico_JS', function() {
	test('Funcionamiento funcion tokens', function() {
	      var entrada = "var aux = \"prueba\";";
	      var seEspera = '[{"type":"name","value":"var","from":0,"to":3},{"type":"name","value":"aux","from":4,"to":7},{"type":"operator","value":"=","from":8,"to":9},{"type":"string","value":"prueba","from":10,"to":18},{"type":"operator","value":";","from":18,"to":19}]';
	      var salida = JSON.stringify(entrada.tokens());
	      assert.deepEqual(salida, seEspera);

	});

	test('Funcionamiento parser', function() {
	      var parse = make_parse();
	      var entrada = "var aux = \"prueba\";";
	      var seEspera = '{\n    "value": "=",\n    "arity": "binary",\n    "first": {\n        "value": "aux",\n        "arity": "name"\n    },\n    "second": {\n        "value": "prueba",\n        "arity": "literal"\n    }\n}';
	      var salida, tree;
	      try {
		  tree = parse(entrada);
		  salida = JSON.stringify(tree, ['key', 'name', 'message',
		      'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
	      } catch (e) {
		  salida = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
		        'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
	      }
	      assert.deepEqual(salida, seEspera);

	});

	test('Funcionamiento parser con numeros', function() {
	      var parse = make_parse();
	      var entrada = "var aux = 7 + 3;";
	      var seEspera = '{\n    "value": "=",\n    "arity": "binary",\n    "first": {\n        "value": "aux",\n        "arity": "name"\n    },\n    "second": {\n        "value": "+",\n        "arity": "binary",\n        "first": {\n            "value": 7,\n            "arity": "literal"\n        },\n        "second": {\n            "value": 3,\n            "arity": "literal"\n        }\n    }\n}';
	      var salida, tree;
	      try {
		  tree = parse(entrada);
		  salida = JSON.stringify(tree, ['key', 'name', 'message',
		      'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
	      } catch (e) {
		  salida = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
		        'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
	      }
	      assert.deepEqual(salida, seEspera);

	});

	test('Funcionamiento parser con operadores dobles', function() {
	      var parse = make_parse();
	      var entrada = "var aux = 7 + 3;\n aux += 2;";
	      var seEspera = '[\n    {\n        "value": "=",\n        "arity": "binary",\n        "first": {\n            "value": "aux",\n            "arity": "name"\n        },\n        "second": {\n            "value": "+",\n            "arity": "binary",\n            "first": {\n                "value": 7,\n                "arity": "literal"\n            },\n            "second": {\n                "value": 3,\n                "arity": "literal"\n            }\n        }\n    },\n    {\n        "value": "+=",\n        "arity": "binary",\n        "first": {\n            "value": "aux",\n            "arity": "name"\n        },\n        "second": {\n            "value": 2,\n            "arity": "literal"\n        }\n    }\n]';
	      var salida, tree;
	      try {
		  tree = parse(entrada);
		  salida = JSON.stringify(tree, ['key', 'name', 'message',
		      'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
	      } catch (e) {
		  salida = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
		        'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
	      }
	      assert.deepEqual(salida, seEspera);

	});

	test('Error funcionamiento parser', function() {
	      var parse = make_parse();
	      var entrada = "var aux = as456rftsd??$?%;";
	      var seEspera = "\"Syntax error near \'??$?%;\'\"";
	      var salida, tree;
	      try {
		  tree = parse(entrada);
		  salida = JSON.stringify(tree, ['key', 'name', 'message',
		      'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
	      } catch (e) {
		  salida = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
		        'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
	      }
	      assert.deepEqual(salida, seEspera);
	});
});