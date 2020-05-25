### GET /ENC/API/user/alarm_mail_list
get alarm mail list

    Auth:
      - token

    Return:
       - http_code: 200
       - format:

            [ 
              { 
                "mail_id": <int>,
                "mail": <str>
              }
            ]

    Example:

            [ 
              { 
                "mail_id": 1,
                "mail": "test@vattensoft.com"
              }
            ]

### POST /ENC/API/user/alarm_mail_list
Add new alarm mail list

    Auth:
      - token

    Args:   
            [ 
              { 
                "mail": <str>
              }
            ]

    Return:
       - http_code: 200

    Raise:
       - http_code - 400: Any failed happen


### PUT /ENC/API/user/alarm_mail_list/&lt;mail_id&gt;
Update alarm mail list which mail_id = &lt;mail_id&gt;

    Auth:
      - token

    Args:
      - data json format:
            { 
              "mail_id": <int>
              "mail": <str>
            }

    Return:
       - http_code: 200

    Raise:
       - http_code - 400: Any failed happen

### DELETE /ENC/API/user/alarm_mail_list/&lt;mail_id&gt;
Delete alarm mail list which mail_id = &lt;mail_id&gt;

    Auth:
      - token

    Return:
       - http_code: 200

    Raise:
       - http_code - 400: Any failed happen
