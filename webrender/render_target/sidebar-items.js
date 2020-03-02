initSidebarItems({"constant":[["IDEAL_MAX_TEXTURE_DIMENSION","According to apitrace, textures larger than 2048 break fast clear optimizations on some intel drivers. We sometimes need to go larger, but we try to avoid it. This can go away when proper tiling support lands, since we can then split large primitives across multiple textures."],["STYLE_MASK",""],["STYLE_SOLID",""],["TEXTURE_DIMENSION_MASK","If we ever need a larger texture than the ideal, we better round it up to a reasonable number in order to have a bit of leeway in placing things inside."],["_IMPL_SERIALIZE_FOR_AlphaRenderTarget",""],["_IMPL_SERIALIZE_FOR_BlitJob",""],["_IMPL_SERIALIZE_FOR_BlitJobSource",""],["_IMPL_SERIALIZE_FOR_ColorRenderTarget",""],["_IMPL_SERIALIZE_FOR_FrameOutput",""],["_IMPL_SERIALIZE_FOR_GradientJob",""],["_IMPL_SERIALIZE_FOR_LineDecorationJob",""],["_IMPL_SERIALIZE_FOR_PictureCacheTarget",""],["_IMPL_SERIALIZE_FOR_RenderTargetIndex",""],["_IMPL_SERIALIZE_FOR_RenderTargetKind",""],["_IMPL_SERIALIZE_FOR_RenderTargetList",""],["_IMPL_SERIALIZE_FOR_TextureCacheRenderTarget",""]],"enum":[["BlitJobSource",""],["RenderTargetKind","A tag used to identify the output format of a `RenderTarget`."]],"fn":[["add_blur_instances",""],["add_scaling_instances",""],["add_svg_filter_instances",""]],"struct":[["AlphaRenderTarget","Contains the work (in the form of instance arrays) needed to fill an alpha output surface (R8)."],["BlitJob",""],["ColorRenderTarget","Contains the work (in the form of instance arrays) needed to fill a color color output surface (RGBA8)."],["FrameOutput","Frame output information for a given pipeline ID. Storing the task ID allows the renderer to find the target rect within the render target that this pipeline exists at."],["GradientJob",""],["LineDecorationJob",""],["PictureCacheTarget",""],["RenderTargetContext",""],["RenderTargetIndex","Identifies a given `RenderTarget` in a `RenderTargetList`."],["RenderTargetList","A series of `RenderTarget` instances, serving as the high-level container into which `RenderTasks` are assigned."],["TextureCacheRenderTarget",""]],"trait":[["RenderTarget","Represents a number of rendering operations on a surface."]]});