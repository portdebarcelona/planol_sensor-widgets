/**
 * @author Oscar Fonts <oscar.fonts@geomati.co>
 */
define(['SOS', 'jqgrid', 'css!widget/table.css'], function(SOS) {

	var inputs = ["title", "service", "offering", "features", "properties", "time_start", "time_end"];
	var propertyNames = null;

	return {
		inputs: inputs,
		init: function(config, renderTo) {
			SOS.setUrl(config.service);
			read();

			function getPropertyNames(next) {
				next();
			}

			function read() {
				var features = isArray(config.features) ? config.features : JSON.parse(config.features);
				var properties = isArray(config.properties) ? config.properties : JSON.parse(config.properties);
				var time_range = (config.time_start && config.time_end) ? [config.time_start, config.time_end] : null;
				SOS.getObservation(config.offering, features, properties, time_range, draw);
			}

			function isArray(obj) {
				return Object.prototype.toString.call(obj) === '[object Array]';
			}

			function draw(observations) {
				function d(n) {
					return n < 10 ? "0" + n : "" + n;
				};

				// Get tabular data from observations
				var rows = [];
				for (i in observations) {
					var obs = observations[i];
					var time = new Date(obs.resultTime);
					time = time.getUTCFullYear() + "/" + d(time.getUTCMonth() + 1) + "/" + d(time.getUTCDate()) + " " + d(time.getUTCHours()) + ":" + d(time.getUTCMinutes()) + ":" + d(time.getUTCSeconds());

					var result = obs.result;

					rows.push({
						time: time,
						feature: obs.featureOfInterest.name.value,
						property: obs.observableProperty,
						value: result.hasOwnProperty("value") ? result.value : result,
						uom: result.hasOwnProperty("uom") ? result.uom : "(N/A)"
					});
				}

				if (propertyNames) {
					createGrid(rows);
				} else if (observations.length) {
					getPropertyNames(observations[0].procedure, rows);
				}
			};

			function getPropertyNames(procedure, rows) {
				SOS.describeSensor(procedure, function(description) {
					var properties = description.hasOwnProperty("ProcessModel") ? description.ProcessModel.outputs.OutputList.output : description.System.outputs.OutputList.output;
					properties = properties instanceof Array ? properties : [properties];
					var types = ["Quantity", "Count", "Boolean", "Category", "Text", "ObservableProperty"];
					propertyNames = [];

					for (i in properties) {
						var property = properties[i];
						for (i in types) {
							var type = types[i];
							if (property.hasOwnProperty(type)) {
								property.id = property[type].definition;
							}
						}
						propertyNames[property.id] = property.name;
					}
					createGrid(rows);
				});
			};

			function createGrid(rows) {
				for (var i in rows) {
					var row = rows[i];
					if (propertyNames[row.property]) {
						row.property = propertyNames[row.property];
					}
				}

				// Render data as HTML table
				/* Plain old table
				var table = "<table class='results'>" + "<th>Time</th><th>Feature</th><th>Property</th><th>Value</th><th>Unit</th>";
				for (var i in rows) {
					var tr = "";
					for (var key in rows[i]) {
						tr += "<td>" + rows[i][key] + "</td>";
					}
					table += "<tr>" + tr + "</tr>";
				}
				table += "</table>";
				*/

				// jqGrid table
				var title = config.title ? "<h3>" + config.title + "</h3>" : "";
				var table = "<table id='grid'></table>";
				renderTo.innerHTML = title + table;

				jQuery("#grid").jqGrid({
					datatype: "local",
					height: 'auto',
					width: '100%',
					caption: "Results",
					shrinkToFit: true,
					data: rows,
					colNames: ['Time', 'Feature', 'Property', 'Value', 'Unit'],
					colModel: [{
						name: 'time',
						index: 'time',
						width: '160'
					}, {
						name: 'feature',
						index: 'feature',
						width: '150'
					}, {
						name: 'property',
						index: 'property',
						width: '150'
					}, {
						name: 'value',
						index: 'value',
						width: '80',
						align: "right"
					}, {
						name: 'uom',
						index: 'uom',
						width: '60'
					}]
				});
			}
		}
	};

});
