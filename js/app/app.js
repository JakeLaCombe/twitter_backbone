var com = com || {};
com.apress = com.apress || {};
com.apress.view = com.apress.view || {};

var timelineView = new com.apress.view.TimelineView();

$(function() {
  var timelineView = new com.apress.view.TimelineView(),
      router = new com.apress.router.AppRouter();

  Backbone.history.start();
});
