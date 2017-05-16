Best Practices and Test Scenarios for a TIE Server Consumer
===========================================================

General practices
*****************
* Consumer must not expect any given order of object attributes in the TIE server JSON response (see RFC4627 for more details).
* Consumer must provide as much metadata as available if requested to do so by the TIE server in the reputation response ("submitMetaData": 1). Metadata is meaningful context used by the Security Administrator to make an informed decision about the reputation of an object.
* Consumer must ignore any attributes or values provided in TIE server responses which the consumer is not expecting or capable to address. This is to ensure forwards compatibility of the TIE server API.
* Consumer must properly handle error responses and timeout

.. _caching:

Caching
*******

* Consumer must cache reputations of files.
* Consumer must cache reputations of certificates.
* Consumer must invalidate cache entries after a configurable amount of days if the entry is not used.
* Consumer must not refresh reputation proactively and fully rely on notifications.
* Consumer must ask for certificate reputation when a file is signed.
* Consumer must check for has-override flag and use file reputation although the file being signed.
* Consumer should provide MD5, SHA1 and SHA256 file hashes when asking for reputations.

Notifications
*************

* Consumer must subscribe to file reputation change notifications to keep cached items refreshed.
* Consumer must subscribe to certificate reputation change notifications to keeps cached items refreshed properly.
* Consumer must refresh cache entries only already present in cache (note that after 5k endpoints the reputation change topic behaves as a broadcast).
* Consumer must reuse data in the notification instead of querying again for reputations.
* Consumer should promptly react after reputation change updates (e.g. a running matching binary is killed).

Cache Invalidation Updates
**************************

* Consumer cache must be indexed for fast access, but it must nor rely on presence of a given hash type.
* Consumer must ask for reputation updates after becoming online to invalidates cached entries.
* Consumer must not refresh updated reputations after becoming online until they are needed.
* Consumer should limit each reputation updates request. Note that it will default to 100 if omitted.
* Consumer should preserve the serverTime of the response to the last reputation request issued and use it as sinceTime in the first reputation updates request after becoming online.
* Consumer should ask rolling requests following last time-stamp in response until getting all available updates.
