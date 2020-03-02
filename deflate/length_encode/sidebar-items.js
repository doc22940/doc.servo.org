initSidebarItems({"constant":[["COPY_PREVIOUS",""],["MIN_REPEAT",""],["REPEAT_ZERO_3_BITS",""],["REPEAT_ZERO_7_BITS",""]],"enum":[["EncodedLength","An enum representing the different types in the run-length encoded data used to encode huffman table lengths"]],"fn":[["encode_lengths_m","Run-length encodes the lengths of the values in `lengths` according to the deflate specification. This is used for writing the code lengths for the huffman tables for the deflate stream."],["huffman_lengths_from_frequency_m","Generate a set of canonical huffman lengths from the given frequencies, with a maximum length of `max_len`. The lengths are put in the lens slice parameter. Unused lengths are set to 0."],["not_max_repetitions","Convenience function to check if the repeat counter should be incremented further"],["update_out_and_freq","Push an `EncodedLength` to the vector and update the frequency table."]],"mod":[["in_place",""]],"type":[["LeafVec",""]]});