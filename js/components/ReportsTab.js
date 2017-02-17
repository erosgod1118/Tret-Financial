var React = require('react');

var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Panel = ReactBootstrap.Panel;

var StackedBarChart = require('../components/StackedBarChart');

module.exports = React.createClass({
	displayName: "ReportsTab",
	getInitialState: function() {
		return { };
	},
	componentWillMount: function() {
		this.props.onFetchReport("monthly_expenses");
	},
	componentWillReceiveProps: function(nextProps) {
		if (nextProps.reports['monthly_expenses'] && !nextProps.selectedReport.report) {
			this.props.onSelectReport(nextProps.reports['monthly_expenses'], []);
		}
	},
	onSelectSeries: function(series) {
		if (series == this.props.selectedReport.report.topLevelAccountName)
			return;
		var seriesTraversal = this.props.selectedReport.seriesTraversal.slice();
		seriesTraversal.push(series);
		this.props.onSelectReport(this.props.reports[this.props.selectedReport.report.ReportId], seriesTraversal);
	},
	render: function() {
		var report = [];
		if (this.props.selectedReport.report) {
			var titleTracks = [];
			var seriesTraversal = [];

			for (var i = 0; i < this.props.selectedReport.seriesTraversal.length; i++) {
				var name = this.props.selectedReport.report.Title;
				if (i > 0)
					name = this.props.selectedReport.seriesTraversal[i-1];

				// Make a closure for going up the food chain
				var self = this;
				var navOnClick = function() {
					var onSelectReport = self.props.onSelectReport;
					var report = self.props.reports[self.props.selectedReport.report.ReportId];
					var mySeriesTraversal = seriesTraversal.slice();
					return function() {
						onSelectReport(report, mySeriesTraversal);
					};
				}();
				titleTracks.push((
					<Button bsStyle="link"
					onClick={navOnClick}>
					{name}
					</Button>
				));
				titleTracks.push((<span>/</span>));
				seriesTraversal.push(this.props.selectedReport.seriesTraversal[i]);
			}
			if (titleTracks.length == 0)
				titleTracks.push((
					<Button bsStyle="link">
					{this.props.selectedReport.report.Title}
					</Button>
				));
			else
				titleTracks.push((
					<Button bsStyle="link">
					{this.props.selectedReport.seriesTraversal[this.props.selectedReport.seriesTraversal.length-1]}
					</Button>
				));

			report = (<Panel header={titleTracks}>
				<StackedBarChart
					report={this.props.selectedReport.report}
					onSelectSeries={this.onSelectSeries}
					seriesTraversal={this.props.selectedReport.seriesTraversal} />
				</Panel>
			);
		}
		return (
			<div>
				{report}
			</div>
		);
	}
});
