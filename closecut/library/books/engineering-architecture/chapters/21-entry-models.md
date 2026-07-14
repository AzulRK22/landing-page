# 21. Entry Models

`Entry` is the canonical memory aggregate. One entry represents one viewing memory, with media metadata, temporal context, optional reaction/rating/reflection, mood, rewatch semantics, cinema context, visibility, and Circle-sharing references. Quick Add and full journal flows create the same semantic aggregate at different completeness levels.

Local `LocalEntry`, remote `FirestoreEntryDTO`, and domain `Entry` are separate representations. Mappers must preserve stable identity, ownership, creation/update timestamps, deletion/tombstone state, and sharing intent. External TMDB metadata is a snapshot used to enrich memory; user-authored content remains authoritative.
