initSidebarItems({"constant":[["MAX_PRIM_SUB_DEPS","The maximum number of sub-dependencies (e.g. clips, transforms) we can handle per-primitive. If a primitive has more than this, it will invalidate every frame."],["MAX_SURFACE_SIZE","The maximum size per axis of a surface, in WorldPixel coordinates."],["ROOT_SURFACE_INDEX",""],["TILE_SIZE_DEFAULT","The size in device pixels of a normal cached tile."],["TILE_SIZE_SCROLLBAR_HORIZONTAL","The size in device pixels of a tile for horizontal scroll bars"],["TILE_SIZE_SCROLLBAR_VERTICAL","The size in device pixels of a tile for vertical scroll bars"],["_IMPL_SERIALIZE_FOR_BlitReason",""],["_IMPL_SERIALIZE_FOR_ClusterFlags",""],["_IMPL_SERIALIZE_FOR_OrderedPictureChild",""],["_IMPL_SERIALIZE_FOR_Picture3DContext",""],["_IMPL_SERIALIZE_FOR_PictureCompositeMode",""],["_IMPL_SERIALIZE_FOR_PictureOptions",""],["_IMPL_SERIALIZE_FOR_PicturePrimitive",""],["_IMPL_SERIALIZE_FOR_PrimitiveCluster",""],["_IMPL_SERIALIZE_FOR_PrimitiveList",""],["_IMPL_SERIALIZE_FOR_RasterConfig",""],["_IMPL_SERIALIZE_FOR_RecordedDirtyRegion",""],["_IMPL_SERIALIZE_FOR_ResolvedSurfaceTexture",""],["_IMPL_SERIALIZE_FOR_RetainedTiles",""],["_IMPL_SERIALIZE_FOR_SurfaceIndex",""],["_IMPL_SERIALIZE_FOR_TileId",""]],"enum":[["BackdropKind",""],["InvalidationReason","Debugging information about why a tile was invalidated"],["OpacityBinding","Information stored in a tile descriptor for an opacity binding."],["Picture3DContext","Enum value describing the place of a picture in a 3D context."],["PictureCompositeMode","Specifies how this Picture should be composited onto the target it belongs to."],["PrimitiveCompareResult","The result of a primitive dependency comparison. Size is a u8 since this is a hot path in the code, and keeping the data small is a performance win."],["PrimitiveListPosition","Where to insert a prim instance in a primitive list."],["ResolvedSurfaceTexture","This is the same as a `SurfaceTextureDescriptor` but has been resolved into a texture cache handle (if appropriate) that can be used by the batching and compositing code in the renderer."],["SubpixelMode","Specify whether a surface allows subpixel AA text rendering."],["SurfaceTextureDescriptor","A descriptor for the kind of texture that a picture cache tile will be drawn into."],["TileModification","The kind of modification that a tile wants to do"],["TileNodeKind","Details for a node in a quadtree that tracks dirty rects for a tile."],["TileSurface","The backing surface for this tile."],["TransformKey","A comparable / hashable version of a coordinate space mapping. Used to determine if a transform dependency for a tile has changed."]],"fn":[["calculate_screen_uv",""],["calculate_uv_rect_kind",""],["clamp",""],["clampf",""],["create_raster_mappers",""],["get_transform_key",""],["tile_cache_sizes",""]],"static":[["NEXT_TILE_ID","Used to get unique tile IDs, even when the tile cache is destroyed between display lists / scenes."]],"struct":[["BackdropInfo","Stores information about the calculated opaque backdrop of this slice."],["BlitReason","A set of flags describing why a picture may need a backing surface."],["ClusterFlags","A set of flags describing why a picture may need a backing surface."],["CompareHelper","A small helper to compare two arrays of primitive dependencies."],["DirtyRegion","Represents the dirty region of a tile cache picture."],["DirtyRegionRect","Stores both the world and devices rects for a single dirty rect."],["MatrixKey","A comparable transform matrix, that compares with epsilon checks."],["OpacityBindingInfo","Information about the state of an opacity binding."],["OrderedPictureChild","Information about a preserve-3D hierarchy child that has been plane-split and ordered according to the view direction."],["PictureCacheState",""],["PictureInfo","Information about a picture that is pushed / popped on the PictureUpdateState during picture traversal pass."],["PictureOptions","Defines configuration options for a given picture primitive."],["PicturePrimitive",""],["PictureUpdateState","Maintains a stack of picture and surface information, that is used during the initial picture traversal."],["PrimitiveCluster","Descriptor for a cluster of primitives. For now, this is quite basic but will be extended to handle more spatial clustering of primitives."],["PrimitiveComparer","A helper struct to compare a primitive and all its sub-dependencies."],["PrimitiveComparisonKey","A key for storing primitive comparison results during tile dependency tests."],["PrimitiveDependencyIndex","An index into the prims array in a TileDescriptor."],["PrimitiveDependencyInfo","Information about the dependencies of a single primitive instance."],["PrimitiveDescriptor","Defines a key that uniquely identifies a primitive instance."],["PrimitiveList","A list of primitive instances that are added to a picture This ensures we can keep a list of primitives that are pictures, for a fast initial traversal of the picture tree without walking the instance list."],["RasterConfig",""],["RecordedDirtyRegion","A recorded copy of the dirty region for exporting to test infrastructure."],["RetainedTiles","Stores a list of cached picture tiles that are retained between new scenes."],["SpatialNodeDependency","Information about the state of a spatial node value"],["SurfaceIndex",""],["SurfaceInfo","Information about an offscreen surface. For now, it contains information about the size and coordinate system of the surface. In the future, it will contain information about the contents of the surface, which will allow surfaces to be cached / retained between frames and display lists."],["SurfaceRenderTasks",""],["Tile","Information about a cached tile."],["TileCacheInstance","Represents a cache of tiles that make up a picture primitives."],["TileCoordinate","Unit for tile coordinates."],["TileDescriptor","Uniquely describes the content of this tile, in a way that can be (reasonably) efficiently hashed and compared."],["TileId","A stable ID for a given tile, to help debugging. These are also used as unique identfiers for tile surfaces when using a native compositor."],["TileNode","A node in the dirty rect tracking quadtree."],["TilePostUpdateContext",""],["TilePostUpdateState",""],["TilePreUpdateContext",""]],"type":[["TileOffset",""],["TileRect",""],["TileSize",""]]});