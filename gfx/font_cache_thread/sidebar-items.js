initSidebarItems({"constant":[["_IMPL_DESERIALIZE_FOR_Command",""],["_IMPL_DESERIALIZE_FOR_FontCacheThread",""],["_IMPL_DESERIALIZE_FOR_FontTemplateInfo",""],["_IMPL_DESERIALIZE_FOR_LowercaseString",""],["_IMPL_DESERIALIZE_FOR_Reply",""],["_IMPL_SERIALIZE_FOR_Command",""],["_IMPL_SERIALIZE_FOR_FontCacheThread",""],["_IMPL_SERIALIZE_FOR_FontTemplateInfo",""],["_IMPL_SERIALIZE_FOR_LowercaseString",""],["_IMPL_SERIALIZE_FOR_Reply",""]],"enum":[["Command","Commands that the FontContext sends to the font cache thread."],["Reply","Reply messages sent from the font cache thread to the FontContext caller."]],"fn":[["populate_generic_fonts",""]],"struct":[["FontCache","The font cache thread itself. It maintains a list of reference counted font templates that are currently in use."],["FontCacheThread","The public interface to the font cache thread, used by per-thread `FontContext` instances (via the `FontSource` trait), and also by layout."],["FontTemplateInfo",""],["FontTemplates","A list of font templates that make up a given font family."],["LowercaseString",""]]});