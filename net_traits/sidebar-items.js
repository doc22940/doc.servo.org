initSidebarItems({"constant":[["_IMPL_DESERIALIZE_FOR_CookieSource",""],["_IMPL_DESERIALIZE_FOR_CoreResourceMsg",""],["_IMPL_DESERIALIZE_FOR_CustomResponse",""],["_IMPL_DESERIALIZE_FOR_CustomResponseMediator",""],["_IMPL_DESERIALIZE_FOR_FetchChannels",""],["_IMPL_DESERIALIZE_FOR_FetchMetadata",""],["_IMPL_DESERIALIZE_FOR_FetchResponseMsg",""],["_IMPL_DESERIALIZE_FOR_FilteredMetadata",""],["_IMPL_DESERIALIZE_FOR_IncludeSubdomains",""],["_IMPL_DESERIALIZE_FOR_LoadContext",""],["_IMPL_DESERIALIZE_FOR_MessageData",""],["_IMPL_DESERIALIZE_FOR_Metadata",""],["_IMPL_DESERIALIZE_FOR_NetworkError",""],["_IMPL_DESERIALIZE_FOR_ReferrerPolicy",""],["_IMPL_DESERIALIZE_FOR_ResourceCorsData",""],["_IMPL_DESERIALIZE_FOR_ResourceFetchTiming",""],["_IMPL_DESERIALIZE_FOR_ResourceThreads",""],["_IMPL_DESERIALIZE_FOR_ResourceTimingType",""],["_IMPL_DESERIALIZE_FOR_WebSocketDomAction",""],["_IMPL_DESERIALIZE_FOR_WebSocketNetworkEvent",""],["_IMPL_DESERIALIZE_FOR_WebrenderImageMsg",""],["_IMPL_DESERIALIZE_FOR_WebrenderIpcSender",""],["_IMPL_SERIALIZE_FOR_CookieSource",""],["_IMPL_SERIALIZE_FOR_CoreResourceMsg",""],["_IMPL_SERIALIZE_FOR_CustomResponse",""],["_IMPL_SERIALIZE_FOR_CustomResponseMediator",""],["_IMPL_SERIALIZE_FOR_FetchChannels",""],["_IMPL_SERIALIZE_FOR_FetchMetadata",""],["_IMPL_SERIALIZE_FOR_FetchResponseMsg",""],["_IMPL_SERIALIZE_FOR_FilteredMetadata",""],["_IMPL_SERIALIZE_FOR_IncludeSubdomains",""],["_IMPL_SERIALIZE_FOR_LoadContext",""],["_IMPL_SERIALIZE_FOR_MessageData",""],["_IMPL_SERIALIZE_FOR_Metadata",""],["_IMPL_SERIALIZE_FOR_NetworkError",""],["_IMPL_SERIALIZE_FOR_ReferrerPolicy",""],["_IMPL_SERIALIZE_FOR_ResourceCorsData",""],["_IMPL_SERIALIZE_FOR_ResourceFetchTiming",""],["_IMPL_SERIALIZE_FOR_ResourceThreads",""],["_IMPL_SERIALIZE_FOR_ResourceTimingType",""],["_IMPL_SERIALIZE_FOR_WebSocketDomAction",""],["_IMPL_SERIALIZE_FOR_WebSocketNetworkEvent",""],["_IMPL_SERIALIZE_FOR_WebrenderImageMsg",""],["_IMPL_SERIALIZE_FOR_WebrenderIpcSender",""]],"enum":[["CookieSource","The creator of a given cookie"],["CoreResourceMsg",""],["FetchChannels","IPC channels to communicate with the script thread about network or DOM events."],["FetchMetadata",""],["FetchResponseMsg",""],["FilteredMetadata",""],["IncludeSubdomains",""],["LoadContext","A loading context, for context-specific sniffing, as defined in https://mimesniff.spec.whatwg.org/#context-specific-sniffing"],["MessageData",""],["NetworkError","Network errors that have to be exported out of the loaders"],["RedirectEndValue",""],["RedirectStartValue",""],["ReferrerPolicy","Policies for providing a referrer header for a request"],["ResourceAttribute",""],["ResourceTimeValue",""],["ResourceTimingType",""],["WebSocketDomAction",""],["WebSocketNetworkEvent",""],["WebrenderImageMsg",""]],"fn":[["fetch_async","Instruct the resource thread to make a new request."],["http_percent_encode",""],["trim_http_whitespace","Normalize `slice`, as defined by the Fetch Spec."]],"mod":[["blob_url_store",""],["filemanager_thread",""],["image","Image handling."],["image_cache",""],["pub_domains","Implementation of public domain matching."],["quality",""],["request",""],["response","The Response object resulting from a fetch operation"],["storage_thread",""]],"struct":[["CustomResponse",""],["CustomResponseMediator",""],["DiscardFetch","A fetch task that discards all data it's sent, useful when speculatively prefetching data that we don't need right now, but might need in the future."],["Metadata","Metadata about a loaded resource, such as is obtained from HTTP headers."],["ResourceCorsData",""],["ResourceFetchTiming",""],["ResourceThreads",""],["WebrenderIpcSender",""]],"trait":[["Action",""],["FetchResponseListener",""],["FetchTaskTarget",""],["IpcSend","Abstraction of the ability to send a particular type of message, used by net_traits::ResourceThreads to ease the use its IpcSender sub-fields XXX: If this trait will be used more in future, some auto derive might be appealing"]],"type":[["CoreResourceThread","Handle to a resource thread"],["IpcSendResult",""]]});