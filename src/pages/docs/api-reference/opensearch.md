---
title: OpenSearch
description: Middleware for search indexing
---

Search and manage your Open Search index

---

## Search

#### PATCH /opensearch/{index_slug}

```js
/**
 * @param {string} index_slug - Index name.
 * @param {Object} payload Request payload
 */
```

#### Request Payload

```json
{
  "aggs": {
    "max_price": {
      "max": {
        "field": "data.AskingPrice"
      }
    },
    "min_price": {
      "min": {
        "field": "data.AskingPrice"
      }
    },
    "max_build": {
      "max": {
        "field": "data.L_YearBuilt"
      }
    },
    "min_build": {
      "min": {
        "field": "data.L_YearBuilt"
      }
    },
    "max_date": {
      "max": {
        "field": "data.ListingDate"
      }
    },
    "min_date": {
      "min": {
        "field": "data.ListingDate"
      }
    },
    "max_sqft": {
      "max": {
        "field": "data.L_FloorArea_Main"
      }
    },
    "min_sqft": {
      "min": {
        "field": "data.L_FloorArea_Main"
      }
    },
    "dwelling": {
      "terms": {
        "field": "data.Type"
      }
    }
  },
  "size": 0
}
```

#### Example response

````json
{
  "took": 86,
  "timed_out": false,
  "_shards": {
    "total": 5,
    "successful": 5,
    "skipped": 0,
    "failed": 0
  },
  "hits": {
    "total": {
      "value": 1,
      "relation": "eq"
    },
    "max_score": null,
    "hits": [
        {
            "_index": "prod-listings",
            "_type": "_doc",
            "_id": "18",
            "_score": 1,
            "_source": {
            "data": {
                "AddressUnit": "100",
                "Address": "1500 Hornby st",
                "City": "Vancouver",
                "Province_State": "BC",
                "PostalCode_Zip": "V6Z2R1",
                "Area": "yaletown",
                "owner": {
                "profile_id": "170"
                },
                "Status": "Draft",
                "center": {
                "lat": 49.2751253,
                "lon": -123.1328622
                },
                "ListingID": "18",
                "type_name": "Listings",
                "B_Style": [
                "1 Storey"
                ],
                "LandTitle": "Leasehold prepaid-NonStrata",
                "PropertyType": "Condo",
                "AskingPrice": 50000000,
                "L_FloorArea_Main": 5000,
            }
        }
      }
    ]
  },
  "aggregations": {
    "max_price": {
      "value": 50000000
    }
  }
}```

---

## Retrieve a document

#### GET /opensearch/{index_slug}/{id}

```js
/**
 * @param {string} index_slug - Index name.
 * @param {int} document_id - Document ID to retrieve
 */
````

#### Example response

```json
{
  "_index": "prod-listings",
  "_type": "_doc",
  "_id": "19",
  "_version": 2,
  "_seq_no": 8,
  "_primary_term": 1,
  "found": true,
  "_source": {
    "data": {
      "AddressUnit": "",
      "Address": "2288 Sorrento Dr",
      "City": "Coquitlam",
      "Province_State": "B",
      "PostalCode_Zip": "V3K 6P5",
      "owner": {
        "profile_id": "182"
      },
      "Status": "Draft",
      "center": {
        "lat": 49.2416423,
        "lon": -122.8272938
      },
      "ListingID": "19",
      "ForTaxYear": null,
      "type_name": "Listings",
      "B_Depth": null,
      "L_Total1BedroomUnits": null,
      "PropertyDisclosure": null,
      "B_TotalUnits": null,
      "B_Style": null,
      "LandTitle": null,
      "L_YearBuilt": null,
      "PropertyType": "Condo",
      "L_TotalUnits": null,
      "L_Total2BedroomUnits": null,
      "L_Total3BedroomUnits": null,
      "AskingPrice": null,
      "CSA_BCE": null,
      "L_TotalOtherUnits": null,
      "L_FloorArea_Main": null,
      "L_TotalStudios": null,
      "LandLease_ExpYear": null
    }
  }
}
```

---

## Create a document

#### POST /opensearch/{index_slug}/{doc_id}

```js
/**
 * @param {string} index_slug - Index name.
 * @param {number} doc_id - Document number.
 * @param {Object} Document data payload
 */
```

#### Request Payload

```json
{
  "data": {
    "AddressUnit": "",
    "Address": "2288 Sorrento Dr",
    "City": "Coquitlam",
    "Province_State": "B",
    "PostalCode_Zip": "V3K 6P5",
    "owner": {
      "profile_id": "182"
    },
    "Status": "Draft",
    "center": {
      "lat": 49.2416423,
      "lon": -122.8272938
    },
    "ListingID": "19"
  }
}
```

---

## Update a document

#### PUT /opensearch/{index_slug}/{doc_id}

```js
/**
 * @param {string} index_slug - Index name.
 * @param {number} doc_id - Document number.
 * @param {Object} Document data payload
 */
```

#### Request Payload

```json
{
  "data": {
    "Status": "Draft",
    "ListingID": "19",
    "PropertyType": "Condo"
  }
}
```
