---
title: User RESTFUL API
category: RESTFUL API
---

- [User API](#user-api)
  - [GET /ENC/API/user/alarm_filter/receive_threshold](#get-encapiuseralarm_filterreceive_threshold)
  - [POST /ENC/API/user/alarm_filter/receive_threshold](#post-encapiuseralarm_filterreceive_threshold)
  - [PUT /ENC/API/user/alarm_filter/receive_threshold/&lt;filter_id&gt;](#put-encapiuseralarm_filterreceive_thresholdltfilter_idgt)
  - [DELETE /ENC/API/user/alarm_filter/receive_threshold/&lt;filter_id&gt;](#delete-encapiuseralarm_filterreceive_thresholdltfilter_idgt)
  - [GET /ENC/API/user/alarm_filter/as_path](#get-encapiuseralarm_filteras_path)
  - [POST /ENC/API/user/alarm_filter/as_path](#post-encapiuseralarm_filteras_path)
  - [PUT /ENC/API/user/alarm_filter/as_path/&lt;filter_id&gt;](#put-encapiuseralarm_filteras_pathltfilter_idgt)
  - [DELETE /ENC/API/user/alarm_filter/as_path/&lt;filter_id&gt;](#delete-encapiuseralarm_filteras_pathfilter_id)
  
### GET /ENC/API/user/alarm_filter/receive_threshold
get alarm filter receive threshold setting

    Auth:
      - token

    Return:
       - http_code: 200
       - format:

            [ 
              { 
                "filter_id": <int>,
                "alarm_filter_type": <str: "receive_threshold">
                "value": <int>
              }
            ]

    Example:

            [ 
              { 
                "filter_id": 1,
                "alarm_filter_type": "receive_threshold",
                "value": 33
              }
            ]


### POST /ENC/API/user/alarm_filter/receive_threshold
Add new receive_threshold alarm filter

    Auth:
      - token

    Args:
            [
              {
                "value": <int>
              }
            ]

    Return:
       - http_code: 200

    Raise:
       - http_code - 400: If value is already exist or another failed happen


### PUT /ENC/API/user/alarm_filter/receive_threshold/&lt;filter_id&gt;
Update receive_threshold alarm filter which filter_id = &lt;filter_id&gt;

    Auth:
      - token

    Args:
      - data json format:
            {
              "value": <int>
            }

    Return:
       - http_code: 200

    Raise:
       - http_code - 400: If value is already exist or another failed happen


### DELETE /ENC/API/user/alarm_filter/receive_threshold/&lt;filter_id&gt;
Delete receive_threshold alarm filter which filter_id = &lt;filter_id&gt;

    Auth:
      - token

    Return:
       - http_code: 200

    Raise:
       - http_code - 400: Any failed happen

### GET /ENC/API/user/alarm_filter/as_path
get alarm filter as_path setting

    Auth:
      - token

    Return:
       - http_code: 200
       - format:

            [
              {
                "filter_id": <int>,
                "alarm_filter_type": <str: "as_path">
                "value": <str>
              }
            ]

    Example:

            [
              {
                "filter_id": 2,
                "alarm_filter_type": "as_path",
                "value": "^33 .* 44$"
              }
            ]

### POST /ENC/API/user/alarm_filter/as_path
Add new as_path alarm filter

    Auth:
      - token

    Args:
            [
              {
                "value": <str>
              }
            ]

    Return:
       - http_code: 200

    Raise:
       - http_code - 400: If value is already exist or another failed happen


### PUT /ENC/API/user/alarm_filter/as_path/&lt;filter_id&gt;
Update as_path alarm filter which filter_id = &lt;filter_id&gt;

    Auth:
      - token

    Args:
      - data json format:
            {
              "value": <str>
            }

    Return:
       - http_code: 200

    Raise:
       - http_code - 400: If value is already exist or another failed happen

### DELETE /ENC/API/user/alarm_filter/as_path/&lt;filter_id&gt;
Delete as_path alarm filter which filter_id = &lt;filter_id&gt;

    Auth:
      - token

    Return:
       - http_code: 200

    Raise:
       - http_code - 400: Any failed happen
