(function() {var implementors = {};
implementors["futures_channel"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.Receiver.html\" title=\"struct futures_channel::mpsc::Receiver\">Receiver</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::mpsc::Receiver"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.UnboundedReceiver.html\" title=\"struct futures_channel::mpsc::UnboundedReceiver\">UnboundedReceiver</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::mpsc::UnboundedReceiver"]}];
implementors["futures_core"] = [];
implementors["glib"] = [{"text":"impl&lt;F, T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"glib/struct.SourceStream.html\" title=\"struct glib::SourceStream\">SourceStream</a>&lt;F, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"struct\" href=\"futures_channel/mpsc/struct.UnboundedSender.html\" title=\"struct futures_channel::mpsc::UnboundedSender\">UnboundedSender</a>&lt;T&gt;) -&gt; <a class=\"struct\" href=\"glib/struct.Source.html\" title=\"struct glib::Source\">Source</a> + 'static,&nbsp;</span>","synthetic":false,"types":["glib::source_futures::SourceStream"]}];
implementors["gstreamer"] = [{"text":"impl <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"gstreamer/bus/struct.BusStream.html\" title=\"struct gstreamer::bus::BusStream\">BusStream</a>","synthetic":false,"types":["gstreamer::bus::BusStream"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()